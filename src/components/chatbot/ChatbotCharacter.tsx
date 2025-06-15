
import React from 'react';
import { Bot } from 'lucide-react';

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

  const iconSizeClasses = {
    tiny: 'w-3 h-3',
    small: 'w-4 h-4',
    medium: 'w-6 h-6',
    large: 'w-8 h-8'
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
      <Bot 
        className={`${iconSizeClasses[size]} text-gray-600`}
      />
    </div>
  );
};
