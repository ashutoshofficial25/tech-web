import React from 'react';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Services from '../components/home/Services';
import Clienteless from '../components/home/Clienteless';
import NewsLetter from '../components/home/NewsLetter';
import SEO from '../components/common/SEO';
import StructuredData from '../components/common/StructuredData';

const Home = () => {
  return (
    <section>
      <SEO
        title="Kin India - Elevating Brands Through Unforgettable Events"
        description="Kin Productions India specializes in creating memorable events and brand experiences. Discover how we can elevate your brand through unforgettable events."
        keywords="event management, brand experiences, sports events, Kin India, corporate events, event planning, brand activation, experiential marketing"
        url="/"
        author="Kin India"
        language="en"
      />
      <StructuredData
        type="Organization"
        data={{
          name: 'Kin India',
          url: 'https://kinindia.co',
          logo: 'https://kinindia.co/src/assets/kin-logo.png',
          description:
            'Kin Productions India Private Limited specializes in creating memorable events, sports management, and brand experiences.',
        }}
      />
      <Hero />
      <About />
      <Services />
      <Clienteless />
      <NewsLetter />
    </section>
  );
};

export default Home;
