import React from "react";
import { exhibitions } from "../../constants/media";
const GalleryContainer = () => {
  return (
    <div className="w-full columns-5 mt-16  gap-x-3">
      {exhibitions?.slice(5, 10).map((logoUrl: string, index: number) => {
        return (
          <div key={index} className="">
            <img
              className={`rounded-xl ${
                index === 0 && "rounded-tl-none rounded-bl-none"
              }
              ${index === 4 && "rounded-tr-none rounded-br-none"}
              `}
              src={logoUrl}
            />
          </div>
        );
      })}
    </div>
  );
};

export default GalleryContainer;
