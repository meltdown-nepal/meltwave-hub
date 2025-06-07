
import React, { useState } from 'react';

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
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  // Handle image load errors by falling back to original src
  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(src); // Fallback to original image
    }
  };

  // For local assets, try WebP first, but fallback gracefully
  const isLocalAsset = src.startsWith('/') && !src.startsWith('//');
  const webpSrc = isLocalAsset && src.match(/\.(jpe?g|png)$/i) 
    ? `${src.substring(0, src.lastIndexOf('.'))}.webp` 
    : src;

  // Use WebP for first attempt if it's a local asset, otherwise use original
  const initialSrc = isLocalAsset && !hasError ? webpSrc : src;

  return (
    <img
      src={initialSrc}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      onError={handleError}
      onLoad={() => console.log(`Image loaded successfully: ${initialSrc}`)}
    />
  );
};

export default OptimizedImage;
