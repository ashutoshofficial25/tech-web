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
import BacklinkSEO from '../components/common/BacklinkSEO';

const Apex = () => {
  return (
    <ScrollProvider>
      <SEO
        title="APEX Vision- Kin India | Global Trade & Business Solutions"
        description="Discover APEX Vision by Kin India - Your gateway to global trade opportunities, business solutions, and international market expansion. Connect with global partners and grow your business."
        keywords="APEX Vision, global trade, business solutions, international markets, Kin India, export opportunities, import solutions, trade consulting, global business expansion"
        url="/apex"
        author="Kin India"
        language="en"
      />
      <StructuredData
        type="WebPage"
        data={{
          name: 'APEX Vision- Kin India | Global Trade & Business Solutions',
          description:
            'Discover APEX Vision by Kin India - Your gateway to global trade opportunities, business solutions, and international market expansion.',
          url: 'https://kinindia.co/apex',
          lastReviewed: '2023-12-01',
        }}
      />
      <BacklinkSEO
        pageUrl="/apex"
        relatedLinks={[
          {
            url: '/',
            title: 'Kin India - Home',
            description:
              'Discover how we can elevate your brand through unforgettable events',
          },
          {
            url: '/about',
            title: 'About Kin India',
            description:
              'Learn about our mission and vision in creating memorable brand experiences',
          },
          {
            url: '/works',
            title: 'Our Portfolio',
            description:
              'Explore our successful event management projects and brand activations',
          },
          {
            url: '/contact',
            title: 'Contact Us',
            description: 'Get in touch with our event management experts',
          },
        ]}
        industryLinks={[
          {
            url: 'https://www.trade.gov',
            title: 'International Trade Administration',
            relationship: 'industry',
          },
          {
            url: 'https://www.wto.org',
            title: 'World Trade Organization',
            relationship: 'industry',
          },
          {
            url: 'https://www.iccwbo.org',
            title: 'International Chamber of Commerce',
            relationship: 'industry',
          },
        ]}
        authorityLinks={[
          {
            url: 'https://www.mckinsey.com/industries/public-sector/our-insights/global-trade',
            title: 'McKinsey - Global Trade Insights',
            description: 'Expert insights on global trade and business',
          },
          {
            url: 'https://www.worldbank.org/en/topic/trade',
            title: 'World Bank - Trade',
            description: 'Global trade research and development',
          },
        ]}
        socialProfiles={[
          {
            platform: 'LinkedIn',
            url: 'https://www.linkedin.com/company/kin-india',
          },
          {
            platform: 'Instagram',
            url: 'https://www.instagram.com/kin_productions_india',
          },
          {
            platform: 'Twitter',
            url: 'https://twitter.com/kinindia',
          },
        ]}
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
