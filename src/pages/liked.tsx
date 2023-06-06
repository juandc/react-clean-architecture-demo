import React from 'react';
// import { GetServerSideProps } from 'next';
import { LikedLocalStorageData } from '@/modules/liked/liked.data';
import { Layout } from '@/components';
import { useApp } from '@/store/ContextStore';

export default function LikedPage() {
  const {
    liked,
  } = useLiked();

  return (
    <Layout
      title="Liked photographies"
    >
      {liked.map(({ id }) => (
        <p key={id} style={{ margin: 20 }}>{id}</p>
      ))}
    </Layout>
  );
}

function useLiked() {
  const { liked, setLiked } = useApp();
  
  const likedData = new LikedLocalStorageData();

  const getLikedData = async () => {
    const rawData = await likedData.getLiked();
    const liked = likedData.createLikedListAdapter(rawData);
    setLiked(liked);
  };

  React.useEffect(() => {
    getLikedData();
  }, []);
  
  return {
    liked,
  };
}
