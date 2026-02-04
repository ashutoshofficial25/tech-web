import React, { useState, useEffect, useMemo } from 'react';
import { exhibitions, events, conferences, museums } from '../constants/media';
import ImageGridLayout from '../layout/ImageGridLayout';
import SEO from '../components/common/SEO';
import StructuredData from '../components/common/StructuredData';
import BacklinkSEO from '../components/common/BacklinkSEO';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Categories order with 'All' last
const worksCategories = [
  'Web Applications',
  'Mobile Apps',
  'Healthcare',
  'Education',
  'Real Estate',
  'All',
];

interface MediaItem {
  details: {
    name: string;
    desc: string;
  };
  url: string;
}

const Works = () => {
  // Default to the first category in the list
  const [selected, setSelected] = useState<string>(worksCategories[0]);

  const selectedMedia = useMemo(() => {
    switch (selected) {
      case 'All':
        return [...museums, ...exhibitions, ...events, ...conferences];
      case 'Web Applications':
        return exhibitions;
      case 'Mobile Apps':
        return events;
      case 'Healthcare':
        return museums.slice(0, 10);
      case 'Education':
        return conferences;
      case 'Real Estate':
        return museums.slice(10, 20);
      default:
        return [];
    }
  }, [selected]);

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-out-quad',
      offset: 120,
      // Consider disabling AOS on mobile if performance is an issue
      // disable: 'mobile',
    });
  }, []);

  useEffect(() => {
    // Refresh AOS when the underlying media changes height/position
    // Using a small timeout can sometimes help if refresh happens too early
    const timer = setTimeout(() => {
      AOS.refresh();
    }, 100); // 100ms delay, adjust if needed or remove if not necessary
    return () => clearTimeout(timer); // Cleanup timer on unmount or before next effect run
  }, [selectedMedia]);

  return (
    <div className="w-full px-6 sm:px-10 md:px-16 lg:px-8 xl:container xl:px-4 min-h-screen relative z-10 mx-auto flex pt-32 flex-col items-center">
      {/* SEO, StructuredData, BacklinkSEO remain the same */}
      <SEO
        title="Our Portfolio - ReactCube | Web & Mobile App Development Projects"
        description="Explore ReactCube's portfolio of web applications, mobile apps, healthcare systems, education platforms, and real estate solutions. View our successful software projects."
        keywords="ReactCube portfolio, web development projects, mobile app showcase, healthcare software, education technology, real estate tech, software case studies, tech portfolio"
        url="/works"
        author="ReactCube Technologies"
        language="en"
      />
      <StructuredData
        type="WebPage"
        data={{
          name: 'Our Portfolio - ReactCube Technologies',
          description:
            "Explore ReactCube's portfolio of web applications, mobile apps, healthcare systems, and industry-specific software solutions.",
          url: 'https://reactcube.tech/works',
          lastReviewed: '2025-04-28',
        }}
      />
      <BacklinkSEO
        pageUrl="/works"
        relatedLinks={[
          {
            url: '/',
            title: 'ReactCube - Home',
            description:
              'Discover cutting-edge technology solutions for your business',
          },
          {
            url: '/about',
            title: 'About ReactCube',
            description:
              'Learn about our mission to deliver innovative software solutions',
          },
          {
            url: '/contact',
            title: 'Contact Us',
            description: 'Get in touch with our technology experts',
          },
        ]}
        industryLinks={[
          {
            url: 'https://www.producthunt.com',
            title: 'Product Hunt',
            relationship: 'industry',
          },
          {
            url: 'https://www.awwwards.com',
            title: 'Awwwards - Web Design Excellence',
            relationship: 'industry',
          },
          {
            url: 'https://dribbble.com',
            title: 'Dribbble',
            relationship: 'industry',
          },
        ]}
        authorityLinks={[
          {
            url: 'https://www.entrepreneur.com/technology',
            title: 'Entrepreneur - Technology',
            description: 'Expert insights on technology and innovation',
          },
          {
            url: 'https://hbr.org/topic/technology',
            title: 'Harvard Business Review - Technology',
            description: 'Leading insights on technology strategies',
          },
        ]}
        socialProfiles={[
          {
            platform: 'LinkedIn',
            url: 'https://www.linkedin.com/company/reactcube-tech/',
          },
          {
            platform: 'Instagram',
            url: 'https://www.instagram.com/reactcube_tech',
          },
        ]}
      />

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
        {selected === 'All'
          ? 'Showcasing our diverse portfolio'
          : `Our portfolio of ${selected}`}
      </p>

      {/* --- FIX: Apply AOS to the container, not individual buttons --- */}
      <div
        className="md:mt-10 sm:mt-7 mt-4 flex flex-wrap justify-center items-center md:gap-x-3 sm:gap-x-2 gap-x-1.5 gap-y-2"
        data-aos="fade-up" // Animate the whole group
        data-aos-delay="150" // Delay slightly after text
      >
        {worksCategories.map((categoryLabel) => (
          <SorterButton
            key={categoryLabel} // Stable key
            selected={selected}
            setSelected={setSelected}
            label={categoryLabel}
            // No index needed for AOS delay here anymore
          />
        ))}
      </div>

      {/* Image Grid */}
      <div className="w-full md:mt-8 sm:mt-5 mt-3 mb-16 grid lg:grid-cols-3 grid-cols-2 gap-2 md:gap-4">
        {selectedMedia.map((media: MediaItem, index: number) => (
          <ImageGridLayout
            key={`${media.url}-${index}`}
            className="break-inside-avoid"
            details={media.details}
            data-aos="zoom-in-up"
            data-aos-delay={(index % 3) * 100 + 50} // Keep individual image animation
          >
            <img
              src={media.url}
              alt={media.details.name || `Portfolio image for ${selected}`}
              loading="lazy"
              className="w-full object-cover h-full rounded-xl md:rounded-2xl"
            />
          </ImageGridLayout>
        ))}
        {selectedMedia.length === 0 && (
          <p className="col-span-full text-center text-gray-500 mt-8">
            No items found for this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default Works;

// --- SorterButton Component ---
interface SorterButtonProps {
  label: string;
  selected: string;
  setSelected: (value: string) => void;
  // index prop removed as it's no longer needed for AOS delay
}

const SorterButton: React.FC<SorterButtonProps> = ({
  label,
  selected,
  setSelected,
}) => {
  const handleClick = () => {
    if (label !== selected) {
      setSelected(label);
    }
  };

  const isSelected = selected === label;
  const buttonClasses = `
    rounded-full cursor-pointer border border-primary
    md:px-8 px-5 md:py-2 py-1.5 md:text-sm text-xs font-medium
    transition-all duration-300 ease-in-out
    ${
      isSelected
        ? 'text-white bg-primary'
        : 'text-primary bg-white hover:bg-primary/10'
    }
  `;

  return (
    <button
      onClick={handleClick}
      className={buttonClasses}
      // --- FIX: Removed data-aos attributes from individual buttons ---
    >
      {label}
    </button>
  );
};
