
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
    large: 'w-8 h-8'
  };

  return (
    <div 
      className={`
        ${sizeClasses[size]} 
        rounded-full bg-white 
        flex items-center justify-center
        shadow-lg
        ${animate ? 'transition-transform hover:scale-110' : ''}
      `}
    >
      <img 
        src="/lovable-uploads/6a8d21a6-d52d-4b26-84f3-c858e2d69169.png" 
        alt="Meltzy"
        className="w-full h-full object-contain"
      />
    </div>
  );
};
