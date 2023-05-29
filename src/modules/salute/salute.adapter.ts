import { Salute } from "./salute.types";

export function createSaluteAdapter(rawData): Salute {
  return {
    saluteState: rawData.salute,
  };
}