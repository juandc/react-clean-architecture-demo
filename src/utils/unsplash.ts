import axios from 'axios';

export class UnsplashAPI {
  private httpClient = axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
      "Authorization": `Client-ID ${process.env.ACCESS_KEY}`,
    },
  })

  async getPhotos({ page, per_page, search = 'dog', order_by, color }) {
    const { data, status } = await this.httpClient.get('/search/photos', {
      params: {
        query: search,
        page,
        per_page,
        order_by,
        color,
      },
    });
    return { data, status };;
  }
}
