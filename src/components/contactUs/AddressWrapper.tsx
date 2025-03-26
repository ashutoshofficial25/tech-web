import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import MapContainer from "./MapContainer";

const AddressWrapper = () => {
  return (
    <>
      <div className="container px-16 mx-auto pt-20">
        <h2 className="text-xl text-black/40">Our Location</h2>
        <div className="flex flex-row items-start justify-between">
          <div className="flex flex-col items-start">
            <h1 className="text-4xl font-medium text-primary">
              Connecting Near and Far
            </h1>
            <p className="mt-2 w-1/2 font-light text-light">
              Bringing together diverse communities from all corners of the
              world, fostering meaningful connections, and creating a global
              network that transcends borders, cultures, and distances
            </p>
          </div>
          <div className="flex flex-row gap-x-3 items-center">
            <IoLocationSharp className="text-secondary text-4xl" />
            <p className="font-light">
              D-148, SECTOR-61, NOIDA-201301(U.P.), INDIA
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <MapContainer />
      </div>
    </>
  );
};

export default AddressWrapper;
