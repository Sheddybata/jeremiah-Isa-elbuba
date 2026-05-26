import { bookContent, siteConfig, socialLinks } from "./content";

export function getStructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    alternateName: [
      "Jeremiah Isa El-Buba",
      "Jeremiah El-Buba",
      "Jerry Isa El-Buba",
      "Jerry El-Buba",
      "Prince Jeremiah El-Buba",
      "El-Buba",
    ],
    url: siteConfig.domain,
    email: siteConfig.email,
    jobTitle: "Administrator & Youth Leader",
    description: siteConfig.description,
    image: `${siteConfig.domain}${siteConfig.logo}`,
    sameAs: [
      ...socialLinks.map((link) => link.href),
      siteConfig.ebomiUrl,
    ],
    knowsAbout: [
      "Social Media Management",
      "Content Creation",
      "Brand Building",
      "Christian Ministry",
      "EBOMI",
    ],
    familyName: "El-Buba",
    givenName: "Jeremiah",
    nationality: {
      "@type": "Country",
      name: "Nigeria",
    },
    homeLocation: {
      "@type": "Place",
      name: "Jos, Nigeria",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.shortName,
    alternateName: [
      "jeremiahelbuba.me",
      "Jeremiah Isa El-Buba Official Website",
    ],
    url: siteConfig.domain,
    description: siteConfig.description,
    inLanguage: "en",
    author: {
      "@type": "Person",
      name: siteConfig.name,
    },
  };

  const bookSchema = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: bookContent.title,
    author: {
      "@type": "Person",
      name: siteConfig.name,
    },
    url: bookContent.buyUrl,
    image: `${siteConfig.domain}${bookContent.coverImage}`,
    description: bookContent.highlight,
    offers: {
      "@type": "Offer",
      url: bookContent.buyUrl,
      availability: "https://schema.org/InStock",
    },
  };

  return [personSchema, websiteSchema, bookSchema];
}

export function getSeoKeywords() {
  return [
    "El-Buba",
    "el-buba",
    "Jeremiah Isa El-Buba",
    "Jeremiah El-Buba",
    "Jerry Isa El-Buba",
    "Jerry El-Buba",
    "Prince Jeremiah Isa El-Buba",
    "jeremiahelbuba.me",
    "Jeremiah Isa El-Buba administrator",
    "EBOMI",
    "EBOMI Next Generation Network",
    "Prophet Isa El-Buba son",
    "youth leader Nigeria",
    "Called for It but Late to the Conversation",
    "Jos Nigeria",
  ];
}
