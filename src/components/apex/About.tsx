import React, { useEffect, RefObject } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FiCalendar } from 'react-icons/fi';
import { ImStatsDots } from 'react-icons/im';
import { MdOutlineQueryStats } from 'react-icons/md';
import { useScroll } from '../../context/ScrollContext';

interface ScrollContextType {
  aboutRef: RefObject<HTMLDivElement>;
}

const About = () => {
  const { aboutRef } = useScroll();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div
      ref={aboutRef}
      className="mx-auto 2xl:px-32 lg:px-16 md:px-10 px-6 container"
    >
      <h1
        className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-black font-semibold md:relative md:left-8 sm:left-4 left-0"
        data-aos="fade-up"
      >
        About us
      </h1>
      <p
        className="mt-3 font-normal text-black/40 lg:w-1/2 md:w-3/4 w-full md:relative md:left-6 sm:left-3 left-0"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        We specialise in turning opportunities into action, organizing impactful
        events, advising on strategic deals, and driving international trade.
      </p>

      <div className="2xl:h-[630px] lg:h-[560px] w-full mt-6 flex flex-col gap-y-6">
        <div className="flex lg:flex-row flex-col lg:h-[265px] gap-6 items-center">
          <div
            className="lg:h-full h-[250px] group relative w-full bg-[#EFF5FF] flex justify-between items-start lg:px-14 md:px-10 px-6 py-10 rounded-[30px] overflow-hidden"
            data-aos="zoom-in"
          >
            <FiCalendar className="text-[180px] md:text-[220px] lg:text-[240px] transition-all duration-500 ease group-hover:scale-[1.12] text-[#E7F0FF] z-0 absolute top-2 right-6" />
            <div className="flex z-10 h-full w-1/2 flex-col justify-between">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary">
                100+
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl font-medium">
                Successful events worldwide
              </p>
            </div>
            <div className="w-1/2 z-10 flex justify-end">
              <FiCalendar className="text-6xl md:text-7xl lg:text-8xl text-primary" />
            </div>
          </div>

          <div
            className="lg:h-full h-[250px] w-full bg-primary group rounded-[30px] lg:px-14 md:px-10 px-6 py-10 flex flex-row justify-between relative overflow-hidden"
            data-aos="fade-left"
          >
            <MdOutlineQueryStats className="absolute transition-all duration-500 ease group-hover:scale-[1.12] text-[180px] md:text-[220px] lg:text-[240px] right-8 top-3 text-[#052437] z-0" />
            <div className="flex flex-col z-10 justify-between h-full items-start lg:w-4/5 md:w-3/4 w-2/3">
              <h1 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-white">
                Global Tech
              </h1>
              <p className="text-sm md:text-base font-light text-white">
                Empowering businesses with cutting-edge technology solutions for
                seamless global operations, digital transformation, and market
                expansion.
              </p>
            </div>
            <div className="lg:w-1/5 md:w-1/4 w-1/3">
              <MdOutlineQueryStats className="text-3xl md:text-4xl lg:text-5xl text-white" />
            </div>
          </div>
        </div>

        <div
          className="w-full lg:h-[265px] md:h-[300px] h-auto py-10 bg-[#F3F3F3] group rounded-[30px] relative lg:px-14 md:px-10 px-6 flex flex-col md:flex-row items-start justify-between overflow-hidden"
          data-aos="fade-up"
        >
          <ImStatsDots className="text-[180px] md:text-[200px] lg:text-[230px] transition-all duration-500 ease group-hover:scale-[1.10] absolute md:top-1/2 top-10 md:-translate-y-1/2 translate-y-0 right-6 md:right-12 text-[#EDEDED] z-0" />
          <div className="flex flex-col justify-between h-full z-10 lg:w-3/5 md:w-2/3 w-full items-start">
            <div className="flex flex-row gap-x-5 items-center">
              <h1 className="text-3xl md:text-4xl lg:text-[44px] text-primary font-extrabold">
                60+
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-primary font-normal">
                Trade deals
              </p>
            </div>
            <p className="text-black text-sm md:text-base font-normal mt-4 md:mt-0">
              Facilitating strategic international partnerships and business
              expansions across key markets in Asia, Europe, and North America,
              driving substantial growth for our clients through expertly
              negotiated trade agreements.
            </p>
          </div>
          <div className="w-full md:w-1/3 lg:w-2/5 flex z-10 justify-end items-center h-full mt-6 md:mt-0">
            <ImStatsDots className="text-6xl md:text-7xl lg:text-9xl text-primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
