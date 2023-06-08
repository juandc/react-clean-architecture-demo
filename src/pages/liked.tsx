import React from 'react';
// import { GetServerSideProps } from 'next';
import { LikedLocalStorageData } from '@/modules/liked/liked.data';
import { Layout, MasonryList, PhotoCard, PhotoCardSkeleton } from '@/components';
import { useStore } from '@/store/ContextStore';

export default function LikedPage() {
  const { liked, likedLoading } = useLiked();

  return (
    <Layout
      title="Liked photographies"
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
  const { liked, likedLoading, setLiked } = useStore();

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
  };
}
