import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import { FavoriteHero } from "../index";
import { Alert } from "react-native";
import mockAxios from "jest-mock-axios";
import { HEROES_URL } from "../../../../api/urls";
import { HeroesProvider } from "../../../../providers";

const spyAlert = jest.spyOn(Alert, "alert");

describe("Tests Favorite Hero component.", () => {
  afterEach(() => {
    // cleaning up the mess left behind the previous test
    mockAxios.reset();
  });
  it("should display a title with summary of screen, button, input by default", () => {
    const { getByA11yRole, getAllByA11yRole, getByPlaceholderText } = render(
      <FavoriteHero />
    );
    // renders button on screen by default
    const button = getByA11yRole("button");
    expect(button).toBeDefined();

    // renders header summary
    const summary = getByA11yRole("summary");
    expect(summary).toBeDefined();

    // renders two texts, title and subtitle
    const textElements = getAllByA11yRole("text");
    expect(textElements.length).toBe(2);
    // renders input to retrieve the favorite hero
    const input = getByPlaceholderText("HERO NAME INITIALS");
    expect(input).toBeDefined();
  });

  it("shows error if user does not type any hero initials.", () => {
    const { getByA11yRole } = render(
      <HeroesProvider>
        <FavoriteHero />
      </HeroesProvider>
    );
    const button = getByA11yRole("button");
    fireEvent.press(button);
    expect(spyAlert).toHaveBeenCalled();
  });
});

it("show Alert if user types invalid Hero Initials.", async () => {
  const { getByA11yRole, getByPlaceholderText, findByA11yRole } = render(
    <HeroesProvider>
      <FavoriteHero />
    </HeroesProvider>
  );
  const input = getByPlaceholderText("HERO NAME INITIALS");
  const button = getByA11yRole("button");
  const inputValue = "asdasdsadaads";
  // Enter inputValue and Presses the button
  fireEvent.changeText(input, inputValue);
  fireEvent.press(button);

  // Spinner Shows up in the screen
  const activityIndicator = await findByA11yRole("spinbutton");
  expect(activityIndicator).toBeDefined();
  // Asserts that api Call is being made.
  expect(mockAxios.get).toBeCalledWith(HEROES_URL, {
    params: { nameStartsWith: inputValue },
  });
  // Alert pops up because api could not retrive heroes with input Value
  expect(spyAlert).toHaveBeenCalled();
});
