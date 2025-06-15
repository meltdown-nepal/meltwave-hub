
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

  const textSizeClasses = {
    tiny: 'text-xs',
    small: 'text-sm',
    medium: 'text-xl',
    large: 'text-3xl'
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
