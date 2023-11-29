import { likedData } from "./liked.data";

export const getLikedDataUtil = async () => {
  const rawData = await likedData.getLiked();
  const likedList = likedData.createLikedListAdapter(rawData);
  return likedList;
};
