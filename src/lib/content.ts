/**
 * Site content — swap placeholder values with real copy, links, and images before launch.
 */

export const siteConfig = {
  name: "Prince Jeremiah Isa El-Buba",
  shortName: "Jeremiah El-Buba",
  domain: "https://www.jeremiahelbuba.me",
  logo: "/logo.png",
  email: "jeremiahisaelbuba@gmail.com",
  ebomiUrl: "https://www.ebomi.org/",
  tagline: "Leader. Administrator. Kingdom Visionary.",
  description:
    "Official website of Prince Jeremiah Isa El-Buba (Jerry Isa El-Buba, Jerry El-Buba) — young Nigerian leader, administrator, and author passionate about youth development, humanitarian impact, and kingdom advancement through EBOMI.",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Faith", href: "#faith" },
  { label: "Book", href: "#book" },
  { label: "Contact", href: "#contact" },
] as const;

// Portrait photos in /public
export const images = {
  heroPortrait: "/jay2.jpeg",
  heroPortraitSecondary: "/jey.jpeg",
  aboutPortrait: "/jerry.jpg",
  aboutPortraitSecondary: "/jerry2.jpg",
  aboutPortraitBeside: "/538725244_749977361143320_6380781666643499770_n.jpg",
};

export const aboutContent = {
  bio: [
    "Jeremiah Isa El-Buba is a young Nigerian leader, administrator, and purpose-driven visionary passionate about youth development, humanitarian impact, leadership, and kingdom advancement. He currently serves in various administrative and operational capacities within the ministry and humanitarian structures connected to Prophet Dr. Isa El-Buba, contributing to strategic coordination, logistics, media initiatives, and outreach operations both within and outside Nigeria.",
    "Born with a strong passion for service, leadership, and societal transformation, Jeremiah has been actively involved in projects focused on humanitarian support, youth mobilization, organizational development, and media engagement. He is known for his dedication to excellence, loyalty to vision, and commitment to personal growth and leadership development under mentorship and spiritual guidance.",
    "Jeremiah is also actively involved in the EBOMI Next Generation Network (ENGN), a movement focused on raising and empowering young people spiritually, mentally, and socially to become responsible leaders and change agents in society. Through this platform and other initiatives, he continues to contribute to programs centered on revival, youth empowerment, social impact, and community transformation.",
    "Academically, he is pursuing a degree in Computer Science at Redeemer's University, Ede, Osun State, Nigeria, with interests spanning technology, administration, communication, media strategy, and organizational leadership.",
    "With a growing burden for national transformation and kingdom impact, Jeremiah Isa El-Buba remains committed to building systems, supporting vision, raising people, and contributing meaningfully to the advancement of both ministry and society.",
  ],
  pullQuote:
    "Committed to building systems, supporting vision, raising people, and contributing meaningfully to the advancement of both ministry and society.",
};

export const services = [
  {
    title: "Youth Development",
    description:
      "Mobilizing and empowering young people through ENGN and related initiatives — raising leaders who carry revival, responsibility, and social impact into society.",
    icon: "users" as const,
  },
  {
    title: "Administrative Leadership",
    description:
      "Strategic coordination, logistics, and operational support within ministry and humanitarian structures — building systems that help vision move with excellence.",
    icon: "layers" as const,
  },
  {
    title: "Humanitarian & Outreach",
    description:
      "Contributing to outreach operations and humanitarian projects focused on community transformation, service, and meaningful impact within and outside Nigeria.",
    icon: "target" as const,
  },
  {
    title: "Media & Communication",
    description:
      "Supporting media initiatives, communication strategy, and organizational engagement that amplify message, mission, and kingdom advancement.",
    icon: "pen" as const,
  },
] as const;

export const faithContent = {
  // SWAP: Replace with your favorite verse and reference
  verse:
    "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
  reference: "Proverbs 3:5–6",
  // SWAP: Personalize this reflection
  reflection:
    "Growing up in a home anchored in ministry taught me that faith is lived daily — not performed on Sundays. I carry that same posture into my work: listening first, serving faithfully, and trusting that excellence itself can be an act of worship.",
};

