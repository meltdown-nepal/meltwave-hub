
import React from 'react';

interface ChatbotCharacterProps {
  size?: 'tiny' | 'small' | 'medium' | 'large';
  animate?: boolean;
}

export const ChatbotCharacter: React.FC<ChatbotCharacterProps> = ({ 
  size = 'medium', 
  animate = false 
}) => {
  const sizeClasses = {
    tiny: 'w-6 h-6',
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16'
  };

  const imageSizeClasses = {
    tiny: 'w-5 h-5',
    small: 'w-7 h-7',
    medium: 'w-11 h-11',
    large: 'w-14 h-14'
  };

  return (
    <div 
      className={`
        ${sizeClasses[size]} 
        rounded-full bg-gradient-to-br from-yellow-100 to-orange-100
        flex items-center justify-center
        shadow-lg border-2 border-white
        ${animate ? 'transition-all duration-300 hover:scale-110 hover:shadow-xl' : ''}
      `}
    >
      <img 
        src="/lovable-uploads/6a8d21a6-d52d-4b26-84f3-c858e2d69169.png" 
        alt="Meltzy"
        className={`${imageSizeClasses[size]} object-contain drop-shadow-sm`}
      />
    </div>
  );
};
