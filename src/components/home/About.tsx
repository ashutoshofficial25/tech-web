import React from "react";
import Button from "../common/Button";
import { useNavigate } from "react-router";
import aboutIllustrationBg from "../../assets/illustration/hero-illustration.png";
import Slider from "react-slick";
import "../../styles/home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { videoUrls } from "../../constants/media";
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
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    customPaging: () => (
      <div className="w-2 h-2 absolute md:left-0 left-4  -bottom-2 bg-white rounded-full transition-all duration-300 hover:bg-light"></div>
    ),
  };

  return (
    <div className="w-full  h-full xs:pb-20 pb-10 xl:pt-32 lg:pt-24 md:pt-20 pt-16 relative">
      <div className="xl:container w-full xl:px-16 lg:px-20 md:px-16 sm:px-12 xs:px-10 px-6  flex md:flex-row flex-col   md:gap-x-16 mx-auto">
        <div className="flex   md:w-[34%] w-full flex-col items-start">
          <h1 className="xl:text-6xl lg:text-5xl sm:text-4xl xs:text-3xl text-2xl font-bold text-primary">
            About Us
          </h1>
          <p className="2xl:text-2xl xl:text-xl text-base text-black/90 font-light lg:mt-10 mt-4">
            Kin Productions India Private Limited is an associate of Kin
            Productions, Singapore. KIN is an integrated experiential agency
            that is passionate about creating the best experiences for our
            clients and partners, using all the tools and expertise that we have
            at our disposal.
          </p>
          <p className="2xl:text-[18px] xl:text-base text-sm text-black/80 font-light xl:mt-10 mt-6">
            We embrace challenging timelines, complex projects which we tend to
            simplify for our clients. Our track record for working quickly,
            efficiently, yet creatively, has been rewarded with the trust of our
            clients. In fact, developing strong relationships with our clients
            is part of our DNA.
          </p>
          <Button
            title="Read More"
            className="sm:px-10 px-6 xl:mt-6 mt-4 relative sm:left-2"
            handleClick={() => navigate("/about")}
            variant="filled"
          />
        </div>
      </div>
      <div className="md:absolute xl:h-[520px] md:h-[460px] h-[420px] md:rounded-tl-[44px] md:mt-0 mt-12 md:rounded-bl-[44px] z-30 bg-primary md:w-3/5 w-full right-0 2xl:top-44 xl:top-40 md:top-24 md:py-10 py-6 lg:pl-16 md:pl-10">
        <h1 className="md:pl-12 pl-8 md:text-xl text-base font-light text-white">
          Events
        </h1>
        <div className="flex slider-container flex-row md:mt-6 mt-4 gap-x-4 xl:h-[340px] h-[300px]  w-full">
          <Slider {...settings} className="w-full relative h-full">
            {[...Array(3)].map((_, index: number) => {
              return (
                <div
                  key={index}
                  className={`xl:h-[340px] h-[300px] md:px-2 px-1 relative`}
                >
                  <div className="bg-white w-full rounded-3xl h-full">
                    <video
                      className="h-full w-full object-fill cursor-pointer rounded-3xl"
                      src={videoUrls[0]}
                      controls={false}
                      autoPlay
                      muted
                      loop
                      playsInline
                    ></video>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <h1 className="2xl:text-6xl xl:text-5xl lg:text-4xl xs:text-2xl text-base absolute left-1/2 -translate-x-1/2 2xl:top-[1080px] xl:top-[1020px] md:top-[840px] xs:top-[1020px] top-[1040px]  z-10  font-normal leading-[1.22] md:text-left text-center  mx-auto 2xl:indent-52 xl:indent-44 md:indent-32 indent-0 2xl:w-[1360px] xl:w-[1120px]  lg:w-[820px]  w-full lg:px-0 md:px-12 px-8">
        “Collective multi-disciplinary experience of
        <span className="text-light">more than 50 years</span>, delivering
        quality projects worldwide...”
      </h1>
      <img
        src={aboutIllustrationBg}
        className="w-full relative z-0 -translate-x-1/2 left-1/2 top-16"
      />
    </div>
  );
};

export default About;
