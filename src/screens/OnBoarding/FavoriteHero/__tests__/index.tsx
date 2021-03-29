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

const spyAlert = jest.spyOn(Alert, "alert");

const response = {
  data: {
    data: {
      results: [
        {
          id: "123",
          description: "123",
          prices: [{ type: "123", price: 123 }],
          thumbnail: { extension: "123", path: "123" },
          title: "test",
        },
      ],
    },
  },
};

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
    mockAxios.get.mockResolvedValueOnce({
      data: {
        data: {
          results: [],
        },
      },
    });
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
    // Asserts that api Call is being made.
  });
});
