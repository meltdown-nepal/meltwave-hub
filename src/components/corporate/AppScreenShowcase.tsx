
import React, { useState, useEffect } from 'react';

const AppScreenShowcase: React.FC = () => {
  const appScreens = [
    {
      title: "Profile Dashboard",
      image: "/lovable-uploads/748ee968-921d-46b1-92af-dbc618c0baf6.png"
    },
    {
      title: "QR Check-In",
      image: "/lovable-uploads/9746da02-489f-47c5-840c-06c9389c8038.png"
    },
    {
      title: "Explore Gyms",
      image: "/lovable-uploads/e2299fe3-1e22-4533-90d2-f7eda65b5f30.png"
    },
    {
      title: "Home Dashboard",
      image: "/lovable-uploads/d12f53a0-97ff-4324-926a-c235451e4ff2.png"
    },
    {
      title: "Leaderboard",
      image: "/lovable-uploads/232b6ca3-c59e-4dbe-99f1-f459d90f82e9.png"
    }
  ];

  const [currentScreenIndex, setCurrentScreenIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreenIndex((prevIndex) => 
        (prevIndex + 1) % appScreens.length
      );
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, [appScreens.length]);

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
            <div className="h-full w-full">
              <img 
                src={appScreens[currentScreenIndex].image}
                alt={appScreens[currentScreenIndex].title}
                className="w-full h-full object-cover object-top transition-opacity duration-500"
              />
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
