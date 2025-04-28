
import React from 'react';

const providers = [
  {
    id: 1,
    src: "/lovable-uploads/Veda.png",
    alt: "Wellness Provider 1",
    name: "Yoga Studio"
  },
  {
    id: 2,
    src: "/lovable-uploads/Karobar.png",
    alt: "Wellness Provider 2",
    name: "Fitness Center"
  },
  {
    id: 3,
    src: "/lovable-uploads/naamche.png",
    alt: "Wellness Provider 3",
    name: "Meditation Center"
  },
  {
    id: 4,
    src: "/lovable-uploads/SecurityPal.png",
    alt: "Wellness Provider 4",
    name: "Health Coach"
  },
  {
    id: 5,
    src: "/lovable-uploads/HimalayanJava.png",
    alt: "Wellness Provider 5",
    name: "Nutrition Expert"
  }
];

const WellnessProviders = () => {
  return (
    <section className="py-8 bg-yellow-50">
      <div className="max-w-screen-xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-8">Our Wellness Providers</h3>
        <div className="overflow-hidden">
          <div className="flex justify-center items-center space-x-12 py-4">
            {providers.map((provider) => (
              <div key={provider.id} className="flex-shrink-0">
                <img 
                  src={provider.src} 
                  alt={provider.alt} 
                  className="h-16 w-40 object-contain"
                  draggable={false}
                />
                <p className="mt-2 text-sm font-medium text-gray-600">{provider.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WellnessProviders;
