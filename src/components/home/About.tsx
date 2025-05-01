import React, { useEffect, useRef } from 'react';
import Button from '../common/Button';
import { useNavigate } from 'react-router';
import aboutIllustrationBg from '../../assets/illustration/hero-illustration.png';
import kinLogoUrl from '../../assets/kin-logo.png';
import Slider from 'react-slick';
import '../../styles/home.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { videoUrls } from '../../constants/media';
import AOS from 'aos';
import { IoIosArrowRoundUp } from 'react-icons/io';
import { FaQuoteLeft } from 'react-icons/fa';
import 'aos/dist/aos.css';

interface CustomArrowProps {
  onClick?: () => void;
}
const About = () => {
  const navigate = useNavigate();
  const sliderRef = useRef<Slider>(null);

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
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    // customPaging: () => (
    //   <div className="w-2 h-2 absolute md:left-0 left-4  -bottom-2 bg-white rounded-full transition-all duration-300 hover:bg-light"></div>
    // ),
  };

  return (
    <div className="w-full h-full xs:pb-20 pb-10 xl:pt-32 lg:pt-24 md:pt-20 pt-16 relative overflow-hidden">
      <div className="xl:container w-full xl:px-16 lg:px-20 md:px-16 sm:px-12 xs:px-10 px-6 flex md:flex-row flex-col md:gap-x-16 mx-auto">
        <div
          className="flex md:w-[34%] w-full flex-col items-start mt-12"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <h1 className="xl:text-6xl lg:text-5xl sm:text-4xl xs:text-3xl text-2xl font-bold text-primary">
            About Us
          </h1>
          <p className="2xl:text-[18px] xl:text-base text-sm text-black/80 font-light xl:mt-10 mt-6">
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
            handleClick={() => navigate('/about')}
            variant="filled"
            data-aos="fade-up"
            data-aos-delay="300"
          />
        </div>
      </div>

      <div
        className="md:absolute xl:h-[520px] md:h-[460px] h-[380px] md:rounded-tl-[44px] md:mt-0 mt-12 md:rounded-bl-[44px] z-30 bg-primary md:w-3/5 w-full right-0 2xl:top-44 xl:top-40 md:top-24 md:py-10 py-6 lg:pl-16 md:pl-10"
        data-aos="fade-left"
        data-aos-delay="200"
      >
        <h1 className="md:pl-12 pl-8 md:text-xl text-base font-light text-white">
          Events
        </h1>
        <div className="flex slider-container flex-row md:mt-6 mt-4 gap-x-4 xl:h-[340px] h-[300px] w-full">
          <Slider
            ref={sliderRef}
            {...settings}
            className="w-full relative h-full"
          >
            {[...Array(3)].map((_, index: number) => {
              const videoIndex = index % videoUrls.length;
              return (
                <div
                  key={index}
                  className={`xl:h-[340px] h-[300px] md:px-2 px-1 relative`}
                  data-aos="zoom-in"
                  data-aos-delay={300 + index * 100}
                >
                  <div className="bg-white w-full rounded-3xl h-full">
                    <video
                      className="h-full w-full object-fill cursor-pointer rounded-3xl"
                      src={videoUrls[videoIndex]}
                      controls={false}
                      autoPlay
                      muted
                      loop
                      playsInline
                      onEnded={() => {
                        if (sliderRef.current) {
                          sliderRef.current.slickNext();
                        }
                      }}
                    ></video>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>

      <div
        className="quote-container relative md:mt-0 mt-[180px] 2xl:top-[340px] xl:top-[420px] lg:top-[300px] md:top-[280px] z-20 mx-auto 2xl:w-[1360px] xl:w-[1120px] lg:w-[820px] w-full lg:px-0 md:px-12 px-8 transition-all duration-500 hover:scale-[1.02] cursor-default group shadow-lg hover:shadow-xl rounded-xl bg-white/5 backdrop-blur-sm"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        {/* Logo watermark in background with subtle animation */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] overflow-hidden pointer-events-none transition-opacity duration-700 group-hover:opacity-[0.06]">
          <img
            src={kinLogoUrl}
            alt="Kin Logo Watermark"
            className="w-[80%] max-w-[800px] object-contain transform transition-transform duration-1000 ease-in-out hover:rotate-1"
          />
        </div>

        {/* Decorative element */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-primary text-5xl opacity-30">
          <FaQuoteLeft />
        </div>

        <h1 className="text-4xl xl:text-5xl lg:text-4xl xs:text-2xl text-xl font-normal leading-[1.3] md:text-left text-center mx-auto 2xl:indent-52 xl:indent-44 md:indent-32 indent-0 relative backdrop-blur-[1px] p-4 md:p-6 rounded-lg">
          <span className="block mb-4 text-primary/80 text-sm font-light tracking-widest uppercase">
            Our Legacy
          </span>
          "Collective multi-disciplinary experience of
          <span className="text-light font-medium"> more than 50 years</span>,
          delivering quality projects worldwide..."
        </h1>

        {/* Add subtle animation and decorative elements */}
        <div
          className="absolute -bottom-8 right-1/4 w-16 h-1 bg-primary/30 rounded-full"
          data-aos="fade-right"
          data-aos-delay="600"
        ></div>
        <div
          className="absolute -bottom-8 left-1/4 w-16 h-1 bg-light/50 rounded-full"
          data-aos="fade-left"
          data-aos-delay="700"
        ></div>

        {/* Add subtle corner accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/20 rounded-tl-lg"></div>
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/20 rounded-tr-lg"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-light/20 rounded-bl-lg"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-light/20 rounded-br-lg"></div>
      </div>

      <img
        src={aboutIllustrationBg}
        className="w-full relative z-10 -translate-x-1/2 left-1/2 -top-16 max-w-[140%] md:max-w-full"
        data-aos="fade"
        data-aos-delay="500"
        alt="Background Illustration" // Added alt text
      />
    </div>
  );
};

export default About;

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
