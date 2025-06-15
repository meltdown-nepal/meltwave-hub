import { useState } from 'react';
import { faqData } from '../../data/faqData';
import { supabase } from '@/integrations/supabase/client';

interface QuickResponse {
  keywords: string[];
  response: string;
}

interface KnowledgeItem {
  content: string;
  keywords: string[];
  category: string;
  priority: number;
}

interface PageContent {
  title: string;
  headings: string[];
  paragraphs: string[];
  links: string[];
  images: string[];
  pageType: string;
  route: string;
}

export const useChatbotResponses = () => {
  const [conversationContext, setConversationContext] = useState<string[]>([]);
  const [isUsingAI, setIsUsingAI] = useState(false);

  const quickResponses: QuickResponse[] = [
    {
      keywords: ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening'],
      response: "Hello there, lovely human! 👋✨ I'm Meltzy, and I'm absolutely thrilled to meet you! 🌟 I can see you're exploring our amazing platform, and I'm here to help you with anything you'd like to know about what you're seeing on this page or about Meltdown in general! What exciting thing would you love to explore together? 🎉"
    },
    {
      keywords: ['thank', 'thanks', 'appreciate', 'grateful', 'awesome', 'great', 'perfect'],
      response: "Aww, you're so sweet! 🥰 It totally makes my day when I can help! I'm here and ready to assist you with anything on this page or about our wellness services. Is there anything else you'd love to discover? ✨"
    }
  ];

  // Check if we should use AI for complex queries
  const shouldUseAI = (userMessage: string): boolean => {
    const complexIndicators = [
      'how', 'why', 'what if', 'compare', 'difference', 'better', 'best',
      'explain', 'tell me about', 'can you help', 'i need', 'problem',
      'issue', 'concern', 'specific', 'custom', 'unique', 'detailed'
    ];
    
    const lowerMessage = userMessage.toLowerCase();
    const hasComplexIndicators = complexIndicators.some(indicator => 
      lowerMessage.includes(indicator)
    );
    
    const isLongMessage = userMessage.length > 50;
    const hasQuestionWords = /\b(how|what|when|where|why|which|who)\b/i.test(userMessage);
    
    return hasComplexIndicators || isLongMessage || hasQuestionWords;
  };

  // Get AI response from edge function
  const getAIResponse = async (userMessage: string, pageContent?: PageContent): Promise<string | null> => {
    try {
      setIsUsingAI(true);
      console.log('🤖 Getting AI response for:', userMessage.slice(0, 50) + '...');
      
      const { data, error } = await supabase.functions.invoke('intelligent-chat', {
        body: {
          message: userMessage,
          pageContent,
          conversationHistory: conversationContext.slice(-10)
        }
      });

      if (error) {
        console.error('Edge function error:', error);
        return null;
      }

      if (data?.success && data?.response) {
        console.log('✅ AI response received successfully');
        return data.response;
      }

      console.warn('AI response failed, using fallback');
      return null;
    } catch (error) {
      console.error('Error calling AI:', error);
      return null;
    } finally {
      setIsUsingAI(false);
    }
  };

  // Enhanced knowledge base that includes page-specific responses
  const createPageAwareKnowledgeBase = (pageContent?: PageContent): KnowledgeItem[] => {
    const baseKnowledge: KnowledgeItem[] = [];

    // Add FAQ data with enhanced keywords
    faqData.forEach(section => {
      section.questions.forEach(q => {
        const enhancedKeywords = extractEnhancedKeywords(q.question + ' ' + q.answer);
        baseKnowledge.push({
          content: `**${q.question}**\n\n${q.answer}`,
          keywords: enhancedKeywords,
          category: section.title,
          priority: 10
        });
      });
    });

    // Add page-specific knowledge if available
    if (pageContent) {
      const pageSpecificKnowledge = generatePageSpecificKnowledge(pageContent);
      baseKnowledge.push(...pageSpecificKnowledge);
    }

    // Add general knowledge
    const generalKnowledge: KnowledgeItem[] = [
      {
        content: "Oh my goodness, our packages are absolutely amazing! 🎁 We have three fantastic options: Basic (20+ gyms - perfect for getting started!), Gold (40+ wellness options including yoga, mindfulness, boxing, group classes - so much fun!), and Platinum (70+ options including swimming, mental health counseling, physiotherapy - the ultimate wellness experience!). Each package gives you magical single-scan access to multiple wellness services! ✨",
        keywords: ['package', 'packages', 'plan', 'plans', 'membership', 'subscription', 'basic', 'gold', 'platinum', 'gym', 'yoga', 'swimming', 'counseling', 'options', 'services included', 'what do i get'],
        category: 'Services',
        priority: 9
      },
      {
        content: "Get ready to be amazed! 🚀 Our implementation is lightning-fast - we can set up your corporate wellness system in less than a day! That's faster than ordering pizza! 🍕 Our super friendly onboarding team provides admin access, helps with employee activation, and offers ongoing support throughout the whole journey. It's like having wellness wizards on your team! ✨",
        keywords: ['implementation', 'setup', 'onboarding', 'how long', 'time to implement', 'quick setup', 'fast implementation', 'getting started', 'timeline', 'launch'],
        category: 'Implementation',
        priority: 8
      },
      {
        content: "Let's talk about the sweet stuff - our pricing! 💰✨ We use a subscription-based model with exclusive corporate rates that'll make your budget smile! Companies pay a monthly fee for system access, and here's the best part - employees get subsidized packages at more than half the regular cost! It's like getting a VIP discount! We offer 6-month minimum commitments to keep these exclusive rates super special. 🎉",
        keywords: ['cost', 'price', 'pricing', 'expensive', 'cheap', 'budget', 'investment', 'subscription', 'monthly', 'yearly', 'corporate rates', 'subsidized', 'discount', 'affordable'],
        category: 'Pricing',
        priority: 9
      },
      {
        content: "Oh, this is where the magic happens! ✨ We boost engagement through super fun gamification with leaderboards (who doesn't love a little friendly competition?), wellness challenges that'll get everyone excited, step tracking, amazing rewards, and recognition systems that make everyone feel like wellness champions! 🏆 Our community-building approach creates accountability partners within teams and makes movement the coolest thing in the workplace! 🎯",
        keywords: ['engagement', 'participation', 'motivation', 'gamification', 'challenges', 'leaderboard', 'competition', 'rewards', 'recognition', 'team building', 'community', 'accountability'],
        category: 'Engagement',
        priority: 8
      },
      {
        content: "Numbers that'll make you happy dance! 📊💃 Our ROI measurement includes super detailed reports on employee participation, check-ins, step counts, cost savings, wellness trends, and engagement metrics. We provide monthly/quarterly analytics that show the amazing impact of your wellness investment - it's like getting a progress report card, but way more fun! 📈✨",
        keywords: ['roi', 'return on investment', 'metrics', 'analytics', 'reports', 'measurement', 'tracking', 'statistics', 'data', 'results', 'impact', 'value', 'effectiveness'],
        category: 'Analytics',
        priority: 7
      },
      {
        content: "Our mission is so close to my heart! 💖 We're here to create innovative solutions that empower people to lead active, joyful lifestyles and connect through wellness. We dream of a world where everyone engages in and connects through wellness - imagine how amazing that would be! 🌍✨",
        keywords: ['mission', 'vision', 'purpose', 'goal', 'why meltdown', 'company values', 'philosophy', 'believe', 'mission statement'],
        category: 'Mission',
        priority: 6
      },
      {
        content: "We're making magic happen with 13+ amazing companies across IT, Education, Hospitality, and FMCG sectors! 🌟 Our clients are seeing incredible improvements in employee satisfaction, fewer sick days, better team bonding, and increased productivity. It's like watching workplace transformation happen in real-time! The success stories just keep coming! 🎉",
        keywords: ['clients', 'customers', 'companies', 'success stories', 'case studies', 'testimonials', 'experience', 'track record', 'results', 'industries', 'sectors'],
        category: 'Success Stories',
        priority: 7
      }
    ];

    return [...baseKnowledge, ...generalKnowledge];
  };

  const generatePageSpecificKnowledge = (pageContent: PageContent): KnowledgeItem[] => {
    const pageKnowledge: KnowledgeItem[] = [];

    // Create contextual responses based on page type
    switch (pageContent.pageType) {
      case 'academy':
        pageKnowledge.push({
          content: `I can see you're interested in our Academy! 🎓 On this page, you'll find information about our amazing certification programs: ${pageContent.headings.slice(0, 3).join(', ')}. Our Academy prepares you for internationally recognized certifications like CSCS® and CES® while providing hands-on experience. What specific aspect of our training programs would you like to know more about? ✨`,
          keywords: ['academy', 'certification', 'training', 'course', 'cscs', 'ces', 'fitness', 'education', 'learn'],
          category: 'Page Context',
          priority: 15
        });
        break;

      case 'corporate-wellness':
        pageKnowledge.push({
          content: `Welcome to our Corporate Wellness page! 🏢✨ I can see you're exploring how we can transform your workplace wellness. ${pageContent.paragraphs[0] ? pageContent.paragraphs[0].slice(0, 200) + '...' : ''} Our corporate solutions are designed to boost employee engagement and create healthier, happier workplaces! What specific corporate wellness challenge can I help you solve? 🌟`,
          keywords: ['corporate', 'workplace', 'employee', 'company', 'business', 'wellness program', 'engagement'],
          category: 'Page Context',
          priority: 15
        });
        break;

      case 'events':
        pageKnowledge.push({
          content: `You're checking out our Events page! 🎉 I can see information about exciting wellness events and activities. Our events are designed to bring people together through fitness and wellness activities. Whether you're looking for corporate team building or community wellness events, we've got something amazing for everyone! What type of event are you interested in? ✨`,
          keywords: ['events', 'activities', 'team building', 'group', 'community', 'fitness events'],
          category: 'Page Context',
          priority: 15
        });
        break;

      case 'employees':
        pageKnowledge.push({
          content: `Perfect! You're on our Employee Benefits page! 👥✨ This page shows how our platform benefits individual employees like you. You'll discover amazing perks like access to multiple gyms, wellness classes, health tracking, and so much more - all through one simple app! What employee benefit would you like to explore further? 🏃‍♀️`,
          keywords: ['employee', 'benefits', 'perks', 'individual', 'personal', 'gym access', 'wellness classes'],
          category: 'Page Context',
          priority: 15
        });
        break;

      case 'contact':
        pageKnowledge.push({
          content: `Great! You're on our Contact page! 📞✨ I can help you right here with most questions, but if you need to speak with our amazing team directly, you'll find all the contact information on this page. Whether you want to schedule a demo, ask about pricing, or just chat about wellness solutions, we're here to help! What would you like to connect about? 🌟`,
          keywords: ['contact', 'reach out', 'get in touch', 'speak', 'call', 'email', 'demo', 'meeting'],
          category: 'Page Context',
          priority: 15
        });
        break;

      default:
        if (pageContent.headings.length > 0) {
          pageKnowledge.push({
            content: `I can see you're exploring this page about ${pageContent.headings[0]}! 🌟 Based on what I can see here, there's lots of great information about ${pageContent.headings.slice(0, 2).join(' and ')}. I'm here to help you understand anything you see on this page or answer questions about Meltdown's services! What catches your eye? ✨`,
            keywords: extractEnhancedKeywords(pageContent.headings.join(' ') + ' ' + pageContent.paragraphs.slice(0, 2).join(' ')),
            category: 'Page Context',
            priority: 12
          });
        }
    }

    // Add content-based knowledge from page
    if (pageContent.paragraphs.length > 0) {
      pageKnowledge.push({
        content: `Based on what I can see on this page: ${pageContent.paragraphs[0].slice(0, 300)}... I'm here to help explain any of this content or answer related questions! What would you like to know more about? ✨`,
        keywords: extractEnhancedKeywords(pageContent.paragraphs.slice(0, 3).join(' ')),
        category: 'Page Content',
        priority: 8
      });
    }

    return pageKnowledge;
  };

  const extractEnhancedKeywords = (text: string): string[] => {
    const commonWords = new Set(['the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'is', 'are', 'was', 'were', 'be', 'been', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could', 'should', 'may', 'might', 'can', 'a', 'an', 'this', 'that', 'these', 'those']);
    
    const baseKeywords = text.toLowerCase()
      .replace(/[^\w\s]/g, ' ')
      .split(/\s+/)
      .filter(word => word.length > 2 && !commonWords.has(word));

    return Array.from(new Set(baseKeywords));
  };

  const findIntelligentMatch = (userMessage: string, pageContent?: PageContent): string | null => {
    const lowerMessage = userMessage.toLowerCase();
    const knowledgeBase = createPageAwareKnowledgeBase(pageContent);
    
    const processedMessage = lowerMessage
      .replace(/[^\w\s]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

    const messageWords = processedMessage.split(' ').filter(word => word.length > 2);
    const contextWords = conversationContext.slice(-10).join(' ').toLowerCase().split(' ');
    const allWords = [...messageWords, ...contextWords.slice(-5)];

    let bestMatches: Array<{ item: KnowledgeItem; score: number }> = [];

    knowledgeBase.forEach(item => {
      let score = 0;
      
      // Exact phrase matching (highest priority)
      if (item.content.toLowerCase().includes(processedMessage)) {
        score += 50;
      }

      // Page context bonus
      if (item.category === 'Page Context') {
        score += 20;
      } else if (item.category === 'Page Content') {
        score += 15;
      }

      // Keyword matching with different weights
      allWords.forEach(word => {
        item.keywords.forEach(keyword => {
          if (keyword === word) {
            score += 5;
          } else if (keyword.includes(word) && word.length > 3) {
            score += 3;
          } else if (word.includes(keyword) && keyword.length > 3) {
            score += 2;
          }
        });
      });

      score += item.priority;

      if (score > 8) {
        bestMatches.push({ item, score });
      }
    });

    bestMatches.sort((a, b) => b.score - a.score);
    
    if (bestMatches.length > 0) {
      setConversationContext(prev => [...prev.slice(-5), userMessage].slice(-10));
      return formatIntelligentResponse(bestMatches[0].item, userMessage, pageContent);
    }

    return null;
  };

  const formatIntelligentResponse = (item: KnowledgeItem, originalQuestion: string, pageContent?: PageContent): string => {
    let response = item.content;
    
    // Add page context if relevant
    if (pageContent && item.category !== 'Page Context' && item.category !== 'Page Content') {
      response += `\n\n💡 Since you're on our ${pageContent.pageType.replace('-', ' ')} page, I can also help you understand anything specific you see here!`;
    }
    
    return response;
  };

  const getEnhancedDefaultResponse = (userMessage: string, pageContent?: PageContent): string => {
    let response = "I have so much knowledge about Meltdown's wellness solutions and I'm super excited to help! ✨ ";
    
    // Add page-specific context to default response
    if (pageContent) {
      response += `I can see you're on our ${pageContent.pageType.replace('-', ' ')} page`;
      if (pageContent.headings.length > 0) {
        response += ` exploring ${pageContent.headings[0]}`;
      }
      response += "! ";
    }

    response += "You can ask me about:\n• What you see on this page 👀\n• Pricing and packages 💰\n• Services and features 🏃‍♀️\n• Implementation process ⚡\n• Employee engagement strategies 🎯\n• ROI and analytics 📊\n• Success stories and case studies 🌟\n\nWhat would you love to know more about? 🤔✨";

    return response;
  };

  const getResponse = async (userMessage: string, pageContent?: PageContent): Promise<string> => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Check for quick responses first
    const quickResponse = quickResponses.find(response =>
      response.keywords.some(keyword => lowerMessage.includes(keyword))
    );

    if (quickResponse) {
      setConversationContext(prev => [...prev.slice(-5), userMessage].slice(-10));
      return quickResponse.response;
    }

    // Try AI for complex queries first
    if (shouldUseAI(userMessage)) {
      console.log('🧠 Using AI for complex query:', userMessage.slice(0, 50) + '...');
      const aiResponse = await getAIResponse(userMessage, pageContent);
      if (aiResponse) {
        setConversationContext(prev => [...prev.slice(-5), userMessage, aiResponse].slice(-10));
        return aiResponse;
      }
    }

    // Fall back to knowledge base matching
    const intelligentResponse = findIntelligentMatch(userMessage, pageContent);
    if (intelligentResponse) {
      return intelligentResponse;
    }

    // Enhanced default response with page context
    return getEnhancedDefaultResponse(userMessage, pageContent);
  };

  return { getResponse, isUsingAI };
};
