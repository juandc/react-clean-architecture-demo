import type { Photo } from "../photos/photos.types";

export type SavedItem = Photo;
export type SavedList = SavedItem[];

export interface SavedData {
  createSavedListAdapter(rawData: any): SavedList;
  createSavedItemAdapter(rawData: any): SavedItem;
  getSaved(): Promise<any>;
  toggleSave(newValue: SavedItem): Promise<boolean>;
}
