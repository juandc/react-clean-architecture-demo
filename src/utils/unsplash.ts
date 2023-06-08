import axios from 'axios';

export class UnsplashAPI {
  private httpClient = axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
      "Authorization": `Client-ID ${process.env.ACCESS_KEY}`,
    },
  })

  async getPhotos({ page, per_page, query = 'hello', order_by, color }) {
    const { data, status } = await this.httpClient.get('/search/photos', {
      params: {
        query,
        page,
        per_page,
        order_by,
        color,
      },
    });
    console.log({ data });
    

    return { data, status };;
  }
}
