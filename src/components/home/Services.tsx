import React, { useEffect } from 'react';
import {
  FaTrophy,
  FaBuilding,
  FaTools,
  FaChartLine,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import { LuImages, LuVideo, LuMapPin } from 'react-icons/lu';
import { MdSportsFootball, MdEvent, MdDesignServices } from 'react-icons/md';
import { TbBuildingMinus, TbBrandCampaignmonitor } from 'react-icons/tb';
import { BiSolidMegaphone } from 'react-icons/bi';
import { PiSpeakerHighBold } from 'react-icons/pi';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ServicesCard from './ServicesCard';
import { IoIosArrowRoundUp } from 'react-icons/io';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface CustomArrowProps {
  onClick?: () => void;
}
const services = [
  {
    icon: (
      <TbBuildingMinus className="sm:text-8xl  xs:text-6xl text-5xl  text-primary transition-all duration-[600ms] group-hover:scale-120" />
    ),
    title: 'Museum & Galleries build up',
    description:
      'Expert design and construction of engaging exhibition spaces that showcase collections and artworks with maximum impact and visitor engagement.',
  },
  {
    icon: (
      <BiSolidMegaphone className="sm:text-8xl  text-6xl   text-primary transition-all duration-[600ms] group-hover:scale-120" />
    ),
    title: 'Brand Activations',
    description:
      'Strategic and creative brand activation campaigns that create meaningful connections between brands and consumers through memorable experiences.',
  },
  {
    icon: (
      <TbBrandCampaignmonitor className="sm:text-8xl  text-6xl  text-primary transition-all duration-[600ms] group-hover:scale-120" />
    ),
    title: 'Exhibitions & Expos',
    description:
      'End-to-end management of trade shows and exhibitions that maximize brand visibility and generate valuable business connections and leads.',
  },
  {
    icon: (
      <FaTrophy className="sm:text-8xl  xs:text-6xl text-5xl  text-primary transition-all duration-[600ms] group-hover:scale-120" />
    ),
    title: 'Major Games & Championships',
    description:
      'Comprehensive management of large-scale sporting events, from planning to execution, ensuring memorable experiences for participants and spectators alike.',
  },
  {
    icon: (
      <MdSportsFootball className="sm:text-8xl  xs:text-6xl text-5xl  text-primary transition-all duration-[600ms] group-hover:scale-120" />
    ),
    title: 'Sports & Life Style Events',
    description:
      'Creating dynamic lifestyle and sporting events that connect brands with their target audiences through authentic and immersive experiences.',
  },
  // {
  //   icon: (
  //     <LuVideo className="sm:text-8xl  text-6xl  text-primary transition-all duration-[600ms] group-hover:scale-120" />
  //   ),
  //   title: 'Live Streaming Production',
  //   description:
  //     'Professional live streaming services with high-quality production values, ensuring your event reaches global audiences with crystal-clear audio and video.',
  // },

  {
    icon: (
      <FaBuilding className="sm:text-8xl  text-6xl  text-primary transition-all duration-[600ms] group-hover:scale-120" />
    ),
    title: 'Structural build & Installation',
    description:
      'Custom design and construction of event structures, stands, and installations that bring your brand vision to life with precision and creativity.',
  },
  {
    icon: (
      <MdEvent className="sm:text-8xl text-6xl   text-primary transition-all duration-[600ms] group-hover:scale-120" />
    ),
    title: 'Event Planning and Management',
    description:
      'Comprehensive event planning services covering everything from concept development to on-site management, ensuring flawless execution of your vision.',
  },

  {
    icon: (
      <FaChartLine className="xl:sm:text-8xl sm:text-7xl text-6xl   text-primary transition-all duration-[600ms] group-hover:scale-120" />
    ),
    title: 'Creative Conceptualization & Development',
    description:
      'Innovative concept creation that transforms your brand objectives into compelling event experiences that resonate with your target audience.',
  },
  {
    icon: (
      <PiSpeakerHighBold className="xl:sm:text-8xl sm:text-7xl text-6xl  text-primary transition-all duration-[600ms] group-hover:scale-120" />
    ),
    title: 'Audio Visual Systems & Show Presentations',
    description:
      'State-of-the-art audio-visual solutions that enhance your event with stunning visuals, perfect sound, and seamless technical execution.',
  },
  {
    icon: (
      <FaMapMarkerAlt className="sm:text-8xl  xs:text-6xl text-5xl  text-primary transition-all duration-[600ms] group-hover:scale-120" />
    ),
    title: 'Venue Sourcing & Management',
    description:
      'Expert venue selection and management services to find and optimize the perfect location that aligns with your event objectives and budget.',
  },
  {
    icon: (
      <MdDesignServices className="sm:text-8xl  xs:text-6xl text-5xl  text-primary transition-all duration-[600ms] group-hover:scale-120" />
    ),
    title: 'Design Production & Build',
    description:
      'End-to-end design and production services that transform creative concepts into tangible, impactful physical environments for your events.',
  },
];
const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: 'linear',
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
      <div
        className="xl:container w-full xl:px-16 lg:px-20 md:px-16 sm:px-12 xs:px-10 px-6 mx-auto flex flex-row justify-between items-center"
        data-aos="fade-down"
      >
        <h1 className="xl:text-6xl lg:text-5xl sm:text-4xl xs:text-3xl text-2xl font-bold text-primary">
          Services
        </h1>
      </div>

      <div
        className="mt-10 w-full xl:pt-14 pt-10 xl:h-[460px] md:h-[400px] sm:h-[380px] h-[340px] bg-primary"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="mt-2 xl:container mx-auto w-full slider-container">
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
                  <div
                    key={index}
                    className="xl:px-4 sm:px-2 px-1"
                    data-aos="zoom-in"
                    data-aos-delay={150 + index * 50}
                  >
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
      data-aos="fade-left"
      data-aos-delay="300"
    >
      <IoIosArrowRoundUp className="text-primary text-3xl -rotate-90 group-active:right-[2px] relative" />
    </div>
  );
};

const CustomNextArrow: React.FC<CustomArrowProps> = ({ onClick }) => {
  return (
    <div
      className="absolute -bottom-12 right-4 z-10 hover:opacity-80 transition-all duration-300 ease active:scale-[0.96] group bg-white p-1 rounded-full cursor-pointer"
      onClick={onClick}
      data-aos="fade-right"
      data-aos-delay="300"
    >
      <IoIosArrowRoundUp className="text-primary text-3xl rotate-90 group-active:left-[2px] relative" />
    </div>
  );
};
