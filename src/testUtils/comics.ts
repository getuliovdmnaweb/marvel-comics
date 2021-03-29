export const mockedComicRoute = {
  params: {
    hero: {
      id: 123,
      name: "test",
      thumbnail: "test",
      comics: { collectionURI: "" },
    },
  },
};
export const mockedEmptyAxiosResponse = {
  data: {
    data: {
      results: [],
    },
  },
};
export const mockedAxiosResponse = {
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
