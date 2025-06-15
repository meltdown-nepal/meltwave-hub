
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

  // Format bot messages to handle lists and line breaks
  const formatBotMessage = (content: string) => {
    return content.split('\n').map((line, index) => {
      if (line.trim() === '') return <br key={index} />;
      
      // Handle numbered lists
      if (/^\d+\./.test(line.trim())) {
        return (
          <div key={index} className="font-semibold mb-1">
            {line.trim()}
          </div>
        );
      }
      
      // Handle bullet points
      if (line.trim().startsWith('•') || line.trim().startsWith('-')) {
        return (
          <div key={index} className="ml-3 mb-1">
            {line.trim()}
          </div>
        );
      }
      
      // Regular paragraphs
      return (
        <p key={index} className="mb-2 last:mb-0">
          {line.trim()}
        </p>
      );
    });
  };

  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} items-start space-x-2 mb-4`}>
      {isBot && <ChatbotCharacter size="tiny" />}
      
      <div 
        className={`
          max-w-xs px-4 py-3 rounded-2xl text-sm leading-relaxed
          ${isBot 
            ? 'bg-gray-100 text-gray-800' 
            : 'bg-white border text-black shadow-sm'
          }
        `}
      >
        <div className="whitespace-pre-wrap">
          {isBot ? formatBotMessage(message.content) : message.content}
        </div>
        <p className={`text-xs mt-2 ${isBot ? 'text-gray-500' : 'text-black/70'}`}>
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </p>
      </div>
    </div>
  );
};
