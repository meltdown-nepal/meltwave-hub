import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ContactForm } from '@/components/ContactForm';
import { MessageCircleQuestion, ArrowRight } from 'lucide-react';
import { usePreloadAssets } from '@/hooks/usePreloadAssets';

// Memoize client logos to prevent unnecessary re-renders
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
  src: "/lovable-uploads/WeBajraStudio.png",
  alt: "WeBajra Studio Logo"
}, {
  id: 19,
  src: "/lovable-uploads/NepaliGharHotel.png",
  alt: "Nepali Ghar Hotel Logo"
}, {
  id: 20,
  src: "/lovable-uploads/UBASolutions.png",
  alt: "UBA Solutions Logo"
}, {
  id: 21,
  src: "/lovable-uploads/snackon.png",
  alt: "SnackOn Logo"
}, {
  id: 22,
  src: "/lovable-uploads/e3eb0025-e6fd-41c8-8f07-efb1d04c635b.png",
  alt: "CloudFactory Logo"
}];

const Contact = () => {
  // Preload critical logos - first 8 visible in viewport
  usePreloadAssets({
    "/lovable-uploads/Veda.png": { critical: true, as: 'image' },
    "/lovable-uploads/Karobar.png": { critical: true, as: 'image' },
    "/lovable-uploads/naamche.png": { critical: true, as: 'image' },
    "/lovable-uploads/SecurityPal.png": { critical: true, as: 'image' },
    "/lovable-uploads/HimalayanJava.png": { critical: true, as: 'image' },
    "/lovable-uploads/flextecs.png": { critical: true, as: 'image' },
    "/lovable-uploads/GolchhaGroup.png": { critical: true, as: 'image' },
    "/lovable-uploads/YoungInnovations.png": { critical: true, as: 'image' },
  });
  
  return <div>
    {/* Hero Section */}
    <section className="bg-gradient-to-b from-primary/20 to-white section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact Us
          </h1>
          
          {/* FAQ Notice */}
          <div className=" p-6 mb-8 bg-transparent">
            <div className="flex items-center justify-center gap-3 mb-3">
              <MessageCircleQuestion className="h-6 w-6 text-yellow-600" />
              <h3 className="text-lg font-semibold text-gray-800">Quick Answer? Check Our FAQ First!</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Many questions are answered instantly in our comprehensive FAQ section. Save time and get immediate answers about our services, pricing, implementation, and more.
            </p>
            <Link to="/faq" className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Browse FAQ Section
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          
          <p className="text-base text-gray-600">
            Still need personal assistance? Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>
      </div>
    </section>

    {/* Contact Form Section */}
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
            <p className="mb-8">
              Fill out the form below and a member of our team will get back to you within 24 hours. Or you can contact us directly using the information provided.
            </p>

            <ContactForm />
          </div>

          <div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-8">
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-mail mr-3 text-primary flex-shrink-0"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                  <div>
                    <p className="font-bold">Email</p>
                    <a href="mailto:support@meltdownnepal.com" className="text-gray-600 hover:text-secondary">support@meltdownnepal.com</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-phone mr-3 text-primary flex-shrink-0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <div>
                    <p className="font-bold">Phone</p>
                    <a href="tel:+1-800-555-0123" className="text-gray-600 hover:text-secondary">+977 9820115144</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-map-pin mr-3 text-primary flex-shrink-0"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  <div>
                    <p className="font-bold">Address</p>
                    <address className="text-gray-600 not-italic">
                      Banasthali, Kathmandu, Nepal<br />
                      Postal Code: 44600
                    </address>
                  </div>
                </div>
              </div>
            </div>

            {/* Partner Companies Grid - With image loading optimization */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4">Trusted By :</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {clientLogos.map((logo, index) => (
                  <div key={`${logo.id}-${index}`} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <img 
                      src={logo.src} 
                      alt={logo.alt} 
                      className="h-12 w-full object-contain" 
                      draggable={false}
                      loading={index < 8 ? "eager" : "lazy"}
                      decoding="async"
                      width="150"
                      height="48"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Quick Links */}
    <section className="bg-gray-50 section-padding">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Quick Links
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link to="/corporate-wellness" className="bg-white hover:bg-primary/5 transition-colors p-6 rounded-lg shadow-md text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-building mx-auto mb-4"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>
            <h3 className="text-xl font-bold mb-2">Corporate Wellness</h3>
            <p className="text-gray-600">Explore our comprehensive wellness solutions for businesses.</p>
          </Link>

          <Link to="/providers" className="bg-white hover:bg-primary/5 transition-colors p-6 rounded-lg shadow-md text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-heart-handshake mx-auto mb-4"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"></path><path d="m18 15-2-2"></path><path d="m15 18-2-2"></path></svg>
            <h3 className="text-xl font-bold mb-2">For Providers</h3>
            <p className="text-gray-600">Join our network of wellness professionals.</p>
          </Link>

          <Link to="/academy" className="bg-white hover:bg-primary/5 transition-colors p-6 rounded-lg shadow-md text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-graduation-cap mx-auto mb-4"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path></svg>
            <h3 className="text-xl font-bold mb-2">Academy</h3>
            <p className="text-gray-600">Learn about our certification programs for wellness trainers.</p>
          </Link>

          <Link to="/meltfit" className="bg-white hover:bg-primary/5 transition-colors p-6 rounded-lg shadow-md text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-dumbbell mx-auto mb-4"><path d="m6.5 6.5 11 11"></path><path d="m21 21-1-1"></path><path d="m3 3 1 1"></path><path d="m18 22 4-4"></path><path d="m2 6 4-4"></path><path d="m3 10 7-7"></path><path d="m14 21 7-7"></path></svg>
            <h3 className="text-xl font-bold mb-2">MeltFit</h3>
            <p className="text-gray-600">Discover our specialized fitness programs for professionals.</p>
          </Link>
        </div>
      </div>
    </section>

    {/* FAQ Section */}
    

    {/* WhatsApp Community Section */}
    <section className="bg-primary/20 section-padding">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our WhatsApp Community</h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Connect with like-minded wellness enthusiasts, get exclusive tips, and stay updated with our latest events.
        </p>
        <div className="max-w-md mx-auto">
          <a href="https://l.instagram.com/?u=https%3A%2F%2Fchat.whatsapp.com%2FDctCedZET8o4HQoM3SHq9b%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAad2UyTIHESAh0IsFLxcrsDOq18A9kXUMkf1-W1OLe7Me8QpsRuLCA67hdUkPQ_aem_3LUCU1BFSQ8OLpq_W5PXyA&e=AT0VE7pgs46FlohVEtGMpz0xAIocDNYT0PH7SHdRK05fV90Ect21IrkWWR-4r8TRCBqu3ey89BJzNwdn2PuOSNExWQugj5dKcO_YqdjibMuvvgyAAEIdDA" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2 px-6 py-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-link-2">
              <path d="M9 17H7A5 5 0 0 1 7 7h2"></path>
              <path d="M15 7h2a5 5 0 1 1 0 10h-2"></path>
              <line x1="8" x2="16" y1="12" y2="12"></line>
            </svg>
            Join WhatsApp Community Now
          </a>
        </div>
      </div>
    </section>
  </div>;
};
export default Contact;
