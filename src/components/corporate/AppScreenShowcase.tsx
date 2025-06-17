
import React, { useState, useEffect } from 'react';
import { appScreens } from '@/components/home/app-showcase/AppScreenData';
import PhoneFrame from '@/components/home/app-showcase/PhoneFrame';

const AppScreenShowcase: React.FC = () => {
  const [currentScreenIndex, setCurrentScreenIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Debug logging
  useEffect(() => {
    console.log('🖼️ Corporate AppScreenShowcase mounted');
    console.log('📱 Available screens:', appScreens.length);
    console.log('📱 Current screen:', appScreens[currentScreenIndex]);
  }, []);

  useEffect(() => {
    console.log('🔄 Corporate screen changed to:', appScreens[currentScreenIndex]);
    setImageLoaded(false);
    setImageError(false);
  }, [currentScreenIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentScreenIndex(prevIndex => (prevIndex + 1) % appScreens.length);
        setIsTransitioning(false);
      }, 250);
    }, 3000);

    return () => clearInterval(interval);
  }, [appScreens.length]);

  const handleImageLoad = () => {
    console.log('✅ Corporate image loaded successfully:', appScreens[currentScreenIndex].image);
    setImageLoaded(true);
    setImageError(false);
  };

  const handleImageError = () => {
    console.error('❌ Corporate image failed to load:', appScreens[currentScreenIndex].image);
    setImageError(true);
    setImageLoaded(false);
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div className={`transition-opacity duration-250 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        <PhoneFrame 
          screen={appScreens[currentScreenIndex]} 
          index={currentScreenIndex}
        />
      </div>
    </div>
  );
};

export default AppScreenShowcase;
