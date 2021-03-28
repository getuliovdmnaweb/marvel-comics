export const getImageUri = (thumbnail: Thumbnail, variant: string) => {
  const imageUri = thumbnail?.path + variant + thumbnail?.extension;
  return imageUri;
};
