import React from "react";
import { fireEvent, render } from "@testing-library/react-native";

import OnBoarding from "../";

describe("The application should have an Onboarding.", () => {
  it("should start by showing the Application presentation", () => {
    const { getByTestId, queryByTestId } = render(<OnBoarding />);
    const favoriteHeroScreen = queryByTestId("favorite-hero-screen");
    expect(favoriteHeroScreen).toBeNull();

    const presentationScreen = getByTestId("presentation-screen");
    expect(presentationScreen).toBeDefined();
  });
  it(" Should show the screen to retrieve the favorite hero after presentation is finished.", () => {
    const { getByTestId, queryByTestId, getByText } = render(<OnBoarding />);

    fireEvent.press(getByText("Finish Presentation"));

    const favoriteHeroScreen = getByTestId("favorite-hero-screen");
    expect(favoriteHeroScreen).toBeDefined();

    const presentationScreen = queryByTestId("presentation-screen");
    expect(presentationScreen).toBeNull();
  });
});
