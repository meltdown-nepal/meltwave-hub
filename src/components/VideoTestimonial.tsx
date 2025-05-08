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
  return <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-0 rounded-xl bg-white" onClick={handleClick}>
      <div className="p-6">
        <h4 className="font-medium text-lg mb-3 italic">"{title}"</h4>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-amber-200 to-amber-400 flex items-center justify-center text-white font-bold">
              {name.charAt(0)}
            </div>
            <div>
              <p className="font-bold">{name}</p>
              <p className="text-sm text-gray-600">{role}</p>
            </div>
          </div>
          <Button variant="outline" size="sm" className="flex items-center gap-2 border-amber-300 hover:bg-amber-50 text-amber-700" asChild>
            
          </Button>
        </div>
      </div>
    </Card>;
};
export default VideoTestimonial;