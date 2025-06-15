
import React from "react";
import EventGalleryImage from "@/components/EventGalleryImage";

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
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Highlights from Past Events</h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600">
            Relive the energy and inspiration from our wellness community gatherings
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img) => (
            <div key={img.src}>
              <EventGalleryImage
                src={img.src}
                title={img.title}
                alt={img.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
