import React from "react";
import { ISocialProfileProps, socialProfiles } from "../../constants/links";

const SocialList = () => {
  const handleSocialButton = (link: string) => {
    window.open(link, "_blank");
  };
  return (
    <div className="container mx-auto flex lg:gap-x-12 gap-x-8 lg:justify-end justify-center xl:px-24 sm:px-16 xs:px-10 px-6 items-end md:py-10 pb-10">
      <p className="xl:text-2xl lg:text-xl md:text-base text-sm font-normal text-primary ">
        Get in touch with social updates
      </p>
      <div className="flex flex-col gap-y-2 items-start">
        <span className="font-normal text-light text-xs">Follow us on</span>
        <div className="flex lg:gap-x-5 gap-x-4 items-center">
          {socialProfiles?.map((item: ISocialProfileProps, index: number) => {
            return (
              <div
                key={index}
                onClick={() => handleSocialButton(item.link)}
                role="button"
                aria-label="social link button"
                className="h-10 w-10 rounded-full cursor-pointer hover:bg-secondary transition-all duration-200 ease  flex items-center justify-center bg-primary text-white"
              >
                {item.icon}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SocialList;
