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
  };

  return (
    <div className={`${className} w-full flex flex-col items-center gap-y-6`}>
      <p className="text-xl text-light font-normal ">
        Trusted by{" "}
        <span className="font-semibold text-primary">100+ clients</span>
      </p>
      <div className="mt-2 mask-wrapper w-full slider-container">
        <Slider {...settings}>
          {clients?.map((clientLogoUrl: string, index: number) => {
            return (
              <div
                className="!flex transition-all duration-500 ease-in-out hover:scale-120 hover:h-14 h-12 px-8 !items-center !justify-center "
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
