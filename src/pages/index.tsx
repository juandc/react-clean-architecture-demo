import React from 'react';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { PhotoList } from '@/modules/photos/photos.types';
import { PhotosHTTPData } from '@/modules/photos/photos.data';
import { Layout, MasonryList, PhotoCard } from '@/components';
import { PhotoFilters, PhotoSearch } from '@/modules/photos/components';
import { useStore } from '@/store/ContextStore';
import { LikedLocalStorageData } from '@/modules/liked/liked.data';

export default function HomePage({
  photos: serverPhotos,
  // orderBy,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { photos, isLiked } = useHome(serverPhotos);

  return (
    <Layout
      title="Quality work from expert photographers"
      subtitle="Find and save the best photographies, all in one place."
    >
      <PhotoSearch />
      <PhotoFilters />

      <MasonryList>
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
    photos,
    setPhotos,
    liked,
    setLiked,
  } = useStore();

  const isLiked = (id) => liked.some(p => p.id == id);

  const getLikedData = async () => {
    const likedData = new LikedLocalStorageData();
    const rawData = await likedData.getLiked();
    const likedList = likedData.createLikedListAdapter(rawData);
    setLiked(likedList);
  };

  React.useEffect(() => {
    if (!photos.length && !!serverPhotos.length) setPhotos(serverPhotos);
    if (!liked.length) getLikedData();
  }, []);

  return {
    photos,
    isLiked,
  };
};

export const getServerSideProps: GetServerSideProps<{
  photos: PhotoList;
  order_by: string;
  search: string;
}> = async ({ query }) => {
  const filters = {
    order_by: query.order_by ? String(query.order_by) : 'latest',
    search: query.search ? String(query.search) : '',
  };
  const photosData = new PhotosHTTPData();
  const rawData = await photosData.getPhotoList(filters);
  const photos = photosData.createPhotoListAdapter(rawData);
  return { props: { photos, ...filters } };
};
 