
import { useState } from 'react';

interface QuickResponse {
  keywords: string[];
  response: string;
}

export const useChatbotResponses = () => {
  const quickResponses: QuickResponse[] = [
    {
      keywords: ['hello', 'hi', 'hey', 'greetings'],
      response: "Hello! 👋 I'm excited to help you learn about Meltdown's wellness solutions. What would you like to know?"
    },
    {
      keywords: ['corporate wellness', 'workplace wellness', 'employee wellness'],
      response: "Our corporate wellness programs are designed to boost employee health and productivity! We offer fitness partnerships, mental health support, team building activities, and wellness challenges. Would you like to schedule a demo to see how we can help your company? 💪"
    },
    {
      keywords: ['pricing', 'cost', 'price', 'expensive', 'affordable'],
      response: "Our pricing is flexible and based on your company size and needs. We offer competitive packages starting from basic wellness programs to comprehensive solutions. I'd recommend scheduling a demo where we can discuss pricing that fits your budget! 💰"
    },
    {
      keywords: ['demo', 'consultation', 'meeting', 'schedule'],
      response: "I'd love to help you schedule a demo! You can easily book one by clicking on 'Get Demo' in our navigation menu, or I can direct you to our contact form. Our team will show you exactly how Meltdown can transform your workplace wellness. 📅"
    },
    {
      keywords: ['services', 'what do you offer', 'programs', 'features'],
      response: "We offer a comprehensive range of wellness services including:\n\n🏋️ Fitness center partnerships\n🧘 Mental health and mindfulness programs\n👥 Team building activities\n📱 Our MeltFit app for tracking progress\n🎯 Corporate challenges and events\n📊 Analytics and wellness reporting\n\nWhat interests you most?"
    },
    {
      keywords: ['employees', 'staff', 'workers', 'team'],
      response: "Our programs are designed with employees in mind! They get access to multiple fitness centers, wellness apps, mental health resources, and fun team challenges. It's all about making wellness accessible and enjoyable for everyone. Want to learn more about employee benefits? 👥"
    },
    {
      keywords: ['meltfit', 'app', 'mobile'],
      response: "MeltFit is our amazing wellness app! 📱 It helps employees track their fitness progress, join challenges, book classes, and connect with wellness providers. It's available on both iOS and Android. Would you like to see it in action during a demo?"
    },
    {
      keywords: ['providers', 'partners', 'gyms', 'fitness centers'],
      response: "We partner with premium wellness providers including gyms, yoga studios, mental health professionals, and fitness trainers across the region. Our network ensures your employees have access to quality wellness services wherever they are! 🤝"
    },
    {
      keywords: ['contact', 'reach out', 'get in touch'],
      response: "You can reach us through our contact form on the website, or I can help you schedule a demo right now! Our team is always ready to discuss how we can bring wellness to your workplace. What works best for you? 📞"
    },
    {
      keywords: ['thank', 'thanks', 'appreciate'],
      response: "You're very welcome! 😊 I'm here whenever you need help with wellness questions. Feel free to ask me anything else, or if you're ready to take the next step, I can help you get connected with our team!"
    }
  ];

  const getResponse = async (userMessage: string): Promise<string> => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Find matching quick response
    const matchedResponse = quickResponses.find(response =>
      response.keywords.some(keyword => lowerMessage.includes(keyword))
    );

    if (matchedResponse) {
      return matchedResponse.response;
    }

    // Default responses for unmatched queries
    const defaultResponses = [
      "That's a great question! While I don't have a specific answer for that right now, I'd recommend scheduling a demo with our team. They can provide detailed information about all aspects of our wellness programs. Would you like me to help you get connected? 🤔",
      "I want to make sure I give you the most accurate information! For specific details about that topic, our wellness experts would be the best resource. Would you like to schedule a consultation or visit our contact page? 📋",
      "Thanks for asking! While I'm still learning about all the details, our team can definitely help you with that. You can reach out through our contact form or schedule a demo to get comprehensive answers. What would you prefer? 💡"
    ];

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  return { getResponse };
};
