import React, { useEffect, useState } from 'react';
import reactCubeLogo from '../assets/react-logo.png';
import { useLocation, useNavigate } from 'react-router';
import Button, { HamburgerMenu } from '../components/common/Button';
import { Helmet } from 'react-helmet';
interface INavItemProps {
  label: string;
  redirect: string;
  description?: string; // Added for better SEO context
}
const navs: INavItemProps[] = [
  {
    label: 'Home',
    redirect: '/',
    description: 'ReactCube - Technology Solutions and Software Development',
  },
  {
    label: 'About Us',
    redirect: '/about',
    description: "Learn about ReactCube's mission and technology expertise",
  },
  {
    label: 'Our Works',
    redirect: '/works',
    description:
      "Explore ReactCube's portfolio of web applications, mobile apps, and software projects",
  },
];
// Navigation schema for structured data
const navigationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SiteNavigationElement',
  name: 'ReactCube Navigation',
  hasPart: navs.map((nav) => ({
    '@type': 'WebPage',
    name: nav.label,
    description: nav.description || `${nav.label} page of ReactCube`,
    url: `https://reactcube.tech${nav.redirect === '/' ? '' : nav.redirect}`,
  })),
};

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [hasShadow, setHasShadow] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsExpanded(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <header
      className={`w-full fixed top-0 py-5 bg-white z-[9999] left-1/2 -translate-x-1/2 transition-shadow duration-300 ${
        hasShadow ? 'shadow-lg' : 'shadow-none'
      }`}
      itemScope
      itemType="https://schema.org/WPHeader"
    >
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(navigationSchema)}
        </script>
      </Helmet>
      <div className="lg:container w-full lg:px-4 sm:px-6 px-4 mx-auto flex items-center flex-row justify-between relative">
        <Logo
          handleClick={() => {
            navigate('/');
            setIsExpanded(false);
          }}
          alt="ReactCube.tech - Technology Solutions"
        />
        <NavMenu
          navs={navs}
          setIsExpanded={setIsExpanded}
          handleClick={navigate}
          className={`md:relative absolute md:shadow-none shadow-lg md:top-0 top-[4.5rem] md:left-0 ${
            isExpanded ? 'left-0' : '-left-full'
          } md:w-fit w-full transition-all duration-300 ease-in-out md:bg-transparent bg-white md:p-0 p-6`}
        />

        <div className="flex  items-center xl:gap-x-3 sm:gap-x-2 gap-x-1.5">
          <Button
            variant="outlined"
            handleClick={() => navigate('/contact')}
            title="Contact Us"
            module="navbar"
          />
          <Button
            variant="filled"
            handleClick={() => navigate('/apex')}
            className="!lg:px-12 !sm:px-10 !px-8"
            title="Enterprise Solutions"
            module="navbar"
          />
          <HamburgerMenu
            isExpanded={isExpanded}
            className="md:hidden block"
            handleClick={setIsExpanded}
          />
        </div>
      </div>
    </header>
  );
};
export default Navbar;

const Logo = ({
  handleClick,
  alt,
}: {
  handleClick: () => void;
  alt?: string;
}) => {
  return (
    <div className="cursor-pointer z-10" onClick={handleClick}>
      <img
        src={reactCubeLogo}
        alt={alt || 'ReactCube Technologies Logo'}
        className="md:h-12 h-8 transition-transform hover:scale-105 duration-200"
        itemProp="logo"
      />
    </div>
  );
};
const NavMenu = ({
  navs,
  className,
  handleClick,
  setIsExpanded,
}: {
  navs: INavItemProps[];
  className?: string;
  handleClick: (x: string) => void;
  setIsExpanded?: any;
}) => {
  const { pathname } = useLocation();
  return (
    <ul
      className={`${className} flex md:flex-row flex-col items-center xl:gap-x-12 lg:gap-x-10 md:gap-x-8 md:gap-y-0 gap-y-8`}
    >
      {navs?.map(
        ({ label, redirect, description }: INavItemProps, index: number) => {
          return (
            <li
              role="button"
              className={`hover:opacity-80 ${
                redirect === pathname
                  ? 'text-primary font-semibold'
                  : 'text-black/60 font-medium'
              } cursor-pointer flex items-center gap-x-2 xl:text-[18px] lg:text-base text-sm`}
              itemScope
              itemType="https://schema.org/SiteNavigationElement"
              itemProp="url"
              onClick={() => {
                handleClick(redirect);
                setIsExpanded(false);
              }}
              key={index}
            >
              <span itemProp="name" title={description || label}>
                {label}
              </span>
            </li>
          );
        }
      )}
    </ul>
  );
};
