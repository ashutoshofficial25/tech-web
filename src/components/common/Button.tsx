import React from "react";
interface IButtonProps {
  className?: string;
  variant?: "outlined" | "filled";
  styles?: object;
  isLoading?: boolean;
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
  title,
}: IButtonProps) => {
  const getStyles = () => {
    switch (variant) {
      case "outlined":
        return "text-primary border-primary hover:text-white hover:bg-primary";
      case "filled":
        return "text-white border-transparent bg-primary";
    }
  };
  return (
    <button
      aria-label="click me"
      className={`${className} cursor-pointer transition-all duration-300 ease hover:scale-[0.96] relative border-2 px-8 py-2 rounded-full text-sm font-medium ${getStyles()}`}
      style={{ ...styles }}
      disabled={isLoading}
      onClick={handleClick}
    >
      {isLoading ? loadingText : title}
    </button>
  );
};

export default Button;
