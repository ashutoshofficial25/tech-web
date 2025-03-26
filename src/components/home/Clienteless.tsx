import React from "react";
import { IoIosArrowRoundUp } from "react-icons/io";
const clientelesInfo = [
  {
    title: "Who We Serve",
    desc: "Our clientele includes businesses, brands, entrepreneurs, and individuals seeking expert event planning, branding, conferences, and exhibition management. We work with corporate organizations, startups, and professionals to bring their vision to life with creativity and precision.",
  },
  {
    title: "Our Commitment",
    desc: "We are dedicated to delivering exceptional experiences, from high-profile conferences to bespoke brand activations. With a focus on innovation, seamless execution, and attention to detail, we ensure that every event and branding project leaves a lasting impact.",
  },
];
const Clienteless = () => {
  return (
    <div className="container px-16 mx-auto pt-40">
      <h1 className="text-6xl font-semibold text-primary">Clienteles</h1>
      <div className="w-full mt-8 flex gap-x-24 flex-row justify-between items-start">
        {clientelesInfo?.map(
          (item: { title: string; desc: string }, index: number) => {
            return (
              <CustomInfoCard key={index} title={item.title} desc={item.desc} />
            );
          }
        )}
      </div>
    </div>
  );
};

export default Clienteless;

const CustomInfoCard = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div className="w-full flex flex-col items-start">
      <div className="flex flex-row gap-x-2 items-center">
        <div className="h-6 w-6 flex items-center justify-center rounded-sm bg-primary text-white">
          <IoIosArrowRoundUp className="rotate-45 text-xl" />
        </div>
        <h1 className="text-3xl font-medium text-primary">{title}</h1>
      </div>
      <p className="font-normal mt-5 text-light text-base">{desc}</p>
    </div>
  );
};
