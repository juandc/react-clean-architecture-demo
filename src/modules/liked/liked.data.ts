import { LikedData, LikedItem, LikedList } from './liked.types';

export class LikedLocalStorageData implements LikedData {
  createLikedItemAdapter(rawData): LikedItem {
    return {
      id: rawData.id,
      description: rawData.description,
      urls: {
        thumb: rawData.urls.thumb,
        small: rawData.urls.small,
        regular: rawData.urls.regular,
        full: rawData.urls.full,
        raw: rawData.urls.raw,
      },
    };
  }
  
  createLikedListAdapter(rawData): LikedList {
    return rawData.map(this.createLikedItemAdapter);
  }
  
  private itemName = 'liked_v2';
  private defaultItemValue = [];
  
  async getLiked(): Promise<any> {
    const data = await Promise.resolve(
      JSON.parse(localStorage.getItem(this.itemName))
      || this.defaultItemValue
    );
    return data;
  }
  async addLiked(newValue: LikedItem): Promise<any> {
    const list = await this.getLiked();
    const newList = [...list, newValue];
    const newListStr = JSON.stringify(newList);
    localStorage.setItem(this.itemName, newListStr);
    return newList;
  }
}
