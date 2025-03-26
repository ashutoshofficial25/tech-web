import React from "react";
import { FaTrophy } from "react-icons/fa";
import { LuImages, LuVideo } from "react-icons/lu";
import { MdSportsFootball } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ServicesCard from "./ServicesCard";
import { IoIosArrowRoundUp } from "react-icons/io";

interface CustomArrowProps {
  onClick?: () => void;
}
const services = [
  {
    icon: (
      <FaTrophy className="text-8xl text-primary transition-all duration-[600ms] group-hover:scale-120" />
    ),
    title: "Major Games & Championshiops",
    description:
      "Lorem ipsum dolar sit amet consectuer vasetches unemos sit met",
  },
  {
    icon: (
      <LuImages className="text-8xl text-primary transition-all duration-[600ms] group-hover:scale-120" />
    ),
    title: "Museum & Galleries build up",
    description:
      "Lorem ipsum dolar sit amet consectuer vasetches unemos sit met",
  },
  {
    icon: (
      <MdSportsFootball className="text-8xl text-primary transition-all duration-[600ms] group-hover:scale-120" />
    ),
    title: "Sports & Life Style Events",
    description:
      "Lorem ipsum dolar sit amet consectuer vasetches unemos sit met",
  },
  {
    icon: (
      <LuVideo className="text-8xl text-primary transition-all duration-[600ms] group-hover:scale-120" />
    ),
    title: "Live Streaming Production",
    description:
      "Lorem ipsum dolar sit amet consectuer vasetches unemos sit met",
  },
  {
    icon: (
      <FaTrophy className="text-8xl text-primary transition-all duration-[600ms] group-hover:scale-120" />
    ),
    title: "Exhibitions & Expos",
    description:
      "Lorem ipsum dolar sit amet consectuer vasetches unemos sit met",
  },
  {
    icon: (
      <LuImages className="text-8xl text-primary transition-all duration-[600ms] group-hover:scale-120" />
    ),
    title: "Brand Activations",
    description:
      "Lorem ipsum dolar sit amet consectuer vasetches unemos sit met",
  },
  {
    icon: (
      <MdSportsFootball className="text-8xl text-primary transition-all duration-[600ms] group-hover:scale-120" />
    ),
    title: "Structural build & Installation",
    description:
      "Lorem ipsum dolar sit amet consectuer vasetches unemos sit met",
  },
  {
    icon: (
      <LuVideo className="text-8xl text-primary transition-all duration-[600ms] group-hover:scale-120" />
    ),
    title: "Event Planning and Management",
    description:
      "Lorem ipsum dolar sit amet consectuer vasetches unemos sit met",
  },

  {
    icon: (
      <FaTrophy className="text-8xl text-primary transition-all duration-[600ms] group-hover:scale-120" />
    ),
    title: "Creative Conceptualization & Development",
    description:
      "Lorem ipsum dolar sit amet consectuer vasetches unemos sit met",
  },
  {
    icon: (
      <LuImages className="text-8xl text-primary transition-all duration-[600ms] group-hover:scale-120" />
    ),
    title: "Audio Visual Systems & Show Presentations",
    description:
      "Lorem ipsum dolar sit amet consectuer vasetches unemos sit met",
  },
  {
    icon: (
      <MdSportsFootball className="text-8xl text-primary transition-all duration-[600ms] group-hover:scale-120" />
    ),
    title: "Venue Sourcing & Management",
    description:
      "Lorem ipsum dolar sit amet consectuer vasetches unemos sit met",
  },
  {
    icon: (
      <LuVideo className="text-8xl text-primary transition-all duration-[600ms] group-hover:scale-120" />
    ),
    title: "Design Production & Build",
    description:
      "Lorem ipsum dolar sit amet consectuer vasetches unemos sit met",
  },
];
const Services = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div className="w-full pt-40">
      <div className="container px-16  mx-auto flex flex-row justify-between items-center">
        <h1 className="text-6xl font-semibold text-primary">Services</h1>
        <p className="text-xl text-light font-normal">
          Lorem ipsum dolar sit amet consectuer vasetches unemos sit met
        </p>
      </div>
      <div className="mt-10 w-full pt-14 h-[460px] bg-primary">
        <div className="mt-2 container   mx-auto w-full slider-container">
          <Slider {...settings}>
            {services?.map(
              (
                {
                  icon,
                  title,
                  description,
                }: {
                  icon: React.JSX.Element;
                  title: string;
                  description: string;
                },
                index: number
              ) => {
                return (
                  <div key={index} className="px-4">
                    <ServicesCard
                      icon={icon}
                      title={title}
                      description={description}
                    />
                  </div>
                );
              }
            )}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Services;

const CustomPrevArrow: React.FC<CustomArrowProps> = ({ onClick }) => {
  return (
    <div
      className="absolute -bottom-12 right-20 z-10 hover:opacity-80 transition-all duration-300 ease active:scale-[0.96] group bg-white p-1 rounded-full cursor-pointer"
      onClick={onClick}
    >
      <IoIosArrowRoundUp className="text-primary text-3xl -rotate-90 group-active:right-[2px] relative" />
    </div>
  );
};

const CustomNextArrow: React.FC<CustomArrowProps> = ({ onClick }) => {
  return (
    <div
      className="absolute -bottom-12 right-4 z-10 hover:opacity-80 transition-all duration-300 ease active:scale-[0.96] group bg-white  p-1 rounded-full cursor-pointer"
      onClick={onClick}
    >
      <IoIosArrowRoundUp className="text-primary text-3xl rotate-90 group-active:left-[2px] relative" />
    </div>
  );
};
