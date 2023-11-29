import { useEffect } from "react";
import { useStore } from "@/store/ContextStore";
import type { Photo } from "@/modules/photos/photos.types";
import { getLikedDataUtil } from "@/modules/liked/liked.utils";
import { getSavedDataUtil } from "@/modules/saved/saved.utils";

export function useLikedAndSaved() {
  const {
    liked,
    likedLoading,
    setLiked,
    saved,
    savedLoading,
    setSaved,
  } = useStore();

  const getSavedData = async () => {
    const savedList = await getSavedDataUtil();
    setSaved(savedList);
  };

  const getLikedData = async () => {
    const likedList = await getLikedDataUtil();
    setLiked(likedList);
  };

  const isSaved = (id: Photo["id"]) => saved.some(p => p.id == id);
  
  const isLiked = (id: Photo["id"]) => liked.some(p => p.id == id);

  useEffect(() => {
    if (!saved.length) {
      getSavedData();
    }
    if (!liked.length) {
      getLikedData();
    }
  }, []);
  
  return {
    liked,
    likedLoading,
    isLiked,
    saved,
    savedLoading,
    isSaved,
  };
}
