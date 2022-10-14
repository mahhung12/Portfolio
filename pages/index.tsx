import type { NextPage } from 'next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper';

import HomePage from '@components//Pages/Home';
import Layout from '@components//Layout/Public';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className='home-page'>
        <HomePage />
      </div>
    </Layout>
  );
};

export default Home;
