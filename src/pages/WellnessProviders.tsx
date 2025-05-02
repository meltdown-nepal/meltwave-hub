
import React from 'react';
import LogoCarousel from '../components/LogoCarousel';

const wellnessLogos = [
  { id: 1, src: "/lovable-uploads/397c4685-d91a-452b-b4fa-51c0f4236ee7.png", alt: "Athlete Land" },
  { id: 2, src: "/lovable-uploads/1b36a7dd-923f-4af1-8b78-0c422d5f576c.png", alt: "AWA Club" },
  { id: 3, src: "/lovable-uploads/14a3b627-4a42-469a-a6a5-d6f54dbb06ad.png", alt: "Bajra Sports Centre" },
  { id: 4, src: "/lovable-uploads/201cad4a-1cf7-49c2-961f-5e1c1760e01f.png", alt: "Bands Fitness" },
  { id: 5, src: "/lovable-uploads/cf919e11-e768-4da0-8356-f14df6a3e4f0.png", alt: "Blackstar Fitness" },
  { id: 6, src: "/lovable-uploads/bdc58112-4650-4b00-9673-ff29a29f2db5.png", alt: "Beauty & The Beast Fitness Station" },
  { id: 7, src: "/lovable-uploads/8acbd348-e2ba-45d5-9056-60b939d71eae.png", alt: "Bob's Gym" },
  { id: 8, src: "/lovable-uploads/06891232-b111-41e1-aa37-b381970e4df0.png", alt: "E Dev Gym" },
  { id: 9, src: "/lovable-uploads/719006e5-d062-44b4-99ba-8fbd518b54e7.png", alt: "Ekarana Muay Thai" },
  { id: 10, src: "/lovable-uploads/13b7cac1-6f5d-49af-a91d-95098751d3ee.png", alt: "Happy Minds" },
  { id: 11, src: "/lovable-uploads/ff546b12-05d6-4589-88bc-6dccce67bf1c.png", alt: "Regal Fitness" },
  { id: 12, src: "/lovable-uploads/5c9d285f-e605-40e0-9db4-01d516e2b888.png", alt: "Riddhi Pilates Studios" },
  { id: 13, src: "/lovable-uploads/53894216-71b2-4325-ab38-8344563caa74.png", alt: "Super Fitness" },
  { id: 14, src: "/lovable-uploads/d7f9a37a-1fe9-488e-b4e3-cbcef131cafe.png", alt: "Tapout Fitness" },
  { id: 15, src: "/lovable-uploads/98c39ae5-f842-422f-89a8-b8b626e945ad.png", alt: "Three Lions Fitness Center" },
  { id: 16, src: "/lovable-uploads/20d63b1f-921f-4e7c-b6a6-e9e511c135e0.png", alt: "Tranquility Spa" }
];

const WellnessProviders = () => {
  return (
    <div>
      <section className="py-20 bg-gradient-to-b from-primary/20 to-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Wellness Providers
          </h1>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Discover our network of premium wellness partners committed to helping you achieve your health goals.
          </p>
        </div>
      </section>
      
      <LogoCarousel 
        logos={wellnessLogos} 
        title="Our Wellness Network" 
        description="These amazing gyms, studios, and wellness centers help power the Meltdown experience."
      />
      
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Join Our Provider Network</h2>
              <p className="mb-6">
                Partner with Meltdown to grow your business and connect with new clients passionate about wellness.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="bg-primary/20 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span>Increase your visibility and client base</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/20 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span>Access our corporate wellness programs</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/20 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span>Streamline operations with our management tools</span>
                </li>
              </ul>
              <a href="/providers" className="btn-primary">Become a Provider</a>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4">Provider Benefits</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded shadow-sm">
                  <h4 className="font-bold">Enhanced Visibility</h4>
                  <p className="text-sm">Reach thousands of potential clients through our platform.</p>
                </div>
                <div className="bg-white p-4 rounded shadow-sm">
                  <h4 className="font-bold">Corporate Partnerships</h4>
                  <p className="text-sm">Connect with our corporate clients for recurring business.</p>
                </div>
                <div className="bg-white p-4 rounded shadow-sm">
                  <h4 className="font-bold">Simple Onboarding</h4>
                  <p className="text-sm">Join our network in just a few simple steps.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WellnessProviders;
