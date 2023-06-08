import React from 'react';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { Layout, MasonryList, PhotoCard, PhotoCardSkeleton } from '@/components';
import { PhotoList } from '@/modules/photos/photos.types';
import { PhotosHTTPData } from '@/modules/photos/photos.data';
import { PhotoFilters, PhotoSearch } from '@/modules/photos/components';
import { LikedLocalStorageData } from '@/modules/liked/liked.data';
import { useStore } from '@/store/ContextStore';

export default function HomePage({
  photos: serverPhotos,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { photos, photosLoading, isLiked } = useHome(serverPhotos);

  return (
    <Layout
      title="Quality work from expert photographers"
      subtitle="Find and save the best photographies, all in one place."
    >
      <PhotoSearch />
      <PhotoFilters />

      <MasonryList
        isLoading={photosLoading}
        loadingSkeleton={PhotoCardSkeleton}
      >
        {photos.map(photo => (
          <PhotoCard
            key={photo.id}
            isLiked={isLiked(photo.id)}
            {...photo}
          />
        ))}
      </MasonryList>
    </Layout>
  );
}

const useHome = (serverPhotos) => {
  const {
    photosLoading,
    orderBy,
    search,
    photos,
    setPhotos,
    liked,
    setLiked,
  } = useStore();

  const photosData = new PhotosHTTPData();
  
  const getPhotos = async () => {
    const filters = {
      order_by: orderBy,
      search,
    };
    const rawData = await photosData.getPhotoList(filters);
    const newPhotos = photosData.createPhotoListAdapter(rawData);
    setPhotos(newPhotos);
  };
  
  const getLikedData = async () => {
    const likedData = new LikedLocalStorageData();
    const rawData = await likedData.getLiked();
    const likedList = likedData.createLikedListAdapter(rawData);
    setLiked(likedList);
  };

  const isLiked = (id) => liked.some(p => p.id == id);

  const handleFirstLoad = () => {
    if (!photos.length && !!serverPhotos.length) setPhotos(serverPhotos);
    if (!liked.length) getLikedData();
  };

  const handleFiltersChange = () => {
    getPhotos();
  };

  const isFirstLoad = React.useRef(true);
  React.useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      handleFirstLoad();
    } else {
      handleFiltersChange();
    }
  }, [orderBy, search]);

  return {
    photos,
    photosLoading,
    isLiked,
  };
};

export const getServerSideProps: GetServerSideProps<{
  photos: PhotoList;
  order_by: string;
  search: string;
}> = async ({ res, query }) => {
  // res.setHeader(
  //   'Cache-Control',
  //   'public, s-maxage=19, stale-while-revalidate=59',
  // );
  const filters = {
    order_by: query.order_by ? String(query.order_by) : 'latest',
    search: query.search ? String(query.search) : '',
  };
  const photosData = new PhotosHTTPData();
  const rawData = await photosData.getPhotoList(filters);
  const photos = photosData.createPhotoListAdapter(rawData);
  return { props: { photos, ...filters } };
};
 