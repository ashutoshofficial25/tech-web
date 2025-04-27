import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { useScroll } from '../../context/ScrollContext'; // Assuming this context exists

interface ResourceItem {
  label: string;
  id: 'home' | 'about' | 'services' | 'contact'; // Ensure these IDs match scroll targets
}

interface SocialProfileItem {
  label: string;
  link: string;
}

const resources: ResourceItem[] = [
  { label: 'Home', id: 'home' }, // Capitalized for display
  { label: 'About Us', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Contact', id: 'contact' }, // Changed from 'Contacts'
];

const socialProfiles: SocialProfileItem[] = [
  { label: 'LinkedIn', link: 'https://www.linkedin.com/company/apexvision01/' },
  // Add other profiles here if needed
];

const handleRedirect = (link: string): void => {
  window.open(link, '_blank', 'noopener,noreferrer'); // Added security attributes
};

const Footer = () => {
  const { scrollToSection } = useScroll(); // Assuming useScroll provides this function

  return (
    <div className="min-h-96 relative z-10 w-full bg-primary text-white py-10 md:py-16">
      <div className="container xl:px-16 px-6 sm:px-10 h-full mx-auto flex flex-col md:flex-row 2xl:gap-x-0 xl:gap-x-52 gap-x-16 md:gap-x-24 lg:gap-x-32 gap-y-10 2xl:justify-between items-center md:items-start">
        {/* Left Section: Logo & Social */}
        <div className="flex flex-col items-center md:items-start flex-shrink-0">
          {/* Consider adding your actual logo component here */}
          <h1 className="text-2xl font-bold">Apex Vision</h1>{' '}
          {/* Assuming 'Apex Vision' */}
          <h1 className="mt-8 md:mt-12 text-sm font-normal text-white">
            Follow us on
          </h1>
          <div className="flex gap-x-4 mt-3 items-center">
            {/* Map over social profiles for scalability */}
            {socialProfiles.map((profile) => (
              <a
                key={profile.label}
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow us on ${profile.label}`}
                className="hover:opacity-80 transition-opacity"
              >
                {profile.label === 'LinkedIn' && (
                  <FaLinkedin className="text-[20px]" />
                )}
                {/* Add other icons here based on profile.label */}
              </a>
            ))}
          </div>
        </div>

        {/* Right Section: Links & Contact */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-y-10 sm:gap-y-0 xl:gap-x-24 gap-x-10 sm:gap-x-16 md:gap-x-20">
          {/* Contact Us Section */}
          <div className="flex font-light flex-col items-center sm:items-start text-center sm:text-left">
            <h1 className="text-xl font-medium text-white mb-6 md:mb-8">
              Contact Us
            </h1>
            {/* --- FIX: Added Registered Address --- */}
            <div className="mb-4">
              <strong className="block font-medium text-sm mb-1">
                Registered Address:
              </strong>
              <p className="text-sm leading-relaxed">
                D - 148, SECTOR - 61, NOIDA 201301(U.P.), INDIA
              </p>
            </div>
            {/* --- FIX: Added Office Address --- */}
            <div className="mb-6">
              <strong className="block font-medium text-sm mb-1">
                Office Address:
              </strong>
              <p className="text-sm leading-relaxed">
                D-55, Sector 80, NOIDA 201305(U.P.), INDIA
              </p>
            </div>
            {/* Phone and Email */}
            <a
              href="tel:+919810053543"
              className="text-sm cursor-pointer hover:opacity-80 transition-opacity block mb-2"
            >
              +91 98100 53543
            </a>
            <a
              href="mailto:intro@apexvision.co"
              className="text-sm cursor-pointer hover:opacity-80 transition-opacity block"
            >
              intro@apexvision.co
            </a>
          </div>

          {/* Resources Section */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h1 className="text-xl font-medium text-white mb-6 md:mb-8">
              Resources
            </h1>
            <ul className="font-light capitalize flex flex-col gap-y-2 items-center sm:items-start">
              {resources?.map((item: ResourceItem) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="cursor-pointer text-sm hover:opacity-80 transition-opacity"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Profiles Links Section (Optional text links) */}
          {/* <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h1 className="text-xl font-medium text-white mb-6 md:mb-8">Social Profiles</h1>
            <ul className="font-light capitalize flex flex-col gap-y-2 items-center sm:items-start">
              {socialProfiles?.map((item: SocialProfileItem) => (
                <li key={item.label}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer text-sm hover:opacity-80 transition-opacity"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}
        </div>
      </div>
      {/* Optional: Add a copyright line */}
      <div className="text-center text-xs text-white/70 mt-10 md:mt-16 border-t border-white/20 pt-6 px-6">
        © {new Date().getFullYear()} Apex Vision. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
