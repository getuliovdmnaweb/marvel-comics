import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import { Presentation } from "../index";

describe("Tests Presentation component", () => {
  it("tests the default components", () => {
    const { getAllByA11yRole, getByRole } = render(
      <Presentation setPresenting={() => {}} />
    );
    expect(getByRole("image")).toBeDefined();
    expect(getByRole("summary")).toBeDefined();
    expect(getAllByA11yRole("button").length).toBe(2);
    expect(getAllByA11yRole("text").length).toBe(2);
  });
  it("navigates through both pages correctly", () => {
    const { getByText } = render(<Presentation setPresenting={() => {}} />);
    //expects to show Marvel Heroes page by default
    const heroTitle = getByText("Marvel Heroes");
    expect(heroTitle).toBeDefined();

    const nextButton = getByText("Next");
    fireEvent.press(nextButton);
    //clicking next should show Comic page
    const comicTitle = getByText("Marvel Comics");
    expect(comicTitle).toBeDefined();
    // clicking prev should show hero page again
    const prevButton = getByText("Prev");
    fireEvent.press(prevButton);
    expect(heroTitle).toBeDefined();
  });
});
