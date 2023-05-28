import { LikedData, LikedItem, LikedList } from './liked.types';

export class LikedLocalStorageData implements LikedData {
  private itemName = 'liked_v2';
  private defaultItemValue = [];
  
  async getLiked(): Promise<LikedList> {
    const data = await Promise.resolve(
      JSON.parse(localStorage.getItem(this.itemName))
      || this.defaultItemValue
    );
    return data;
  }
  async addLiked(newValue: LikedItem): Promise<LikedList> {
    const list = await this.getLiked();
    const newList = [...list, newValue];
    const newListStr = JSON.stringify(newList);
    localStorage.setItem(this.itemName, newListStr);
    return newList;
  }
}
