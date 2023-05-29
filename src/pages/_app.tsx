import React from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { wrapper } from '@/infra/redux/store';

const MyApp: React.FC<AppProps> = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
