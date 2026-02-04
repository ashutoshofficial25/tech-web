import React from 'react';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Services from '../components/home/Services';
import Clienteless from '../components/home/Clienteless';
import NewsLetter from '../components/home/NewsLetter';
import SEO from '../components/common/SEO';
import StructuredData from '../components/common/StructuredData';
import BacklinkSEO from '../components/common/BacklinkSEO';

const Home = () => {
  return (
    <section>
      <SEO
        title="ReactCube.tech - Transform Your Business with Cutting-Edge Tech Solutions"
        description="ReactCube Technologies delivers innovative web and mobile applications, custom software solutions, and industry-specific platforms for healthcare, education, and real estate."
        keywords="web development, mobile app development, custom software, CRM, HRM, ReactCube, healthcare software, education technology, real estate tech, software solutions"
        url="/"
        author="ReactCube Technologies"
        language="en"
      />
      <StructuredData
        type="Organization"
        data={{
          name: 'ReactCube Technologies',
          url: 'https://reactcube.tech',
          logo: 'https://reactcube.tech/logo.png',
          description:
            'ReactCube Technologies delivers innovative web and mobile applications, custom software solutions, and industry-specific platforms.',
        }}
      />
      <BacklinkSEO
        pageUrl="/"
        relatedLinks={[
          {
            url: '/about',
            title: 'About ReactCube India',
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
          {
            url: '/apex',
            title: 'APEX Vision- Global Trade Solutions',
            description: 'Discover our global trade and business solutions',
          },
        ]}
        industryLinks={[
          {
            url: 'https://www.eventmanagerblog.com',
            title: 'Event Manager Blog',
            relationship: 'industry',
          },
          {
            url: 'https://www.eventmarketer.com',
            title: 'Event Marketer',
            relationship: 'industry',
          },
          {
            url: 'https://www.brandactivation.org',
            title: 'Brand Activation Association',
            relationship: 'industry',
          },
          {
            url: 'https://www.eventindustrynews.com',
            title: 'Event Industry News',
            relationship: 'industry',
          },
          {
            url: 'https://www.specialevents.com',
            title: 'Special Events Magazine',
            relationship: 'industry',
          },
        ]}
        authorityLinks={[
          {
            url: 'https://www.forbes.com/business',
            title: 'Forbes Business',
            description: 'Business news, insights and expert opinions',
          },
          {
            url: 'https://hbr.org/topic/marketing',
            title: 'Harvard Business Review - Marketing',
            description: 'Leading business insights on marketing strategies',
          },
          {
            url: 'https://www.entrepreneur.com/growing-a-business/event-marketing',
            title: 'Entrepreneur - Event Marketing',
            description: 'Expert insights on event marketing strategies',
          },
        ]}
        socialProfiles={[
          {
            platform: 'LinkedIn',
            url: 'https://www.linkedin.com/company/kin-productions-india/',
          },
          {
            platform: 'Instagram',
            url: 'https://www.instagram.com/kin_productions_india?igsh=aDJyZ2N1MHpveDFt',
          },
          {
            platform: 'Twitter',
            url: 'https://twitter.com/kinindia',
          },
        ]}
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
