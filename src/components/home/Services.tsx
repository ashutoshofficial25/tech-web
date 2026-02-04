import React, { useEffect } from 'react';
import {
  FaCode,
  FaMobile,
  FaLaptopCode,
  FaUsers,
  FaUserTie,
  FaCloud,
  FaRobot,
  FaCubes,
  FaNetworkWired,
  FaPalette,
  FaHospital,
  FaGraduationCap,
  FaHome,
} from 'react-icons/fa';
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
      <FaCode className="sm:text-8xl xs:text-6xl text-5xl text-primary transition-all duration-[600ms] group-hover:scale-120" />
    ),
    title: 'Web Application Development',
    description:
      'Custom web applications built with React, Angular, Vue, and Next.js. Responsive, scalable, and optimized for performance.',
  },
  {
    icon: (
      <FaMobile className="sm:text-8xl xs:text-6xl text-5xl text-primary transition-all duration-[600ms] group-hover:scale-120" />
    ),
    title: 'Mobile App Development',
    description:
      'Native and cross-platform mobile apps for iOS and Android using React Native, Flutter, and native technologies.',
  },
  {
    icon: (
      <FaLaptopCode className="sm:text-8xl text-6xl text-primary transition-all duration-[600ms] group-hover:scale-120" />
    ),
    title: 'Custom Software Solutions',
    description:
      'End-to-end software development tailored to your business needs. From concept to deployment and maintenance.',
  },
  {
    icon: (
      <FaUsers className="sm:text-8xl xs:text-6xl text-5xl text-primary transition-all duration-[600ms] group-hover:scale-120" />
    ),
    title: 'CRM Solutions',
    description:
      'Customer relationship management systems using Salesforce, HubSpot, or custom-built solutions to streamline your sales process.',
  },
  {
    icon: (
      <FaUserTie className="sm:text-8xl xs:text-6xl text-5xl text-primary transition-all duration-[600ms] group-hover:scale-120" />
    ),
    title: 'HRM & ERP Systems',
    description:
      'Human resource management and enterprise resource planning solutions for efficient business operations.',
  },
  {
    icon: (
      <FaCloud className="sm:text-8xl text-6xl text-primary transition-all duration-[600ms] group-hover:scale-120" />
    ),
    title: 'Cloud Services & DevOps',
    description:
      'Cloud migration, infrastructure management, and DevOps automation using AWS, Azure, and Google Cloud Platform.',
  },
  {
    icon: (
      <FaRobot className="sm:text-8xl text-6xl text-primary transition-all duration-[600ms] group-hover:scale-120" />
    ),
    title: 'AI & Machine Learning',
    description:
      'Intelligent solutions including predictive analytics, chatbots, computer vision, and natural language processing.',
  },
  {
    icon: (
      <FaCubes className="sm:text-8xl xs:text-6xl text-5xl text-primary transition-all duration-[600ms] group-hover:scale-120" />
    ),
    title: 'Blockchain & Web3',
    description:
      'Decentralized applications, smart contracts, NFT platforms, and cryptocurrency solutions.',
  },
  {
    icon: (
      <FaNetworkWired className="sm:text-8xl text-6xl text-primary transition-all duration-[600ms] group-hover:scale-120" />
    ),
    title: 'IoT Solutions',
    description:
      'Connected device ecosystems, industrial IoT, and smart automation systems for modern businesses.',
  },
  {
    icon: (
      <FaPalette className="sm:text-8xl xs:text-6xl text-5xl text-primary transition-all duration-[600ms] group-hover:scale-120" />
    ),
    title: 'UI/UX Design',
    description:
      'User-centered design, prototyping, design systems, and brand identity creation for exceptional user experiences.',
  },
  {
    icon: (
      <FaHospital className="sm:text-8xl xs:text-6xl text-5xl text-primary transition-all duration-[600ms] group-hover:scale-120" />
    ),
    title: 'Healthcare Solutions',
    description:
      'HIPAA-compliant healthcare management systems, telemedicine platforms, and patient management solutions.',
  },
  {
    icon: (
      <FaGraduationCap className="sm:text-8xl xs:text-6xl text-5xl text-primary transition-all duration-[600ms] group-hover:scale-120" />
    ),
    title: 'Education Technology',
    description:
      'School and college management systems, e-learning platforms, and student information systems.',
  },
  {
    icon: (
      <FaHome className="sm:text-8xl xs:text-6xl text-5xl text-primary transition-all duration-[600ms] group-hover:scale-120" />
    ),
    title: 'Real Estate Technology',
    description:
      'Property management systems, listing platforms, CRM for real estate, and virtual tour solutions.',
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
