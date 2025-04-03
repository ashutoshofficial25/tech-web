import React from "react";
import { ScrollProvider } from "../context/ScrollContext";
import Header from "../components/apex/Header";
import Hero from "../components/apex/Hero";
import About from "../components/apex/About";
import Services from "../components/apex/Services";
import Business from "../components/apex/Business";
import Newsletter from "../components/apex/Newsletter";
import ContactUs from "../components/apex/ContactUs";
import Footer from "../components/apex/Footer";
import ClientsSlider from "../components/home/ClientsSlider";

const Apex = () => {
  return (
    <ScrollProvider>
      <Header />
      <Hero />
      <About />
      <Services />
      <Business />
      <ClientsSlider />
      <Newsletter />
      <ContactUs />
      <Footer />
    </ScrollProvider>
  );
};

export default Apex;
