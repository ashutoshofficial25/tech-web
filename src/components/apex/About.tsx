import React from "react";
import { FiCalendar } from "react-icons/fi";
import { ImStatsDots } from "react-icons/im";
import { MdOutlineQueryStats } from "react-icons/md";
import { useScroll } from "../../context/ScrollContext";
const About = () => {
  const { aboutRef } = useScroll();
  return (
    <div ref={aboutRef} className=" mx-auto 2xl:px-32 px-16 container">
      <h1 className="text-6xl text-black font-semibold relative left-8">
        About us
      </h1>
      <p className="mt-3 font-normal text-black/40 w-1/2 relative left-6">
        We specialise in turning opportunities into action organising impactful
        events, advising on strategic deals, and driving international trade.
      </p>
      <div className="2xl:h-[630px] h-[560px] w-full mt-6  flex flex-col gap-y-6">
        <div className="flex 2xl:h-[300px] h-[265px] flex-row gap-x-6 items-center">
          <div className="h-full group relative w-full bg-[#EFF5FF] flex justify-between items-start px-14 py-10 rounded-[30px] ">
            <FiCalendar className="text-[240px] transition-all duration-500 ease  group-hover:scale-[1.12] text-[#E7F0FF] z-0 absolute top-2 right-6" />
            <div className="flex z-10 h-full w-1/2 flex-col justify-between">
              <h1 className="text-7xl font-extrabold text-primary">100+</h1>
              <p className=" text-3xl font-medium">
                Successful events worldwide
              </p>
            </div>
            <div className="w-1/2 z-10 flex justify-end">
              <FiCalendar className="text-8xl text-primary" />
            </div>
          </div>
          <div className="h-full w-full bg-primary group rounded-[30px] px-14 py-10 flex flex-row  justify-between relative">
            <MdOutlineQueryStats className="absolute transition-all duration-500 ease  group-hover:scale-[1.12]  text-[240px] right-8 top-3 text-[#052437] z-0" />
            <div className="flex flex-col z-10 justify-between h-full items-start w-4/5">
              <h1 className="text-[44px] font-bold text-white">Global Tech</h1>
              <p className="text-base font-light text-white">
                Empowering businesses with cutting-edge technology solutions for
                seamless global operations, digital transformation, and market
                expansion.
              </p>
            </div>
            <div className="w-1/5">
              <MdOutlineQueryStats className="text-5xl text-white" />
            </div>
          </div>
        </div>
        <div className="w-full 2xl:h-[300px] group h-[265px] bg-[#F3F3F3] rounded-[30px] relative px-14 py-10 flex flex-row items-start justify-between">
          <ImStatsDots className="text-[230px] transition-all duration-500 ease  group-hover:scale-[1.10] absolute top-1/2 -translate-y-1/2 right-12 text-[#EDEDED] z-0 " />
          <div className="flex flex-col justify-between h-full z-10 w-3/5 items-start">
            <div className="flex flex-row gap-x-5 items-center">
              <h1 className="text-primary font-extrabold text-[44px]">60+</h1>
              <p className="text-primary font-normal text-3xl">Trade deals</p>
            </div>
            <p className="text-black text-base font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor .
            </p>
          </div>
          <div className="w-2/5 flex z-10 justify-end items-center h-full">
            <ImStatsDots className="text-9xl text-primary " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
