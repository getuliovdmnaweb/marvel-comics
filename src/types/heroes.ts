interface Comics {
  collectionURI: string;
}

export type Hero = {
  id: number;
  thumbnail: any;
  comics: Comics;
};
