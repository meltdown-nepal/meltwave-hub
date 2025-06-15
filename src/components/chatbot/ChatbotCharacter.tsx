
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
    tiny: 'w-6 h-6 text-xs',
    small: 'w-8 h-8 text-sm',
    medium: 'w-12 h-12 text-lg',
    large: 'w-8 h-8 text-lg'
  };

  return (
    <div 
      className={`
        ${sizeClasses[size]} 
        rounded-full bg-gradient-to-br from-primary to-secondary 
        flex items-center justify-center
        shadow-sm
      `}
    >
      <span className="font-bold text-black">🤖</span>
    </div>
  );
};
