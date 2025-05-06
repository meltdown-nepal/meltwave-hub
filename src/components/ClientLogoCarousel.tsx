import React from 'react';
const clientLogos = [{
  id: 1,
  src: "/lovable-uploads/Veda.png",
  alt: "Veda Logo"
}, {
  id: 2,
  src: "/lovable-uploads/Karobar.png",
  alt: "Karobar Logo"
}, {
  id: 3,
  src: "/lovable-uploads/naamche.png",
  alt: "Naamche Logo"
}, {
  id: 4,
  src: "/lovable-uploads/SecurityPal.png",
  alt: "SecurityPal Logo"
}, {
  id: 5,
  src: "/lovable-uploads/HimalayanJava.png",
  alt: "Himalayan Java Logo"
}, {
  id: 6,
  src: "/lovable-uploads/flextecs.png",
  alt: "FlexTecs Logo"
}, {
  id: 7,
  src: "/lovable-uploads/GolchhaGroup.png",
  alt: "Golchha Group Logo"
}, {
  id: 8,
  src: "/lovable-uploads/YoungInnovations.png",
  alt: "Young Innovations Logo"
}, {
  id: 9,
  src: "/lovable-uploads/leapfrog.png",
  alt: "Leapfrog Logo"
}, {
  id: 10,
  src: "/lovable-uploads/shanker.png",
  alt: "Shanker Logo"
}, {
  id: 11,
  src: "/lovable-uploads/KingsCollege.png",
  alt: "Kings College Logo"
}, {
  id: 12,
  src: "/lovable-uploads/ottr.png",
  alt: "Ottr Logo"
}, {
  id: 13,
  src: "/lovable-uploads/CodingMountain.png",
  alt: "Coding Mountain Logo"
}, {
  id: 14,
  src: "/lovable-uploads/JagadambaMotors.png",
  alt: "Jagadamba Motors Logo"
}, {
  id: 15,
  src: "/lovable-uploads/OwlDigital.png",
  alt: "Owl Digital Logo"
}, {
  id: 16,
  src: "/lovable-uploads/KavyaSports.png",
  alt: "Kavya Sports Logo"
}, {
  id: 17,
  src: "/lovable-uploads/Stalwart.png",
  alt: "Stalwart Logo"
}, {
  id: 18,
  src: "/lovable-uploads/e3eb0025-e6fd-41c8-8f07-efb1d04c635b.png",
  alt: "CloudFactory Logo"
}];
const ClientLogoCarousel = () => {
  return <section className="py-8 bg-yellow-50 overflow-hidden">
      <div className="max-w-screen-xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-8">Some of Our Clients</h3>
        <div className="relative overflow-hidden">
          {/* Gradient edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-yellow-50 to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-yellow-50 to-transparent" />
          
          {/* Scrolling container */}
          <div className="whitespace-nowrap flex overflow-hidden">
            <div className="animate-scroll flex min-w-max">
              {[...clientLogos, ...clientLogos].map((logo, idx) => <div key={idx} className="inline-flex flex-shrink-0 mx-12 transition-transform hover:scale-110 duration-300">
                  <img src={logo.src} alt={logo.alt} className="h-24 md:h-28 w-auto max-w-[160px] md:max-w-[200px] object-contain" draggable={false} loading="lazy" width="200" height="112" />
                </div>)}
            </div>
          </div>
        </div>
      </div>

      {/* Tailwind animation added via custom class */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </section>;
};
export default ClientLogoCarousel;