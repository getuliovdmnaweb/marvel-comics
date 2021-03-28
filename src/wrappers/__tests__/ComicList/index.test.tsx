import React from "react";
import { Text } from "react-native";
import { render } from "@testing-library/react-native";
import ComicList from "../../ComicList";

describe("Tests ComicList component logic", () => {
  it("shows activity indicator if loadingComics is true", () => {
    const defaultProps = {
      loadingComics: true,
      comics: [],
      children: <Text>Test</Text>,
    };
    const { getByRole } = render(<ComicList {...defaultProps} />);
    const activityIndicator = getByRole("spinbutton");
    expect(activityIndicator).toBeDefined();
  });
  it("shows failed test if there are no Comics for this hero.", () => {
    const defaultProps = {
      loadingComics: false,
      comics: [],
      children: <Text>Test</Text>,
    };
    const { getByText } = render(<ComicList {...defaultProps} />);
    const text = getByText("There are no comics for this hero!");
    expect(text).toBeDefined();
  });
  it("renders children if api retrieves array of comics for that hero.", () => {
    const defaultProps = {
      loadingComics: false,
      comics: [
        {
          id: "123",
          description: "123",
          prices: [{ type: "123", price: 123 }],
          thumbnail: { extension: "123", path: "123" },
          title: "test",
        },
      ] as Comic[],
      children: <Text>Test</Text>,
    };
    const { getByText } = render(<ComicList {...defaultProps} />);
    const text = getByText("Test");
    expect(text).toBeDefined();
  });
});
