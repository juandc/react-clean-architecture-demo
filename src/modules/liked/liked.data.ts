import { LikedData } from './liked.types';

export class LikedLocalStorageData implements LikedData {
  createLikedItemAdapter(rawData) {
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
  
  createLikedListAdapter(rawData) {
    return rawData.map(this.createLikedItemAdapter);
  }
  
  private itemName = 'liked_v2';
  private defaultItemValue = [];
  private timeoutms = 1000;

  async getLiked(): Promise<any> {
    const timeout = resolve => setTimeout(() => resolve(
      JSON.parse(localStorage.getItem(this.itemName))
      || this.defaultItemValue
    ), this.timeoutms);
    const data = await new Promise(timeout);
    return data;
  }

  async toggleLike(newValue): Promise<boolean> {
    const list = await this.getLiked();
    const likedIndex = list.findIndex(x => x.id == newValue.id)
    const wasLiked = likedIndex > -1;
    if (wasLiked) {
      list.splice(likedIndex, 1);
    } else {
      list.splice(0, 0, newValue);
    }
    const newListStr = JSON.stringify(list);
    localStorage.setItem(this.itemName, newListStr);
    return wasLiked;
  }
}
