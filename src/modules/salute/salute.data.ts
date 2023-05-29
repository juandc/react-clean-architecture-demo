import { Salute, SaluteData } from './salute.types';

export class SaluteHTTPData implements SaluteData {
  createSaluteAdapter(rawData): Salute {
    return rawData.salute;
  }

  async getSalute(): Promise<any> {
    const res = await fetch('http://localhost:3000/api/salute');
    const data = await res.json();
    return data;
  }
}
