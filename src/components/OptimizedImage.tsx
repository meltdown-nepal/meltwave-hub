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
  const webpSrc = src.match(/\.(jpe?g|png)$/i) ? `${src.substring(0, src.lastIndexOf('.'))}.webp` : src;

  // Determine if image is a local asset
  const isLocalAsset = src.startsWith('/') && !src.startsWith('//');
  return;
};
export default OptimizedImage;