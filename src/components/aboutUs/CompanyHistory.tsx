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
            About ReactCube Technologies
          </h2>
          <div
            className="w-20 h-1.5 bg-secondary mb-8"
            data-aos="fade-right"
            data-aos-delay="100"
          ></div>

          <div className="space-y-6 text-black/80 font-light">
            <p className="lg:text-lg" data-aos="fade-up" data-aos-delay="150">
              ReactCube Technologies was founded with a vision to democratize technology
              and empower businesses of all sizes with world-class software solutions.
              Our team of experienced developers, designers, and strategists work together
              to create solutions that not only meet technical requirements but also
              deliver exceptional user experiences.
            </p>

            <p className="lg:text-lg" data-aos="fade-up" data-aos-delay="200">
              We specialize in building custom software, web applications, and mobile apps
              for diverse industries including healthcare, education, real estate, and
              e-commerce. Our approach combines agile methodologies with best practices in
              software development to ensure on-time delivery and superior quality.
            </p>

            <div
              className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-primary mt-8 mb-8"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              <h3 className="text-xl font-medium text-primary mb-3">
                Our Mission & Values
              </h3>
              <p className="lg:text-lg mb-4">
                We deliver innovative, scalable, and user-centric technology solutions
                that drive business growth and digital transformation. Our core values
                guide everything we do:
              </p>
              <ul className="list-disc list-inside space-y-2 lg:text-lg">
                <li><strong>Innovation:</strong> Constantly exploring new technologies and methodologies</li>
                <li><strong>Quality:</strong> Uncompromising commitment to code quality and security</li>
                <li><strong>Partnership:</strong> Building long-term relationships based on trust</li>
                <li><strong>Transparency:</strong> Clear communication and honest timelines</li>
              </ul>
            </div>

            <div
              className="flex flex-col md:flex-row gap-6 mt-8"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-sm border-t-4 border-secondary">
                <h3 className="text-xl font-medium text-primary mb-3">
                  Technology Expertise
                </h3>
                <p>
                  Our technical expertise spans across modern frameworks and languages
                  including React, Node.js, Python, Flutter, and cloud platforms like AWS
                  and Azure. We stay updated with the latest industry trends to deliver
                  cutting-edge solutions that give your business a competitive advantage.
                </p>
              </div>

              <div
                className="md:w-1/2 bg-white p-6 rounded-lg shadow-sm border-t-4 border-secondary"
                data-aos="fade-up"
                data-aos-delay="350"
              >
                <h3 className="text-xl font-medium text-primary mb-3">
                  Industry Focus
                </h3>
                <p>
                  We serve diverse industries with specialized solutions: Healthcare
                  (HIPAA-compliant systems), Education (e-learning platforms), Real Estate
                  (property management), E-commerce (scalable marketplaces), and Enterprise
                  (digital transformation). Each solution is tailored to meet specific
                  industry requirements and compliance standards.
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
