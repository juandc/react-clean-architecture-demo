import { GetServerSideProps } from 'next';
import { Salute } from '@/modules/salute/salute.types'
import { SaluteHTTPData } from '@/modules/salute/salute.data';
import { Link } from '@/components/Link';

export default function SalutePage({ salute }) {
  return (
    <>
      <Link href="/liked">Liked</Link>
      <h1>Home</h1>
      <p>Lista de cosas (from redux, aunque no lo sepa)</p>
      <p>Data: '{salute}'</p>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{
  salute: Salute;
}> = async () => {
  const saluteData = new SaluteHTTPData();
  const rawData = await saluteData.getSalute();
  const salute = saluteData.createSaluteAdapter(rawData);
  return { props: { salute } };
};
 