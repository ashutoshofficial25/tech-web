import React from 'react';

interface OptimizedImageProps {
  src: string;
  webpSrc?: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
}

/**
 * OptimizedImage component that uses WebP format with PNG/JPG fallback
 * This component automatically handles modern image format delivery
 * while maintaining compatibility with older browsers.
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  webpSrc,
  alt,
  className = '',
  width,
  height,
  loading = 'lazy',
}) => {
  // If webpSrc is not provided, generate it from the original src
  const webpSource = webpSrc || src.replace(/\.(png|jpg|jpeg)$/i, '.webp');

  return (
    <picture>
      <source srcSet={webpSource} type="image/webp" />
      <img
        src={src}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={loading}
      />
    </picture>
  );
};

export default OptimizedImage;
