import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react-native";
import { FavoriteHero } from "../index";

describe("Tests Favorite Hero component.", () => {
  it("should display a title with summary of screen, button, input by default", () => {
    const { getByRole, getByPlaceholderText } = render(<FavoriteHero />);
    const button = getByRole("button");
    const summary = getByRole("summary");
    const input = getByPlaceholderText("Find your favorite hero");
  });
  it("pressing the search button should retrive a list of user's favorite heroes.", async () => {
    const { getByRole, getByPlaceholderText, getByText } = render(
      <FavoriteHero />
    );
    const input = getByPlaceholderText("Find your favorite hero");
    const button = getByRole("button");
    fireEvent.changeText(input, "Spider");
    fireEvent.press(button);

    // Expects until the result comes back from the server with a list of your favorite hero.
    await waitFor(() => expect(getByText("Spider")).toBeDefined());
  });
});
