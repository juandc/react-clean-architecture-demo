import axios from 'axios';

export class UnsplashAPI {
  private httpClient = axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
      "Authorization": `Client-ID ${process.env.ACCESS_KEY}`,
    },
  })

  async getPhotos({ page, per_page, order_by }) {
    const { data, status } = await this.httpClient.get('/photos', {
      params: {
        page,
        per_page,
        order_by,
      },
    });

    return { data, status };;
  }
}
