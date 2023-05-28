export type LikedList = LikedItem[];

export type LikedItem = {
  id: string;
  content: string;
};

export interface LikedData {
  getLiked(): Promise<LikedList>;
  addLiked(newValue: LikedItem): Promise<LikedList>;
}
