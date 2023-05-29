import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import { wrapper, ReduxState } from '@/infra/redux/store';
import { selectSalute, setSaluteState } from '@/infra/redux/salute.state';
// import { Salute } from '@/modules/salute/salute.types';
import { createSaluteAdapter } from '@/modules/salute/salute.adapter';
import { SaluteHTTPData } from '@/modules/salute/salute.data';
import { Link } from '@/components/Link';

export default function HomePage() {
  const [salute, setSalute] = useSalute();

  const handleSaluteChange = () => {
    setSalute('Salute al michi (actualizado desde el cliente)');
  };
  
  return (
    <>
      <Link href="/liked">Liked</Link>
      <h1>Home</h1>
      <p>Lista de cosas (from redux, aunque no lo sepa)</p>
      <p>Data: '{salute.saluteState}'</p>
      <button onClick={handleSaluteChange}>Change Salute</button>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  store => async () => {
    const saluteData = new SaluteHTTPData();
    const rawData = await saluteData.getSalute();
    const saluteState = `${createSaluteAdapter(rawData).saluteState} (desde el server)`;
    store.dispatch(setSaluteState(saluteState));
    return { props: {} };
    // return { props: { salute } };
  }
);

const useSalute = () => {
  const salute = useSelector(selectSalute);
  const dispatch = useDispatch();

  const setSalute = (msg) => {
    dispatch(setSaluteState(msg));
  };
  
  return [salute, setSalute] as const;
};
