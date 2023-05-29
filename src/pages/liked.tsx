import React from 'react';
// import { GetServerSideProps } from 'next';
import { LikedLocalStorageData } from '@/modules/liked/liked.data';
import { LikedList } from '@/modules/liked/liked.types';
import { Link } from '@/components/Link';

export default function LikedPage() {
  const {
    likedList,
    addLiked,
  } = useLiked();
  
  const handleAdd = () => {
    const random = Math.random();
    addLiked({ id: random, content: random })
  };
  
  return (
    <>
      <Link href="/">Home</Link>
      <h1>Liked</h1>
      <p>Lista de cosas (from LS, aunque no lo sepa)</p>

      <button onClick={handleAdd}>Add</button>

      {likedList.map(({ id, content }) => (
        <p key={id}>{content}</p>
      ))}
    </>
  );
}

function useLiked() {
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
