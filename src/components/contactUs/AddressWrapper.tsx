import React, { useEffect } from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import { FaBuilding } from 'react-icons/fa';
import MapContainer from './MapContainer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AddressWrapper = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
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
          className="lg:text-xl sm:text-base text-sm text-black/40 uppercase tracking-wider"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          Our Locations
        </h2>
        <div
          className="flex md:flex-row flex-col items-start justify-between md:gap-y-0 gap-y-8"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <div
            className="flex flex-col items-start md:w-1/2 w-full"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <h1 className="xl:text-4xl lg:text-3xl sm:text-2xl text-xl font-medium text-primary">
              Connecting Near and Far
            </h1>
            <p className="mt-3 xl:w-4/5 w-full font-light lg:text-base text-sm text-light leading-relaxed">
              Bringing together diverse communities from all corners of the
              world, fostering meaningful connections, and creating a global
              network that transcends borders, cultures, and distances
            </p>
          </div>
          <div
            className="flex flex-col md:w-2/5 w-full gap-y-4"
            data-aos="fade-left"
            data-aos-delay="250"
          >
            <div className="flex flex-row gap-x-3 items-start p-4 bg-white/90 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <FaBuilding className="text-primary lg:text-2xl md:text-xl text-lg mt-1" />
              <div>
                <h3 className="font-medium text-primary lg:text-base text-sm">
                  Main Address
                </h3>
                <p className="font-light lg:text-base md:text-sm text-xs text-light mt-1">
                  D - 148, SECTOR - 61, NOIDA 201301(U.P.), INDIA
                </p>
              </div>
            </div>

            <div className="flex flex-row gap-x-3 items-start p-4 bg-white/90 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <IoLocationSharp className="text-secondary lg:text-2xl md:text-xl text-lg mt-1" />
              <div>
                <h3 className="font-medium text-primary lg:text-base text-sm">
                  Office Address
                </h3>
                <p className="font-light lg:text-base md:text-sm text-xs text-light mt-1">
                  D-55, Sector 80, NOIDA 201305(U.P.), INDIA
                </p>
              </div>
            </div>
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
