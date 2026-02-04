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
    value:
      '[To Be Updated - Contact Information]',
    desc: 'Connect with our team, reach out to us',
    module: 'location',
  },
  {
    icon: <LuMail className="lg:text-4xl md:text-3xl text-2xl text-white/80" />,
    value: 'contact@reactcube.tech',
    desc: "Send us a message through ReactCube's official email",
    module: 'mail',
  },
  {
    icon: <IoCall className="lg:text-4xl md:text-3xl text-2xl text-white/80" />,
    value: ['+91-XXXXXXXXXX'],
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
        title="Contact Us - ReactCube | Get in Touch"
        description="Contact ReactCube Technologies for your web development, mobile app, and custom software needs. Reach out to our team for inquiries and consultations."
        keywords="contact ReactCube, software development contact, web development inquiry, ReactCube Technologies address, tech services contact, software inquiry"
        url="/contact"
        author="ReactCube Technologies"
        language="en"
      />
      <StructuredData
        type="LocalBusiness"
        data={{
          name: 'ReactCube Technologies',
          image: 'https://reactcube.tech/logo.png',
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
        ]}
        industryLinks={[
          {
            url: 'https://www.techcrunch.com',
            title: 'TechCrunch',
            relationship: 'industry',
          },
          {
            url: 'https://www.stackoverflow.com',
            title: 'Stack Overflow',
            relationship: 'industry',
          },
          {
            url: 'https://dev.to',
            title: 'Dev Community',
            relationship: 'industry',
          },
        ]}
        authorityLinks={[
          {
            url: 'https://www.inc.com/technology',
            title: 'Inc.com - Technology',
            description: 'Business technology strategies and insights',
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
          Contact us via email, call, or fill out the form to discover how ReactCube
          can help solve your technology challenges
        </p>

        <div
          className="flex mt-12 flex-col items-center w-full"
          data-aos="fade-up"
        >
          <h1
            className="text-primary font-medium text-center lg:text-2xl md:text-xl text-base tracking-wide"
            data-aos="fade-down"
            data-aos-delay="150"
          >
            How can we help you?
          </h1>
          <div
            className="flex sm:flex-row flex-col items-stretch w-full xl:px-16 md:px-10 sm:px-5 xs:px-12 px-6 mt-6 xl:gap-x-8 lg:gap-x-4 sm:gap-x-4 sm:gap-y-0 gap-y-4"
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
        className="2xl:container w-full relative z-10 flex lg:mt-16 md:mt-12 sm:mt-8 mt-6 flex-col mx-auto items-center"
        data-aos="fade-up"
      >
        <h1
          className="xl:text-5xl lg:text-4xl text-3xl font-medium text-primary"
          data-aos="fade-down"
        >
          Meet Us
        </h1>
        <div
          className="flex gap-x-4 mt-3 items-center justify-center"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <p className="xl:text-2xl lg:text-xl text-base font-normal text-light">
            We would love to hear from you
          </p>
          <div
            className="h-7 w-7 flex items-center justify-center rounded-md bg-primary text-white shadow-md"
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
