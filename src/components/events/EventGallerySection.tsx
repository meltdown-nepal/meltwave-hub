
import React, { useState } from "react";
import OptimizedImage from "@/components/OptimizedImage";
import EventGalleryModal from "./EventGalleryModal";
import { Images } from "lucide-react";

// Gallery images for each event
const EVENTS = [{
  key: "wednesday-run",
  title: "Wednesday Run Clubs",
  subtitle: "Join us for our weekly community runs!",
  images: [
    {
      src: "/lovable-uploads/55217816-bf30-4150-a365-8d449c852bc2.png",
      title: "Wednesday Run Club Warm-up",
      alt: "People in active wear doing warm-up stretches in a park with birds flying overhead and Jeep showroom in background"
    },
    {
      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
      title: "City evening fun run",
      alt: "People running in a city park at dusk"
    },
    {
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
      title: "Team Relay Race",
      alt: "Group of athletes performing relay handoff"
    },
    {
      src: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=600&q=80",
      title: "Mindfulness in Nature",
      alt: "Mindfulness meditation by a flowing river"
    },
    {
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      title: "Nature Wellness Retreat",
      alt: "Tranquil lake surrounded by vibrant trees"
    }
  ]
}, {
  key: "pet-hike",
  title: "Pet Friendly Hikes",
  subtitle: "Adventure hikes where your furry friends are welcome.",
  images: [{
    src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=600&q=80",
    title: "Pet Friendly Hike",
    alt: "Hikers with dogs walking on a mountain trail"
  }, {
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80",
    title: "Mountain Hike",
    alt: "Mountain landscape with a few hikers"
  }, {
    src: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?auto=format&fit=crop&w=600&q=80",
    title: "Hiking Herd",
    alt: "Herd of sheep running on grassy hillside"
  }, {
    src: "https://images.unsplash.com/photo-1439886183900-e79ec0057170?auto=format&fit=crop&w=600&q=80",
    title: "Forest Friends",
    alt: "Deer in a sunlit forest"
  }]
}, {
  key: "java-run",
  title: "Java Run Venture",
  subtitle: "Our biggest community run, in partnership with Himalayan Java.",
  images: [{
    src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80",
    title: "Fun Community Gathering",
    alt: "People gathered running and drinking coffee"
  }, {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
    title: "Team Building Exercise",
    alt: "Coworkers engaging in race with big smiles"
  }, {
    src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=600&q=80",
    title: "Outdoor Meditation",
    alt: "People doing yoga outdoors with mountain backdrop"
  }, {
    src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80",
    title: "Dance Wellness Event",
    alt: "Happy group dancing together outside"
  }]
}];
export default function EventGallerySection() {
  const [openModal, setOpenModal] = useState<{
    open: boolean;
    eventIdx: number;
  }>({
    open: false,
    eventIdx: 0
  });
  function handleOpen(idx: number) {
    setOpenModal({
      open: true,
      eventIdx: idx
    });
  }
  function handleClose() {
    setOpenModal({
      open: false,
      eventIdx: 0
    });
  }
  return <section className="relative section-padding bg-gradient-to-br from-yellow-50/75 to-amber-50/50 overflow-hidden">
      <div className="container-custom z-10 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Vibrant Event Memories
          </h2>
          {/* Removed the normal <p> caption as requested */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
          {EVENTS.map((ev, i) => <button key={ev.key} className="group rounded-2xl bg-gradient-to-br from-white to-yellow-50 shadow-lg border border-primary/20 hover:scale-105 transition-transform flex flex-col cursor-pointer focus-visible:ring-2 focus-visible:ring-primary" onClick={() => handleOpen(i)} tabIndex={0} aria-label={`View images from ${ev.title}`} type="button">
              <div className="relative aspect-video w-full rounded-t-2xl overflow-hidden">
                <OptimizedImage src={ev.images[0].src} alt={ev.images[0].alt || ev.images[0].title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" width={600} height={340} sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" priority={i === 0} />
                {/* Hover title overlay */}
                <span className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <span className="text-white text-xl font-bold drop-shadow">{ev.title}</span>
                </span>
                
              </div>
              
            </button>)}
        </div>
      </div>
      {/* Per-event modal */}
      <EventGalleryModal open={openModal.open} onOpenChange={v => setOpenModal({
      open: v,
      eventIdx: openModal.eventIdx
    })} images={EVENTS[openModal.eventIdx].images} initialIndex={0} />
      {/* Decorative floating dots */}
      <div className="absolute -bottom-6 left-4 w-32 h-32 bg-amber-200/50 blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute -top-8 right-6 w-28 h-20 bg-primary/30 blur-2xl rounded-full pointer-events-none"></div>
    </section>;
}
