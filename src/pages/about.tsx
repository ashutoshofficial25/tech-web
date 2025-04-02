import React from "react";
import aboutIllustrationBg from "../assets/illustration/hero-illustration.png";
import wavyLinseIllustrationBg from "../assets/illustration/wavylines.png";
import Button from "../components/common/Button";
import TestimonialCard from "../components/aboutUs/TestimonialCard";

const AboutUs = () => {
  return (
    <div className="min-h-screen  overflow-x-hidden relative w-full">
      <img
        src={aboutIllustrationBg}
        className="w-full absolute top-56 z-0 left-0"
      />
      <div className="lg:container  w-full lg:px-6 px-8 relative z-20 mx-auto flex  flex-col pt-32  items-center">
        <h1 className="xl:text-5xl lg:text-4xl text-3xl  font-medium text-primary">
          About Us
        </h1>
        <div className="flex md:flex-row flex-col w-full xl:px-8 lg:px-4 px-0 mt-16 gap-x-8 items-start">
          <div className="flex flex-col md:order-1 order-2 md:w-[53%] w-full items-start">
            <h2 className="lg:text-3xl sm:text-2xl text-xl font-semibold text-primary">
              We craft memories for you
            </h2>
            <div className="flex pb-8 lg:text-base  sm:text-sm text-xs font-normal text-light flex-col xl:gap-y-5 gap-y-3 xl:mt-8 sm:mt-6 mt-4 items-start">
              <p className="">
                Kin Productions India Private Limited is an associate of Kin
                Productions, Singapore. KIN is an integrated experiential agency
                that is passionate about creating the best experiences for our
                clients and partners, using all the tools and expertise that we
                have at our disposal.
              </p>
              <p>
                We embrace challenging timelines, complex projects which we tend
                to simplify for our clients. Our track record for working
                quickly, efficiently, yet creatively, has been rewarded with the
                trust of our clients. In fact, developing strong relationships
                with our clients is part of our DNA..
              </p>
              <p>
                Kin primely focuses on Mega Exhibitions, Large scale
                Events/Product launches, Live Events and Branding.
              </p>
              <p>
                We implicitly believe that well-crafted experiences in relation
                to our client's brands allow their consumers to form an
                emotional connection that will enhance brand loyalty. We are
                deeply aware of how experience creations can be shaped to the
                satisfaction of increasingly tech-savvy and demanding
                stakeholders in the new normal.
              </p>
              <Button handleClick={() => {}} title="Book an Event" />
            </div>
          </div>
          <div className="xl:w-[44%] md:order-2 order-1 md:w-[48%] w-full h-full md:pb-0 pb-44 flex xl:gap-x-4 gap-x-2">
            <div className="w-3/5 md:rounded-[36px] rounded-[30px] bg-primary 2xl:h-[380px] lg:h-[320px] h-[260px] relative xl:-top-5 top-12 2xl:p-4 sm:p-3 p-2 transition-all duration-500 ease-in-out hover:xl:-top-7 hover:top-11">
              <img
                src="https://storage.googleapis.com/squidlor/kin/kin/conferences/2.jpg"
                alt="about label"
                className="h-full w-full object-cover rounded-[24px]"
              />
            </div>
            <div className="w-1/2  md:rounded-[36px] rounded-[30px] bg-primary 2xl:h-[320px] xl:h-[280px] lg:h-[260px] h-[220px] relative xl:top-32 top-44 2xl:p-4 sm:p-3 p-2 transition-all duration-500 ease-in-out hover:xl:top-[120px] hover:top-[172px]">
              <img
                src="https://storage.googleapis.com/squidlor/kin/kin/events/11.jpg"
                alt="about label"
                className="h-full w-full object-cover rounded-[24px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex text-primary relative mt-12 z-20 flex-col items-center">
        <h1 className="xl:text-5xl lg:text-4xl text-3xl font-semibold">
          We focuses <span>on</span>
        </h1>
        <div className="lg:h-[500px] h-[400px] z-20 relative my-12 w-full">
          <TestimonialCard
            title="Live Events"
            className="lg:top-10 md:top-14 top-5 sm:left-72 left-20 lg:hover:top-11 md:hover:top-[60px] hover:top-6"
          />
          <TestimonialCard
            title="Large scale Events"
            className="md:left-16 left-7 lg:hover:bottom-[236px] hover:bottom-[204px] md:bottom-60 bottom-52 "
          />
          <TestimonialCard
            title="Mega Exhibitions"
            className="sm:left-3/5  xs:left-40 left-28  top-1/2 hover:mt-1 sm:-translate-y-1/2"
          />
          <TestimonialCard
            title="Large scale Products"
            className="sm:left-2/5 left-12 lg:bottom-12 md:bottom-20 bottom-12 lg:hover:bottom-11 md:hover:bottom-[76px] hover:botom-11"
          />
          <TestimonialCard
            title="Branding"
            className=" top-20 lg:right-28 right-8 hover:top-[84px]"
          />
          <img
            src={wavyLinseIllustrationBg}
            className="w-full absolute scale-x-110 top-1/2 z-0 -translate-y-1/2 left-0"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
