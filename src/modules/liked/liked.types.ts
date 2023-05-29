export type LikedList = LikedItem[];

export type LikedItem = {
  id: string;
  content: string;
};

export interface LikedData {
  createLikedItemAdapter(rawData: any): LikedItem;
  createLikedListAdapter(rawData: any): LikedList;
  getLiked(): Promise<any>;
  addLiked(newValue: LikedItem): Promise<any>;
}
