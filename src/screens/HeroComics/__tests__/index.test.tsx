import React from "react";
import { render } from "@testing-library/react-native";
import HeroComics from "../";

const route = {
  params: {
    hero: {
      id: 123,
      name: "test",
      thumbnail: "test",
      comics: { collectionURI: "" },
    },
  },
};

describe("Application should have a screen to list the comics from your favorite hero.", () => {
  it("renders default components", () => {
    const { getAllByRole, getByRole, debug } = render(
      <HeroComics route={route} />
    );
    // Shows header with description for that hero
    const summary = getByRole("summary");
    const texts = getAllByRole("text");
    expect(texts.length).toBe(2);
    expect(summary).toBeDefined();

    // Shows hero image
    const image = getByRole("image");
    expect(image).toBeDefined();

    // Screen Starts loading comics for that hero showing activityIndicator
    const activityIndicator = getByRole("spinbutton");
    expect(activityIndicator).toBeDefined();
  });
  it("Should render list of comics for the favorite hero from the user.", () => {
    const { getAllByRole, getByRole, debug } = render(
      <HeroComics route={route} />
    );
  });
});
