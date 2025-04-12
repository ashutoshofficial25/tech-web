import React from 'react';
import { Helmet } from 'react-helmet';

interface BacklinkSEOProps {
  pageUrl: string;
  relatedLinks?: {
    url: string;
    title: string;
    description?: string;
  }[];
  industryLinks?: {
    url: string;
    title: string;
    relationship: 'partner' | 'industry' | 'resource' | 'colleague';
  }[];
  authorityLinks?: {
    url: string;
    title: string;
    description?: string;
  }[];
  socialProfiles?: {
    platform: string;
    url: string;
  }[];
}

/**
 * BacklinkSEO Component
 *
 * This component enhances SEO by implementing comprehensive backlink strategies:
 * 1. Adds structured data for related content
 * 2. Implements proper link relationships
 * 3. Adds industry-relevant outbound links with proper attributes
 * 4. Includes authority site links to boost credibility
 * 5. Adds social profile links for brand consistency
 * 6. Implements BreadcrumbList schema for better navigation signals
 * 7. Uses proper rel attributes for external links
 *
 * @param pageUrl - Current page URL (relative path)
 * @param relatedLinks - Array of internal related content links
 * @param industryLinks - Array of external industry-relevant links
 * @param authorityLinks - Array of high-authority external links
 * @param socialProfiles - Array of social media profile links
 */
const BacklinkSEO: React.FC<BacklinkSEOProps> = ({
  pageUrl,
  relatedLinks = [],
  industryLinks = [],
  authorityLinks = [],
  socialProfiles = [],
}) => {
  const siteUrl = 'https://kinindia.co';
  const canonicalUrl = `${siteUrl}${pageUrl}`;

  // Create structured data for related content
  const relatedContentSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: relatedLinks.map((link, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'WebPage',
        url: `${siteUrl}${link.url}`,
        name: link.title,
        description: link.description || link.title,
      },
    })),
  };

  // Create structured data for industry relationships
  const industryRelationshipSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url: canonicalUrl,
    relatedLink: industryLinks.map((link) => link.url),
  };

  // Create structured data for breadcrumbs
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteUrl,
      },
      ...(pageUrl !== '/'
        ? [
            {
              '@type': 'ListItem',
              position: 2,
              name:
                pageUrl.substring(1).charAt(0).toUpperCase() +
                pageUrl.substring(2),
              item: canonicalUrl,
            },
          ]
        : []),
    ],
  };

  // Create structured data for social profiles
  const socialProfilesSchema =
    socialProfiles.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Kin India',
          url: siteUrl,
          sameAs: socialProfiles.map((profile) => profile.url),
        }
      : null;

  return (
    <Helmet>
      {/* Structured Data for Related Content */}
      {relatedLinks.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify(relatedContentSchema)}
        </script>
      )}

      {/* Structured Data for Industry Relationships */}
      {industryLinks.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify(industryRelationshipSchema)}
        </script>
      )}

      {/* Structured Data for Breadcrumbs */}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>

      {/* Structured Data for Social Profiles */}
      {socialProfilesSchema && (
        <script type="application/ld+json">
          {JSON.stringify(socialProfilesSchema)}
        </script>
      )}

      {/* Link Relations for Related Content */}
      {relatedLinks.map((link, index) => (
        <link
          key={`related-${index}`}
          rel="related"
          href={`${siteUrl}${link.url}`}
          title={link.title}
        />
      ))}

      {/* Industry Relevant Links with Proper Attributes */}
      {industryLinks.map((link, index) => (
        <link
          key={`industry-${index}`}
          rel={link.relationship}
          href={link.url}
          title={link.title}
        />
      ))}

      {/* Authority Site Links */}
      {authorityLinks.map((link, index) => (
        <link
          key={`authority-${index}`}
          rel="noopener noreferrer"
          href={link.url}
          title={link.title}
        />
      ))}

      {/* Social Profile Links */}
      {socialProfiles.map((profile, index) => (
        <link
          key={`social-${index}`}
          rel="me"
          href={profile.url}
          title={profile.platform}
        />
      ))}
    </Helmet>
  );
};

export default BacklinkSEO;
