// /pages/_app.tsx
import { AppProps } from 'next/app';
import '@/public/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
