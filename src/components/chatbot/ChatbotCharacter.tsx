
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
    large: 'w-12 h-12'
  };

  const imageSizeClasses = {
    tiny: 'w-4 h-4',
    small: 'w-6 h-6',
    medium: 'w-10 h-10',
    large: 'w-10 h-10'
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
