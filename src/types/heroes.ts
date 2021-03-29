export interface Thumbnail {
  extension: string;
  path: string;
}

export interface Comics {
  collectionURI: string;
}

export interface Hero {
  id: number;
  name: string;
  thumbnail: Thumbnail;
  comics: Comics;
}
