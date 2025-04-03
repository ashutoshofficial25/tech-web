import React, { useEffect } from "react";
import { IoIosArrowRoundUp } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";

const clientelesInfo = [
  {
    title: "Who We Serve",
    desc: "Our clientele includes businesses, brands, entrepreneurs, and individuals seeking expert event planning, branding, conferences, and exhibition management. We work with corporate organizations, startups, and professionals to bring their vision to life with creativity and precision.",
  },
  {
    title: "Our Commitment",
    desc: "We are dedicated to delivering exceptional experiences, from high-profile conferences to bespoke brand activations. With a focus on innovation, seamless execution, and attention to detail, we ensure that every event and branding project leaves a lasting impact.",
  },
];

const Clienteles = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div
      className="xl:container w-full xl:px-16 lg:px-20 md:px-16 sm:px-12 xs:px-10 px-6 mx-auto pb-10 xl:pt-40 lg:pt-32 md:pt-28 xs:pt-20 pt-16"
      data-aos="fade-up"
    >
      <h1
        className="xl:text-6xl lg:text-5xl sm:text-4xl xs:text-3xl text-2xl font-bold text-primary"
        data-aos="fade-right"
        data-aos-delay="100"
      >
        Clienteles
      </h1>
      <div
        className="w-full lg:mt-8 md:mt-6 mt-4 flex xl:gap-x-24 lg:gap-x-20 md:gap-x-16 sm:gap-x-10 gap-x-6 flex-row justify-between items-start"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {clientelesInfo?.map(
          (item: { title: string; desc: string }, index: number) => {
            return (
              <CustomInfoCard
                key={index}
                title={item.title}
                desc={item.desc}
                index={index}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default Clienteles;

const CustomInfoCard = ({
  title,
  desc,
  index,
}: {
  title: string;
  desc: string;
  index: number;
}) => {
  return (
    <div
      className="w-full flex flex-col items-start"
      data-aos="fade-up"
      data-aos-delay={300 + index * 100}
    >
      <div className="flex flex-row gap-x-2 items-center">
        <div className="xl:h-6 md:h-5 h-4 xl:w-6 md:w-5 w-4 flex items-center justify-center rounded-sm bg-primary text-white">
          <IoIosArrowRoundUp className="rotate-45 xl:text-xl md:text-base text-sm" />
        </div>
        <h1 className="xl:text-3xl lg:text-2xl md:text-xl text-base font-medium text-primary">
          {title}
        </h1>
      </div>
      <p className="font-normal lg:mt-5 md:mt-3 mt-2 text-light md:text-base sm:text-sm text-xs">
        {desc}
      </p>
    </div>
  );
};
