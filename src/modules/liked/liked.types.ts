import { Photo } from "../photos/photos.types";

export type LikedList = LikedItem[];

export type LikedItem = Photo;

export interface LikedData {
  createLikedItemAdapter(rawData: any): LikedItem;
  createLikedListAdapter(rawData: any): LikedList;
  getLiked(): Promise<any>;
  addLiked(newValue: LikedItem): Promise<any>;
}
