
import React from 'react';

const companyLogos = [
  { id: 1, src: "/lovable-uploads/Veda.png", alt: "Veda Logo" },
  { id: 2, src: "/lovable-uploads/Karobar.png", alt: "Karobar Logo" },
  { id: 3, src: "/lovable-uploads/naamche.png", alt: "Naamche Logo" },
  { id: 4, src: "/lovable-uploads/SecurityPal.png", alt: "SecurityPal Logo" },
  { id: 5, src: "/lovable-uploads/HimalayanJava.png", alt: "Himalayan Java Logo" },
  { id: 6, src: "/lovable-uploads/flextecs.png", alt: "FlexTecs Logo" },
  { id: 7, src: "/lovable-uploads/GolchhaGroup.png", alt: "Golchha Group Logo" },
  { id: 8, src: "/lovable-uploads/YoungInnovations.png", alt: "Young Innovations Logo" },
  { id: 9, src: "/lovable-uploads/leapfrog.png", alt: "Leapfrog Logo" },
  { id: 10, src: "/lovable-uploads/shanker.png", alt: "Shanker Logo" },
  { id: 11, src: "/lovable-uploads/KingsCollege.png", alt: "Kings College Logo" },
  { id: 12, src: "/lovable-uploads/ottr.png", alt: "Ottr Logo" },
  { id: 13, src: "/lovable-uploads/CodingMountain.png", alt: "Coding Mountain Logo" },
  { id: 14, src: "/lovable-uploads/JagadambaMotors.png", alt: "Jagadamba Motors Logo" },
  { id: 15, src: "/lovable-uploads/OwlDigital.png", alt: "Owl Digital Logo" },
  { id: 16, src: "/lovable-uploads/KavyaSports.png", alt: "Kavya Sports Logo" },
  { id: 17, src: "/lovable-uploads/Stalwart.png", alt: "Stalwart Logo" }
];

const TrustedCompanies = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-yellow-50">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Trusted by Leading Companies</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We're proud to partner with forward-thinking companies who prioritize wellness.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {companyLogos.map((company) => (
            <div 
              key={company.id} 
              className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 flex items-center justify-center h-32"
            >
              <img
                src={company.src}
                alt={company.alt}
                className="max-h-16 w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;
