import React from 'react';
import kinLogoUrl from '../../assets/footer-logo.png'; // Ensure this path is correct
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import { ISocialProfileProps, socialProfiles } from '../../constants/links'; // Assuming this import is correct

// Define Resource type locally if not imported
interface ResourceItem {
  label: string;
  newTab: boolean;
  link: string;
}

const resources: ResourceItem[] = [
  { label: 'Home', newTab: false, link: '/' }, // Capitalized labels
  { label: 'About Us', newTab: false, link: '/about' },
  { label: 'Services', newTab: false, link: '/services' },
  { label: 'Contact', newTab: false, link: '/contact' }, // Changed from 'Contacts'
];

const Footer = () => {
  const navigate = useNavigate();

  // Combined handler for navigation and external links
  const handleRedirect = ({
    newTab,
    link,
  }: {
    newTab: boolean;
    link: string;
  }) => {
    if (newTab) {
      window.open(link, '_blank', 'noopener,noreferrer'); // Added security attributes
    } else {
      navigate(link);
    }
  };

  return (
    // Adjusted padding and structure slightly for clarity
    <div className="w-full bg-primary text-white pt-10 md:pt-16 pb-6 md:pb-8">
      <div className="container mx-auto xl:px-16 px-6 sm:px-10 h-full flex flex-col md:flex-row gap-y-10 md:gap-x-16 lg:gap-x-24 xl:gap-x-32 2xl:justify-between items-center md:items-start">
        {/* Left Section: Logo & Social Icons */}
        <div className="flex flex-col items-center md:items-start flex-shrink-0">
          <img
            src={kinLogoUrl}
            className="h-10 w-auto" // Added height/width constraint
            alt="Kin India Logo Footer"
          />
          <h1 className="mt-6 md:mt-8 text-sm font-normal text-white">
            Follow us on
          </h1>
          <div className="flex gap-x-4 mt-3 items-center">
            {/* Map over socialProfiles from constants for consistency */}
            {socialProfiles.map((profile) => (
              <a
                key={profile.label}
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow us on ${profile.label}`}
                className="hover:opacity-80 transition-opacity"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default if using onClick for consistency
                  handleRedirect(profile);
                }}
              >
                {profile.label === 'Instagram' && (
                  <FaInstagram className="text-[20px]" />
                )}
                {profile.label === 'LinkedIn' && (
                  <FaLinkedin className="text-[20px]" />
                )}
                {/* Add other icons based on profile.label */}
              </a>
            ))}
          </div>
        </div>

        {/* Right Section: Links & Contact */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-y-10 sm:gap-y-0 xl:gap-x-24 gap-x-10 sm:gap-x-16 md:gap-x-20 w-full md:w-auto">
          {/* Contact Us Section */}
          <div className="flex font-light flex-col items-center sm:items-start text-center sm:text-left">
            <h1 className="lg:text-xl md:text-base text-sm font-medium text-white mb-5 md:mb-6">
              Contact Us
            </h1>
            {/* --- FIX: Added Registered Address --- */}
            <div className="mb-4">
              <strong className="block font-medium text-xs md:text-sm mb-1">
                Registered Address:
              </strong>
              <p className="text-xs md:text-sm lg:text-base leading-relaxed">
                D - 148, SECTOR - 61, NOIDA 201301(U.P.), INDIA
              </p>
            </div>
            {/* --- FIX: Added Office Address --- */}
            <div className="mb-5">
              <strong className="block font-medium text-xs md:text-sm mb-1">
                Office Address:
              </strong>
              <p className="text-xs md:text-sm lg:text-base leading-relaxed">
                D-55, Sector 80, NOIDA 201305(U.P.), INDIA
              </p>
            </div>
            {/* Phone and Email */}
            <a
              href="tel:+918826204411"
              className="lg:text-base md:text-sm text-xs cursor-pointer hover:opacity-80 transition-opacity block mb-1.5"
            >
              +91 88262 04411
            </a>
            <a
              href="mailto:intro@kinindia.co"
              className="lg:text-base md:text-sm text-xs cursor-pointer hover:opacity-80 transition-opacity block"
            >
              intro@kinindia.co
            </a>
          </div>

          {/* Resources Section */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h1 className="lg:text-xl md:text-base text-sm font-medium text-white mb-5 md:mb-6">
              Resources
            </h1>
            <ul className="font-light capitalize flex flex-col gap-y-2 items-center sm:items-start">
              {resources?.map((item: ResourceItem) => (
                <li key={item.link}>
                  <button
                    onClick={() => handleRedirect(item)}
                    className="cursor-pointer lg:text-base md:text-sm text-xs hover:opacity-80 transition-opacity"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Profiles Links Section */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h1 className="lg:text-xl md:text-base text-sm font-medium text-white mb-5 md:mb-6">
              Social Profiles
            </h1>
            <ul className="font-light capitalize flex flex-col gap-y-2 items-center sm:items-start">
              {socialProfiles?.map((item: ISocialProfileProps) => (
                <li key={item.label}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.preventDefault();
                      handleRedirect(item);
                    }}
                    className="cursor-pointer lg:text-base md:text-sm text-xs hover:opacity-80 transition-opacity"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Copyright Section */}
      <div className="container mx-auto xl:px-16 px-6 sm:px-10 mt-8 md:mt-12 border-t border-white/20 pt-4 md:pt-6 text-center">
        <p className="lg:text-sm text-xs font-light text-white/70">
          &copy; Copyright {new Date().getFullYear()} Kin Productions India Pvt.
          Ltd. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
