import React, { useState } from "react";
import EventGalleryImage from "@/components/EventGalleryImage";
import EventGalleryModal from "./EventGalleryModal";

// Expanded gallery images for "tons" effect
const galleryImages = [
  // Featured/hero images (keep these first for main view)
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
  },
  // More: Add several event and placeholder images for variety
  {
    src: "/lovable-uploads/146c33ba-fd46-45de-9faa-e6b33ca16566.jpg",
    title: "Yoga in the Park",
    alt: "Group yoga session on green grass"
  },
  {
    src: "/lovable-uploads/970fc08a-beac-4b49-9f57-a5ba9f74356a.png",
    title: "Office Team Workout",
    alt: "Coworkers doing a team fitness challenge"
  },
  {
    src: "/lovable-uploads/201cad4a-1cf7-49c2-961f-5e1c1760e01f.png",
    title: "Outdoor Meditation",
    alt: "People meditating outdoors at sunset"
  },
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    title: "Nature Wellness Retreat",
    alt: "Body of water surrounded by trees"
  },
  {
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80",
    title: "Hiking Group at the Summit",
    alt: "Foggy mountain summit with hikers"
  },
  {
    src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=600&q=80",
    title: "Evening Stretch",
    alt: "Yellow lights between trees, people stretching"
  },
  {
    src: "/lovable-uploads/f7972173-3fe4-4946-b941-6a5882f9788b.png",
    title: "Team Relay Race",
    alt: "Happy office team during relay race"
  },
  {
    src: "/lovable-uploads/b4863552-29ab-4f82-a691-89315c7a3124.png",
    title: "Dance Wellness Event",
    alt: "Group dance class in progress"
  },
  {
    src: "/lovable-uploads/6a8d21a6-d52d-4b26-84f3-c858e2d69169.png",
    title: "Cycle Club",
    alt: "Group biking event"
  },
  {
    src: "/lovable-uploads/398c4685-d91a-452b-b4fa-51c0f4236ee7.png",
    title: "Mindfulness in Nature",
    alt: "Small group practicing mindfulness beside a stream"
  },
  // ... Add as many as needed for a lively look!
];

export default function EventGallerySection() {
  // For modal functionality
  const [modalOpen, setModalOpen] = useState(false);
  const [modalStartIdx, setModalStartIdx] = useState(0);

  // Only show first 3 as preview in the main grid
  const previewImages = galleryImages.slice(0, 3);

  function handleImageClick(idx: number) {
    setModalStartIdx(idx);
    setModalOpen(true);
  }

  return (
    <section className="relative section-padding bg-gradient-to-br from-yellow-50/75 to-amber-50/50 overflow-hidden">
      <div className="container-custom z-10 relative">
        <div
          className="text-center mb-12 cursor-pointer"
          tabIndex={0}
          role="button"
          aria-label="Expand gallery options"
          onClick={() => { setModalStartIdx(0); setModalOpen(true); }}
          onKeyDown={e => { if (e.key === "Enter") { setModalStartIdx(0); setModalOpen(true); } } }
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 gradient-text animate-slide-up underline decoration-yellow-400 decoration-4 decoration-wavy">
            Vibrant Event Memories
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600 animate-fade-in">Relive the joy, energy, and spirit of our wellness gatherings!</p>
        </div>
        <div 
          className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6 mb-6 md:mb-0 animate-fade-in"
          style={{breakInside: "avoid"}}
        >
          {previewImages.map((img, idx) => (
            <div
              key={img.src}
              className="break-inside-avoid mb-6 last:mb-0 group transition-all"
              onClick={() => handleImageClick(idx)}
              tabIndex={0}
              role="button"
              aria-label={`Open all event gallery options starting from ${img.title}`}
              onKeyDown={e => { if (e.key === 'Enter') handleImageClick(idx); }}
            >
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
      {/* Modal with FULL gallery browsing */}
      <EventGalleryModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        images={galleryImages}
        initialIndex={modalStartIdx}
      />
      {/* Decorative floating dots */}
      <div className="absolute -bottom-6 left-4 w-32 h-32 bg-amber-200/50 blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute -top-8 right-6 w-28 h-20 bg-primary/30 blur-2xl rounded-full pointer-events-none"></div>
    </section>
  );
}
