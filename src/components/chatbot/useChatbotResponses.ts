import { useState } from 'react';
import { faqData } from '../../data/faqData';

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

export const useChatbotResponses = () => {
  const [conversationContext, setConversationContext] = useState<string[]>([]);

  const quickResponses: QuickResponse[] = [
    {
      keywords: ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening'],
      response: "Hello there, lovely human! 👋✨ I'm Meltzy, and I'm absolutely thrilled to meet you! 🌟 I'm bursting with knowledge about Meltdown's amazing wellness services, super cool pricing, awesome technology, and how we can help make your workplace the happiest, healthiest place ever! What exciting thing would you love to explore together? 🎉"
    },
    {
      keywords: ['thank', 'thanks', 'appreciate', 'grateful', 'awesome', 'great', 'perfect'],
      response: "Aww, you're so sweet! 🥰 It totally makes my day when I can help! I'm like a wellness encyclopedia with legs - well, if I had legs! 😄 Is there anything else about our magical wellness platform that you'd love to discover? I'm here and ready to share all the amazing details! ✨"
    }
  ];

  // Comprehensive knowledge base beyond just FAQ
  const createComprehensiveKnowledgeBase = (): KnowledgeItem[] => {
    const knowledgeBase: KnowledgeItem[] = [];

    // Add FAQ data with enhanced keywords
    faqData.forEach(section => {
      section.questions.forEach(q => {
        const enhancedKeywords = extractEnhancedKeywords(q.question + ' ' + q.answer);
        knowledgeBase.push({
          content: `**${q.question}**\n\n${q.answer}`,
          keywords: enhancedKeywords,
          category: section.title,
          priority: 10
        });
      });
    });

    // Add additional comprehensive knowledge
    const additionalKnowledge: KnowledgeItem[] = [
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

    return [...knowledgeBase, ...additionalKnowledge];
  };

  const extractEnhancedKeywords = (text: string): string[] => {
    const commonWords = new Set(['the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'is', 'are', 'was', 'were', 'be', 'been', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could', 'should', 'may', 'might', 'can', 'a', 'an', 'this', 'that', 'these', 'those']);
    
    // Extract base keywords
    const baseKeywords = text.toLowerCase()
      .replace(/[^\w\s]/g, ' ')
      .split(/\s+/)
      .filter(word => word.length > 2 && !commonWords.has(word));

    // Add synonyms and variations
    const synonymMap: { [key: string]: string[] } = {
      'price': ['cost', 'pricing', 'fee', 'charge', 'rate', 'expensive', 'cheap', 'budget', 'investment'],
      'company': ['business', 'organization', 'corporate', 'enterprise', 'firm'],
      'employee': ['worker', 'staff', 'team member', 'personnel', 'workforce'],
      'wellness': ['health', 'fitness', 'wellbeing', 'exercise', 'activity'],
      'service': ['offering', 'program', 'solution', 'option'],
      'engagement': ['participation', 'involvement', 'activity', 'usage'],
      'benefit': ['advantage', 'value', 'gain', 'positive', 'help'],
      'start': ['begin', 'launch', 'implement', 'setup', 'onboard'],
      'work': ['function', 'operate', 'perform', 'run'],
      'different': ['various', 'multiple', 'diverse', 'alternative'],
      'access': ['use', 'utilize', 'entry', 'availability'],
      'support': ['help', 'assistance', 'guidance', 'aid'],
      'track': ['monitor', 'measure', 'follow', 'record'],
      'challenge': ['competition', 'contest', 'game', 'activity'],
      'team': ['group', 'staff', 'workforce', 'colleagues']
    };

    const enhancedKeywords = new Set(baseKeywords);
    
    baseKeywords.forEach(keyword => {
      if (synonymMap[keyword]) {
        synonymMap[keyword].forEach(synonym => enhancedKeywords.add(synonym));
      }
    });

    return Array.from(enhancedKeywords);
  };

  const knowledgeBase = createComprehensiveKnowledgeBase();

  const findIntelligentMatch = (userMessage: string): string | null => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Enhanced preprocessing for better understanding
    const processedMessage = lowerMessage
      .replace(/[^\w\s]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

    const messageWords = processedMessage.split(' ').filter(word => word.length > 2);
    
    // Add conversation context for better understanding
    const contextWords = conversationContext.slice(-10).join(' ').toLowerCase().split(' ');
    const allWords = [...messageWords, ...contextWords.slice(-5)]; // Include recent context

    let bestMatches: Array<{ item: KnowledgeItem; score: number }> = [];

    knowledgeBase.forEach(item => {
      let score = 0;
      
      // Exact phrase matching (highest priority)
      if (item.content.toLowerCase().includes(processedMessage)) {
        score += 50;
      }

      // Keyword matching with different weights
      allWords.forEach(word => {
        item.keywords.forEach(keyword => {
          if (keyword === word) {
            score += 5; // Exact match
          } else if (keyword.includes(word) && word.length > 3) {
            score += 3; // Partial match
          } else if (word.includes(keyword) && keyword.length > 3) {
            score += 2; // Reverse partial match
          }
        });
      });

      // Question pattern matching
      const questionPatterns = [
        { pattern: /how (does|do|can|will)/, bonus: 5 },
        { pattern: /what (is|are|does|do)/, bonus: 5 },
        { pattern: /why (is|are|does|do)/, bonus: 5 },
        { pattern: /when (can|will|do)/, bonus: 5 },
        { pattern: /where (can|do|is)/, bonus: 5 },
        { pattern: /(tell me|explain|describe)/, bonus: 3 },
        { pattern: /(help|assist|support)/, bonus: 3 }
      ];

      questionPatterns.forEach(({ pattern, bonus }) => {
        if (pattern.test(lowerMessage)) {
          score += bonus;
        }
      });

      // Intent recognition
      const intents = [
        { intent: 'pricing', patterns: ['cost', 'price', 'expensive', 'budget', 'pay', 'fee'], bonus: 10 },
        { intent: 'services', patterns: ['service', 'offer', 'provide', 'include', 'feature'], bonus: 8 },
        { intent: 'implementation', patterns: ['start', 'begin', 'setup', 'implement', 'onboard'], bonus: 8 },
        { intent: 'benefits', patterns: ['benefit', 'advantage', 'help', 'improve', 'better'], bonus: 7 },
        { intent: 'engagement', patterns: ['engage', 'participate', 'motivate', 'encourage'], bonus: 7 }
      ];

      intents.forEach(({ patterns, bonus }) => {
        if (patterns.some(pattern => lowerMessage.includes(pattern))) {
          score += bonus;
        }
      });

      // Category relevance
      score += item.priority;

      if (score > 5) { // Minimum threshold
        bestMatches.push({ item, score });
      }
    });

    // Sort by score and get best matches
    bestMatches.sort((a, b) => b.score - a.score);
    
    if (bestMatches.length > 0) {
      // Update conversation context
      setConversationContext(prev => [...prev.slice(-5), userMessage].slice(-10));
      
      const bestMatch = bestMatches[0];
      return formatIntelligentResponse(bestMatch.item, userMessage);
    }

    return null;
  };

  const formatIntelligentResponse = (item: KnowledgeItem, originalQuestion: string): string => {
    let response = item.content;
    
    // Make response more conversational
    if (!response.includes('**')) {
      response = `Oh, what a fantastic question! 🌟 ${response}`;
    }
    
    // Add contextual follow-ups based on the category
    const followUps = {
      'Services': "Would you love to know more about specific services or see how they work their magic together? 🏃‍♂️✨",
      'Implementation': "I can also explain our super smooth onboarding process or help you understand the timeline! ⚡💫",
      'Pricing': "I'd be absolutely delighted to discuss how this amazing investment compares to traditional wellness programs! 💰🎉",
      'Engagement': "Want to know more about our fun gamification features or success strategies? They're so cool! 🎯🏆",
      'Analytics': "I can explain more about specific metrics or how other companies use this awesome data! 📊✨",
      'Mission': "Would you like to know how this beautiful mission translates into real benefits for companies? 🎯💖"
    };

    const categoryFollowUp = followUps[item.category as keyof typeof followUps];
    if (categoryFollowUp) {
      response += `\n\n${categoryFollowUp}`;
    }

    // Add dynamic suggestions based on question intent
    if (originalQuestion.toLowerCase().includes('price') || originalQuestion.toLowerCase().includes('cost')) {
      response += "\n\n💡 Ready to see the amazing value? I can help you schedule a personalized demo that'll blow your mind! ✨";
    } else if (originalQuestion.toLowerCase().includes('start') || originalQuestion.toLowerCase().includes('begin')) {
      response += "\n\n🚀 Ready to embark on this wellness adventure? Let me connect you with our fantastic team for next steps! 🌟";
    }

    return response;
  };

  const getEnhancedDefaultResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Analyze what the user might be asking about
    const topicSuggestions = [];
    
    if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
      topicSuggestions.push("💰 Ask about our sweet pricing structure and amazing corporate discounts");
    }
    if (lowerMessage.includes('service') || lowerMessage.includes('offer')) {
      topicSuggestions.push("🏃‍♂️ Learn about our fantastic Basic, Gold, and Platinum packages");
    }
    if (lowerMessage.includes('work') || lowerMessage.includes('function')) {
      topicSuggestions.push("⚙️ Understand how our magical platform operates");
    }
    if (lowerMessage.includes('benefit') || lowerMessage.includes('help')) {
      topicSuggestions.push("📈 Discover the incredible benefits for companies and employees");
    }

    let response = "Ooh, I have so much knowledge about Meltdown's wellness solutions and I'm super excited to help! ✨ ";
    
    if (topicSuggestions.length > 0) {
      response += "Here are some specific areas where I can sprinkle some magic:\n\n" + topicSuggestions.join('\n') + "\n\n";
    }

    response += "You can ask me about:\n• Pricing and packages 💰\n• Services and features 🏃‍♂️\n• Implementation process ⚡\n• Employee engagement strategies 🎯\n• ROI and analytics 📊\n• Success stories and case studies 🌟\n\nWhat adventure would you like to go on together? 🤔✨";

    return response;
  };

  const getResponse = async (userMessage: string): Promise<string> => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Check for quick responses first
    const quickResponse = quickResponses.find(response =>
      response.keywords.some(keyword => lowerMessage.includes(keyword))
    );

    if (quickResponse) {
      // Update context even for quick responses
      setConversationContext(prev => [...prev.slice(-5), userMessage].slice(-10));
      return quickResponse.response;
    }

    // Try intelligent matching
    const intelligentResponse = findIntelligentMatch(userMessage);
    if (intelligentResponse) {
      return intelligentResponse;
    }

    // Enhanced default response
    return getEnhancedDefaultResponse(userMessage);
  };

  return { getResponse };
};
