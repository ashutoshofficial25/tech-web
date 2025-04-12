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
      <BacklinkSEO
        pageUrl="/"
        relatedLinks={[
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
          {
            url: '/apex',
            title: 'APEX - Global Trade Solutions',
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
            url: 'https://www.linkedin.com/company/kin-india',
          },
          {
            platform: 'Instagram',
            url: 'https://www.instagram.com/kinindia',
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
