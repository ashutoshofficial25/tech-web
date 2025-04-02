import React from "react";
import { FaStar } from "react-icons/fa";
import Button from "../common/Button";
import ClientsSlider from "./ClientsSlider";
import GalleryContainer from "./GalleryContainer";

const Hero = () => {
  return (
    <div className="h-full  w-full pt-36">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex flex-row gap-x-2">
          <div className="xs:h-6 h-5 xs:w-6 w-5 flex items-center justify-center rounded-sm bg-primary">
            <FaStar className="text-white xs:text-xs text-[10px]" />
          </div>
          <h1 className="font-semibold text-primary sm:text-xl text-base">
            Top Rated Excellence
          </h1>
        </div>
        <div className="flex flex-col mt-8 xl:text-6xl lg:text-5xl sm:text-4xl xs:text-3xl text-2xl items-center sm:gap-y-4 gap-y-2">
          <h1 className="text-center">Elevating Brands</h1>
          <h1 className="text-center ">Through Unforgettable Events</h1>
        </div>
        <p className="w-72 xs:text-base text-sm text-light font-normal sm:mt-10 mt-6 text-center">
          Delivering Unmatched Excellence in Every Aspect of Our Service.
        </p>
        <Button
          title="View Gallery"
          className="md:mt-10 sm:mt-8 xs:mt-6 mt-5 md:px-9 "
          handleClick={() => {}}
          variant="filled"
        />
      </div>
      <ClientsSlider className="md:mt-16 mt-10" />
      <GalleryContainer />
    </div>
  );
};

export default Hero;
