
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
      className="overflow-hidden group hover:shadow-lg transition-all duration-300"
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
            <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
              <Play className="h-6 w-6 text-white ml-1" />
            </div>
          </div>
          {/* Only preload video when hovered */}
          {isHovered && <link rel="preload" href={videoSrc} as="video" />}
        </div>
      </div>
      <div className="p-5">
        <h4 className="font-medium text-lg mb-3">"{title}"</h4>
        <p className="font-semibold text-primary">
          {name}
          <span className="block text-sm text-gray-600 font-normal">{role}</span>
        </p>
      </div>
    </Card>
  );
};

export default VideoTestimonial;
