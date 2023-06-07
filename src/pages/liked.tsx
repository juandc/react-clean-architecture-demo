import React from 'react';
// import { GetServerSideProps } from 'next';
import { LikedLocalStorageData } from '@/modules/liked/liked.data';
import { Layout, MasonryList, PhotoCard } from '@/components';
import { useStore } from '@/store/ContextStore';

export default function LikedPage() {
  const { liked } = useLiked();

  return (
    <Layout
      title="Liked photographies"
    >
      <MasonryList>
        {liked.map(photo => (
          <PhotoCard
            key={photo.id}
            isLiked={true}
            {...photo}
          />
        ))}
      </MasonryList>
    </Layout>
  );
}

function useLiked() {
  const { liked, setLiked } = useStore();

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
  };
}
