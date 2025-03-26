import React from "react";
import { IoCall, IoLocationSharp } from "react-icons/io5";
import { LuMail } from "react-icons/lu";
import aboutIllustrationBg from "../assets/illustration/hero-illustration.png";
import CustomCard from "../components/contactUs/CustomCard";
import { IoIosArrowRoundUp } from "react-icons/io";
import ContactUsForm from "../components/contactUs/ContactUsForm";
import SocialList from "../components/contactUs/SocialList";
import NewsletterForm from "../components/contactUs/NewsletterForm";
import AddressWrapper from "../components/contactUs/AddressWrapper";
interface IContactUsCardProps {
  icon: React.JSX.Element;
  value: string | string[];
  desc: string;
  module: string;
}
const contactDetails: IContactUsCardProps[] = [
  {
    icon: <IoLocationSharp className="text-4xl text-white/80" />,
    value: "    D - 148, SECTOR - 61, NOIDA 201301(U.P.), INDIA",
    desc: " Connect Near and Far, Reach out us",
    module: "location",
  },
  {
    icon: <LuMail className="text-4xl text-white/80" />,
    value: "   intro@kinindia.co",
    desc: "  Send us a message through Kin's official email",
    module: "main",
  },
  {
    icon: <IoCall className="text-4xl text-white/80" />,
    value: ["+918826204411", "+919810053543"],
    desc: " Get in touch with us by phone",
    module: "call",
  },
];
const ContactUs = () => {
  return (
    <div className="min-h-screen relative w-full">
      <img
        src={aboutIllustrationBg}
        className="w-full absolute top-32 rotate-180"
      />
      <div className="container  pb-20  relative z-20 mx-auto flex pt-32 flex-col items-center">
        <h1 className="text-5xl font-medium text-primary">Contact Us</h1>
        <p className="w-2/5 font-normal text-light mt-5 text-center">
          Contact us via email, call, or fill out the form to discover how Kin
          can help solve your problem
        </p>
        <div className="flex mt-12 flex-col items-center w-full">
          <h1 className="text-primary font-medium text-center text-2xl">
            How can we help you form
          </h1>
          <div className="flex flex-row items-center w-full px-20 mt-4 gap-x-8">
            {contactDetails?.map(
              (
                { icon, value, desc, module }: IContactUsCardProps,
                index: number
              ) => {
                return (
                  <CustomCard
                    key={index}
                    icon={icon}
                    value={value}
                    desc={desc}
                    module={module}
                  />
                );
              }
            )}
          </div>
        </div>
      </div>
      <div className="container flex mt-12 flex-col mx-auto items-center">
        <h1 className="text-5xl font-medium text-primary">Meet Us</h1>
        <div className="flex gap-x-4 mt-2.5 items-center justify-center">
          <p className="text-2xl font-normal text-light">
            We would love to hear you from
          </p>
          <div className="h-6 w-6 flex items-center justify-center rounded-sm bg-primary text-white">
            <IoIosArrowRoundUp className="rotate-45 text-xl" />
          </div>
        </div>
        <ContactUsForm />
        <SocialList />
      </div>
      <NewsletterForm />
      <div className="mt-12">
        <AddressWrapper />
      </div>
    </div>
  );
};

export default ContactUs;
