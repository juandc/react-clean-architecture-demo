import { photosData } from "./photos.data";

export const getPhotosListUtil = async (filters: any) => {
  const rawData = await photosData.getPhotoList(filters);
  const photosList = photosData.createPhotoListAdapter(rawData);
  return photosList;
};
