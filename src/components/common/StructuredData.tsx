import React from 'react';
import { Helmet } from 'react-helmet';

interface StructuredDataProps {
  type:
    | 'Organization'
    | 'Event'
    | 'LocalBusiness'
    | 'WebPage'
    | 'BreadcrumbList';
  data: any;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  let structuredData;

  switch (type) {
    case 'Organization':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: data.name || 'Kin India',
        url: data.url || 'https://kinindia.co',
        logo: data.logo || 'https://kinindia.co/src/assets/kin-logo.png',
        description:
          data.description ||
          'Kin Productions India Private Limited specializes in creating memorable events, sports management, and brand experiences.',
        address: data.address || {
          '@type': 'PostalAddress',
          streetAddress: 'D-55, Sector 80',
          addressLocality: 'NOIDA',
          postalCode: '201305',
          addressRegion: 'U.P.',
          addressCountry: 'INDIA',
        },
        contactPoint: data.contactPoint || {
          '@type': 'ContactPoint',
          telephone: '+918826204411',
          contactType: 'customer service',
        },
        sameAs: data.sameAs || [
          'https://www.facebook.com/kinindia',
          'https://www.instagram.com/kin_productions_india?igsh=aDJyZ2N1MHpveDFt',
          'https://www.linkedin.com/company/kinindia',
        ],
      };
      break;

    case 'Event':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Event',
        name: data.name,
        startDate: data.startDate,
        endDate: data.endDate,
        location: {
          '@type': 'Place',
          name: data.location?.name,
          address: data.location?.address,
        },
        image: data.image,
        description: data.description,
        organizer: {
          '@type': 'Organization',
          name: 'Kin India',
          url: 'https://kinindia.co',
        },
      };
      break;

    case 'LocalBusiness':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: data.name || 'Kin India',
        image: data.image || 'https://kinindia.co/src/assets/kin-logo.png',
        '@id': data.id || 'https://kinindia.co',
        url: data.url || 'https://kinindia.co',
        telephone: data.telephone || '+918826204411',
        address: data.address || {
          '@type': 'PostalAddress',
          streetAddress: 'D-55',
          addressLocality: ' Sector 80 , Noida',
          postalCode: '201305',
          addressRegion: 'U.P.',
          addressCountry: 'INDIA',
        },
        geo: data.geo || {
          '@type': 'GeoCoordinates',
          latitude: '28.5961',
          longitude: '77.3183',
        },
        openingHoursSpecification: data.openingHoursSpecification || {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00',
        },
        priceRange: data.priceRange || '₹₹₹',
      };
      break;

    case 'WebPage':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: data.name,
        description: data.description,
        url: data.url,
        lastReviewed:
          data.lastReviewed || new Date().toISOString().split('T')[0],
        mainEntity: {
          '@type': 'Organization',
          name: 'Kin India',
          url: 'https://kinindia.co',
        },
      };
      break;

    case 'BreadcrumbList':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: data.itemListElement || [],
      };
      break;

    default:
      structuredData = {};
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default StructuredData;
