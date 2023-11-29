import React from 'react';
import { GetServerSideProps } from 'next';
import { MasonryList, PhotoCard } from '@/components';
import { useLikedAndSaved } from '@/hooks/useLikedAndSaved';

export default function SavedPage() {
  const { saved, savedLoading, isLiked } = useLikedAndSaved();
  
  return (
    <MasonryList isLoading={savedLoading}>
      {saved.map(photo => (
        <PhotoCard
          key={photo.id}
          {...photo}
          isSaved={true}
          isLiked={isLiked(photo.id)}
        />
      ))}
    </MasonryList>
  );
}

export const getServerSideProps: GetServerSideProps<{
  color: string;
}> = async ({ req }) => {
  const filters = {
    color: `${req.cookies.color || 'black_and_white'}`,
  };

  return {
    props: {
      title: "Saved photographies",
      ...filters
    },
  };
};
 