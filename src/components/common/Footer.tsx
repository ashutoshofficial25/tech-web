import React from "react";
import kinLogoUrl from "../../assets/footer-logo.png";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router";
import { ISocialProfileProps, socialProfiles } from "../../constants/links";
const resources = [
  { label: "home", newTab: false, link: "/" },
  { label: "about us", newTab: false, link: "/about" },
  { label: "services", newTab: false, link: "/services" },
  { label: "Contacts", newTab: false, link: "/contact" },
];

const Footer = () => {
  const navigate = useNavigate();
  const handleRedirect = ({
    newTab,
    link,
  }: {
    newTab: boolean;
    link: string;
  }) => {
    if (newTab) {
      window.open(link, "_blank");
      return;
    }
    navigate(link);
  };
  return (
    <div className="lg:h-96 sm:h-72 h-96 flex flex-col justify-between items-center 2xl:pb-6 pb-4  w-full bg-primary text-white">
      <div className="xl:container w-full xl:px-16 lg:px-10 sm:pl-10 sm:pr-4 px-6 h-full lg:pt-16 pt-10 mx-auto flex sm:flex-row flex-col 2xl:gap-x-0 xl:gap-x-52 lg:gap-x-32 md:gap-x-24 sm:gap-x-12   2xl:justify-between sm:items-start items-center">
        <div className="flex flex-col items-start">
          <img src={kinLogoUrl} className="" />
          <h1 className="sm:mt-12 mt-4 text-sm font-normal text-white">
            Follow us on
          </h1>
          <div className="flex gap-x-4 mt-3 items-center">
            <FaInstagram className="cursor-pointer text-[18px] hover:opacity-80" />
            <FaFacebook className="cursor-pointer text-[18px] hover:opacity-80" />
            <FaLinkedin className="cursor-pointer text-[18px] hover:opacity-80" />
          </div>
        </div>
        <div className="flex  flex-row xl:gap-x-36 lg:gap-x-24 md:gap-x-10 gap-x-6 sm:mt-0 mt-8 sm:w-fit sm:justify-start justify-between w-full">
          <div className="flex font-light flex-col items-start">
            <h1 className="lg:text-xl md:text-base text-sm font-medium text-white">
              Contacts Us
            </h1>
            <p className="xl:mt-10 lg:text-base md:text-sm text-xs sm:mt-6 mt-3 sm:w-52 w-32">
              D-148, SECTOR-61, NOIDA-201301 (U.P.), INDIA
            </p>
            <span className="mt-6 lg:text-base md:text-sm text-xs cursor-pointer">
              +918080808080
            </span>
            <span className="mt-1.6 lg:text-base md:text-sm text-xs cursor-pointer">
              intro@kinindia.co
            </span>
          </div>
          <div className="flex flex-col items-start">
            <h1 className="lg:text-xl md:text-base text-sm font-medium text-white">
              Resources
            </h1>
            <ul className="font-light xl:mt-8 mt-5 capitalize flex flex-col gap-y-1">
              {resources?.map(
                (
                  item: { label: string; newTab: boolean; link: string },
                  index: number
                ) => {
                  return (
                    <li
                      className="cursor-pointer lg:text-base text-sm"
                      onClick={() => handleRedirect(item)}
                      key={index}
                    >
                      {item.label}
                    </li>
                  );
                }
              )}
            </ul>
          </div>
          <div className="flex flex-col items-start">
            <h1 className="lg:text-xl md:text-base text-sm font-medium text-white">
              Social Profiles
            </h1>
            <ul className="font-light xl:mt-8 mt-5 capitalize flex flex-col gap-y-1">
              {socialProfiles?.map(
                (item: ISocialProfileProps, index: number) => {
                  return (
                    <li
                      className="cursor-pointer lg:text-base text-sm"
                      onClick={() => handleRedirect(item)}
                      key={index}
                    >
                      {item.label}
                    </li>
                  );
                }
              )}
            </ul>
          </div>
        </div>
      </div>
      <p className="lg:text-base md:text-sm text-xs font-light">
        &copy; Copyright 2023 kin.co All rights reserved
      </p>
    </div>
  );
};

export default Footer;
