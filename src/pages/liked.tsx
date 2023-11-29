import React from 'react';
import { GetServerSideProps } from 'next';
import { MasonryList, PhotoCard } from '@/components';
import { useLikedAndSaved } from '@/hooks/useLikedAndSaved';

export default function LikedPage() {
  const { liked, likedLoading, isSaved } = useLikedAndSaved();

  return (
    <MasonryList isLoading={likedLoading}>
      {liked.map(photo => (
        <PhotoCard
          key={photo.id}
          {...photo}
          isLiked={true}
          isSaved={isSaved(photo.id)}
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
      title: "Liked photographies",
      ...filters
    },
  };
};
