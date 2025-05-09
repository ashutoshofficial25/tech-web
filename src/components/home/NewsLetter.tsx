import React, { useState, useEffect } from 'react';
import newsletterIllustrationUrl from '../../assets/illustration/newsletter-illustration.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const NewsLetter = () => {
  const [email, setEmail] = useState<string>('');

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const handleSubscribe = () => {
    if (!email) {
      console.error('Please enter email address!');
    }
  };

  return (
    <div
      className="w-full relative xl:py-32 lg:py-24 sm:py-20 py-16 mx-auto"
      data-aos="fade-up"
    >
      <img
        src={newsletterIllustrationUrl}
        alt="illustration"
        className="absolute w-full bottom-0 right-0 z-0"
        data-aos="fade"
        data-aos-delay="400"
      />
      <div className="flex z-10 relative container mx-auto flex-col items-center">
        <h2
          className="text-black md:text-xl sm:text-base xs:text-sm text-xs"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          Get in touch with us
        </h2>

        <h1
          className="text-center xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-2xl text-xl font-medium leading-[1.18] md:w-1/2 w-3/5 mt-4"
          data-aos="zoom-in"
          data-aos-delay="150"
        >
          We're Excited to Hear From You!
        </h1>

        <p
          className="text-center sm:text-base xs:text-sm text-xs text-light font-normal mt-5 sm:w-96 xs:w-72 w-64"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Have a question, a brilliant idea, or just want to stay in the loop?
          Share your email and we will get back to you as soon as possible.
        </p>

        <div
          className="mt-6 flex items-center lg:gap-x-4 sm:gap-x-2 xs:gap-x-1.5 gap-x-1 justify-center"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="xs:placeholder:text-xs placeholder:text-[10px] placeholder:text-light sm:w-96 xs:w-72 w-44 outline-none rounded-lg text-light sm:px-5 px-4 sm:text-base xs:text-sm text-xs sm:py-2 py-[5px] bg-[#EBEBEB] font-normal"
          />
          <button
            onClick={handleSubscribe}
            className="sm:px-8 xs:px-6 px-4 sm:py-2.5 xs:py-[7px] py-1.5 font-normal hover:opacity-90 active:scale-[0.98] transition-all duration-300 ease sm:text-sm xs:text-xs text-[10px] border-none text-white rounded-lg cursor-pointer bg-primary outline-none"
          >
            Keep Me Updated
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
