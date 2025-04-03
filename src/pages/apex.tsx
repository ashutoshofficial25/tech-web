import React from 'react';
import { ScrollProvider } from '../context/ScrollContext';
import Header from '../components/apex/Header';
import Hero from '../components/apex/Hero';
import About from '../components/apex/About';
import Services from '../components/apex/Services';
import Business from '../components/apex/Business';
import Newsletter from '../components/apex/Newsletter';
import ContactUs from '../components/apex/ContactUs';
import Footer from '../components/apex/Footer';
import ClientsSlider from '../components/home/ClientsSlider';
import SEO from '../components/common/SEO';
import StructuredData from '../components/common/StructuredData';

const Apex = () => {
  return (
    <ScrollProvider>
      <SEO
        title="APEX - Kin India | Global Trade & Business Solutions"
        description="Discover APEX by Kin India - Your gateway to global trade opportunities, business solutions, and international market expansion. Connect with global partners and grow your business."
        keywords="APEX, global trade, business solutions, international markets, Kin India, export opportunities, import solutions, trade consulting, global business expansion"
        url="/apex"
        author="Kin India"
        language="en"
      />
      <StructuredData
        type="WebPage"
        data={{
          name: 'APEX - Kin India | Global Trade & Business Solutions',
          description:
            'Discover APEX by Kin India - Your gateway to global trade opportunities, business solutions, and international market expansion.',
          url: 'https://kinindia.co/apex',
          lastReviewed: '2023-12-01',
        }}
      />
      <Header />
      <Hero />
      <About />
      <Services />
      <Business />
      <ClientsSlider />
      <Newsletter />
      <ContactUs />
      <Footer />
    </ScrollProvider>
  );
};

export default Apex;
