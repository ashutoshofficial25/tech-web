import React, { useEffect, useState } from "react";
import Button from "../common/Button";
import { useScroll } from "../../context/ScrollContext";
import { useNavigate } from "react-router";

const navs = [
  { label: "Home", id: "home" },
  { label: "About Us", id: "about" },
  { label: "Services", id: "services" },
];

const Header = () => {
  const { scrollToSection } = useScroll();
  const navigate = useNavigate();
  const [hasShadow, setHasShadow] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`w-full fixed top-0 py-5 bg-white z-50 left-1/2 -translate-x-1/2
      ${hasShadow ? "shadow-lg" : "shadow-none"}
    `}
    >
      <div className="container mx-auto flex items-center flex-row justify-between">
        <Logo />
        <NavMenu
          navs={navs}
          scrollToSection={scrollToSection}
          className="relative left-28"
        />
        <div className="flex items-center gap-x-3">
          <Button
            variant="outlined"
            handleClick={() => scrollToSection("contact")}
            title="Contact Us"
          />
          <Button
            variant="filled"
            handleClick={() => navigate("/")}
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

const NavMenu = ({ navs, className, scrollToSection }) => {
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
