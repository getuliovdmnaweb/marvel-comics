import React from "react";
import { render } from "@testing-library/react-native";
import HeroComics from "../";
import mockAxios from "axios";
import {
  mockedComicRoute,
  mockedAxiosResponse,
  mockedEmptyAxiosResponse,
} from "../../../testUtils/comics";

const mockedNavigate = jest.fn();

jest.mock("@react-navigation/native", () => {
  return {
    ...jest.requireActual("@react-navigation/native"),
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe("Application should have a screen to list the comics from your favorite hero.", () => {
  it("renders default components", () => {
    const { getAllByRole, getByRole } = render(
      <HeroComics route={mockedComicRoute} />
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
  it("Should render text indicating there are no comics for that hero if comic list is empty", async () => {
    //@ts-ignore
    mockAxios.get.mockResolvedValueOnce(mockedEmptyAxiosResponse);
    const { findByText, getByRole } = render(
      <HeroComics route={mockedComicRoute} />
    );
    const activityIndicator = getByRole("spinbutton");
    expect(activityIndicator).toBeDefined();

    const noComicsText = await findByText("There are no comics for this hero!");
    expect(noComicsText).toBeDefined();
  });
  it("Should render list of comics for the favorite hero from the user.", async () => {
    //@ts-ignore
    mockAxios.get.mockResolvedValueOnce(mockedAxiosResponse);
    const { findByTestId, getByRole } = render(
      <HeroComics route={mockedComicRoute} />
    );
    const activityIndicator = getByRole("spinbutton");

    expect(activityIndicator).toBeDefined();
    const comicList = await findByTestId("comic-list");
    expect(comicList).toBeDefined();
  });
});
