import { Saved, SavedData } from './saved.types';

export class SavedHTTPData implements SavedData {
  createSavedAdapter(rawData): Saved {
    return rawData.salute;
  }

  async getSaved(): Promise<any> {
    const res = await fetch('http://localhost:3000/api/salute');
    const data = await res.json();
    return data;
  }
}
