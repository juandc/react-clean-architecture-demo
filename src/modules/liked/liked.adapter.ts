import { LikedItem, LikedList } from "./liked.types";

export function createLikedAdapter(rawData): LikedItem {
  return {
    id: rawData.id,
    content: rawData.content,
  };
}

export function createLikedListAdapter(rawData): LikedList {
  return rawData.map(createLikedAdapter);
}
