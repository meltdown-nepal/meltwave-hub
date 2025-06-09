
import React, { useState, useRef, useEffect } from 'react';

interface HeroImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

const HeroImage: React.FC<HeroImageProps> = ({
  src,
  alt,
  className = '',
  width = 1920,
  height = 1080,
  priority = true
}) => {
  const [currentSrc, setCurrentSrc] = useState<string>('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Generate multiple sizes for hero images
  const generateHeroSources = () => {
    const isLocalAsset = src.startsWith('/') && !src.startsWith('//');
    
    if (!isLocalAsset) {
      return { webp: src, fallback: src };
    }

    // For hero images, prioritize WebP with multiple sizes
    const baseUrl = src.replace(/\.(jpe?g|png)$/i, '');
    const extension = src.match(/\.(jpe?g|png)$/i)?.[1] || 'jpg';
    
    return {
      webp: `${baseUrl}.webp`,
      fallback: src
    };
  };

  const sources = generateHeroSources();

  useEffect(() => {
    // Try WebP first, fallback to original
    const tryLoadWebP = async () => {
      try {
        const img = new Image();
        img.onload = () => {
          setCurrentSrc(sources.webp);
          setIsLoaded(true);
        };
        img.onerror = () => {
          // Fallback to original format
          setCurrentSrc(sources.fallback);
        };
        img.src = sources.webp;
      } catch {
        setCurrentSrc(sources.fallback);
      }
    };

    tryLoadWebP();
  }, [sources.webp, sources.fallback]);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setCurrentSrc(sources.fallback);
    }
  };

  const handleLoad = () => {
    setIsLoaded(true);
    console.log(`Hero image loaded: ${currentSrc}`);
  };

  // Generate responsive srcSet for hero images
  const generateHeroSrcSet = () => {
    if (!src.startsWith('/')) return undefined;
    
    return [
      `${currentSrc} 1920w`,
      `${currentSrc} 1280w`,
      `${currentSrc} 768w`,
      `${currentSrc} 640w`
    ].join(', ');
  };

  return (
    <picture>
      {/* WebP source for modern browsers */}
      <source 
        srcSet={currentSrc.includes('.webp') ? generateHeroSrcSet() : undefined}
        type="image/webp"
        sizes="100vw"
      />
      {/* Fallback for older browsers */}
      <img
        src={currentSrc}
        srcSet={generateHeroSrcSet()}
        sizes="100vw"
        alt={alt}
        className={`${className} ${!isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        onLoad={handleLoad}
        onError={handleError}
        style={{
          aspectRatio: `${width}/${height}`,
        }}
      />
    </picture>
  );
};

export default HeroImage;
