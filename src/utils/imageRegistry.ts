
// Central registry to track all images used in the application
export const IMAGE_REGISTRY = {
  // Hero and main images
  hero: {
    meltdownLogo: "/lovable-uploads/7067dee3-ca5b-449c-b05e-836f3b83b8e3.png",
    activeLifestyle: "/lovable-uploads/Activelifestyle.webp",
    happyEmployees: "/lovable-uploads/HappyEmployees.webp",
    wellnessSessions: "/lovable-uploads/WellnessSessions.webp",
    meltfitTraining: "/lovable-uploads/meltfittraning.webp",
    eventsHero: "/lovable-uploads/eventsherosection.png"
  },

  // App screenshots
  appScreens: {
    home: "/lovable-uploads/cb77fb1c-31c1-4d8b-a847-ec0e19c72cc3.png",
    checkin: "/lovable-uploads/ae12e042-70fd-4d39-84e7-1d419fc5a18d.png",
    leaderboard: "/lovable-uploads/1afeb7f0-633e-4f9d-8c6a-7c3ce21c9c97.png",
    profile: "/lovable-uploads/6bfb027a-b127-4050-97d6-30abfb2b2565.png"
  },

  // Company logos - consolidated list
  companies: {
    veda: "/lovable-uploads/Veda.png",
    karobar: "/lovable-uploads/Karobar.png",
    naamche: "/lovable-uploads/naamche.png",
    securityPal: "/lovable-uploads/SecurityPal.png",
    himalayanJava: "/lovable-uploads/HimalayanJava.png",
    flextecs: "/lovable-uploads/flextecs.png",
    golchhaGroup: "/lovable-uploads/GolchhaGroup.png",
    youngInnovations: "/lovable-uploads/YoungInnovations.png",
    leapfrog: "/lovable-uploads/leapfrog.png",
    shanker: "/lovable-uploads/shanker.png",
    kingsCollege: "/lovable-uploads/KingsCollege.png",
    ottr: "/lovable-uploads/ottr.png",
    codingMountain: "/lovable-uploads/CodingMountain.png",
    jagadambaMotors: "/lovable-uploads/JagadambaMotors.png",
    owlDigital: "/lovable-uploads/OwlDigital.png",
    kavyaSports: "/lovable-uploads/KavyaSports.png",
    stalwart: "/lovable-uploads/Stalwart.png",
    cloudFactory: "/lovable-uploads/e3eb0025-e6fd-41c8-8f07-efb1d04c635b.png",
    businessAdvantage: "/lovable-uploads/d8eecbf8-572c-4c1b-9c58-56a63e1d0830.png",
    alaya: "/lovable-uploads/1e08929c-3292-4da2-bf8c-d3652b82bf11.png",
    pmSquare: "/lovable-uploads/fd2c93b6-d24f-4360-9804-0638064fd657.png",
    careBoarding: "/lovable-uploads/00e2bcfc-5eb2-4061-82f4-05046939277a.png"
  },

  // Wellness provider logos
  wellnessProviders: {
    athleteLand: "/lovable-uploads/397c4685-d91a-452b-b4fa-51c0f4236ee7.png",
    awaClub: "/lovable-uploads/1b36a7dd-923f-4af1-8b78-0c422d5f576c.png",
    bajraSports: "/lovable-uploads/14a3b627-4a42-469a-a6a5-d6f54dbb06ad.png",
    bandsFitness: "/lovable-uploads/201cad4a-1cf7-49c2-961f-5e1c1760e01f.png",
    blackstarFitness: "/lovable-uploads/cf919e11-e768-4da0-8356-f14df6a3e4f0.png",
    beautyBeast: "/lovable-uploads/bdc58112-4650-4b00-9673-ff29a29f2db5.png",
    bobsGym: "/lovable-uploads/8acbd348-e2ba-45d5-9056-60b939d71eae.png",
    eDevGym: "/lovable-uploads/06891232-b111-41e1-aa37-b381970e4df0.png",
    ekaranaMuayThai: "/lovable-uploads/719006e5-d062-44b4-99ba-8fbd518b54e7.png",
    happyMinds: "/lovable-uploads/13b7cac1-6f5d-49af-a91d-95098751d3ee.png",
    regalFitness: "/lovable-uploads/ff546b12-05d6-4589-88bc-6dccce67bf1c.png",
    riddhiPilates: "/lovable-uploads/5c9d285f-e605-40e0-9db4-01d516e2b888.png"
  },

  // Event gallery images
  eventGallery: [
    "/lovable-uploads/16e392a3-04e0-4afa-bbb8-eaa8106a7921.png",
    "/lovable-uploads/29ca3ed5-dbd0-459c-b2aa-4c6dfe147b31.png",
    "/lovable-uploads/8f150027-05f4-49c2-88d6-be3a51dd5516.png",
    "/lovable-uploads/77b1b30c-adbf-4791-b5d8-a5b01c5148ae.png",
    "/lovable-uploads/3e239558-9215-4fed-8fa9-829ba807d03a.png",
    "/lovable-uploads/9d63cc3b-f3f0-4caf-91b3-ac03864e65b9.png",
    "/lovable-uploads/85497cd9-96a2-4d76-8e8b-ea8d9141289d.png",
    "/lovable-uploads/881bc0ab-6a86-4ea3-8844-3d9ba26a499d.png",
    "/lovable-uploads/6fcc2b3e-7d56-49ac-8ac9-5acf5e02a272.png",
    "/lovable-uploads/36a51c8f-0e5f-4ffd-a4a3-36a65581da75.png",
    "/lovable-uploads/99eba442-8cbe-4268-9a96-c8425840c696.png",
    "/lovable-uploads/39174078-db03-4dd7-b925-87ea281aad10.png",
    "/lovable-uploads/ebf6202c-c49e-4c31-8ee7-1f50a0a5af9b.png",
    "/lovable-uploads/1a1bfbc7-ce57-4f8c-a711-36e49a80401a.png"
  ]
} as const;

// Helper function to get image path with fallback
export const getImagePath = (category: keyof typeof IMAGE_REGISTRY, key: string): string => {
  const categoryImages = IMAGE_REGISTRY[category];
  if (typeof categoryImages === 'object' && !Array.isArray(categoryImages)) {
    return (categoryImages as any)[key] || '/placeholder.svg';
  }
  return '/placeholder.svg';
};

// WebP format checker and converter
export const getOptimizedImageSrc = (originalSrc: string): string => {
  // Check if browser supports WebP
  const supportsWebP = (() => {
    try {
      return document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') === 0;
    } catch {
      return false;
    }
  })();

  // If original is already WebP or not a local asset, return as is
  if (originalSrc.includes('.webp') || !originalSrc.startsWith('/lovable-uploads/')) {
    return originalSrc;
  }

  // Convert to WebP if supported and original is PNG/JPG
  if (supportsWebP && (originalSrc.includes('.png') || originalSrc.includes('.jpg') || originalSrc.includes('.jpeg'))) {
    return originalSrc.replace(/\.(png|jpg|jpeg)$/i, '.webp');
  }

  return originalSrc;
};
