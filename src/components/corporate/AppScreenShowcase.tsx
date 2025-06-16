
import React, { useState, useEffect } from 'react';

const AppScreenShowcase: React.FC = () => {
  const appScreens = [
    {
      title: "Home Dashboard",
      image: "/lovable-uploads/cb77fb1c-31c1-4d8b-a847-ec0e19c72cc3.png"
    },
    {
      title: "Explore Gyms",
      image: "/lovable-uploads/e2299fe3-1e22-4533-90d2-f7eda65b5f30.png"
    },
    {
      title: "QR Check-In",
      image: "/lovable-uploads/ae12e042-70fd-4d39-84e7-1d419fc5a18d.png"
    },
    {
      title: "Leaderboard",
      image: "/lovable-uploads/1afeb7f0-633e-4f9d-8c6a-7c3ce21c9c97.png"
    },
    {
      title: "Profile Dashboard",
      image: "/lovable-uploads/6bfb027a-b127-4050-97d6-30abfb2b2565.png"
    }
  ];

  const [currentScreenIndex, setCurrentScreenIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Debug logging
  useEffect(() => {
    console.log('🖼️ AppScreenShowcase mounted');
    console.log('📱 Current screen:', appScreens[currentScreenIndex]);
  }, []);

  useEffect(() => {
    console.log('🔄 Screen changed to:', appScreens[currentScreenIndex]);
    setImageLoaded(false);
    setImageError(false);
  }, [currentScreenIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentScreenIndex((prevIndex) => 
          (prevIndex + 1) % appScreens.length
        );
        setIsTransitioning(false);
      }, 250);
      
    }, 3000);

    return () => clearInterval(interval);
  }, [appScreens.length]);

  const handleImageLoad = () => {
    console.log('✅ Image loaded successfully:', appScreens[currentScreenIndex].image);
    setImageLoaded(true);
    setImageError(false);
  };

  const handleImageError = () => {
    console.error('❌ Image failed to load:', appScreens[currentScreenIndex].image);
    setImageError(true);
    setImageLoaded(false);
  };

  return (
    <div className="flex justify-center">
      {/* iPhone Frame */}
      <div className="relative bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl max-w-xs mx-auto">
        {/* iPhone Screen with Dynamic Island */}
        <div className="bg-black rounded-[2.2rem] p-1 relative overflow-hidden">
          {/* Screen Content Area */}
          <div className="bg-white rounded-[2rem] overflow-hidden aspect-[9/19.5] relative">
            {/* Dynamic Island */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-full z-30"></div>
            
            {/* App Screen Content */}
            <div className="h-full w-full relative">
              {/* Loading State */}
              {!imageLoaded && !imageError && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                </div>
              )}

              {/* Error State */}
              {imageError && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 text-gray-500 p-4">
                  <div className="text-2xl mb-2">📱</div>
                  <div className="text-sm text-center">
                    {appScreens[currentScreenIndex].title}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">Preview</div>
                </div>
              )}

              {/* Main Image */}
              <img 
                src={appScreens[currentScreenIndex].image}
                alt={appScreens[currentScreenIndex].title}
                onLoad={handleImageLoad}
                onError={handleImageError}
                className={`w-full h-full object-cover object-top absolute inset-0 transition-all duration-500 ease-in-out ${
                  isTransitioning || !imageLoaded ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
                }`}
                style={{ display: imageError ? 'none' : 'block' }}
              />
              
              {/* Screen indicator dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                {appScreens.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentScreenIndex 
                        ? 'bg-primary scale-125' 
                        : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>

              {/* Debug Info (only in development) */}
              {process.env.NODE_ENV === 'development' && (
                <div className="absolute top-12 left-2 right-2 text-xs text-white bg-black/50 p-1 rounded z-40">
                  Screen: {currentScreenIndex + 1}/{appScreens.length}
                  <br />
                  Loaded: {imageLoaded ? '✅' : '❌'}
                  <br />
                  Error: {imageError ? '❌' : '✅'}
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-600 rounded-full"></div>
      </div>
    </div>
  );
};

export default AppScreenShowcase;
