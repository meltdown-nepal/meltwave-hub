
import React from "react";
import EventGalleryImage from "@/components/EventGalleryImage";

// Updated: use a "masonry" variable-width responsive grid and catchy heading
const galleryImages = [
  {
    src: "/lovable-uploads/a57234a5-bf11-4976-b2b0-beb02e66466d.png",
    title: "Community Fun Events",
    alt: "Group of people doing handstand with friends watching"
  },
  {
    src: "/lovable-uploads/761279cd-bc8e-49ce-897a-1b52b2f6e467.png",
    title: "Pet Friendly Hike",
    alt: "Group of hikers with dogs enjoying an outdoor trek"
  },
  {
    src: "/lovable-uploads/c7877f89-f497-4cf4-8cb7-63d1104518c3.png",
    title: "Community Run Event",
    alt: "Group of people running together in a park"
  }
];

export default function EventGallerySection() {
  return (
    <section className="relative section-padding bg-gradient-to-br from-yellow-50/75 to-amber-50/50 overflow-hidden">
      <div className="container-custom z-10 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 gradient-text animate-slide-up">Vibrant Event Memories</h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600 animate-fade-in">
            Relive the joy, energy, and spirit of our wellness gatherings!
          </p>
        </div>
        <div 
          className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6 mb-6 md:mb-0 animate-fade-in"
          style={{breakInside: "avoid"}}
        >
          {galleryImages.map((img, idx) => (
            <div key={img.src} className="break-inside-avoid mb-6 last:mb-0 group transition-all">
              <EventGalleryImage
                src={img.src}
                title={img.title}
                alt={img.alt}
                icon={idx === 1 ? "heart" : "magnifying-glass"}
              />
            </div>
          ))}
        </div>
      </div>
      {/* Decorative floating dots at corners */}
      <div className="absolute -bottom-6 left-4 w-32 h-32 bg-amber-200/50 blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute -top-8 right-6 w-28 h-20 bg-primary/30 blur-2xl rounded-full pointer-events-none"></div>
    </section>
  );
}
