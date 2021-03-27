import React from "react";
import { render } from "@testing-library/react-native";

import OnBoarding from "../";

describe("The application should have an Onboarding.", () => {
  it(" should have two screens", () => {
    // Small presentation of the application.
    const { getByTestId } = render(<OnBoarding />);
    const presentationScreen = getByTestId("presentation-screen");
    expect(presentationScreen).toBeDefined();

    // Screen to retrieve user's favorite hero.
    const favoriteHeroScreen = getByTestId("favorite-hero-screen");
    expect(favoriteHeroScreen).toBeDefined();
  });
  it(" should have a screen with a short description of the application", () => {});
  it(" should have another screen with an input to retrive user favorite hero", () => {});
  it("should find the header element", () => {});
});
