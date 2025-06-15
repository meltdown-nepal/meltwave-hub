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

  // Enhanced knowledge base now covers ALL important website content
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

    // NEW: Website-wide knowledge base—covers all major pages, features, and unique value
    const generalKnowledge: KnowledgeItem[] = [
      // Home Page
      {
        content: "Meltdown's home page showcases how we provide innovative wellness solutions for companies and employees. Discover multiple gym access, wellbeing challenges, and a comprehensive wellness app—everything centered around joyful, active living for all!",
        keywords: ['home', 'homepage', 'meltdown', 'main', 'start', 'empower', 'wellness solutions'],
        category: 'Home',
        priority: 14
      },
      // Pricing Page
      {
        content: "Our pricing is fully transparent: Basic, Gold, and Platinum packages offer corporate rates with access to 20, 40, or up to 70+ wellness options respectively. Packages include gyms, group classes, yoga, swimming, counseling, physiotherapy, and more. Visit the Meltdown Pricing page for detailed comparisons—each plan is designed for maximum flexibility and value.",
        keywords: ['pricing', 'price', 'cost', 'rates', 'compare', 'packages', 'plans', 'basic', 'gold', 'platinum'],
        category: 'Pricing',
        priority: 15
      },
      // Employee Page
      {
        content: "Employees love flexible wellness with Meltdown! Access 20+ gyms (Basic), 40+ wellness options (Gold), or 70+ amenities (Platinum). Enjoy mental wellbeing, fitness challenges, community, leaderboards, rewards, and a mobile app for easy check-ins. Hear real employee stories on our employees page!",
        keywords: ['employee', 'for employees', 'perks', 'wellbeing', 'testimonials', 'stories', 'mobile app', 'checkin', 'leaderboard', 'community', 'rewards'],
        category: 'Employees',
        priority: 13
      },
      // Corporate Wellness Page
      {
        content: "Meltdown's Corporate Wellness platform transforms company culture with tailored wellness memberships, centralized admin control, gamification, ROI analytics, and rapid onboarding. Trusted by IT, education, hospitality, and FMCG companies—contact us to bring Meltdown to your workplace.",
        keywords: ['corporate', 'companies', 'workplace', 'admin', 'setup', 'wellness program', 'gamification', 'roi', 'analytics', 'retention', 'engagement'],
        category: 'Corporate Wellness',
        priority: 15
      },
      // Events Page
      {
        content: "Our Events connect teams and communities via runs, group challenges, fun activities, and environmental action! Check the Events page for wellness runs, Java coffee teaming, and tree-planting partnerships—let us run your next event!",
        keywords: ['event', 'events', 'run', 'challenges', 'team building', 'gallery', 'photos', 'environment', 'community', 'wellness event'],
        category: 'Events',
        priority: 13
      },
      // App/Platform
      {
        content: "The Meltdown app is your wellness command center: scan to check in at multiple gyms and studios, track leaderboard ranks, join challenges, and monitor your wellbeing stats—all from your phone!",
        keywords: ['app', 'mobile', 'platform', 'scan', 'check-in', 'dashboard', 'leaderboard', 'stats', 'tracking', 'app download'],
        category: 'App',
        priority: 13
      },
      // Providers
      {
        content: "Meltdown partners with best-in-class providers—gyms, fitness instructors, yoga studios, mental health counselors, and more! Providers can join our network to grow their reach and serve top employers.",
        keywords: ['provider', 'wellness provider', 'partner', 'gyms', 'studios', 'join', 'grow', 'partnership'],
        category: 'Providers',
        priority: 11
      },
      // Success Stories & Testimonials
      {
        content: "Real people, real results: Meltdown clients rave about improved motivation, positive work culture, easy gym access, and diverse wellness. Read stories from Jyoti Pokharel, Bibha Tandukar, Pabin Karki, Chiring Sherpa and more on the testimonials section.",
        keywords: ['testimonials', 'success', 'stories', 'reviews', 'feedback', 'jyoti', 'bibha', 'pabin', 'chiring', 'clients', 'case studies'],
        category: 'Testimonials',
        priority: 12
      },
      // General Product/Offering
      {
        content: "Meltdown offers membership-based access to: gyms, yoga, Zumba, boxing, golf simulation, swimming, physiotherapy, Pilates, group classes, and counseling—all via a single subscription for each user (corporate or employee).",
        keywords: ['services', 'included', 'offerings', 'membership', 'access', 'features', 'what', 'included', 'gym', 'yoga', 'zumba', 'boxing', 'group', 'counseling', 'pilates', 'physiotherapy', 'swimming'],
        category: 'Services',
        priority: 15
      },
      // Engagement, Gamification & ROI
      {
        content: "Meltdown's platform makes wellness engaging with gamification—challenges, leaderboards, achievements, and community-building for any size workforce. Detailed reporting tracks ROI, participation, cost savings, and wellness outcomes for your organization.",
        keywords: ['engagement', 'gamification', 'roi', 'leaderboard', 'metrics', 'participation', 'report', 'challenge', 'engage', 'progress'],
        category: 'Engagement',
        priority: 13
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
