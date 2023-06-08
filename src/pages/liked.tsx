import React from 'react';
import { GetServerSideProps } from 'next';
import { LikedLocalStorageData } from '@/modules/liked/liked.data';
import { Layout, MasonryList, PhotoCard, PhotoCardSkeleton } from '@/components';
import { useStore } from '@/store/ContextStore';

export default function LikedPage() {
  const { liked, likedLoading, color } = useLiked();

  return (
    <Layout
      title="Liked photographies"
      color={color}
    >
      <MasonryList
        isLoading={likedLoading}
        loadingSkeleton={PhotoCardSkeleton}
      >
        {liked.map(photo => (
          <PhotoCard key={photo.id} {...photo} isLiked={true} />
        ))}
      </MasonryList>
    </Layout>
  );
}

function useLiked() {
  const { liked, likedLoading, setLiked, color } = useStore();

  const getLikedData = async () => {
    const likedData = new LikedLocalStorageData();
    const rawData = await likedData.getLiked();
    const likedList = likedData.createLikedListAdapter(rawData);
    setLiked(likedList);
  };

  React.useEffect(() => {
    if (!liked.length) getLikedData();
  }, []);
  
  return {
    liked,
    likedLoading,
    color,
  };
}

export const getServerSideProps: GetServerSideProps<{
  color: string;
}> = async ({ req }) => {
  const filters = {
    color: req.cookies.color ? String(req.cookies.color) : 'black_and_white',
  };

  return { props: { ...filters } };
};
