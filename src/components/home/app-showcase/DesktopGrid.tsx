
import React from 'react';
import AnimatedElement from '../../animations/AnimatedElement';
import PhoneFrame from './PhoneFrame';
import { AppScreen } from './AppScreenData';

interface DesktopGridProps {
  screens: AppScreen[];
}

const DesktopGrid: React.FC<DesktopGridProps> = ({ screens }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
      {screens.map((screen, index) => (
        <AnimatedElement key={screen.title} animation="slideUp" delay={screen.delay}>
          <PhoneFrame screen={screen} index={index} />
        </AnimatedElement>
      ))}
    </div>
  );
};

export default DesktopGrid;
