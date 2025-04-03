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
  title = 'Kin India - Elevating Brands Through Unforgettable Events',
  description = 'Kin Productions India Private Limited specializes in creating memorable events, sports management, and brand experiences. We craft unforgettable moments for top brands across India.',
  keywords = 'event management, brand experiences, sports events, Kin India, corporate events, brand activation, event production',
  image = '/src/assets/kin-logo.png',
  url = 'https://kinindia.co',
  type = 'website',
  language = 'en',
  author = 'Kin India',
}) => {
  const siteUrl = 'https://kinindia.co';
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
      <meta property="og:site_name" content="Kin India" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${siteUrl}${image}`} />
      <meta name="twitter:creator" content="@kinindia" />
    </Helmet>
  );
};

export default SEO;
