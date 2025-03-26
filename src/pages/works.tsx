import React, { useState } from "react";
import { exhibitions } from "../constants/media";
const works = ["exhibitions", "events", "brandings"];
const mediaUrls = [
  {
    label: "exhibitions",
    value: exhibitions,
  },
  {
    label: "events",
    value: exhibitions,
  },
  {
    label: "brandings",
    value: exhibitions,
  },
];
const Works = () => {
  const [selected, setSelected] = useState<string>("exhibitions");
  const logoUrlsList = mediaUrls.find(
    (item: { label: string; value: string[] }) => item.label === selected
  );
  return (
    <div className="container min-h-screen relative z-20 mx-auto flex pt-32 flex-col items-center">
      <h1 className="text-5xl font-medium text-primary">Our Works</h1>
      <p className="mt-3 text-base text-primary font-normal">
        Our portfolio of&nbsp;
        <span className="capitalize font-medium">{selected}</span>
      </p>
      <div className="mt-10 flex flex-row items-center gap-x-3">
        {works.map((item: string, index: number) => {
          return (
            <SorterButton
              key={index}
              selected={selected}
              setSelected={setSelected}
              label={item}
            />
          );
        })}
      </div>
      <div className="w-full mt-8 mb-16 columns-3 gap-4 space-y-4">
        {logoUrlsList?.value.map((logoUrl: string, index: number) => {
          return (
            <div key={index} className="break-inside-avoid">
              <img
                src={logoUrl}
                alt={selected}
                className={`w-full object-cover rounded-2xl ${
                  index === 9 && "2xl:h-[540px] xl:h-[446px] "
                }
                ${index === 2 && "2xl:h-[660px] xl:h-[558px]"}
                `}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Works;

const SorterButton = ({
  label,
  selected,
  setSelected,
}: {
  label: string;
  selected: string;
  setSelected: (x: string) => void;
}) => {
  return (
    <button
      onClick={() => setSelected(label)}
      className={`${
        selected === label ? "text-white bg-primary" : "text-primary bg-white"
      } rounded-full cursor-pointer border-2 px-9 py-2 text-sm capitalize border-primary`}
    >
      {label}
    </button>
  );
};
