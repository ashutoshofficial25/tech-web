import React, { useEffect } from 'react';
import wavyLinseIllustrationBg from '../assets/illustration/wavylines.png';
import kinLogoPattern from '../assets/illustration/kin-logo-pattern.svg';
import Button from '../components/common/Button';
import TestimonialCard from '../components/aboutUs/TestimonialCard';
import Timeline from '../components/aboutUs/Timeline';
import CompanyHistory from '../components/aboutUs/CompanyHistory';
import SEO from '../components/common/SEO';
import StructuredData from '../components/common/StructuredData';
import BacklinkSEO from '../components/common/BacklinkSEO';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {
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
        title="About Us - ReactCube | Our Story and Mission"
        description="Learn about ReactCube Technologies, our journey, mission, and how we deliver innovative web and mobile applications across diverse industries."
        keywords="about ReactCube, software development company, technology services, ReactCube Technologies history, company mission, tech story"
        url="/about"
        author="ReactCube Technologies"
        language="en"
      />
      <StructuredData
        type="WebPage"
        data={{
          name: 'About Us - ReactCube Technologies',
          description:
            'Learn about ReactCube Technologies, our journey, mission, and how we deliver innovative software solutions across diverse industries.',
          url: 'https://reactcube.tech/about',
          lastReviewed: '2025-02-05',
        }}
      />
      <BacklinkSEO
        pageUrl="/about"
        relatedLinks={[
          {
            url: '/',
            title: 'ReactCube - Home',
            description:
              'Discover cutting-edge technology solutions for your business',
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
            url: 'https://www.techcrunch.com',
            title: 'TechCrunch',
            relationship: 'industry',
          },
          {
            url: 'https://www.wired.com',
            title: 'Wired',
            relationship: 'industry',
          },
          {
            url: 'https://www.theverge.com',
            title: 'The Verge',
            relationship: 'industry',
          },
        ]}
        authorityLinks={[
          {
            url: 'https://martinfowler.com',
            title: 'Martin Fowler',
            description:
              'Leading resource for software development and architecture',
          },
          {
            url: 'https://www.forbes.com/technology',
            title: 'Forbes Technology',
            description: 'Technology news, insights and expert opinions',
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
        src={kinLogoPattern}
        className="w-full h-full absolute top-0 z-0 left-0 object-cover"
        aria-hidden="true"
        alt=""
      />
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px] z-[1]"></div>

      <div className="lg:container w-full lg:px-6 px-8 relative z-20 mx-auto flex flex-col pt-32 items-center">
        <h1
          className="xl:text-5xl lg:text-4xl text-3xl font-medium text-primary"
          data-aos="fade-down"
        >
          About Us
        </h1>

        <div
          className="flex md:flex-row flex-col w-full xl:px-8 lg:px-4 px-0 mt-16 gap-x-8 items-start"
          data-aos="fade-up"
        >
          <div
            className="flex flex-col md:order-1 order-2 md:w-[53%] w-full items-start"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <h2 className="lg:text-3xl sm:text-2xl text-xl font-semibold text-primary">
              We build digital solutions for you
            </h2>
            <div className="flex pb-8 lg:text-base sm:text-sm text-xs font-normal text-light flex-col xl:gap-y-5 gap-y-3 xl:mt-8 sm:mt-6 mt-4 items-start">
              <p data-aos="fade-right" data-aos-delay="250">
                ReactCube Technologies is a full-stack technology solutions provider
                specializing in web development, mobile applications, and custom software
                solutions. We're passionate about creating exceptional digital products for our
                clients and partners, using cutting-edge technologies and industry best practices.
              </p>
              <p data-aos="fade-right" data-aos-delay="300">
                We embrace challenging technical requirements and complex projects,
                delivering solutions with clean code, best practices, and modern architectures.
                Our track record for delivering high-quality software on time has earned us the
                trust of clients worldwide. Building long-term partnerships based on
                transparency and excellence is at the core of what we do.
              </p>
              <p data-aos="fade-right" data-aos-delay="350">
                ReactCube specializes in Web & Mobile Applications, Custom Software Solutions,
                CRM/HRM Systems, Healthcare Technology, Education Platforms, and Real Estate Solutions.
              </p>
              <p data-aos="fade-right" data-aos-delay="400">
                We believe that well-architected software solutions empower businesses to
                scale efficiently and deliver exceptional user experiences. We understand
                how technology can transform operations and create competitive advantages
                in today's digital-first landscape.
              </p>
              <Button
                handleClick={() => {}}
                title="Get a Consultation"
                data-aos="zoom-in"
                data-aos-delay="450"
              />
            </div>
          </div>

          <div
            className="xl:w-[44%] md:order-2 order-1 md:w-[48%] w-full h-full md:pb-0 pb-44 flex xl:gap-x-4 gap-x-2"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div
              className="w-3/5 md:rounded-[36px] rounded-[30px] bg-primary 2xl:h-[380px] lg:h-[320px] h-[260px] relative xl:-top-5 top-12 2xl:p-4 sm:p-3 p-2 transition-all duration-500 ease-in-out hover:xl:-top-7 hover:top-11"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <img
                src="https://storage.googleapis.com/squidlor/kin/kin/conferences/2.jpg"
                alt="about label"
                className="h-full w-full object-cover rounded-[24px]"
              />
            </div>
            <div
              className="w-1/2 md:rounded-[36px] rounded-[30px] bg-primary 2xl:h-[320px] xl:h-[280px] lg:h-[260px] h-[220px] relative xl:top-32 top-44 2xl:p-4 sm:p-3 p-2 transition-all duration-500 ease-in-out hover:xl:top-[120px] hover:top-[172px]"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <img
                src="https://storage.googleapis.com/squidlor/kin/kin/events/11.jpg"
                alt="about label"
                className="h-full w-full object-cover rounded-[24px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <Timeline />

      {/* Company History Section */}
      <CompanyHistory />

      <div className="w-full flex text-primary relative mt-12 z-20 flex-col items-center">
        <h1
          className="xl:text-5xl lg:text-4xl text-3xl font-semibold"
          data-aos="fade-down"
        >
          We focus <span>on</span>
        </h1>

        <div className="lg:h-[500px] h-[400px] z-20 relative my-12 w-full">
          <TestimonialCard
            title="Web Development"
            className="lg:top-10 md:top-14 top-5 sm:left-72 left-20 lg:hover:top-11 md:hover:top-[60px] hover:top-6"
            data-aos="fade-right"
            data-aos-delay="100"
          />
          <TestimonialCard
            title="Mobile Apps"
            className="md:left-16 left-7 lg:hover:bottom-[236px] hover:bottom-[204px] md:bottom-60 bottom-52"
            data-aos="fade-right"
            data-aos-delay="200"
          />
          <TestimonialCard
            title="Custom Software"
            className="sm:left-3/5 xs:left-40 left-28 top-1/2 hover:mt-1 sm:-translate-y-1/2"
            data-aos="zoom-in"
            data-aos-delay="300"
          />
          <TestimonialCard
            title="Cloud Solutions"
            className="sm:left-2/5 left-12 lg:bottom-12 md:bottom-20 bottom-12 lg:hover:bottom-11 md:hover:bottom-[76px] hover:botom-11"
            data-aos="fade-left"
            data-aos-delay="200"
          />
          <TestimonialCard
            title="AI & ML"
            className="top-20 lg:right-28 right-8 hover:top-[84px]"
            data-aos="fade-left"
            data-aos-delay="100"
          />
          <img
            src={wavyLinseIllustrationBg}
            className="w-full absolute scale-x-110 top-1/2 z-0 -translate-y-1/2 left-0"
            data-aos="fade"
            data-aos-delay="500"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
