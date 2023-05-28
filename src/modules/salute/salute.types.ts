export type Salute = {
  salute: string;
};

export interface SaluteData {
  getSalute(): Promise<Salute>;
}
