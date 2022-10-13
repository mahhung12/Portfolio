import type { AppProps } from 'next/app';

import 'antd/dist/antd.css';
import '../styles/_app.scss';
import 'swiper/css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
