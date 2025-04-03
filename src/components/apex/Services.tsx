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
    <div
      ref={servicesRef}
      className="min-h-screen w-full relative pt-16 sm:pt-20 md:pt-24 lg:pt-32 overflow-x-hidden"
    >
      <img
        src={servicesBgIllustrationLogoUrl}
        className="absolute z-0 top-0 right-0 max-w-[150%] sm:max-w-full md:max-w-[80%] lg:max-w-full opacity-30 sm:opacity-50 md:opacity-80 lg:opacity-100"
      />
      <div className="container 2xl:px-28 xl:px-14 lg:px-10 md:px-8 px-4 relative z-10 mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-black font-semibold left-0 md:left-8">
          Services
        </h1>
        <div
          style={{
            boxShadow: "0 0 30px rgba(0,0,0,0.10)",
          }}
          className="w-full flex flex-col justify-between mt-8 md:mt-12 rounded-[20px] md:rounded-[30px] lg:rounded-[40px] px-6 sm:px-10 md:px-14 lg:px-20 py-8 md:py-12 lg:py-16 bg-white"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-y-6 md:gap-y-0 md:gap-x-12 lg:gap-x-24 justify-between">
            <div className="flex flex-col items-start">
              <p className="text-secondary text-sm md:text-base font-normal">
                Delivering unmatched excellence
              </p>
              <h1 className="text-2xl sm:text-3xl md:text-[32px] lg:text-[40px] leading-[1.2] text-primary mt-2 font-semibold">
                Explore services that grows your scale
              </h1>
            </div>
            <p className="text-left md:text-right text-base md:text-lg lg:text-xl font-normal text-black/50">
              We specialise in turning opportunities into action organising
              impactful events, advising on strategic deals, and driving
              international trade.
            </p>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-y-10 sm:gap-y-0 sm:gap-x-8 md:gap-x-12 lg:gap-x-16 justify-items-center sm:justify-items-start mt-8 md:mt-12">
            {services.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col items-center sm:items-start gap-y-3 w-full max-w-[300px] sm:w-auto"
                >
                  <img
                    src={item.logoUrl}
                    alt="logo"
                    className="h-12 w-12 sm:h-auto sm:w-auto"
                  />
                  <h1 className="text-primary w-full sm:w-4/5 md:w-3/5 2xl:text-3xl text-xl sm:text-2xl font-medium text-center sm:text-left">
                    {item.label}
                  </h1>
                  <p className="2xl:text-xl text-sm sm:text-base text-black/40 font-normal text-center sm:text-left">
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
          className="px-8 sm:px-10 md:px-14 text-sm sm:text-base py-2 sm:py-2.5 relative mt-6 left-1/2 -translate-x-1/2 mx-auto"
        />
      </div>
    </div>
  );
};

export default Services;
