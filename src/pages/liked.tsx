import React from 'react';
// import { GetServerSideProps } from 'next';
import { LikedLocalStorageData } from '@/modules/liked/liked.data';
import { LikedList } from '@/modules/liked/liked.types';
import { Layout } from '@/components';
import { useApp } from '@/store/ContextStore';

export default function LikedPage() {
  const {
    likedList,
    // addLiked,
  } = useLiked();
  
  // const handleAdd = () => {
  //   const random = Math.random();
  //   addLiked({ id: random, content: random })
  // };
  
  return (
    <Layout
      title="Liked photographies"
    >
      {likedList.map(({ id, content }) => (
        <p key={id}>{content}</p>
      ))}
    </Layout>
  );
}

function useLiked() {
  const { photos } = useApp()
  console.log('photos context from liked', photos);
  
  
  const likedData = new LikedLocalStorageData();
  const [likedList, setLikedList] = React.useState<LikedList>([]);

  const getLikedData = async () => {
    const rawData = await likedData.getLiked();
    const liked = likedData.createLikedListAdapter(rawData);
    setLikedList(liked);
  };

  async function addLiked(newValue) {
    const rawData = await likedData.addLiked(newValue);
    const liked = likedData.createLikedListAdapter(rawData);
    setLikedList(liked);
  }

  React.useEffect(() => {
    getLikedData();
  }, []);
  
  return {
    likedList,
    addLiked,
  };
}
