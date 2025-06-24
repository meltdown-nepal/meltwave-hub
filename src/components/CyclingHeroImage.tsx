
import React, { useState, useEffect } from 'react';

interface CyclingHeroImageProps {
  images: string[];
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  interval?: number;
}

const CyclingHeroImage: React.FC<CyclingHeroImageProps> = ({
  images,
  alt,
  className = '',
  width = 400,
  height = 300,
  interval = 2500
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="relative overflow-hidden">
      {images.map((src, index) => (
        <img
          key={src}
          src={src}
          alt={alt}
          className={`${className} transition-opacity duration-500 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'
          }`}
          loading="lazy"
          width={width}
          height={height}
        />
      ))}
    </div>
  );
};

export default CyclingHeroImage;
