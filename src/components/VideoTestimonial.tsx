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
      
    </Card>;
};
export default VideoTestimonial;