import { GetServerSideProps } from 'next';
import { Saved } from '@/modules/saved/saved.types'
import { SavedHTTPData } from '@/modules/saved/saved.data';
import { Layout, Link } from '@/components';

export default function SavedPage({ saved }) {
  return (
    <Layout
      title="Saved photographies"
    >
      '{saved}'
    </Layout>
  );
  
  // return (
  //   <>
  //     <Link href="/liked">Liked</Link>
  //     <h1>Home</h1>
  //     <p>Lista de cosas (from redux, aunque no lo sepa)</p>
  //     <p>Data: '{saved}'</p>
  //   </>
  // );
}

export const getServerSideProps: GetServerSideProps<{
  saved: Saved;
}> = async () => {
  const savedData = new SavedHTTPData();
  const rawData = await savedData.getSaved();
  const saved = savedData.createSavedAdapter(rawData);
  return { props: { saved } };
};
 