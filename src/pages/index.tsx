import { useEffect, useRef } from 'react';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import type { StoreState } from '@/store/store.types';
import { useStore } from '@/store/ContextStore';
import type { Photo, PhotoList } from '@/modules/photos/photos.types';
import { getPhotosListUtil } from '@/modules/photos/photos.utils';
import { PhotoFilters, PhotoSearch } from '@/modules/photos/components';
import { getLikedDataUtil } from '@/modules/liked/liked.utils';
import { getSavedDataUtil } from '@/modules/saved/saved.utils';
import { MasonryList, PhotoCard } from '@/components';
import { useRouter } from '@/utils/useRouter';

export default function HomePage({
  photos: serverPhotos,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const {
    photos,
    photosLoading,
    isLiked,
    isSaved,
  } = useHome(serverPhotos);

  return (
    <>
      <PhotoSearch />
      <PhotoFilters />

      <MasonryList isLoading={photosLoading}>
        {photos.map(photo => (
          <PhotoCard
            key={photo.id}
            isLiked={isLiked(photo.id)}
            isSaved={isSaved(photo.id)}
            {...photo}
          />
        ))}
      </MasonryList>
    </>
  );
}

const useHome = (serverPhotos) => {
  const {
    photos,
    photosLoading,
    setPhotos,
    liked,
    setLiked,
    saved,
    setSaved,
    orderBy,
    setOrderBy,
    search,
    color,
  } = useStore();
  const router = useRouter();

  const getPhotos = async () => {
    const filters = {
      order_by: orderBy,
      search,
      color,
    };
    const photosList = await getPhotosListUtil(filters);
    setPhotos(photosList);
  };
  
  const getLikedData = async () => {
    const likedList = await getLikedDataUtil();
    setLiked(likedList);
  };
  
  const getSavedData = async () => {
    const savedList = await getSavedDataUtil();
    setSaved(savedList);
  };

  const isLiked = (id: Photo["id"]) => liked.some(p => p.id == id);

  const isSaved = (id: Photo["id"]) => saved.some(p => p.id == id);

  const handleFirstLoad = () => {
    if (!photos.length && !!serverPhotos.length) {
      setPhotos(serverPhotos);
    }
    if (!liked.length) {
      getLikedData();
    }
    if (!saved.length) {
      getSavedData();
    }
    if (router.query.order_by && orderBy !== router.query.order_by) {
      setOrderBy(router.query.order_by as StoreState['orderBy']);
    }
  };

  const handleFiltersChange = () => {
    getPhotos();
  };

  const isFirstLoad = useRef(true);
  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      handleFirstLoad();
    } else {
      handleFiltersChange();
    }
  }, [orderBy, search, color]);

  return {
    color,
    photos,
    photosLoading,
    isLiked,
    isSaved,
  };
};

export const getServerSideProps: GetServerSideProps<{
  photos: PhotoList;
  order_by: string;
  search: string;
  color: string;
}> = async ({ req, query }) => {
  const filters = {
    order_by: `${query.order_by || 'latest'}`,
    search: `${query.search || ''}`,
    color: `${req.cookies.color || 'black_and_white'}`,
  };
  console.log({ filters });
  
  const photosList = await getPhotosListUtil(filters);
  return {
    props: {
      title: "Quality work from expert photographers",
      subtitle: "Find and save the best photographies, all in one place.",
      photos: photosList,
      ...filters
    },
  };
};
 