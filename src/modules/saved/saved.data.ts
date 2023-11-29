import type { SavedData } from './saved.types';

export class SavedLocalStorageData implements SavedData {
  createSavedItemAdapter(rawData) {
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
  
  createSavedListAdapter(rawData) {
    return rawData.map(this.createSavedItemAdapter);
  }

  private itemName = 'saved_v1';
  private defaultItemValue = [];
  private timeoutms = 300;

  async getSaved(): Promise<any> {
    const timeout = resolve => setTimeout(() => resolve(
      JSON.parse(localStorage.getItem(this.itemName))
      || this.defaultItemValue
    ), this.timeoutms);
    const data = await new Promise(timeout);
    return data;
  }

  async toggleSave(newValue): Promise<boolean> {
    const list = await this.getSaved();
    const savedIndex = list.findIndex(x => x.id == newValue.id)
    const wasSaved = savedIndex > -1;
    if (wasSaved) {
      list.splice(savedIndex, 1);
    } else {
      list.splice(0, 0, newValue);
    }
    const newListStr = JSON.stringify(list);
    localStorage.setItem(this.itemName, newListStr);
    return wasSaved;
  }
}

export const savedData = new SavedLocalStorageData();
