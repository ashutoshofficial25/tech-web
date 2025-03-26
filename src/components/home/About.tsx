import React from "react";
import Button from "../common/Button";
import { useNavigate } from "react-router";
import aboutIllustrationBg from "../../assets/illustration/hero-illustration.png";
import Slider from "react-slick";
import "../../styles/home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const About = () => {
  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    customPaging: () => (
      <div className="w-2 h-2 absolute left-0 -bottom-2 bg-white rounded-full transition-all duration-300 hover:bg-light"></div>
    ),
  };
  return (
    <div className="w-full  min-h-screen pt-32 relative">
      <div className="container px-16  flex flex-row gap-x-16 mx-auto">
        <div className="flex  w-[34%] flex-col items-start">
          <h1 className="text-6xl font-semibold text-primary">About Us</h1>
          <p className="text-xl text-black/90 font-light mt-10">
            Kin Productions India Private Limited is an associate of Kin
            Productions, Singapore. KIN is an integrated experiential agency
            that is passionate about creating the best experiences for our
            clients and partners, using all the tools and expertise that we have
            at our disposal.
          </p>
          <p className="text-base text-black/80 font-light mt-10">
            We embrace challenging timelines, complex projects which we tend to
            simplify for our clients. Our track record for working quickly,
            efficiently, yet creatively, has been rewarded with the trust of our
            clients. In fact, developing strong relationships with our clients
            is part of our DNA.
          </p>
          <Button
            title="Read More"
            className="px-10 mt-6 relative left-2"
            handleClick={() => navigate("/about")}
            variant="filled"
          />
        </div>
      </div>
      <div className="absolute h-[520px] rounded-tl-[44px] rounded-bl-[44px] z-30 bg-primary w-3/5 right-0 top-44 py-10 pl-16">
        <h1 className="pl-12 text-xl font-light text-white">Events</h1>
        <div className="flex slider-container flex-row mt-6 gap-x-4 h-[340px]  w-full">
          <Slider {...settings} className="w-full relative h-full">
            {[...Array(3)].map((_, index: number) => {
              return (
                <div key={index} className={`h-[340px] px-2 relative`}>
                  <div className="bg-white w-full rounded-3xl h-full"></div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <h1 className="text-5xl  absolute left-1/2 -translate-x-1/2 bottom-12 z-10  font-normal leading-[1.22] container mx-auto indent-52 w-[70%] ">
        “Collective multi-disciplinary experience of
        <span className="text-light">more than 50 years</span>, delivering
        quality projects worldwide...”
      </h1>
      <img src={aboutIllustrationBg} className="w-full relative z-0 top-16" />
    </div>
  );
};

export default About;
