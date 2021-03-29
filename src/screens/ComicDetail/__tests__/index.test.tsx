import React from "react";
import { render } from "@testing-library/react-native";
import ComicDetail from "../";

describe("Application should have screen to display Comic details. display cover, issue number, name and price.", () => {
  let route: any;
  beforeAll(() => {
    route = {
      params: {
        comic: {
          id: "test",
          description: "Test Description",
          prices: [{ type: "", price: 123 }],
          thumbnail: { extension: "test", path: "test" },
          title: "Test Title",
          dates: [{ type: "", date: "" }],
        } as Comic,
      },
    };
  });
  it("should render title for the comic", () => {
    const { getByText, getByRole } = render(<ComicDetail route={route} />);
    // const price = getByText(route.params.comic.prices[0].price.toString());
    // expect(price).toBeDefined();

    const cover = getByRole("image");
    expect(cover).toBeDefined();

    const description = getByText(route.params.comic.description);
    expect(description).toBeDefined();
  });
});
