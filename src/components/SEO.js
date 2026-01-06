import React from 'react';
import { Helmet } from 'react-helmet-async';

const siteDefaults = {
  title: 'Legendary One | Empowering Connectivity Across Continents',
  description: 'Legendary One provides industrial solutions, engineering, and technology services focused on innovation, performance and security.',
  url: 'https://legendaryone.in',
  image: '/logos/logo512.png',
  twitterHandle: '@LegendaryOne',
  organization: {
    name: 'Legendary One',
    email: 'legendaryoneff@gmail.com',
    telephone: '+91 733 959 6165',
    address: {
      streetAddress: '4, Eswaramoorthi Street, Kasipalayam',
      addressLocality: 'Gobi, Erode',
      addressCountry: 'India'
    }
  }
};

export default function SEO({ title, description, pathname, image, noindex = false }) {
  const metaTitle = title ? `${title} | Legendary One` : siteDefaults.title;
  const metaDesc = description || siteDefaults.description;
  const metaUrl = pathname ? `${siteDefaults.url}${pathname}` : siteDefaults.url;
  const metaImage = image || siteDefaults.image;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteDefaults.organization.name,
    url: siteDefaults.url,
    logo: `${siteDefaults.url}${siteDefaults.image}`,
    email: siteDefaults.organization.email,
    telephone: siteDefaults.organization.telephone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteDefaults.organization.address.streetAddress,
      addressLocality: siteDefaults.organization.address.addressLocality,
      addressCountry: siteDefaults.organization.address.addressCountry
    }
  };

  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDesc} />
      <meta name="robots" content={noindex ? 'noindex,follow' : 'index,follow'} />
      <link rel="canonical" href={metaUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:image" content={metaImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={siteDefaults.twitterHandle} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDesc} />
      <meta name="twitter:image" content={metaImage} />

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}