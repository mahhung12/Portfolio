import { GetServerSideProps } from 'next';

import HomePage from '@components//Pages/Home';
import Layout from '@components//Layout/Public';

const Home = () => {
  return (
    <Layout>
      <div className='home-page'>
        <HomePage />
      </div>
    </Layout>
  );
};

export default Home;
