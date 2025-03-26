import React from "react";
import kinLogoUrl from "../assets/kin-logo.png";
import { useLocation, useNavigate } from "react-router";
import Button from "../components/common/Button";
interface INavItemProps {
  label: string;
  redirect: string;
}
const navs: INavItemProps[] = [
  { label: "Home", redirect: "/" },
  { label: "About Us", redirect: "/about" },
  {
    label: "Our Works",
    redirect: "/works",
  },
];
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <header className="w-full  fixed top-0 py-5 bg-white z-50 left-1/2 -translate-x-1/2">
      <div className="container mx-auto flex items-center flex-row justify-between">
        <Logo />
        <NavMenu
          navs={navs}
          handleClick={navigate}
          className="relative left-28"
        />
        <div className="flex items-center gap-x-3">
          <Button
            variant="outlined"
            handleClick={() => navigate("/contact")}
            title="Contact Us"
          />
          <Button
            variant="filled"
            handleClick={() => navigate("/apex")}
            className="px-12"
            title="Apex"
          />
        </div>
      </div>
    </header>
  );
};
export default Navbar;

const Logo = () => {
  return (
    <div className="cursor-pointer" onClick={() => {}}>
      <img src={kinLogoUrl} alt="Logo" />
    </div>
  );
};
const NavMenu = ({
  navs,
  className,
  handleClick,
}: {
  navs: INavItemProps[];
  className?: string;
  handleClick: (x: string) => void;
}) => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <ul className={`${className} flex items-center gap-x-12`}>
      {navs?.map(({ label, redirect }: INavItemProps, index: number) => {
        return (
          <li
            role="button"
            className={`hover:opacity-80 ${
              redirect === pathname
                ? "text-primary font-semibold"
                : "text-black/60 font-medium"
            } cursor-pointer flex items-center gap-x-2 text-[18px]`}
            onClick={() => handleClick(redirect)}
            key={index}
          >
            <span>{label}</span>
          </li>
        );
      })}
    </ul>
  );
};
