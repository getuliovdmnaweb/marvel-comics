interface Thumbnail {
  extension: string;
  path: string;
}

interface Price {
  type: string;
  price: number;
}

interface Comic {
  id: string;
  description: string;
  prices: Price[];
  thumbnail: Thumbnail;
  title: string;
}