export const bookContent = {
  title: "Called for It but Late to the Conversation",
  hook: "Have you ever felt like you missed your chance?",
  coverImage: "/book.jpg",
  buyUrl: "https://selar.com/0057965988",
  body: [
    "Like time passed you by… and it's too late to step into what God called you to do? That's exactly what this book is about.",
    "From Moses who spent 40 years in the wilderness, to Jonah who ran away from God's will, to Peter who denied Jesus, the Bible is filled with people who seemed late to their calling — yet God still used them.",
    "This book is a conversation with you, the dreamer who wonders if it's too late. It's for the believer battling regret, or the one questioning if God can still use them.",
    "This isn't just another Christian book. It's an invitation to hope, restoration, and finishing strong — no matter when you start.",
  ],
  highlight:
    "Delay is not denial. If you're still breathing, God is still writing your story.",
};

export const galleryImages = [
  {
    src: "/lifeinframes/525657009_729843796490010_2171617332982988200_n.jpg",
    alt: "Jeremiah El-Buba — life in frames",
    span: "tall" as const,
  },
  {
    src: "/lifeinframes/530676316_738553735619016_7028919921500159397_n.jpg",
    alt: "Jeremiah El-Buba — life in frames",
    span: "default" as const,
  },
  {
    src: "/lifeinframes/536047311_745815198226203_5164169214597003993_n.jpg",
    alt: "Jeremiah El-Buba — life in frames",
    span: "wide" as const,
  },
  {
    src: "/lifeinframes/538954767_751607714313618_7388548720734705394_n.jpg",
    alt: "Jeremiah El-Buba — life in frames",
    span: "default" as const,
  },
  {
    src: "/lifeinframes/539495569_751607754313614_6995992809003080213_n.jpg",
    alt: "Jeremiah El-Buba — life in frames",
    span: "tall" as const,
  },
  {
    src: "/lifeinframes/539579098_749977354476654_3369771260025297455_n.jpg",
    alt: "Jeremiah El-Buba — life in frames",
    span: "default" as const,
  },
  {
    src: "/lifeinframes/539996198_750848684389521_4432098822979319023_n.jpg",
    alt: "Jeremiah El-Buba — life in frames",
    span: "wide" as const,
  },
  {
    src: "/lifeinframes/540266313_750848687722854_7397088304780478004_n.jpg",
    alt: "Jeremiah El-Buba — life in frames",
    span: "default" as const,
  },
  {
    src: "/lifeinframes/540466938_751607707646952_2136293675309406208_n.jpg",
    alt: "Jeremiah El-Buba — life in frames",
    span: "default" as const,
  },
  {
    src: "/lifeinframes/546105838_1191527586340602_1324420666090210822_n.jpg",
    alt: "Jeremiah El-Buba — life in frames",
    span: "wide" as const,
  },
  {
    src: "/lifeinframes/610127443_18092381083943946_8315695537201161870_n.jpg",
    alt: "Jeremiah El-Buba — life in frames",
    span: "default" as const,
  },
  {
    src: "/lifeinframes/610650097_18339930811236031_4928874388428481352_n.jpg",
    alt: "Jeremiah El-Buba — life in frames",
    span: "tall" as const,
  },
  {
    src: "/lifeinframes/jerryelbuba.jpg",
    alt: "Jeremiah El-Buba — portrait",
    span: "default" as const,
  },
  {
    src: "/lifeinframes/jerryisaelbuba.jpg",
    alt: "Jeremiah El-Buba — portrait",
    span: "default" as const,
  },
] as const;

export const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/jeremiahisaelbuba/",
    icon: "instagram" as const,
  },
  {
    label: "Facebook",
    href: "https://web.facebook.com/profile.php?id=100083931880390",
    icon: "facebook" as const,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/2349018535658",
    icon: "whatsapp" as const,
  },
] as const;
