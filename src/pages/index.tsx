import React from 'react';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { PhotoList } from '@/modules/photos/photos.types';
import { PhotosHTTPData } from '@/modules/photos/photos.data';
import { Layout, MasonryList, PhotoCard } from '@/components';
import { PhotoFilters, PhotoSearch } from '@/modules/photos/components';
import { useApp } from '@/store/ContextStore';

export default function HomePage({
  photos: serverPhotos,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { photos, addPhoto } = useHome(serverPhotos);

  return (
    <Layout
      title="Quality work from expert photographers"
      subtitle="Find and save the best photographies, all in one place."
    >
      <PhotoSearch />
      <button onClick={() => {
        addPhoto({
          id: '123',
          description: '',
          urls: { thumb: '', small: '', regular: '', full: '', raw: '' },
        });
      }}>Click</button>
      <PhotoFilters />
      <MasonryList>
        {photos.map(p => <PhotoCard key={p.id} {...p} />)}
      </MasonryList>
    </Layout>
  );
}

const useHome = (serverPhotos) => {
  const { photos, setPhotos, addPhoto } = useApp()

  React.useEffect(() => {
    if (!photos.length && !!serverPhotos.length) {
      console.log("Update context");
      setPhotos(serverPhotos)
    }
  }, []);

  return {
    photos,
    addPhoto,
  };
};

export const getServerSideProps: GetServerSideProps<{
  photos: PhotoList;
}> = async () => {
  const photosData = new PhotosHTTPData();
  const rawData = await photosData.getPhotoList();
  const photos = photosData.createPhotoListAdapter(rawData);
  return { props: { photos } };
};
 