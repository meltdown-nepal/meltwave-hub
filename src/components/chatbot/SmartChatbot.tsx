import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Minimize2, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ChatbotCharacter } from './ChatbotCharacter';
import { ChatMessage } from './ChatMessage';
import { useChatbotResponses } from './useChatbotResponses';
import { usePageContext } from '../../hooks/usePageContext';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

const SmartChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const { getResponse } = useChatbotResponses();
  const { pageContent } = usePageContext();

  // Welcome message when chatbot opens
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      let welcomeContent = "Hey there! 👋 I'm Meltzy, your friendly wellness buddy! ✨\n\nI'm super excited to help you discover amazing things about Meltdown's wellness platform! ";
      
      // Add page-specific welcome message
      if (pageContent) {
        switch (pageContent.pageType) {
          case 'academy':
            welcomeContent += "I can see you're exploring our Academy certification programs! I'm here to help with any questions about our CSCS®, CES®, and Sports Nutrition courses. 🎓";
            break;
          case 'corporate-wellness':
            welcomeContent += "I notice you're checking out our Corporate Wellness solutions! I can help explain how we transform workplace wellness for companies like yours. 🏢";
            break;
          case 'events':
            welcomeContent += "You're looking at our Events page! I can tell you all about our exciting wellness events and team-building activities. 🎉";
            break;
          case 'employees':
            welcomeContent += "Perfect! You're exploring employee benefits. I can show you all the amazing perks and wellness options available to you! 👥";
            break;
          case 'contact':
            welcomeContent += "You're on our Contact page! While you can reach our team directly here, I'm also ready to answer any questions right away! 📞";
            break;
          default:
            welcomeContent += "I can help you understand everything on this page and answer any questions about our services! 🌟";
        }
      }
      
      welcomeContent += "\n\nI can help with:\n🏋️‍♀️ Questions about what you see on this page\n💰 Pricing and packages\n🌟 Wellness programs & features\n⚡ Getting started with Meltdown\n🎯 Employee engagement strategies\n\nWhat would you love to explore together? 😊";

      const welcomeMessage: Message = {
        id: '1',
        type: 'bot',
        content: welcomeContent,
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, messages.length, pageContent]);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(async () => {
      const response = await getResponse(inputValue, pageContent);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: response,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
  };

  const minimizeChatbot = () => {
    setIsMinimized(true);
  };

  const quickQuestions = [
    "What's on this page? 👀",
    "How much does it cost? 💝", 
    "How do I get started? 🚀",
    "What wellness services do you offer? 🎁"
  ];

  const handleQuickQuestion = (question: string) => {
    setInputValue(question);
    setTimeout(() => handleSendMessage(), 100);
  };

  return (
    <>
      {/* Floating Action Button */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <div className="relative">
            {/* Pulse ring animation */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-300 to-orange-300 opacity-30 animate-ping"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-200 to-orange-200 opacity-40 animate-pulse"></div>
            
            {/* Main button */}
            <Button
              onClick={toggleChatbot}
              className="relative w-16 h-16 rounded-full bg-white hover:bg-gray-50 shadow-2xl transition-all duration-300 hover:scale-110 border-2 border-yellow-200 hover:border-yellow-300 group"
              size="icon"
            >
              <ChatbotCharacter size="medium" animate />
              
              {/* Tooltip */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Chat with Meltzy! 💬
              </div>
            </Button>
          </div>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className={`fixed bottom-6 right-6 z-50 bg-white rounded-2xl shadow-2xl border transition-all duration-300 ${
          isMinimized ? 'w-80 h-16' : 'w-80 h-[500px]'
        }`}>
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b bg-white rounded-t-2xl">
            <div className="flex items-center space-x-3">
              <ChatbotCharacter size="small" animate />
              <div>
                <h3 className="font-semibold text-black text-sm">Meltzy 🌟</h3>
                <p className="text-xs text-black/70">Your wellness buddy!</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => window.open('#/faq', '_blank')}
                className="w-6 h-6 text-black hover:bg-black/10"
                title="View Full FAQ"
              >
                <HelpCircle className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={minimizeChatbot}
                className="w-6 h-6 text-black hover:bg-black/10"
              >
                <Minimize2 className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleChatbot}
                className="w-6 h-6 text-black hover:bg-black/10"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Chat Content - Only show if not minimized */}
          {!isMinimized && (
            <>
              {/* Messages */}
              <div className="flex-1 p-4 h-80 overflow-y-auto">
                {messages.map((message) => (
                  <ChatMessage key={message.id} message={message} />
                ))}
                
                {/* Quick Questions - Show only if no messages yet */}
                {messages.length === 1 && (
                  <div className="mt-4 space-y-2">
                    <p className="text-xs text-gray-500 mb-2">Try asking me:</p>
                    {quickQuestions.map((question, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuickQuestion(question)}
                        className="block w-full text-left text-xs bg-gradient-to-r from-yellow-50 to-orange-50 hover:from-yellow-100 hover:to-orange-100 rounded-lg px-3 py-2 transition-colors border border-yellow-200"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                )}
                
                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex items-center space-x-2 mb-4">
                    <ChatbotCharacter size="tiny" />
                    <div className="bg-gray-100 rounded-2xl px-4 py-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 border-t">
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me anything about wellness! 💬✨"
                    className="flex-1 px-3 py-2 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
                    disabled={isTyping}
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim() || isTyping}
                    size="icon"
                    className="w-8 h-8 rounded-full bg-white hover:bg-gray-50 border text-black"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default SmartChatbot;
