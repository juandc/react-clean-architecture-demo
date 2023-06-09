import React from 'react';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { Layout, MasonryList, PhotoCard, PhotoCardSkeleton } from '@/components';
import { PhotoList } from '@/modules/photos/photos.types';
import { PhotosHTTPData } from '@/modules/photos/photos.data';
import { PhotoFilters, PhotoSearch } from '@/modules/photos/components';
import { LikedLocalStorageData } from '@/modules/liked/liked.data';
import { useStore } from '@/store/ContextStore';
import { useRouter } from '@/utils/useRouter';
import { StoreState } from '@/store/store.types';

export default function HomePage({
  photos: serverPhotos,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { photos, photosLoading, isLiked, color } = useHome(serverPhotos);

  return (
    <Layout
      title="Quality work from expert photographers"
      subtitle="Find and save the best photographies, all in one place."
      color={color}
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
    orderBy,
    setOrderBy,
    search,
    color,
    photosLoading,
    photos,
    setPhotos,
    liked,
    setLiked,
  } = useStore();
  const router = useRouter();

  const photosData = new PhotosHTTPData();
  
  const getPhotos = async () => {
    const filters = {
      order_by: orderBy,
      search,
      color,
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
    if (router.query.order_by && orderBy !== router.query.order_by)
      setOrderBy(router.query.order_by as StoreState['orderBy']);
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
  }, [orderBy, search, color]);

  return {
    color,
    photos,
    photosLoading,
    isLiked,
  };
};

export const getServerSideProps: GetServerSideProps<{
  photos: PhotoList;
  order_by: string;
  search: string;
  color: string;
}> = async ({ res, query, req }) => {
  // res.setHeader(
  //   'Cache-Control',
  //   'public, s-maxage=19, stale-while-revalidate=59',
  // );

  console.log('server props');
  
  const filters = {
    order_by: query.order_by ? String(query.order_by) : 'latest',
    search: query.search ? String(query.search) : '',
    color: req.cookies.color ? String(req.cookies.color) : 'black_and_white',
  };
  console.log({ filters });
  
  const photosData = new PhotosHTTPData();
  const rawData = await photosData.getPhotoList(filters);
  const photos = photosData.createPhotoListAdapter(rawData);
  return { props: { photos, ...filters } };
};
 