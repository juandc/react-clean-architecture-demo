import React from 'react';
import { GetServerSideProps } from 'next';
import { SavedLocalStorageData } from '@/modules/saved/saved.data';
import { useStore } from '@/store/ContextStore';
import { Layout, MasonryList, PhotoCard, PhotoCardSkeleton } from '@/components';

export default function SavedPage() {
  const { saved, savedLoading, color } = useSaved();
  
  return (
    <Layout
      title="Saved photographies"
      color={color}
    >
      <MasonryList
        isLoading={savedLoading}
        loadingSkeleton={PhotoCardSkeleton}
      >
        {saved.map(photo => (
          <PhotoCard key={photo.id} {...photo} isSaved={true} />
        ))}
      </MasonryList>
    </Layout>
  );
}

function useSaved() {
  const { saved, savedLoading, setSaved, color } = useStore();

  const getSavedData = async () => {
    const savedData = new SavedLocalStorageData();
    const rawData = await savedData.getSaved();
    const savedList = savedData.createSavedListAdapter(rawData);
    setSaved(savedList);
  };

  React.useEffect(() => {
    if (!saved.length) getSavedData();
  }, []);
  
  return {
    saved,
    savedLoading,
    color,
  };
}

export const getServerSideProps: GetServerSideProps<{}> = async ({ req }) => {
  const filters = {
    color: req.cookies.color ? String(req.cookies.color) : 'black_and_white',
  };

  return { props: { ...filters } };
};
 