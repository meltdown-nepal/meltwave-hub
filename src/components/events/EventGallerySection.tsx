
import React from "react";
import OptimizedImage from "@/components/OptimizedImage";

const EVENTS = [{
  key: "wednesday-run",
  title: "Wednesday Run Clubs",
  subtitle: "Join us for our weekly community runs!",
  images: [{
    src: "/lovable-uploads/55217816-bf30-4150-a365-8d449c852bc2.png",
    title: "Wednesday Run Club Warm-up",
    alt: "People in active wear doing warm-up stretches in a park with birds flying overhead and Jeep showroom in background"
  }, {
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    title: "City evening fun run",
    alt: "People running in a city park at dusk"
  }, {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
    title: "Team Relay Race",
    alt: "Group of athletes performing relay handoff"
  }, {
    src: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=600&q=80",
    title: "Mindfulness in Nature",
    alt: "Mindfulness meditation by a flowing river"
  }, {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    title: "Nature Wellness Retreat",
    alt: "Tranquil lake surrounded by vibrant trees"
  }, {
    src: "/lovable-uploads/d0ecc7b2-ea5e-4f69-a192-950f0b573e9b.png",
    title: "Wednesday Run Club at Meltdown",
    alt: "Participants gathering outside a coffeeshop for Wednesday Run Club event"
  }]
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
    src: "/lovable-uploads/5ef9d378-6d8a-42fe-8412-5e9955e47beb.png",
    title: "Team posing at Java Run Venture 2025",
    alt: "Four runners posing with TEAM 50 bibs in front of Java Run Venture 2025 event banner"
  }, {
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
  return (
    <section className="section-padding bg-gradient-to-t from-yellow-50/80 to-white">
      <div className="container-custom">
        <div className="grid gap-12 md:grid-cols-3">
          {EVENTS.map(event => (
            <div key={event.key} className="group rounded-2xl shadow bg-white border border-yellow-100 hover:shadow-lg transition overflow-hidden flex flex-col">
              <div className="relative w-full aspect-[3/2] md:aspect-[5/3] overflow-hidden">
                {/* Show first image only */}
                <OptimizedImage
                  src={event.images[0].src}
                  alt={event.images[0].alt}
                  className="w-full h-full object-cover transition group-hover:scale-105"
                  width={480}
                  height={320}
                  sizes="55vw"
                  priority
                />
                {/* Small overlay with number of photos */}
                <div className="absolute top-2 right-2 bg-black/65 text-white text-xs px-2 py-1 rounded shadow">
                  {event.images.length} photos
                </div>
              </div>
              <div className="flex-1 flex flex-col px-6 py-5">
                <div className="text-xl font-bold mb-1 text-yellow-900">{event.title}</div>
                <div className="text-gray-600 mb-4">{event.subtitle}</div>
                {/* Static thumbnail strip */}
                <div className="flex gap-2 overflow-x-auto mt-auto pb-2 min-h-[40px]">
                  {event.images.map((img, idx) => (
                    <div
                      key={img.src}
                      className="rounded-md border-2 border-yellow-100 bg-white min-w-[48px] w-12 h-10 overflow-hidden"
                    >
                      <OptimizedImage
                        src={img.src}
                        alt={img.alt}
                        className="object-cover w-full h-full"
                        width={48}
                        height={40}
                        sizes="48px"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
