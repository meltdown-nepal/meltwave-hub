
import React from 'react';
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
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
      <div className="relative">
        <div className="aspect-video bg-gray-200 relative overflow-hidden">
          <img 
            src={thumbnailSrc} 
            alt={`${name}'s testimonial`} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
              <Play className="h-8 w-8 text-white ml-1" />
            </div>
          </div>
          <video src={videoSrc} className="hidden" />
        </div>
      </div>
      <div className="p-5">
        <h4 className="font-bold text-lg mb-2">{title}</h4>
        <p className="text-sm text-gray-600">
          {name}
          <span className="block">{role}</span>
        </p>
      </div>
    </Card>
  );
};

export default VideoTestimonial;
