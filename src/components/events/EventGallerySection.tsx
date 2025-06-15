
import React from "react";
import OptimizedImage from "@/components/OptimizedImage";

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
  },
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
  // ... add more if you want!
];

export default function EventGallerySection() {
  return (
    <section className="relative section-padding bg-gradient-to-br from-yellow-50/75 to-amber-50/50 overflow-hidden">
      <div className="container-custom z-10 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 gradient-text underline decoration-yellow-400 decoration-4 decoration-wavy">
            Vibrant Event Memories
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600">
            Relive the joy, energy, and spirit of our wellness gatherings!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 animate-fade-in">
          {galleryImages.map((img, idx) => (
            <div
              key={img.src}
              className="rounded-lg overflow-hidden shadow-md bg-white hover:scale-105 transition-transform"
            >
              <OptimizedImage
                src={img.src}
                alt={img.alt || img.title}
                className="w-full h-56 object-cover"
                width={400}
                height={224}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="py-3 px-4">
                <span className="font-bold text-gray-800 text-base block">{img.title}</span>
                <span className="text-sm text-gray-500 block mt-1">{img.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Decorative floating dots */}
      <div className="absolute -bottom-6 left-4 w-32 h-32 bg-amber-200/50 blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute -top-8 right-6 w-28 h-20 bg-primary/30 blur-2xl rounded-full pointer-events-none"></div>
    </section>
  );
}
