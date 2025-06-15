
import React, { useState } from "react";
import OptimizedImage from "@/components/OptimizedImage";
import EventGalleryModal from "./EventGalleryModal";
import { Images } from "lucide-react";

// Gallery images for each event
const EVENTS = [
  {
    key: "wednesday-run",
    title: "Wednesday Run Clubs",
    subtitle: "Join us for our weekly community runs!",
    images: [
      {
        src: "/lovable-uploads/c7877f89-f497-4cf4-8cb7-63d1104518c3.png",
        title: "Community Run Event",
        alt: "Group of people running together in a park"
      },
      {
        src: "/lovable-uploads/f7972173-3fe4-4946-b941-6a5882f9788b.png",
        title: "Team Relay Race",
        alt: "Happy office team during relay race"
      },
      {
        src: "/lovable-uploads/398c4685-d91a-452b-b4fa-51c0f4236ee7.png",
        title: "Mindfulness in Nature",
        alt: "Small group practicing mindfulness beside a stream"
      },
      {
        src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        title: "Nature Wellness Retreat",
        alt: "Body of water surrounded by trees"
      }
    ]
  },
  {
    key: "pet-hike",
    title: "Pet Friendly Hikes",
    subtitle: "Adventure hikes where your furry friends are welcome.",
    images: [
      {
        src: "/lovable-uploads/761279cd-bc8e-49ce-897a-1b52b2f6e467.png",
        title: "Pet Friendly Hike",
        alt: "Group of hikers with dogs enjoying an outdoor trek"
      },
      {
        src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=600&q=80",
        title: "Mountain Hike",
        alt: "Two deer in mountains, pet-friendly landscape"
      },
      {
        src: "/lovable-uploads/14a3b627-4a42-469a-a6a5-d6f54dbb06ad.png",
        title: "Group Hiking",
        alt: "People hiking together with their pets"
      },
      {
        src: "/lovable-uploads/6a8d21a6-d52d-4b26-84f3-c858e2d69169.png",
        title: "Cycle Club",
        alt: "Group biking event, often with dogs"
      }
    ]
  },
  {
    key: "java-run",
    title: "Java Run Venture",
    subtitle: "Our biggest community run, in partnership with Himalayan Java.",
    images: [
      {
        src: "/lovable-uploads/a57234a5-bf11-4976-b2b0-beb02e66466d.png",
        title: "Community Fun Events",
        alt: "Group of people doing handstand with friends watching"
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
        src: "/lovable-uploads/b4863552-29ab-4f82-a691-89315c7a3124.png",
        title: "Dance Wellness Event",
        alt: "Group dance class in progress"
      }
    ]
  }
];

export default function EventGallerySection() {
  const [openModal, setOpenModal] = useState<{ open: boolean; eventIdx: number }>({ open: false, eventIdx: 0 });

  function handleOpen(idx: number) {
    setOpenModal({ open: true, eventIdx: idx });
  }

  function handleClose() {
    setOpenModal({ open: false, eventIdx: 0 });
  }

  return (
    <section className="relative section-padding bg-gradient-to-br from-yellow-50/75 to-amber-50/50 overflow-hidden">
      <div className="container-custom z-10 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 gradient-text underline decoration-yellow-400 decoration-4 decoration-wavy">
            Vibrant Event Memories
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600">
            Relive the joy, energy, and spirit of our signature events!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
          {EVENTS.map((ev, i) => (
            <button
              key={ev.key}
              className="group rounded-2xl bg-gradient-to-br from-white to-yellow-50 shadow-lg border border-primary/20 hover:scale-105 transition-transform flex flex-col cursor-pointer focus-visible:ring-2 focus-visible:ring-primary"
              onClick={() => handleOpen(i)}
              tabIndex={0}
              aria-label={`View images from ${ev.title}`}
              type="button"
            >
              <div className="relative aspect-video w-full rounded-t-2xl overflow-hidden">
                <OptimizedImage
                  src={ev.images[0].src}
                  alt={ev.images[0].alt || ev.images[0].title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  width={600}
                  height={340}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={i === 0}
                />
                <span className="absolute top-3 right-3 bg-yellow-300/80 rounded-full p-2 flex items-center justify-center">
                  <Images className="text-primary" size={28} />
                </span>
              </div>
              <div className="p-5 grow flex flex-col items-start">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{ev.title}</h3>
                <p className="text-gray-700 mb-2">{ev.subtitle}</p>
                <span className="ml-auto mt-auto text-primary font-semibold underline underline-offset-4 decoration-yellow-400">
                  View Gallery →
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
      {/* Per-event modal */}
      <EventGalleryModal
        open={openModal.open}
        onOpenChange={v => setOpenModal({ open: v, eventIdx: openModal.eventIdx })}
        images={EVENTS[openModal.eventIdx].images}
        initialIndex={0}
      />
      {/* Decorative floating dots */}
      <div className="absolute -bottom-6 left-4 w-32 h-32 bg-amber-200/50 blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute -top-8 right-6 w-28 h-20 bg-primary/30 blur-2xl rounded-full pointer-events-none"></div>
    </section>
  );
}

