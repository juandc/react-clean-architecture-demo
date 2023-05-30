import { PhotosData, Photo, PhotoList } from "./photos.types";

export class PhotosHTTPData implements PhotosData {
  createPhotoAdapter(rawData: any): Photo {
    return {
      id: rawData.id,
      description: rawData.description,
      urls: {
        raw: rawData.urls.raw,
        full: rawData.urls.full,
        regular: rawData.urls.regular,
        small: rawData.urls.small,
        thumb: rawData.urls.thumb,
      },
    };
  }
  
  createPhotoListAdapter(rawData: any): PhotoList {
    return rawData.map(this.createPhotoAdapter);
  }

  async getPhotoList(): Promise<any> {
    const res = await fetch('http://localhost:3000/api/photos');
    const data = await res.json();
    return data;
  }
}
