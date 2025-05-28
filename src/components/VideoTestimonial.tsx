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
  linkTo = "/"
}: VideoTestimonialProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-0 rounded-xl bg-white transform hover:-translate-y-1 hover:scale-[1.02]" onClick={handleClick}>
      <div className="p-6 rounded-lg bg-gray-50">
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-200">"{title}"</h3>
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