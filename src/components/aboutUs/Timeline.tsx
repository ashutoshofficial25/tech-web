import React, { useEffect } from 'react';
import { IoIosArrowRoundUp } from 'react-icons/io';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../styles/timeline.css';
import timelinePattern from '../../assets/illustration/timeline-pattern.svg';

interface TimelineEvent {
  year: string;
  event: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: 'Phase 1',
    event: 'Discovery & Planning - Requirements gathering, technical feasibility analysis, and project scope definition',
  },
  {
    year: 'Phase 2',
    event: 'Design & Prototyping - UI/UX design, user flows, wireframing, and interactive prototypes',
  },
  {
    year: 'Phase 3',
    event: 'Development - Agile sprints, code reviews, continuous integration, and regular client updates',
  },
  {
    year: 'Phase 4',
    event: 'Quality Assurance - Comprehensive testing, security audits, and performance optimization',
  },
  {
    year: 'Phase 5',
    event: 'Deployment - CI/CD pipeline setup, cloud deployment, monitoring, and launch support',
  },
  {
    year: 'Phase 6',
    event: 'Support & Maintenance - 24/7 technical support, regular updates, and feature enhancements',
  },
];

const Timeline: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className="w-full py-20 relative overflow-hidden bg-gray-50">
      {/* Background pattern */}
      <img
        src={timelinePattern}
        className="absolute w-full h-full object-cover opacity-90 z-0"
        aria-hidden="true"
        alt=""
      />
      {/* Semi-transparent overlay for better readability */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px] z-[1]"></div>

      <div
        className="xl:container w-full xl:px-16 lg:px-20 md:px-16 sm:px-12 xs:px-10 px-6 mx-auto relative z-20"
        data-aos="fade-down"
      >
        <div className="text-center mb-16">
          <h2 className="xl:text-5xl lg:text-4xl text-3xl font-bold text-primary mb-4 inline-block relative">
            Our Development Process
            <div className="absolute -bottom-3 left-0 w-full h-1.5 bg-secondary"></div>
          </h2>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            A systematic approach to delivering high-quality software solutions
            from concept to deployment and beyond
          </p>
        </div>

        <div className="relative timeline-container">
          {/* Vertical Timeline Line */}
          <div className="timeline-line"></div>

          {/* Timeline Events */}
          {timelineEvents.map((item, index) => (
            <div
              key={index}
              className={`timeline-item flex flex-col md:flex-row items-start mb-24 relative ${
                index % 2 === 0
                  ? 'md:flex-row-reverse timeline-item-right'
                  : 'timeline-item-left'
              }`}
              data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'}
              data-aos-delay={100 + index * 50}
            >
              {/* Year Badge */}
              <div className="timeline-year-container md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-20 flex items-center justify-center">
                <div className="timeline-year-badge bg-primary text-white font-bold rounded-full w-20 h-20 flex items-center justify-center text-xl shadow-xl">
                  {item.year}
                </div>
              </div>

              {/* Content Box */}
              <div
                className={`md:w-[45%] w-full pl-10 md:pl-0 ${
                  index % 2 === 0 ? 'md:pl-0 md:pr-16' : 'md:pl-16 md:pr-0'
                } relative mt-8 md:mt-0`}
              >
                {/* Connector Line (Mobile Only) */}
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary to-secondary md:hidden"></div>

                {/* Dot Connector (Mobile Only) */}
                <div className="absolute left-0 top-3 w-4 h-4 rounded-full bg-white border-4 border-primary transform -translate-x-1/2 md:hidden"></div>

                <div className="timeline-card bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group border-t-4 border-secondary">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {item.event}
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mb-4 group-hover:w-24 transition-all duration-300"></div>
                  <p className="text-gray-600 font-normal">{item.year}</p>

                  {/* Icon indicator */}
                  <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 md:hidden">
                    <IoIosArrowRoundUp className="text-primary text-2xl rotate-90" />
                  </div>
                </div>
              </div>

              {/* Desktop connector dots with animated pulse effect */}
              <div className="timeline-dot hidden md:block">
                <div className="timeline-dot-pulse"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div
          className="flex justify-center mt-12"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="w-3 h-3 rounded-full bg-primary mx-1.5 animate-pulse"></div>
          <div className="w-3 h-3 rounded-full bg-secondary mx-1.5 animate-pulse delay-100"></div>
          <div className="w-3 h-3 rounded-full bg-primary mx-1.5 animate-pulse delay-200"></div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
