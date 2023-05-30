import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { PhotoList } from '@/modules/photos/photos.types';
import { PhotosHTTPData } from '@/modules/photos/photos.data';

export default function HomePage({
  photos,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <h1>Home</h1>
      <p>Lista de photos</p>
      {photos.map(p => <img key={p.id} src={p.urls.small} />)}
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
 