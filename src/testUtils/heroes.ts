export const mockedAxiosResponse = {
  data: {
    data: {
      results: [
        {
          id: "123",
          description: "123",
          prices: [{ type: "123", price: 123 }],
          thumbnail: { extension: "123", path: "123" },
          name: "test",
        },
      ],
    },
  },
};
export const mockedAxiosEmptyResponse = {
  data: {
    data: {
      results: [],
    },
  },
};
