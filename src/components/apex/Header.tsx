import React, { useEffect, useState } from 'react';
import Button from '../common/Button';
import { useScroll } from '../../context/ScrollContext';
import { useNavigate } from 'react-router';
import { FaBars, FaTimes } from 'react-icons/fa';
interface NavItem {
  label: string;
  id: 'home' | 'about' | 'services' | 'contact';
}

const navs: NavItem[] = [
  { label: 'Home', id: 'home' },
  { label: 'About Us', id: 'about' },
  { label: 'Services', id: 'services' },
];

const Header = () => {
  const { scrollToSection } = useScroll();
  const navigate = useNavigate();
  const [hasShadow, setHasShadow] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`${
        hasShadow ? 'shadow-lg' : 'shadow-none'
      } w-full fixed top-0 py-5 bg-white z-50 left-1/2 -translate-x-1/2`}
    >
      <div className="container mx-auto flex items-center flex-row justify-between px-4 md:px-6 lg:px-0">
        <Logo />

        {/* Mobile menu button */}
        <div className="lg:hidden z-50">
          <button
            onClick={toggleMenu}
            className="text-primary focus:outline-none"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <NavMenu
          navs={navs}
          scrollToSection={scrollToSection}
          className="relative left-0 md:left-10 lg:left-28 hidden lg:flex"
        />

        {/* Mobile Navigation Overlay */}
        <div
          className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-all duration-300 ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          } lg:hidden`}
        >
          <ul className="flex flex-col items-center gap-y-8">
            {navs?.map(({ label, id }, index) => (
              <li
                role="button"
                className="hover:opacity-80 text-black/60 font-medium cursor-pointer flex items-center gap-x-2 text-[22px]"
                key={index}
                onClick={() => {
                  scrollToSection(
                    id as 'home' | 'about' | 'services' | 'contact'
                  );
                  setIsMenuOpen(false);
                }}
              >
                <span>{label}</span>
              </li>
            ))}
            <div className="flex flex-col mt-8 gap-y-4 w-full items-center">
              <Button
                variant="outlined"
                handleClick={() => {
                  scrollToSection('contact');
                  setIsMenuOpen(false);
                }}
                title="Contact Us"
                className="w-48"
              />
              <Button
                variant="filled"
                handleClick={() => {}}
                className="w-48"
                title="Kin"
              />
            </div>
          </ul>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-x-3">
          <Button
            variant="outlined"
            handleClick={() => scrollToSection('contact')}
            title="Contact Us"
          />
          <Button
            variant="filled"
            handleClick={() => navigate('/')}
            className="px-12"
            title="Kin"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

const Logo = () => {
  return (
    <div className="cursor-pointer" onClick={() => {}}>
      <h1 className="text-2xl text-primary font-semibold">Apex</h1>
    </div>
  );
};

interface NavMenuProps {
  navs: NavItem[];
  className?: string;
  scrollToSection: (
    sectionId: 'home' | 'about' | 'services' | 'contact'
  ) => void;
}

const NavMenu: React.FC<NavMenuProps> = ({
  navs,
  className,
  scrollToSection,
}) => {
  return (
    <ul className={`${className} flex items-center gap-x-12`}>
      {navs?.map(({ label, id }, index) => (
        <li
          role="button"
          className="hover:opacity-80 text-black/60 font-medium cursor-pointer flex items-center gap-x-2 text-[18px]"
          key={index}
          onClick={() => scrollToSection(id)}
        >
          <span>{label}</span>
        </li>
      ))}
    </ul>
  );
};
