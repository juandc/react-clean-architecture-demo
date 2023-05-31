import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { PhotoList } from '@/modules/photos/photos.types';
import { PhotosHTTPData } from '@/modules/photos/photos.data';
import { PhotoCard } from '@/modules/photos/components';

export default function HomePage({
  photos,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <h1>Home</h1>
      {photos.map(p => <PhotoCard key={p.id} {...p} />)}
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{
  photos: PhotoList;
}> = async () => {
  const photosData = new PhotosHTTPData();
  const rawData = await photosData.getPhotoList();
  const photos = photosData.createPhotoListAdapter(rawData);
  return { props: { photos } };
};
 