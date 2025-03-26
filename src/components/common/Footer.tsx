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
    <div className="h-96  w-full bg-primary text-white">
      <div className="container xl:px-16 px-10 h-full pt-16 mx-auto flex flex-row 2xl:gap-x-0 xl:gap-x-52 gap-x-32  2xl:justify-between items-start">
        <div className="flex flex-col items-start">
          <img src={kinLogoUrl} className="" />
          <h1 className="mt-12 text-sm font-normal text-white">Follow us on</h1>
          <div className="flex gap-x-4 mt-3 items-center">
            <FaInstagram className="cursor-pointer text-[18px] hover:opacity-80" />
            <FaFacebook className="cursor-pointer text-[18px] hover:opacity-80" />
            <FaLinkedin className="cursor-pointer text-[18px] hover:opacity-80" />
          </div>
        </div>
        <div className="flex  flex-row xl:gap-x-36 gap-x-24">
          <div className="flex font-light flex-col items-start">
            <h1 className="text-xl font-medium text-white">Contacts Us</h1>
            <p className="mt-10 w-52">
              D-148, SECTOR-61, NOIDA-201301 (U.P.), INDIA
            </p>
            <span className="mt-6 cursor-pointer">+918080808080</span>
            <span className="mt-1.6 cursor-pointer">intro@kinindia.co</span>
          </div>
          <div className="flex flex-col items-start">
            <h1 className="text-xl font-medium text-white">Resources</h1>
            <ul className="font-light mt-8 capitalize flex flex-col gap-y-1">
              {resources?.map(
                (
                  item: { label: string; newTab: boolean; link: string },
                  index: number
                ) => {
                  return (
                    <li
                      className="cursor-pointer"
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
            <h1 className="text-xl font-medium text-white">Social Profiles</h1>
            <ul className="font-light mt-8 capitalize flex flex-col gap-y-1">
              {socialProfiles?.map(
                (item: ISocialProfileProps, index: number) => {
                  return (
                    <li
                      className="cursor-pointer"
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
    </div>
  );
};

export default Footer;
