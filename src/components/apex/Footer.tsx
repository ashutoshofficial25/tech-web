import React from "react";

import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useScroll } from "../../context/ScrollContext";

const resources = [
  { label: "home", id: "home" },
  { label: "about us", id: "about" },
  { label: "services", id: "services" },
  { label: "Contacts", id: "contact" },
];
const socialProfiles = [
  { label: "LinkedIn", link: "" },
  { label: "Instagram", link: "" },
  { label: "Facebook", link: "" },
];
const handleRedirect = (link) => {
  window.open(link, "_blank");
};
const Footer = () => {
  const { scrollToSection } = useScroll();
  return (
    <div className="min-h-96 relative z-10 w-full bg-primary text-white py-10 md:py-16">
      <div className="container xl:px-16 px-6 sm:px-10 h-full mx-auto flex flex-col md:flex-row 2xl:gap-x-0 xl:gap-x-52 gap-x-32 gap-y-10 2xl:justify-between items-center md:items-start">
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-2xl font-bold">Apex</h1>
          <h1 className="mt-12 text-sm font-normal text-white">Follow us on</h1>
          <div className="flex gap-x-4 mt-3 items-center">
            <FaInstagram className="cursor-pointer text-[18px] hover:opacity-80" />
            <FaFacebook className="cursor-pointer text-[18px] hover:opacity-80" />
            <FaLinkedin className="cursor-pointer text-[18px] hover:opacity-80" />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-y-10 sm:gap-y-0 xl:gap-x-36 gap-x-10 sm:gap-x-16 md:gap-x-24">
          <div className="flex font-light flex-col items-center sm:items-start">
            <h1 className="text-xl font-medium text-white">Contacts Us</h1>
            <p className="mt-10 w-full sm:w-52 text-center sm:text-left">
              D-148, SECTOR-61, NOIDA-201301 (U.P.), INDIA
            </p>
            <span className="mt-6 cursor-pointer block text-center sm:text-left">
              +918080808080
            </span>
            <span className="mt-1.6 cursor-pointer block text-center sm:text-left">
              intro@kinindia.co
            </span>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <h1 className="text-xl font-medium text-white">Resources</h1>
            <ul className="font-light mt-8 capitalize flex flex-col gap-y-1 items-center sm:items-start">
              {resources?.map((item, index) => {
                return (
                  <li
                    role="button"
                    onClick={() => scrollToSection(item.id)}
                    className="cursor-pointer"
                    key={index}
                  >
                    {item.label}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <h1 className="text-xl font-medium text-white">Social Profiles</h1>
            <ul className="font-light mt-8 capitalize flex flex-col gap-y-1 items-center sm:items-start">
              {socialProfiles?.map((item, index) => {
                return (
                  <li
                    className="cursor-pointer"
                    onClick={() => handleRedirect(item.link)}
                    key={index}
                  >
                    {item.label}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
