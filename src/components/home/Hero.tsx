import React from "react";
import { FaStar } from "react-icons/fa";
import Button from "../common/Button";
import ClientsSlider from "./ClientsSlider";
import GalleryContainer from "./GalleryContainer";

const Hero = () => {
  return (
    <div className="min-h-screen w-full pt-36">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex flex-row gap-x-2">
          <div className="h-6 w-6 flex items-center justify-center rounded-sm bg-primary">
            <FaStar className="text-white text-xs" />
          </div>
          <h1 className="font-semibold text-primary text-xl">
            Top Rated Excellence
          </h1>
        </div>
        <div className="flex flex-col mt-8 text-6xl items-center gap-y-4">
          <h1 className="text-center">Elevating Brands</h1>
          <h1 className="text-center ">Through Unforgettable Events</h1>
        </div>
        <p className="w-72 text-base text-light font-normal mt-10 text-center">
          Delivering Unmatched Excellence in Every Aspect of Our Service.
        </p>
        <Button
          title="View Gallery"
          className="mt-10 px-9"
          handleClick={() => {}}
          variant="filled"
        />
      </div>
      <ClientsSlider className="mt-16" />
      <GalleryContainer />
    </div>
  );
};

export default Hero;
