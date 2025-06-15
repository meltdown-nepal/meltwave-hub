
import React, { useMemo } from "react";
import { appScreens } from "@/components/home/app-showcase/AppScreenData";
import { useIsMobile } from "@/hooks/use-mobile";
import DesktopGrid from "@/components/home/app-showcase/DesktopGrid";
import MobileCarousel from "@/components/home/app-showcase/MobileCarousel";

const WellnessAppShowcaseSection: React.FC = () => {
  const isMobile = useIsMobile();
  const memoizedScreens = useMemo(() => appScreens, []);

  return (
    <section className="section-padding bg-gradient-to-br from-white to-yellow-200 overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Our Exclusive Wellness App
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-700">
            Access wellness anytime, anywhere—right from your phone. Track activity, check in, join challenges, and more with our beautifully designed, easy-to-use app.
          </p>
        </div>
        {isMobile ? (
          <MobileCarousel screens={memoizedScreens} />
        ) : (
          <DesktopGrid screens={memoizedScreens} />
        )}
      </div>
    </section>
  );
};

export default WellnessAppShowcaseSection;

