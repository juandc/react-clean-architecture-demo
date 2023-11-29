import type { PropsWithChildren } from 'react';
import { AppProvider, useStore } from '@/store/ContextStore';
import type { HeaderTypes } from '@/components';
import { Layout } from '@/components';
import '@/styles/globals.scss';

function PagesWrapper({ Component, pageProps }) {
  return (
    <AppProvider serverProps={pageProps}>
      <AppWithLayout {...pageProps}>
        <Component {...pageProps} />
      </AppWithLayout>
    </AppProvider>
  );
}

function AppWithLayout({
  title,
  subtitle,
  children,
}: PropsWithChildren<HeaderTypes>) {
  const { color } = useStore();
  return (
    <Layout title={title} subtitle={subtitle} color={color}>
      {children}
    </Layout>
  );
}

export default PagesWrapper;
