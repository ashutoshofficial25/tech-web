import React from "react";
interface IButtonProps {
  className?: string;
  variant?: "outlined" | "filled";
  styles?: object;
  isLoading?: boolean;
  module?: "common" | "navbar";
  loadingText?: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  title: string;
}
const Button = ({
  className,
  variant = "filled",
  styles,
  isLoading,
  loadingText,
  handleClick,
  module = "common",
  title,
}: IButtonProps) => {
  const getStyles = () => {
    switch (variant) {
      case "outlined":
        return "text-primary border-primary hover:text-white  hover:bg-primary";
      case "filled":
        return "text-white border-transparent bg-primary";
    }
  };
  return (
    <button
      aria-label="click me"
      className={`${className} cursor-pointer transition-all duration-300 ease ${
        module === "common"
          ? "sm:px-8 px-6 sm:py-2 py-1.5 sm:text-sm text-xs"
          : "xl:px-6 sm:px-6 px-4 xl:py-2 py-1.5 xl:text-sm sm:text-xs text-[10px]"
      } hover:scale-[0.96] relative border-2  rounded-full  font-medium ${getStyles()}`}
      style={{ ...styles }}
      disabled={isLoading}
      onClick={handleClick}
    >
      {isLoading ? loadingText : title}
    </button>
  );
};

export default Button;

interface HamburgerMenuProps {
  className?: string;
  isExpanded: boolean;
  handleClick: (expanded: boolean) => void;
}

export const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  className = "",
  isExpanded,
  handleClick,
}) => {
  return (
    <button
      className={`group relative h-6 w-6 ${className}`}
      aria-expanded={isExpanded}
      onClick={() => handleClick(!isExpanded)}
      type="button"
      style={
        {
          "--width": "1.3rem",
          "--thickness": "0.20rem",
          "--gap": "0.25rem",
          "--color": "#062b42",
          "--duration": "300ms",
        } as any
      }
    >
      <span
        className="absolute left-1/2 top-1/2 h-[var(--thickness)] w-[var(--width)] 
          -translate-x-1/2 translate-y-[calc(-150%-var(--gap))] transition-transform 
          duration-[calc(var(--duration)*2/3)] 
          before:absolute before:right-0 before:h-full before:w-full before:rounded-full 
          before:bg-[var(--color)] before:transition-[width] before:delay-[calc(var(--duration)*1/3)] 
          before:duration-[calc(var(--duration)*2/3)] 
          group-aria-expanded:-translate-y-1/2 group-aria-expanded:-rotate-45 
          group-aria-expanded:delay-[calc(var(--duration)*1/3)] before:group-aria-expanded:w-[60%] 
          before:group-aria-expanded:delay-0"
      ></span>
      <span
        className="absolute left-1/2 top-1/2 h-[var(--thickness)] w-[var(--width)] 
          -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color)] 
          transition-transform duration-[calc(var(--duration)*2/3)] 
          group-aria-expanded:rotate-45 group-aria-expanded:delay-[calc(var(--duration)*1/3)]"
      ></span>
      <span
        className="absolute left-1/2 top-1/2 h-[var(--thickness)] w-[var(--width)] 
          -translate-x-1/2 translate-y-[calc(50%+var(--gap))] transition-transform 
          duration-[calc(var(--duration)*2/3)] 
          before:absolute before:right-0 before:h-full before:w-[60%] before:rounded-full 
          before:bg-[var(--color)] before:transition-[right] before:delay-[calc(var(--duration)*1/3)] 
          before:duration-[calc(var(--duration)*2/3)] 
          group-aria-expanded:-translate-y-1/2 group-aria-expanded:-rotate-45 
          group-aria-expanded:delay-[calc(var(--duration)*1/3)] before:group-aria-expanded:right-[40%] 
          before:group-aria-expanded:delay-0"
      ></span>
    </button>
  );
};
