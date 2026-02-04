import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/home.css';
import {
  FaReact,
  FaNodeJs,
  FaAngular,
  FaVuejs,
  FaPython,
  FaJava,
  FaDocker,
  FaAws,
  FaGitAlt,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiJavascript,
  SiFlutter,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiKubernetes,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiDjango,
  SiGooglecloud,
  SiRedis,
  SiNestjs,
  SiGraphql,
  SiGithub,
  SiFigma,
} from 'react-icons/si';

// Tech stack data with icons and names
const techStack = [
  { icon: <FaReact className="text-[#61DAFB]" />, name: 'React' },
  { icon: <FaNodeJs className="text-[#339933]" />, name: 'Node.js' },
  { icon: <FaAngular className="text-[#DD0031]" />, name: 'Angular' },
  { icon: <FaVuejs className="text-[#4FC08D]" />, name: 'Vue.js' },
  { icon: <SiNextdotjs className="text-[#000000]" />, name: 'Next.js' },
  { icon: <SiTypescript className="text-[#3178C6]" />, name: 'TypeScript' },
  { icon: <SiJavascript className="text-[#F7DF1E]" />, name: 'JavaScript' },
  { icon: <FaPython className="text-[#3776AB]" />, name: 'Python' },
  { icon: <SiDjango className="text-[#092E20]" />, name: 'Django' },
  { icon: <FaJava className="text-[#007396]" />, name: 'Java' },
  { icon: <SiFlutter className="text-[#02569B]" />, name: 'Flutter' },
  { icon: <SiExpress className="text-[#000000]" />, name: 'Express' },
  { icon: <SiNestjs className="text-[#E0234E]" />, name: 'NestJS' },
  { icon: <SiGraphql className="text-[#E10098]" />, name: 'GraphQL' },
  { icon: <SiMongodb className="text-[#47A248]" />, name: 'MongoDB' },
  { icon: <SiPostgresql className="text-[#4169E1]" />, name: 'PostgreSQL' },
  { icon: <SiMysql className="text-[#4479A1]" />, name: 'MySQL' },
  { icon: <SiRedis className="text-[#DC382D]" />, name: 'Redis' },
  { icon: <FaAws className="text-[#FF9900]" />, name: 'AWS' },
  { icon: <SiGooglecloud className="text-[#4285F4]" />, name: 'Google Cloud' },
  { icon: <FaDocker className="text-[#2496ED]" />, name: 'Docker' },
  { icon: <SiKubernetes className="text-[#326CE5]" />, name: 'Kubernetes' },
  { icon: <SiTailwindcss className="text-[#06B6D4]" />, name: 'Tailwind CSS' },
  { icon: <FaGitAlt className="text-[#F05032]" />, name: 'Git' },
  { icon: <SiGithub className="text-[#181717]" />, name: 'GitHub' },
  { icon: <SiFigma className="text-[#F24E1E]" />, name: 'Figma' },
];

const ClientsSlider = ({ className }: { className?: string }) => {
  const settings = {
    infinite: true,
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div
      className={`${className} w-full flex flex-col items-center overflow-hidden`}
    >
      <p className="md:text-xl sm:text-base text-sm text-light font-normal mb-6">
        Powered by{' '}
        <span className="font-semibold text-primary">
          industry-leading technologies
        </span>
      </p>
      <div className="w-full slider-container bg-gray-50 py-10 rounded-lg border border-gray-200">
        <Slider {...settings}>
          {techStack.map((tech, index) => (
            <div
              className="!flex h-28 px-4 md:px-6 !items-center !justify-center flex-col"
              key={index}
            >
              <div className="text-5xl md:text-6xl mb-2 transition-transform hover:scale-110 duration-300">
                {tech.icon}
              </div>
              <p className="text-xs md:text-sm text-gray-600 font-medium text-center">
                {tech.name}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ClientsSlider;
