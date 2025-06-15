
import React from 'react';
import { ChatbotCharacter } from './ChatbotCharacter';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isBot = message.type === 'bot';

  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} items-start space-x-2`}>
      {isBot && <ChatbotCharacter size="tiny" />}
      
      <div 
        className={`
          max-w-xs px-4 py-2 rounded-2xl text-sm
          ${isBot 
            ? 'bg-gray-100 text-gray-800' 
            : 'bg-primary text-black'
          }
        `}
      >
        <p className="whitespace-pre-wrap">{message.content}</p>
        <p className={`text-xs mt-1 ${isBot ? 'text-gray-500' : 'text-black/70'}`}>
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </p>
      </div>
    </div>
  );
};
