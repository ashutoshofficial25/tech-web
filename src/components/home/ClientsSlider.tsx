import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/home.css";
import clients from "../../constants/media";
const ClientsSlider = ({ className }: { className?: string }) => {
  const settings = {
    infinite: true,
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className={`${className} w-full flex flex-col items-center gap-y-6`}>
      <p className="md:text-xl sm:text-base text-sm text-light font-normal ">
        Trusted by{" "}
        <span className="font-semibold text-primary">100+ clients</span>
      </p>
      <div className="mt-2 mask-wrapper w-full slider-container">
        <Slider {...settings}>
          {clients?.map((clientLogoUrl: string, index: number) => {
            return (
              <div
                className="!flex  px-8 !items-center !justify-center "
                key={index}
              >
                <img className="h-fit w-20 object-fit" src={clientLogoUrl} />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default ClientsSlider;
