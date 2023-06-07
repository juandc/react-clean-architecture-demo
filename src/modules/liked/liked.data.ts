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
  async isLiked(): Promise<any> {
    const data = await Promise.resolve(
      JSON.parse(localStorage.getItem(this.itemName))
      || this.defaultItemValue
    );
    return data;
  }
  async toggleLike(newValue: LikedItem): Promise<boolean> {
    const list = await this.getLiked();
    const likedIndex = list.findIndex(x => x.id == newValue.id)
    const isLiked = likedIndex > -1;
    if (isLiked) {
      list.splice(likedIndex, 1);
    } else {
      list.splice(0, 0, newValue);
    }
    const newListStr = JSON.stringify(list);
    localStorage.setItem(this.itemName, newListStr);
    return isLiked;
  }
}
