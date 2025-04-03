import React from "react";
import eventAdvisoryUrl from "../../assets/icons/event-advisory.svg";
import globalTradeUrl from "../../assets/icons/global-trade.svg";
import marketGrowthUrl from "../../assets/icons/market-growth.svg";
import servicesBgIllustrationLogoUrl from "../../assets/services-illustration.png";
import Button from "../common/Button";
import { useScroll } from "../../context/ScrollContext";
const services = [
  {
    logoUrl: eventAdvisoryUrl,
    label: "Event Planning & Advisory",
    desc: "From conferences to product launches, we create seamless, high-impact business events that connect decision-makers.",
  },
  {
    logoUrl: globalTradeUrl,
    label: "Global Trade Services",
    desc: "We bridge the gap between international businesses, sourcing the right products and partners for new markets.",
  },
  {
    logoUrl: marketGrowthUrl,
    label: "Market Growth Solutions",
    desc: "From strategic market entry to business expansion, we provide insights and resources for sustainable growth.",
  },
];
const Services = () => {
  const { servicesRef, scrollToSection } = useScroll();
  return (
    <div ref={servicesRef} className="min-h-screen w-full relative  pt-32">
      <img
        src={servicesBgIllustrationLogoUrl}
        className=" absolute z-0 top-0 right-0"
      />
      <div className="container 2xl:px-28 px-14 relative z-10 mx-auto">
        <h1 className="text-6xl  text-black font-semibold  left-8">Services</h1>
        <div
          style={{
            boxShadow: "0 0 30px rgba(0,0,0,0.10)",
          }}
          className="w-full 2xl:h-[600px]  h-[540px] flex flex-col justify-between mt-12 rounded-[40px] px-20 py-16 bg-white "
        >
          <div className="flex items-center gap-x-24 justify-between">
            <div className="flex flex-col items-start">
              <p className="text-secondary text-base font-normal">
                Delivering unmatched excellence
              </p>
              <h1 className="text-[40px] leading-[1.2] text-primary mt-2 font-semibold">
                Explore services that grows your scale
              </h1>
            </div>
            <p className="text-right text-xl font-normal text-black/50">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor{" "}
            </p>
          </div>
          <div className="w-full flex flex-row gap-x-16 justify-between items-start">
            {services.map((item, index) => {
              return (
                <div key={index} className="flex flex-col items-start gap-y-3">
                  <img src={item.logoUrl} alt="logo" />
                  <h1 className="text-primary w-3/5 2xl:text-3xl text-2xl font-medium">
                    {item.label}
                  </h1>
                  <p className="2xl:text-xl text-base text-black/40 font-normal">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <Button
          title="Meet Up"
          variant="outlined"
          handleClick={() => scrollToSection("contact")}
          className="px-14 text-base py-2.5  relative mt-6 left-1/2 -translate-x-1/2"
        />
      </div>
    </div>
  );
};

export default Services;
