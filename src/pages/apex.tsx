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
        title="Enterprise Solutions - ReactCube | Scalable Tech for Large Organizations"
        description="Discover ReactCube Enterprise Solutions - Cloud migration, microservices architecture, DevOps automation, and enterprise-grade security for large organizations."
        keywords="enterprise solutions, cloud migration, microservices, DevOps, enterprise software, scalable architecture, ReactCube, digital transformation, enterprise tech"
        url="/apex"
        author="ReactCube Technologies"
        language="en"
      />
      <StructuredData
        type="WebPage"
        data={{
          name: 'Enterprise Solutions - ReactCube Technologies',
          description:
            'Discover ReactCube Enterprise Solutions - Scalable, secure, and enterprise-grade technology solutions for large organizations.',
          url: 'https://reactcube.tech/apex',
          lastReviewed: '2025-02-05',
        }}
      />
      <BacklinkSEO
        pageUrl="/apex"
        relatedLinks={[
          {
            url: '/',
            title: 'ReactCube - Home',
            description:
              'Discover cutting-edge technology solutions for your business',
          },
          {
            url: '/about',
            title: 'About ReactCube',
            description:
              'Learn about our mission to deliver innovative software solutions',
          },
          {
            url: '/works',
            title: 'Our Portfolio',
            description:
              'Explore our successful web, mobile, and enterprise software projects',
          },
          {
            url: '/contact',
            title: 'Contact Us',
            description: 'Get in touch with our technology experts',
          },
        ]}
        industryLinks={[
          {
            url: 'https://www.stackshare.io',
            title: 'StackShare - Tech Stack Insights',
            relationship: 'industry',
          },
          {
            url: 'https://www.gartner.com/en/information-technology',
            title: 'Gartner IT',
            relationship: 'industry',
          },
          {
            url: 'https://techcrunch.com',
            title: 'TechCrunch',
            relationship: 'industry',
          },
        ]}
        authorityLinks={[
          {
            url: 'https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights',
            title: 'McKinsey - Digital Insights',
            description: 'Expert insights on digital transformation and technology',
          },
          {
            url: 'https://hbr.org/topic/technology',
            title: 'Harvard Business Review - Technology',
            description: 'Leading insights on technology and innovation',
          },
        ]}
        socialProfiles={[
          {
            platform: 'LinkedIn',
            url: 'https://www.linkedin.com/company/reactcube-tech/',
          },
          {
            platform: 'Instagram',
            url: 'https://www.instagram.com/reactcube_tech',
          },
          {
            platform: 'Twitter',
            url: 'https://twitter.com/reactcube',
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
