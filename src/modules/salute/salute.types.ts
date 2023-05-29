export type Salute = {
  saluteState: string;
};

export interface SaluteData {
  getSalute(): Promise<Salute>;
}
