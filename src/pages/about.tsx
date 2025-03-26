import React from "react";
import aboutIllustrationBg from "../assets/illustration/hero-illustration.png";
import wavyLinseIllustrationBg from "../assets/illustration/wavylines.png";
import Button from "../components/common/Button";
import TestimonialCard from "../components/aboutUs/TestimonialCard";

const AboutUs = () => {
  return (
    <div className="min-h-screen relative w-full">
      <img
        src={aboutIllustrationBg}
        className="w-full absolute top-56 z-0 left-0"
      />
      <div className="container relative z-20 mx-auto flex pt-32 flex-col items-center">
        <h1 className="text-5xl font-medium text-primary">About Us</h1>
        <div className="flex w-full px-8 mt-16 gap-x-8 items-start">
          <div className="flex flex-col w-[53%] items-start">
            <h2 className="text-3xl font-medium text-primary">
              We craft memories for you
            </h2>
            <div className="flex font-normal text-light flex-col gap-y-5 mt-8 items-start">
              <p>
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
          <div className="w-[44%] h-full flex gap-x-4">
            <div className="w-3/5 rounded-[36px] bg-primary 2xl:h-[380px] h-[320px] relative -top-5 p-5"></div>
            <div className="w-1/2 rounded-[36px] bg-primary 2xl:h-[320px] h-[280px] relative top-32 p-4"></div>
          </div>
        </div>
      </div>
      <div className="w-full flex text-primary relative mt-12 z-20 flex-col items-center">
        <h1 className="text-5xl font-semibold">
          We focuses <span>on</span>
        </h1>
        <div className="h-[500px] z-20 relative my-12 w-full">
          <TestimonialCard
            title="Live Events"
            className="top-10 left-72 hover:top-11"
          />
          <TestimonialCard
            title="Large scale Events"
            className="left-16 hover:bottom-[236px] bottom-60"
          />
          <TestimonialCard
            title="Mega Exhibitions"
            className="left-3/5 top-1/2 hover:mt-1 -translate-y-1/2"
          />
          <TestimonialCard
            title="Large scale Products"
            className="left-2/5 bottom-12 hover:bottom-11"
          />
          <TestimonialCard
            title="Branding"
            className=" top-20 right-28 hover:top-[84px]"
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
