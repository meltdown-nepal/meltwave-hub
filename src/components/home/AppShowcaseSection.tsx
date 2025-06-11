
import React from 'react';
import AnimatedElement from '../animations/AnimatedElement';
import { useIsMobile } from '@/hooks/use-mobile';
import { appScreens } from './app-showcase/AppScreenData';
import MobileCarousel from './app-showcase/MobileCarousel';
import DesktopGrid from './app-showcase/DesktopGrid';
import AppStoreButtons from './app-showcase/AppStoreButtons';

const AppShowcaseSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white py-[60px]" id="app-showcase">
      <div className="container-custom">
        <AnimatedElement animation="slideUp" delay={0.1}>
          <div className="text-center mb-16">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              MOBILE APP
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Wellness in Your Pocket
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience seamless wellness management with our intuitive mobile app designed for modern lifestyles and environmental consciousness.
            </p>
          </div>
        </AnimatedElement>

        {/* Mobile App Screens - Mobile Carousel vs Desktop Grid */}
        {isMobile ? (
          <MobileCarousel screens={appScreens} />
        ) : (
          <DesktopGrid screens={appScreens} />
        )}

        {/* App Store Buttons */}
        <AppStoreButtons />
      </div>
    </section>
  );
};

export default AppShowcaseSection;
