export type Photo = {
  id: string;
  description: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
};

export type PhotoList = Photo[];

export interface PhotosData {
  createPhotoAdapter(rawData: any): Photo;
  createPhotoListAdapter(rawData: any): PhotoList;
  getPhotoList(filters: any): Promise<any>;
}
