import React, { useEffect } from "react";
import { Element } from "react-scroll";

import Blog from "./components/Blog";
import About from "./components/About";
import WorkExp from "./components/Work";
import Banner from "./components/Banner";
import Contact from "./components/Contact";

const HomePage = () => {
  return (
    <div className="home-container">
      <section id="home">
        <Banner />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="work">
        <WorkExp />
      </section>

      <section id="blog">
        <Blog />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default HomePage;
