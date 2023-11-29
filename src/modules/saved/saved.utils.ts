import { savedData } from "./saved.data";

export const getSavedDataUtil = async () => {
  const rawData = await savedData.getSaved();
  const savedList = savedData.createSavedListAdapter(rawData);
  return savedList;
};
