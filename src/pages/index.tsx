import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { PhotoList } from '@/modules/photos/photos.types';
import { PhotosHTTPData } from '@/modules/photos/photos.data';
import { Layout, PhotoCard } from '@/components';
import { PhotoFilters, PhotoSearch } from '@/modules/photos/components';

export default function HomePage({
  photos,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Layout
      title="Quality work from expert photographers"
      subtitle="Find and save the best photographies, all in one place."
    >
      <PhotoSearch />
      <PhotoFilters />
      {photos.map(p => <PhotoCard key={p.id} {...p} />)}
    </Layout>
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
 