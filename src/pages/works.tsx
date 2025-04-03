import React, { useState, useEffect } from "react";
import { exhibitions, events, conferences } from "../constants/media";
import ImageGridLayout from "../layout/ImageGridLayout";
import AOS from "aos";
import "aos/dist/aos.css";

const works = ["exhibitions", "events", "conferences"];

const mediaUrls = {
  exhibitions,
  events,
  conferences,
};

const Works = () => {
  const [selected, setSelected] = useState<string>("exhibitions");
  const selectedMedia = mediaUrls[selected] || [];

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-out-quad",
      offset: 120,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [selected]);

  return (
    <div className="lg:container w-full lg:px-8 md:px-16 sm:px-10 px-6 min-h-screen relative z-10 mx-auto flex pt-32 flex-col items-center">
      <h1
        className="xl:text-5xl lg:text-4xl text-3xl font-medium text-primary"
        data-aos="fade-down"
      >
        Our Works
      </h1>
      <p
        className="mt-3 md:text-base sm:text-sm text-xs text-primary font-normal"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        Our portfolio of{" "}
        <span className="capitalize font-medium">{selected}</span>
      </p>

      <div className="md:mt-10 sm:mt-7 mt-4 flex flex-row items-center md:gap-x-3 sm:gap-x-2 gap-x-1.5">
        {works.map((item, index) => (
          <SorterButton
            key={index}
            selected={selected}
            setSelected={setSelected}
            label={item}
            index={index}
          />
        ))}
      </div>

      <div className="w-full md:mt-8 sm:mt-5 mt-3 mb-16 grid lg:grid-cols-3 grid-cols-2 lg:gap-4 gap-2">
        {selectedMedia.map(
          (
            media: { details: { name: string; desc: string }; url: string },
            index: number
          ) => (
            <ImageGridLayout
              key={index}
              className="break-after-avoid"
              details={media.details}
              data-aos="zoom-in"
              data-aos-delay={(index % 3) * 100}
            >
              <img
                src={media.url}
                alt={selected}
                className={`w-full object-cover h-full rounded-2xl`}
              />
            </ImageGridLayout>
          )
        )}
      </div>
    </div>
  );
};

export default Works;

const SorterButton = ({ label, selected, setSelected, index }) => {
  const [animationKey, setAnimationKey] = useState(0);

  const handleClick = () => {
    setSelected(label);
    setAnimationKey((prev) => prev + 1);
  };

  return (
    <div key={`${label}-${animationKey}`}>
      <button
        onClick={handleClick}
        className={`${
          selected === label ? "text-white bg-primary" : "text-primary bg-white"
        } rounded-full cursor-pointer border-2 md:px-9 sm:px-6 px-5 md:py-2 sm:py-1.5 py-1 md:text-sm sm:text-xs text-[11px] capitalize border-primary transition-all duration-300`}
        data-aos="fade-up"
        data-aos-delay={index * 50}
      >
        {label}
      </button>
    </div>
  );
};
