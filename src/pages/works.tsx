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
  'Museums',
  'Exhibitions',
  'Events & Conferences',
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
      case 'Events & Conferences':
        return [...events, ...conferences];
      case 'Museums':
        return museums;
      case 'Exhibitions':
        return exhibitions;
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
        title="Our Works - Kin India | Portfolio of Events, Exhibitions & More"
        description="Explore Kin India's diverse portfolio of successful events, exhibitions, conferences, and museum projects. View our past work and see how we bring visions to life."
        keywords="Kin India portfolio, event portfolio, exhibition showcase, conference management, museum projects, brand activation examples, event case studies, project gallery"
        url="/works"
        author="Kin India"
        language="en"
      />
      <StructuredData
        type="WebPage"
        data={{
          name: 'Our Works - Kin India',
          description:
            "Explore Kin India's diverse portfolio of successful events, exhibitions, conferences, and museum projects. View our past work and see how we bring visions to life.",
          url: 'https://kinindia.co/works',
          lastReviewed: '2025-04-28',
        }}
      />
      <BacklinkSEO
        pageUrl="/works"
        relatedLinks={[
          {
            url: '/',
            title: 'Kin India - Home',
            description:
              'Discover how we can elevate your brand through unforgettable events',
          },
          {
            url: '/about',
            title: 'About Kin India',
            description:
              'Learn about our mission and vision in creating memorable brand experiences',
          },
          {
            url: '/contact',
            title: 'Contact Us',
            description: 'Get in touch with our event management experts',
          },
        ]}
        industryLinks={[
          {
            url: 'https://www.bizbash.com',
            title: 'BizBash',
            relationship: 'industry',
          },
          {
            url: 'https://www.eventmanagerblog.com/event-portfolio',
            title: 'Event Manager Blog - Portfolio Building',
            relationship: 'industry',
          },
          {
            url: 'https://www.exhibitionworld.co.uk',
            title: 'Exhibition World',
            relationship: 'industry',
          },
        ]}
        authorityLinks={[
          {
            url: 'https://www.entrepreneur.com/growing-a-business/event-marketing',
            title: 'Entrepreneur - Event Marketing',
            description: 'Expert insights on event marketing strategies',
          },
          {
            url: 'https://hbr.org/topic/marketing',
            title: 'Harvard Business Review - Marketing',
            description: 'Leading business insights on marketing strategies',
          },
        ]}
        socialProfiles={[
          {
            platform: 'LinkedIn',
            url: 'https://www.linkedin.com/company/kin-productions-india/',
          },
          {
            platform: 'Instagram',
            url: 'https://www.instagram.com/kin_productions_india?igsh=aDJyZ2N1MHpveDFt',
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
