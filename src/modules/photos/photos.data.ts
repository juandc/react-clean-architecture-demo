import { PhotosData } from "./photos.types";

export class PhotosHTTPData implements PhotosData {
  createPhotoAdapter(rawData) {
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
  
  createPhotoListAdapter(rawData) {
    return rawData.map(this.createPhotoAdapter);
  }

  private createPhotoFiltersAdapter(rawFilters) {
    const allowed = {
      order_by: ['latest', 'relevant'],
      color: [
        'black_and_white',
        'black', 'purple', 'magenta', 'teal',
        'green', 'yellow', 'orange', 'red', 'blue', 'white', 
      ],
    };

    const order_by = allowed.order_by.includes(rawFilters.order_by)
      ? rawFilters.order_by
      : 'latest';
    
    const color = rawFilters.color || 'black_and_white';
    const search = rawFilters.search || 'dog';
    const per_page = rawFilters.per_page || 10;
    const page = rawFilters.page || 1;
    
    return {
      order_by,
      color,
      search,
      per_page,
      page,
    };
  }

  async getPhotoList(filters) {
    const { order_by, search, color } = this.createPhotoFiltersAdapter(filters);
    
    const baseUrl = `http://localhost:3000/api/photos`;
    const params = `?search=${search}&order_by=${order_by}&color=${color}`;
    const url = `${baseUrl}${params}`;

    const res = await fetch(url);
    const data = await res.json();
    
    return data;
  }
}
