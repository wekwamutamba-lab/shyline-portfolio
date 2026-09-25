import caseStudyDetails from './caseStudyDetails';

const createProject = ({
  slug,
  title,
  category,
  gallery,
  aspect = 'landscape',
  span = 'medium',
  summary,
  assetFolder = slug,
}) => {
  const images = gallery.map(
    (fileName) => `/images/projects/${assetFolder}/${fileName}`
  );

  return {
    slug,
    title,
    category,
    image: images[0],
    gallery: images,
    aspect,
    span,
    summary,
    ...(caseStudyDetails[slug] || {}),
  };
};

export const projects = [
  createProject({
    slug: 'wander-and-kin',
    title: 'Wander & Kin — Brand Guidelines',
    category: 'Brand Identity',
    gallery: [
      'brand-book-spreads.jpg',
      'brand-strategy.jpeg',
      'logo-sketchbook-notes.jpeg',
    ],
    span: 'large',
    summary:
      'Full brand identity system, strategy, and editorial brand book for an exclusive women’s travel collective.',
  }),
  createProject({
    slug: 'wander-and-kin-stationery',
    title: 'Wander & Kin — Stationery & Cards',
    category: 'Brand Identity',
    assetFolder: 'wander-and-kin',
    gallery: [
      'cards-01.jpeg',
      'cards-02.jpeg',
      'card-set.jpeg',
    ],
    summary:
      'Tactile physical touchpoints, bespoke business card system, and warm corporate identity collateral.',
  }),
  createProject({
    slug: 'wander-and-kin-brochure',
    title: 'Wander & Kin — Travel Itinerary & Brochure',
    category: 'Graphic Design',
    assetFolder: 'wander-and-kin',
    gallery: [
      'travel-brochure.jpeg',
      'travel-information-panel.jpeg',
      'travel-collateral-cards.jpeg',
      'travel-booking-card.jpeg',
      'travel-document-set.jpeg',
    ],
    span: 'large',
    summary:
      'Editorial travel brochure exploring typographic hierarchy, pricing modules, and curated photography.',
  }),
  createProject({
    slug: 'wander-and-kin-environmental',
    title: 'Wander & Kin — Outdoor Campaign & Signage',
    category: 'Graphic Design',
    assetFolder: 'wander-and-kin',
    gallery: [
      'outdoor-banner.jpeg',
      'sandwich-board.jpeg',
      'billboard.jpeg',
    ],
    summary:
      'Environmental graphics and campaign touchpoints that extend the travel story into the places people move through.',
  }),
  createProject({
    slug: 'wander-and-kin-merch',
    title: 'Wander & Kin — Pattern & Merch',
    category: 'Visual Design',
    assetFolder: 'wander-and-kin',
    gallery: [
      'pattern.jpg',
      'tank-top.jpeg',
      'cap.jpeg',
      'mug.jpeg',
      'mug-lifestyle.jpeg',
      'pouch.jpeg',
      'jar.jpeg',
      'box.jpeg',
      'tote-bag.jpeg',
      'uniform-set.jpeg',
      'outdoor-merch-campaign.jpeg',
    ],
    summary:
      'Custom geometric brand pattern development and tactile merchandise design for members.',
  }),
  createProject({
    slug: 'shyline-visual-development',
    title: 'Shy Visual Design — Identity Development',
    category: 'Visual Design',
    assetFolder: 'shyline-visual',
    gallery: [
      'business-card-system.jpeg',
      'logo-mark-exploration.jpeg',
      'logo-icon-development.jpeg',
      'identity-card-set.jpeg',
      'social-template-system.jpeg',
      'wordmark-development.jpeg',
    ],
    span: 'large',
    summary:
      'A visual identity study for Shy Visual Design, moving from logo exploration and business cards into social templates and wordmark development.',
  }),

  createProject({
    slug: 'oak-identity',
    title: 'Oak Foundation — Identity Card System',
    category: 'Brand Identity',
    assetFolder: 'oak',
    gallery: [
      'id-card-front.jpeg',
      'id-card-back.jpeg',
      'business-card.jpeg',
    ],
    summary:
      'A navy-and-white identity direction spanning identification, security details, QR-enabled contact, and coordinated business cards.',
  }),
  createProject({
    slug: 'uncommon-brand',
    title: 'Uncommon — Brand Collateral',
    category: 'Brand Identity',
    assetFolder: 'uncommon',
    gallery: [
      'book-cover.jpeg',
      'stationery-set.jpeg',
      'digital-business-card.jpeg',
      'roll-up-banner.jpeg',
      'outdoor-banner.jpeg',
    ],
    span: 'large',
    summary:
      'A flexible brand system carried across a publication cover, stationery, digital contact card, roll-up banner, and environmental graphic.',
  }),
  createProject({
    slug: 'wiltong',
    title: 'Wiltong — Restaurant Collateral',
    category: 'Graphic Design',
    gallery: [
      'takeaway-menu.jpeg',
      'takeaway-menu-mockup.jpeg',
      'food-menu.jpeg',
    ],
    summary:
      'Restaurant print and promotional touchpoints, from takeaway and food menus to realistic mockups that bring the food brand to life.',
  }),
  createProject({
    slug: 'plumbing-hub',
    title: 'Plumbing Hub Digital Product',
    category: 'Visual Design',
    gallery: ['mobile-app-hero.jpg'],
    span: 'large',
    summary:
      'End-to-end UX/UI web application connecting homeowners with vetted, trusted trade specialists.',
  }),
];
