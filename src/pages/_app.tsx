import { AppProvider } from '@/store/ContextStore';
import '@/styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider serverProps={pageProps}>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
