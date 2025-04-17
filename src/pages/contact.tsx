import React, { useEffect } from 'react';
import { IoCall, IoLocationSharp } from 'react-icons/io5';
import { LuMail } from 'react-icons/lu';
import aboutIllustrationBg from '../assets/illustration/hero-illustration.png';
import CustomCard from '../components/contactUs/CustomCard';
import { IoIosArrowRoundUp } from 'react-icons/io';
import ContactUsForm from '../components/contactUs/ContactUsForm';
import SocialList from '../components/contactUs/SocialList';
import NewsletterForm from '../components/contactUs/NewsletterForm';
import AddressWrapper from '../components/contactUs/AddressWrapper';
import SEO from '../components/common/SEO';
import StructuredData from '../components/common/StructuredData';
import BacklinkSEO from '../components/common/BacklinkSEO';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface IContactUsCardProps {
  icon: React.JSX.Element;
  value: string | string[];
  desc: string;
  module: string;
}

const contactDetails: IContactUsCardProps[] = [
  {
    icon: (
      <IoLocationSharp className="lg:text-4xl md:text-3xl text-2xl text-white/80" />
    ),
    value: 'D - 148, SECTOR - 61, NOIDA 201301(U.P.), INDIA',
    desc: 'Connect Near and Far, Reach out us',
    module: 'location',
  },
  {
    icon: <LuMail className="lg:text-4xl md:text-3xl text-2xl text-white/80" />,
    value: 'intro@kinindia.co',
    desc: "Send us a message through Kin's official email",
    module: 'main',
  },
  {
    icon: <IoCall className="lg:text-4xl md:text-3xl text-2xl text-white/80" />,
    value: ['+91 8826204411'],
    desc: 'Get in touch with us by phone',
    module: 'call',
  },
];

const ContactUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 120,
    });
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden relative w-full">
      <SEO
        title="Contact Us - Kin India | Get in Touch"
        description="Contact Kin Productions India for your event management and brand experience needs. Reach out to our team for inquiries and collaborations."
        keywords="contact Kin India, event management contact, brand experience inquiry, Kin Productions address, event planning contact, event inquiry"
        url="/contact"
        author="Kin India"
        language="en"
      />
      <StructuredData
        type="LocalBusiness"
        data={{
          name: 'Kin India',
          image: 'https://kinindia.co/src/assets/kin-logo.png',
          telephone: '+918826204411',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'D-55, Sector 80 ',
            addressLocality: 'NOIDA',
            postalCode: '201305',
            addressRegion: 'U.P.',
            addressCountry: 'INDIA',
          },
        }}
      />
      <BacklinkSEO
        pageUrl="/contact"
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
        ]}
        industryLinks={[
          {
            url: 'https://www.eventplannernews.com',
            title: 'Event Planner News',
            relationship: 'industry',
          },
          {
            url: 'https://www.meetingsnet.com',
            title: 'MeetingsNet',
            relationship: 'industry',
          },
          {
            url: 'https://www.corporateeventnews.com',
            title: 'Corporate Event News',
            relationship: 'industry',
          },
        ]}
        authorityLinks={[
          {
            url: 'https://www.inc.com/business-events',
            title: 'Inc.com - Business Events',
            description: 'Business event strategies and insights',
          },
          {
            url: 'https://www.cvent.com/en/blog',
            title: 'Cvent Blog',
            description: 'Leading event management platform insights',
          },
        ]}
        socialProfiles={[
          {
            platform: 'LinkedIn',
            url: 'https://www.linkedin.com/company/kin-productions-india/',
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
      <img
        src={aboutIllustrationBg}
        className="w-full absolute top-32 left-1/2 -translate-x-1/2 z-0 rotate-180"
        data-aos="fade"
        data-aos-delay="300"
      />

      <div className="xl:container w-full md:pb-20 pb-10 relative z-20 mx-auto flex pt-32 flex-col items-center">
        <h1
          className="xl:text-5xl lg:text-4xl text-3xl font-medium text-primary"
          data-aos="fade-down"
        >
          Contact Us
        </h1>
        <p
          className="lg:w-2/5 sm:w-1/2 xs:w-[66%] w-[76%] lg:text-base text-sm font-normal text-light lg:mt-5 mt-3 text-center"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          Contact us via email, call, or fill out the form to discover how Kin
          can help solve your problem
        </p>

        <div
          className="flex mt-12 flex-col items-center w-full"
          data-aos="fade-up"
        >
          <h1
            className="text-primary font-medium text-center lg:text-2xl md:text-xl text-base"
            data-aos="fade-down"
            data-aos-delay="150"
          >
            How can we help you?
          </h1>
          <div
            className="flex sm:flex-row flex-col items-center w-full xl:px-16 md:px-10 sm:px-5 xs:px-12 px-6 mt-4 xl:gap-x-8 lg:gap-x-4 sm:gap-x-2 sm:gap-y-0 gap-y-2"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {contactDetails?.map(
              (
                { icon, value, desc, module }: IContactUsCardProps,
                index: number
              ) => (
                <CustomCard
                  key={index}
                  icon={icon}
                  value={value}
                  desc={desc}
                  module={module}
                  data-aos="zoom-in"
                  data-aos-delay={200 + index * 100}
                />
              )
            )}
          </div>
        </div>
      </div>

      <div
        className="2xl:container w-full relative z-10 flex lg:mt-12 md:mt-8 sm:mt-6 mt-4 flex-col mx-auto items-center"
        data-aos="fade-up"
      >
        <h1
          className="xl:text-5xl lg:text-4xl text-3xl font-medium text-primary"
          data-aos="fade-down"
        >
          Meet Us
        </h1>
        <div
          className="flex gap-x-4 mt-2.5 items-center justify-center"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <p className="xl:text-2xl lg:text-xl text-base font-normal text-light">
            We would love to hear from you
          </p>
          <div
            className="h-6 w-6 flex items-center justify-center rounded-sm bg-primary text-white"
            data-aos="zoom-in"
            data-aos-delay="150"
          >
            <IoIosArrowRoundUp className="rotate-45 text-xl" />
          </div>
        </div>

        <ContactUsForm />
        <SocialList />
      </div>

      <NewsletterForm />
      <AddressWrapper />
    </div>
  );
};

export default ContactUs;
