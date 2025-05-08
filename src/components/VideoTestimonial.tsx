import React from 'react';
import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
interface VideoTestimonialProps {
  videoSrc?: string;
  title: string;
  name: string;
  role: string;
  thumbnailSrc?: string;
  onClick?: () => void;
  linkTo?: string;
}
const VideoTestimonial = ({
  title,
  name,
  role,
  onClick,
  thumbnailSrc = "/lovable-uploads/471e4a35-9cef-4248-a8c7-bd276fadf115.jpg",
  linkTo = "/"
}: VideoTestimonialProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-0 rounded-xl bg-white transform hover:-translate-y-1 hover:scale-[1.02]" onClick={handleClick}>
      <div className="relative">
        <div className="relative aspect-video overflow-hidden bg-gray-100">
          <img src={thumbnailSrc} alt={`${name} - ${role}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors duration-200">{title}</h3>
        <div className="flex items-center">
          <div>
            <p className="font-bold">{name}</p>
            <p className="text-gray-500 text-sm">{role}</p>
          </div>
        </div>
      </div>
    </Card>;
};
export default VideoTestimonial;