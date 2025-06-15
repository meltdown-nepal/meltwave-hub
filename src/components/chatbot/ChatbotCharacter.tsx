
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
    tiny: 'w-5 h-5',
    small: 'w-6 h-6',
    medium: 'w-10 h-10',
    large: 'w-14 h-14'
  };

  const textSizeClasses = {
    tiny: 'text-xs',
    small: 'text-xs',
    medium: 'text-lg',
    large: 'text-2xl'
  };

  return (
    <div 
      className={`
        ${sizeClasses[size]} 
        rounded-full bg-white
        flex items-center justify-center
        shadow-lg border-2 border-gray-200
        ${animate ? 'transition-all duration-300 hover:scale-110 hover:shadow-xl' : ''}
      `}
    >
      <span className={`${textSizeClasses[size]}`}>
        🤖
      </span>
    </div>
  );
};
