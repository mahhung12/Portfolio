import type { AppProps } from 'next/app';

import 'antd/dist/antd.css';
import '../styles/_app.scss';

import 'swiper/css';

import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// eslint-disable-next-line
import 'swiper/css/bundle';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
