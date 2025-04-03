import React from "react";
import { exhibitions } from "../../constants/media";

const GalleryContainer = () => {
  return (
    <div className="w-full columns-5 xl:mt-16 lg:mt-12 md:mt-8 mt-5 xl:gap-x-3 lg:gap-x-2 md:gap-x-1.5 gap-x-1">
      {exhibitions?.slice(5, 10).map((media, index) => (
        <div key={index} className="">
          <img
            className={`w-full object-cover ${
              index === 0
                ? "!rounded-tl-none !rounded-bl-none"
                : "xl:rounded-xl rounded-lg"
            } ${
              index === 4
                ? "!rounded-tr-none !rounded-br-none"
                : "xl:rounded-xl rounded-lg"
            }`}
            src={media.url}
            alt={`Exhibition Image ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
};

export default GalleryContainer;
