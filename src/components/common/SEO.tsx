import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  language?: string;
  author?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'ReactCube.tech - Transform Your Business with Cutting-Edge Tech Solutions',
  description = 'ReactCube Technologies delivers innovative web and mobile applications, custom software solutions, CRM/HRM systems, and industry-specific platforms for healthcare, education, and real estate sectors.',
  keywords = 'web development, mobile app development, custom software, CRM, HRM, healthcare software, education technology, real estate tech, ReactCube, software solutions, cloud services',
  image = '/logo.png',
  url = 'https://reactcube.tech',
  type = 'website',
  language = 'en',
  author = 'ReactCube Technologies',
}) => {
  const siteUrl = 'https://reactcube.tech';
  const canonicalUrl = `${siteUrl}${url}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="language" content={language} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#ffffff" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      <meta property="og:site_name" content="ReactCube Technologies" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${siteUrl}${image}`} />
      <meta name="twitter:creator" content="@reactcube" />
    </Helmet>
  );
};

export default SEO;
