
import { useState } from 'react';
import { faqData } from '../../data/faqData';

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
      keywords: ['thank', 'thanks', 'appreciate'],
      response: "You're very welcome! 😊 I'm here whenever you need help with wellness questions. Feel free to ask me anything else, or if you're ready to take the next step, I can help you get connected with our team!"
    }
  ];

  // Create a comprehensive search index from FAQ data
  const createFaqSearchIndex = () => {
    const searchIndex: Array<{
      question: string;
      answer: string;
      keywords: string[];
      category: string;
    }> = [];

    faqData.forEach(section => {
      section.questions.forEach(q => {
        // Extract keywords from question and answer
        const questionWords = q.question.toLowerCase()
          .replace(/[^\w\s]/g, ' ')
          .split(' ')
          .filter(word => word.length > 2);
        
        const answerWords = q.answer.toLowerCase()
          .replace(/[^\w\s]/g, ' ')
          .split(' ')
          .filter(word => word.length > 3);

        const keywords = [...new Set([...questionWords, ...answerWords])];

        searchIndex.push({
          question: q.question,
          answer: q.answer,
          keywords,
          category: section.title
        });
      });
    });

    return searchIndex;
  };

  const faqSearchIndex = createFaqSearchIndex();

  const findBestFaqMatch = (userMessage: string): string | null => {
    const lowerMessage = userMessage.toLowerCase();
    const messageWords = lowerMessage
      .replace(/[^\w\s]/g, ' ')
      .split(' ')
      .filter(word => word.length > 2);

    let bestMatch = null;
    let bestScore = 0;

    faqSearchIndex.forEach(faqItem => {
      let score = 0;
      
      // Check for direct question similarity
      const questionSimilarity = calculateSimilarity(lowerMessage, faqItem.question.toLowerCase());
      score += questionSimilarity * 3; // Weight question matches higher

      // Check for keyword matches
      messageWords.forEach(word => {
        if (faqItem.keywords.includes(word)) {
          score += 1;
        }
        // Partial matches for longer words
        faqItem.keywords.forEach(keyword => {
          if (keyword.includes(word) || word.includes(keyword)) {
            score += 0.5;
          }
        });
      });

      if (score > bestScore && score > 2) { // Minimum threshold
        bestScore = score;
        bestMatch = faqItem;
      }
    });

    return bestMatch ? formatFaqResponse(bestMatch) : null;
  };

  const calculateSimilarity = (str1: string, str2: string): number => {
    const words1 = str1.split(' ');
    const words2 = str2.split(' ');
    let matches = 0;

    words1.forEach(word1 => {
      words2.forEach(word2 => {
        if (word1 === word2 || word1.includes(word2) || word2.includes(word1)) {
          matches++;
        }
      });
    });

    return matches / Math.max(words1.length, words2.length);
  };

  const formatFaqResponse = (faqItem: { question: string; answer: string; category: string }): string => {
    // Format the answer for chat display
    let formattedAnswer = faqItem.answer;
    
    // Truncate very long answers and add "read more" suggestion
    if (formattedAnswer.length > 500) {
      const sentences = formattedAnswer.split('.');
      formattedAnswer = sentences.slice(0, 3).join('.') + '.';
      formattedAnswer += '\n\n💡 For more detailed information, please visit our FAQ page or schedule a demo with our team!';
    }

    return formattedAnswer + '\n\n' + getFollowUpSuggestion();
  };

  const getFollowUpSuggestion = (): string => {
    const suggestions = [
      "Would you like to know more about our pricing or schedule a demo? 📅",
      "Do you have any other questions about our wellness programs? 💪",
      "Would you like to speak with our team for more personalized information? 📞",
      "Is there anything specific about our services you'd like to explore further? 🎯"
    ];
    return suggestions[Math.floor(Math.random() * suggestions.length)];
  };

  const getResponse = async (userMessage: string): Promise<string> => {
    const lowerMessage = userMessage.toLowerCase();
    
    // First check for basic greetings and thanks
    const quickResponse = quickResponses.find(response =>
      response.keywords.some(keyword => lowerMessage.includes(keyword))
    );

    if (quickResponse) {
      return quickResponse.response;
    }

    // Then try to find FAQ match
    const faqResponse = findBestFaqMatch(userMessage);
    if (faqResponse) {
      return faqResponse;
    }

    // Enhanced default responses that guide to FAQ
    const defaultResponses = [
      "That's a great question! I have lots of information about Meltdown's wellness solutions. Could you be more specific about what you'd like to know? For example, you could ask about our pricing, services, or how our platform works. 🤔",
      "I'd love to help you with that! You can ask me about corporate wellness programs, employee benefits, our technology platform, pricing, or how to get started. What interests you most? 💡",
      "Thanks for asking! I can provide information about Meltdown's wellness services, partnership opportunities, implementation process, and much more. Feel free to ask about any specific aspect of our platform! 📋"
    ];

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  return { getResponse };
};
