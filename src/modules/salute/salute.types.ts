export type Salute = {
  salute: string;
};

export interface SaluteData {
  createSaluteAdapter(rawData: any): Salute;
  getSalute(): Promise<any>;
}
