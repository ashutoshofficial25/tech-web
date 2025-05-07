import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import kinStoryPattern from '../../assets/illustration/kin-story-pattern.svg';

const CompanyHistory: React.FC = () => {
  return (
    <div className="w-full py-12 bg-gray-50 relative overflow-hidden">
      <img
        src={kinStoryPattern}
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
        alt=""
      />
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px] z-[1]"></div>
      <div className="xl:container w-full xl:px-16 lg:px-20 md:px-16 sm:px-12 xs:px-10 px-6 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2
            className="xl:text-4xl lg:text-3xl text-2xl font-medium text-primary mb-4"
            data-aos="fade-down"
          >
            Our Story
          </h2>
          <div
            className="w-20 h-1.5 bg-secondary mb-8"
            data-aos="fade-right"
            data-aos-delay="100"
          ></div>

          <div className="space-y-6 text-black/80 font-light">
            <p className="lg:text-lg" data-aos="fade-up" data-aos-delay="150">
              Mr. Bhopal Singh has been a prominent figure in the events and
              exhibition industry for close to five decades. He began his
              journey in 1981 and, in 1995, founded Cityneon Dag India Private
              Limited, which collaborated with Cityneon Events Pte Ltd to
              organize events, exhibitions, and roadshows.
            </p>

            <p className="lg:text-lg" data-aos="fade-up" data-aos-delay="200">
              Through this venture, his team gained expertise in technical
              aspects like erection and dismantling of setups. After the
              COVID-19 pandemic, he launched Kin India, which is currently
              involved in projects such as the Bihar Museum and Odisha Museum.
            </p>

            <div
              className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-primary mt-8 mb-8"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              <h3 className="text-xl font-medium text-primary mb-3">
                Core Business
              </h3>
              <p className="lg:text-lg">
                The core business of Bhopal Singh's companies revolves around
                organizing large-scale events, exhibitions, and roadshows, with
                a focus on technical execution and creative project management.
                Kin India extends this legacy, working on culturally significant
                museum projects. He also runs a company called Apex Vision,
                which is into Project Consultation and Market Expansion support.
              </p>
            </div>

            <div
              className="flex flex-col md:flex-row gap-6 mt-8"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-sm border-t-4 border-secondary">
                <h3 className="text-xl font-medium text-primary mb-3">
                  Operations in Odisha
                </h3>
                <p>
                  In Odisha, Kin India is currently operating in Bhubaneswar,
                  the state's capital and a major city on the museum project.
                  While Cuttack is another notable city nearby, Bhubaneswar
                  serves as the primary hub for its activities in the region. In
                  the past it has also worked on Bihar Museum project - from
                  planning, designing and execution.
                </p>
              </div>

              <div
                className="md:w-1/2 bg-white p-6 rounded-lg shadow-sm border-t-4 border-secondary"
                data-aos="fade-up"
                data-aos-delay="350"
              >
                <h3 className="text-xl font-medium text-primary mb-3">
                  Presence in Delhi
                </h3>
                <p>
                  Bhopal Singh's companies are indeed based in Delhi and the
                  National Capital Region (NCR). These cities have been the
                  operational base for his ventures, including Cityneon Dag
                  India and Kin India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyHistory;
