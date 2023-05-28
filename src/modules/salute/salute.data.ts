import { Salute, SaluteData } from './salute.types';

export class SaluteHTTPData implements SaluteData {
  async getSalute(): Promise<Salute> {
    const res = await fetch('http://localhost:3000/api/salute');
    const data = await res.json();
    return data;
  }
}
