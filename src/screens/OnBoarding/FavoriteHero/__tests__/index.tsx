import React from "react";
import {
  fireEvent,
  render,
  waitForElementToBeRemoved,
} from "@testing-library/react-native";
import { FavoriteHero } from "../index";
import { Alert } from "react-native";
import mockAxios from "axios";
import { HeroesProvider } from "../../../../providers";
import { HEROES_URL } from "../../../../api/urls";
import { MD5_HASH, PUBLIC_KEY, TIMESTAMP } from "../../../../constants";
import {
  mockedAxiosResponse,
  mockedAxiosEmptyResponse,
} from "../../../../testUtils/heroes";

const spyAlert = jest.spyOn(Alert, "alert");
const mockedNavigate = jest.fn();

jest.mock("@react-navigation/core", () => {
  return {
    ...jest.requireActual("@react-navigation/core"),
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe("Tests Favorite Hero component.", () => {
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
  it("show Alert if user types invalid Hero Initials.", async () => {
    // Mocked response for get request
    //@ts-ignore
    mockAxios.get.mockResolvedValueOnce(mockedAxiosEmptyResponse);
    const { getByA11yRole, getByPlaceholderText, queryByRole, debug } = render(
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
    expect(getByA11yRole("spinbutton")).toBeDefined();

    expect(mockAxios.get).toHaveBeenCalledWith(HEROES_URL, {
      params: {
        apikey: PUBLIC_KEY,
        hash: MD5_HASH,
        ts: TIMESTAMP,
        nameStartsWith: "asdasdsadaads",
      },
    });
    // Alert pops up because api could not retrive heroes with input Value
    expect(spyAlert).toHaveBeenCalled();
    await waitForElementToBeRemoved(() => queryByRole("spinbutton"));
  });
  it("shows a list of favorite heroes when typed valid hero initials.", async () => {
    //@ts-ignore
    mockAxios.get.mockResolvedValueOnce(mockedAxiosResponse);
    const { getByRole, getByPlaceholderText, findByTestId } = render(
      <HeroesProvider>
        <FavoriteHero />
      </HeroesProvider>
    );

    // Typing valid credentials
    const input = getByPlaceholderText("HERO NAME INITIALS");
    const button = getByRole("button");
    const inputValue = "Spider";

    fireEvent.changeText(input, inputValue);
    fireEvent.press(button);

    // Activity Indicator should appear in the screen.
    const activityIndicator = getByRole("spinbutton");
    expect(activityIndicator).toBeDefined();

    const heroList = await findByTestId("heroes-list");
    expect(heroList).toBeDefined();
  });
});
