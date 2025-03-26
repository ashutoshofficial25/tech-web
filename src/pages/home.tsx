import React from "react";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Services from "../components/home/Services";
import Clienteless from "../components/home/Clienteless";
import NewsLetter from "../components/home/NewsLetter";

const Home = () => {
  return (
    <section>
      <Hero />
      <About />
      <Services />
      <Clienteless />
      <NewsLetter />
    </section>
  );
};

export default Home;
