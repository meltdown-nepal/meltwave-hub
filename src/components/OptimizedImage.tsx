
import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  width?: number;
  height?: number;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  priority = false,
  width,
  height
}) => {
  // Convert image src to WebP format if it's a JPG or PNG
  const webpSrc = src.match(/\.(jpe?g|png)$/i) 
    ? `${src.substring(0, src.lastIndexOf('.'))}.webp` 
    : src;
  
  // Determine if image is a local asset
  const isLocalAsset = src.startsWith('/') && !src.startsWith('//');
  
  return (
    <img 
      src={src} 
      alt={alt} 
      loading={priority ? "eager" : "lazy"}
      fetchpriority={priority ? "high" : "auto"}
      decoding="async"
      width={width}
      height={height}
      onError={(e) => {
        // Fallback to original source if WebP fails
        if ((e.target as HTMLImageElement).src !== src) {
          (e.target as HTMLImageElement).src = src;
        }
      }}
      className={`${className} object-contain`} 
    />
  );
};

export default OptimizedImage;
