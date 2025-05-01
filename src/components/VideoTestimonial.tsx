
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";

interface VideoTestimonialProps {
  videoSrc: string;
  thumbnailSrc: string;
  title: string;
  name: string;
  role: string;
}

const VideoTestimonial = ({
  videoSrc,
  thumbnailSrc,
  title,
  name,
  role
}: VideoTestimonialProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-0 rounded-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <div className="aspect-video bg-gray-100 relative overflow-hidden">
          <img 
            src={thumbnailSrc} 
            alt={`${name}'s testimonial`} 
            className="w-full h-full object-cover"
            loading="lazy"
            width="350"
            height="197"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center transform group-hover:scale-110 transition-transform">
              <Play className="h-7 w-7 text-white ml-1" />
            </div>
          </div>
          {/* Only preload video when hovered */}
          {isHovered && <link rel="preload" href={videoSrc} as="video" />}
        </div>
      </div>
      <div className="p-6">
        <h4 className="font-medium text-lg mb-3 italic">"{title}"</h4>
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-amber-200 to-amber-400 flex items-center justify-center text-white font-bold">
            {name.charAt(0)}
          </div>
          <div>
            <p className="font-bold">{name}</p>
            <p className="text-sm text-gray-600">{role}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default VideoTestimonial;
