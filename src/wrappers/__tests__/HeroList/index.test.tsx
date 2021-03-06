import React from "react";
import { render } from "@testing-library/react-native";
import HeroList from "../../HeroList";
import { Text } from "react-native";
import { Hero } from "../../../types";

interface Props {
  heroes: Hero[];
  loadingHeroes: boolean;
  children: React.ReactElement;
}

const renderComponent = ({ heroes, loadingHeroes, children }: Props) => {
  const { getByText, getByTestId, getByA11yRole } = render(
    <HeroList heroes={heroes} loadingHeroes={loadingHeroes}>
      {children}
    </HeroList>
  );
  return { getByText, getByTestId, getByA11yRole };
};

describe("Testing <Hero />", () => {
  it("should render find your favorite hero message by default", () => {
    const defaultCondition = {
      heroes: [],
      loadingHeroes: false,
      children: <Text>Teste</Text>,
    };
    const { getByText } = renderComponent(defaultCondition);
    const defaultMessage = getByText("Find your favorite Hero!");
    expect(defaultMessage).toBeDefined();
  });
  it("should render activity Indicator component if loading heroes", () => {
    const defaultCondition = {
      heroes: [],
      loadingHeroes: true,
      children: <Text>Teste</Text>,
    };
    const { getByA11yRole } = renderComponent(defaultCondition);
    const activityIndicator = getByA11yRole("spinbutton");
    expect(activityIndicator).toBeDefined();
  });
  it("should render children if finishedLoading heroes and returns something inside of heroes array ", () => {
    const defaultCondition = {
      heroes: [
        {
          id: 123,
          name: "",
          thumbnail: { extension: "", path: "" },
          comics: { collectionURI: "teste" },
        },
      ],
      loadingHeroes: false,
      children: <Text>Teste</Text>,
    };
    const { getByText } = renderComponent(defaultCondition);
    const textComponent = getByText("Teste");
    expect(textComponent).toBeDefined();
  });
});
