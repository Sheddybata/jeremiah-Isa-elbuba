import { books, siteConfig, socialLinks } from "./content";

function buildBookSchema(book: (typeof books)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "Book",
    name: book.title,
    author: {
      "@type": "Person",
      name: siteConfig.name,
    },
    url: book.buyUrl,
    image: `${siteConfig.domain}${book.coverImage}`,
    description: book.highlight,
    offers: {
      "@type": "Offer",
      url: book.buyUrl,
      availability: "https://schema.org/InStock",
    },
  };
}

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
    image: `${siteConfig.domain}/jay2.jpeg`,
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

  return [
    personSchema,
    websiteSchema,
    ...books.map(buildBookSchema),
  ];
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
    "A New Level Jeremiah El-Buba",
    "Jos Nigeria",
  ];
}
