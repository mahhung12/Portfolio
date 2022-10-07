import React from "react";

import Blog from "./components/Blog";
import About from "./components/About";
import WorkExp from "./components/Work";
import Banner from "./components/Banner";
import Contact from "./components/Contact";

const HomePage = () => {
  return (
    <div className="home-container">
      <Banner />
      <About />
      <WorkExp />
      <Blog />
      <Contact />
    </div>
  );
};

export default HomePage;
