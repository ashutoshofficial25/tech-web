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
      <FaTrophy className="sm:text-8xl  xs:text-6xl text-5xl  text-primary transition-all duration-[600ms] group-hover:scale-120" />
    ),
    title: "Major Games & Championshiops",
    description:
      "Lorem ipsum dolar sit amet consectuer vasetches unemos sit met",
  },
  {
    icon: (
      <LuImages className="sm:text-8xl  xs:text-6xl text-5xl  text-primary transition-all duration-[600ms] group-hover:scale-120" />
    ),
    title: "Museum & Galleries build up",
    description:
      "Lorem ipsum dolar sit amet consectuer vasetches unemos sit met",
  },
  {
    icon: (
      <MdSportsFootball className="sm:text-8xl  xs:text-6xl text-5xl  text-primary transition-all duration-[600ms] group-hover:scale-120" />
    ),
    title: "Sports & Life Style Events",
    description:
      "Lorem ipsum dolar sit amet consectuer vasetches unemos sit met",
  },
  {
    icon: (
      <LuVideo className="sm:text-8xl  text-6xl  text-primary transition-all duration-[600ms] group-hover:scale-120" />
    ),
    title: "Live Streaming Production",
    description:
      "Lorem ipsum dolar sit amet consectuer vasetches unemos sit met",
  },
  {
    icon: (
      <FaTrophy className="sm:text-8xl  text-6xl  text-primary transition-all duration-[600ms] group-hover:scale-120" />
    ),
    title: "Exhibitions & Expos",
    description:
      "Lorem ipsum dolar sit amet consectuer vasetches unemos sit met",
  },
  {
    icon: (
      <LuImages className="sm:text-8xl  text-6xl   text-primary transition-all duration-[600ms] group-hover:scale-120" />
    ),
    title: "Brand Activations",
    description:
      "Lorem ipsum dolar sit amet consectuer vasetches unemos sit met",
  },
  {
    icon: (
      <MdSportsFootball className="sm:text-8xl  text-6xl  text-primary transition-all duration-[600ms] group-hover:scale-120" />
    ),
    title: "Structural build & Installation",
    description:
      "Lorem ipsum dolar sit amet consectuer vasetches unemos sit met",
  },
  {
    icon: (
      <LuVideo className="sm:text-8xl text-6xl   text-primary transition-all duration-[600ms] group-hover:scale-120" />
    ),
    title: "Event Planning and Management",
    description:
      "Lorem ipsum dolar sit amet consectuer vasetches unemos sit met",
  },

  {
    icon: (
      <FaTrophy className="xl:sm:text-8xl sm:text-7xl text-6xl   text-primary transition-all duration-[600ms] group-hover:scale-120" />
    ),
    title: "Creative Conceptualization & Development",
    description:
      "Lorem ipsum dolar sit amet consectuer vasetches unemos sit met",
  },
  {
    icon: (
      <LuImages className="xl:sm:text-8xl sm:text-7xl text-6xl  text-primary transition-all duration-[600ms] group-hover:scale-120" />
    ),
    title: "Audio Visual Systems & Show Presentations",
    description:
      "Lorem ipsum dolar sit amet consectuer vasetches unemos sit met",
  },
  {
    icon: (
      <MdSportsFootball className="sm:text-8xl  xs:text-6xl text-5xl  text-primary transition-all duration-[600ms] group-hover:scale-120" />
    ),
    title: "Venue Sourcing & Management",
    description:
      "Lorem ipsum dolar sit amet consectuer vasetches unemos sit met",
  },
  {
    icon: (
      <LuVideo className="sm:text-8xl  xs:text-6xl text-5xl  text-primary transition-all duration-[600ms] group-hover:scale-120" />
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
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div className="w-full 2xl:pt-40 pt-28">
      <div className="xl:container w-full xl:px-16 lg:px-20 md:px-16 sm:px-12 xs:px-10 px-6  mx-auto flex flex-row justify-between items-center">
        <h1 className="xl:text-6xl lg:text-5xl sm:text-4xl xs:text-3xl text-2xl font-bold text-primary">
          Services
        </h1>
      </div>
      <div className="mt-10 w-full xl:pt-14 pt-10 xl:h-[460px] md:h-[400px] sm:h-[380px] h-[340px] bg-primary">
        <div className="mt-2 xl:container   mx-auto w-full slider-container">
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
                  <div key={index} className="xl:px-4 sm:px-2 px-1">
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
