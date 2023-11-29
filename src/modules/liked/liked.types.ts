import type { Photo } from "../photos/photos.types";

export type LikedItem = Photo;
export type LikedList = LikedItem[];

export interface LikedData {
  createLikedItemAdapter(rawData: any): LikedItem;
  createLikedListAdapter(rawData: any): LikedList;
  getLiked(): Promise<any>;
  toggleLike(newValue: LikedItem): Promise<boolean>;
}
