import React from "react";
import { Helmet } from "react-helmet-async";

const SITE_URL = "https://legendaryone.in";
const SITE_NAME = "Legendary One";

const siteDefaults = {
  title: "Legendary One | World-Class Web & Mobile App Development Agency",
  description:
    "Legendary One is India's top-rated web and mobile app development agency. We build custom websites, React apps, e-commerce stores, mobile apps, SaaS products & brand identities that drive real business growth. 5+ years, 100% client satisfaction.",
  url: SITE_URL,
  image: `${SITE_URL}/logos/logo512.png`,
  twitterHandle: "@LegendaryOneIn",
  locale: "en_IN",
  organization: {
    name: SITE_NAME,
    legalName: "Legendary One",
    email: "legendaryoneff@gmail.com",
    telephone: "+91-7339596165",
    address: {
      streetAddress: "4, Eswaramoorthi Street, Kasipalayam",
      addressLocality: "Gobi",
      addressRegion: "Tamil Nadu",
      postalCode: "638454",
      addressCountry: "IN",
    },
    geo: { latitude: "11.1078", longitude: "77.4418" },
    sameAs: [
      "https://www.instagram.com/legendaryone.in",
      "https://www.linkedin.com/company/legendary-one",
      "https://twitter.com/LegendaryOneIn",
      "https://g.page/r/Cb2SDZGcOe-HEBM",
    ],
    services: [
      "Web Development",
      "Mobile App Development",
      "UI/UX Design",
      "E-commerce Development",
      "Software Development",
      "Branding & Identity Design",
      "Cloud & DevOps",
      "Technical Solutions",
      "College Project Guidance",
    ],
  },
};

export default function SEO({
  title,
  description,
  pathname,
  image,
  keywords,
  noindex = false,
  pageType = "website",
  breadcrumbs = null,
}) {
  const metaTitle = title || siteDefaults.title;
  const metaDesc = description || siteDefaults.description;
  const metaUrl = pathname ? `${SITE_URL}${pathname}` : SITE_URL;
  const metaImage = image
    ? image.startsWith("http")
      ? image
      : `${SITE_URL}${image}`
    : siteDefaults.image;

  const org = siteDefaults.organization;

  const organizationSchema = {
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    legalName: org.legalName,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logos/logo512.png`,
      width: 512,
      height: 512,
    },
    image: `${SITE_URL}/logos/logo512.png`,
    description: siteDefaults.description,
    email: org.email,
    telephone: org.telephone,
    address: {
      "@type": "PostalAddress",
      streetAddress: org.address.streetAddress,
      addressLocality: org.address.addressLocality,
      addressRegion: org.address.addressRegion,
      postalCode: org.address.postalCode,
      addressCountry: org.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: org.geo.latitude,
      longitude: org.geo.longitude,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
    priceRange: "$$",
    currenciesAccepted: "INR, USD",
    paymentAccepted: "Cash, Credit Card, Bank Transfer, UPI",
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "Australia" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "IT & Digital Services",
      itemListElement: org.services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s },
      })),
    },
    sameAs: org.sameAs,
    knowsAbout: org.services,
    foundingDate: "2019",
    numberOfEmployees: { "@type": "QuantitativeValue", value: "10" },
  };

  const webSiteSchema =
    pageType === "home"
      ? {
          "@type": "WebSite",
          "@id": `${SITE_URL}/#website`,
          name: SITE_NAME,
          url: SITE_URL,
          description: siteDefaults.description,
          inLanguage: "en-IN",
          potentialAction: {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: `${SITE_URL}/projects?search={search_term_string}`,
            },
            "query-input": "required name=search_term_string",
          },
        }
      : null;

  const breadcrumbSchema = breadcrumbs
    ? {
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: crumb.name,
          item: `${SITE_URL}${crumb.path}`,
        })),
      }
    : null;

  const webPageSchema = {
    "@type": "WebPage",
    "@id": `${metaUrl}#webpage`,
    url: metaUrl,
    name: metaTitle,
    description: metaDesc,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-IN",
  };

  const graph = [
    organizationSchema,
    webSiteSchema,
    breadcrumbSchema,
    webPageSchema,
  ].filter(Boolean);

  const jsonLd = { "@context": "https://schema.org", "@graph": graph };

  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDesc} />
      <meta
        name="robots"
        content={
          noindex
            ? "noindex,follow"
            : "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
        }
      />
      <link rel="canonical" href={metaUrl} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={SITE_NAME} />
      <meta httpEquiv="content-language" content="en-IN" />

      {/* Geographic */}
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.placename" content="Gobi, Erode, Tamil Nadu, India" />
      <meta name="geo.position" content="11.1078;77.4418" />
      <meta name="ICBM" content="11.1078, 77.4418" />

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content={siteDefaults.locale} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />
      <meta property="og:image:alt" content={`${SITE_NAME} — ${metaTitle}`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={siteDefaults.twitterHandle} />
      <meta name="twitter:creator" content={siteDefaults.twitterHandle} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDesc} />
      <meta name="twitter:image" content={metaImage} />
      <meta name="twitter:image:alt" content={`${SITE_NAME} — ${metaTitle}`} />

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}
