import React, { useEffect } from "react";
import { IoLocationSharp } from "react-icons/io5";
import MapContainer from "./MapContainer";
import AOS from "aos";
import "aos/dist/aos.css";

const AddressWrapper = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <div
        className="xl:container w-full sm:px-16 xs:px-10 px-6 mx-auto lg:pt-20 md:pt-16 pt-12"
        data-aos="fade-up"
      >
        <h2
          className="lg:text-xl sm:text-base text-sm text-black/40"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          Our Location
        </h2>
        <div
          className="flex flex-row items-start justify-between"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <div
            className="flex flex-col items-start"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <h1 className="xl:text-4xl lg:text-3xl sm:text-2xl text-xl font-medium text-primary">
              Connecting Near and Far
            </h1>
            <p className="mt-2 xl:w-1/2 w-3/5 font-light lg:text-base text-sm text-light">
              Bringing together diverse communities from all corners of the
              world, fostering meaningful connections, and creating a global
              network that transcends borders, cultures, and distances
            </p>
          </div>
          <div
            className="flex lg:w-fit w-full flex-row md:gap-x-3 sm:gap-x-2 gap-x-1.5 items-center"
            data-aos="fade-left"
            data-aos-delay="250"
          >
            <IoLocationSharp className="text-secondary lg:text-4xl md:text-3xl text-2xl" />
            <p className="font-light lg:text-base md:text-sm sm:text-xs text-[11px]">
              D-148, SECTOR-61, NOIDA-201301(U.P.), INDIA
            </p>
          </div>
        </div>
      </div>
      <div
        className="md:mt-12 sm:mt-8 mt-6"
        data-aos="zoom-in"
        data-aos-delay="300"
      >
        <MapContainer />
      </div>
    </>
  );
};

export default AddressWrapper;
