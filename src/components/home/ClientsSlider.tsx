import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/home.css'; // Assuming this contains necessary base styles
import clients from '../../constants/media'; // Assuming this is an array of logo URLs

const ClientsSlider = ({ className }: { className?: string }) => {
  const settings = {
    infinite: true,
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    // Removed gap-y-6 as padding/margin handles spacing now
    <div className={`${className} w-full flex flex-col items-center`}>
      <p className="md:text-xl sm:text-base text-sm text-light font-normal mb-6">
        {' '}
        {/* Added mb-6 for spacing */}
        Trusted by{' '}
        <span className="font-semibold text-primary">100+ clients</span>
      </p>
      {/* Removed mt-2, mask-wrapper. Added padding directly. */}
      <div className="w-full slider-container bg-gray-100 py-8 rounded-lg">
        <Slider {...settings}>
          {clients?.map((clientLogoUrl: string, index: number) => {
            return (
              // Container for each slide item
              // 1. Added fixed height (e.g., h-24) - Adjust as needed!
              // 2. Kept flex centering (!items-center)
              // 3. Adjusted padding (px-4 md:px-8)
              <div
                className="!flex h-24 px-4 md:px-8 !items-center !justify-center"
                key={index}
              >
                {/* Image tag */}
                <img
                  // 4. Set fixed height (e.g., h-12) - Adjust as needed!
                  // 5. Set width to auto to maintain aspect ratio
                  // 6. Use object-contain to fit logo without cropping/stretching
                  // 7. Added max-w-full as a safeguard against very wide logos overflowing horizontally
                  className="h-12 w-auto object-contain max-w-full"
                  src={clientLogoUrl}
                  alt={`Client Logo ${index + 1}`} // Added alt text for accessibility
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default ClientsSlider;
