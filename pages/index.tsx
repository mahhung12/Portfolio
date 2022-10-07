import type { NextPage } from "next";

import HomePage from "@components//Pages/Home";
import Layout from "@components//Layout/Public";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="home-page">
        <HomePage />
      </div>
    </Layout>
  );
};

export default Home;
