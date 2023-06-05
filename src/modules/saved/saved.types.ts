export type Saved = {
  salute: string;
};

export interface SavedData {
  createSavedAdapter(rawData: any): Saved;
  getSaved(): Promise<any>;
}
