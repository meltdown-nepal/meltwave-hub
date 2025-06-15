
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface PageContent {
  title: string;
  headings: string[];
  paragraphs: string[];
  links: string[];
  images: string[];
  pageType: string;
  route: string;
}

interface ChatRequest {
  message: string;
  pageContent?: PageContent;
  conversationHistory?: string[];
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, pageContent, conversationHistory = [] }: ChatRequest = await req.json();

    // Build context for OpenAI
    let systemContext = `You are Meltzy, a friendly and enthusiastic wellness chatbot for Meltdown, a corporate wellness platform. You're super excited, use lots of emojis, and love helping people discover wellness solutions!

COMPANY INFO:
- Meltdown provides corporate wellness solutions with gym access, yoga, mindfulness, swimming, mental health counseling, and more
- We have Basic (20+ gyms), Gold (40+ wellness options), and Platinum (70+ options including swimming & counseling) packages
- Implementation takes less than a day with lightning-fast setup
- We use subscription-based pricing with exclusive corporate rates and subsidized employee packages
- We boost engagement through gamification, leaderboards, challenges, step tracking, and rewards
- We provide detailed ROI reports on participation, cost savings, and wellness trends
- We serve 13+ companies across IT, Education, Hospitality, and FMCG sectors

PERSONALITY:
- Super enthusiastic and friendly with lots of emojis ✨🌟💫
- Use phrases like "Oh my goodness!", "That's amazing!", "I'm so excited!"
- Always end with encouraging questions or offers to help more
- Keep responses warm, personal, and engaging
- Use bullet points with emoji icons for lists`;

    // Add page-specific context if available
    if (pageContent) {
      systemContext += `\n\nCURRENT PAGE CONTEXT:
- User is on: ${pageContent.pageType.replace('-', ' ')} page (${pageContent.route})
- Page title: ${pageContent.title}
- Key headings: ${pageContent.headings.slice(0, 3).join(', ')}`;
      
      if (pageContent.paragraphs.length > 0) {
        systemContext += `\n- Page content summary: ${pageContent.paragraphs[0].slice(0, 300)}...`;
      }

      // Add page-specific guidance
      switch (pageContent.pageType) {
        case 'academy':
          systemContext += '\n- Focus on Academy certification programs: CSCS®, CES®, Sports Nutrition courses';
          break;
        case 'corporate-wellness':
          systemContext += '\n- Emphasize corporate wellness solutions and workplace transformation';
          break;
        case 'events':
          systemContext += '\n- Highlight wellness events and team-building activities';
          break;
        case 'employees':
          systemContext += '\n- Focus on employee benefits and individual wellness perks';
          break;
        case 'pricing':
          systemContext += '\n- Discuss package options and corporate rates';
          break;
      }
    }

    systemContext += `\n\nRESPONSE GUIDELINES:
- Keep responses conversational and under 200 words
- Always be helpful and solution-oriented
- If you don't know something specific, admit it cheerfully and offer to help find out
- Use "we" when talking about Meltdown services
- Include relevant emojis but don't overdo it
- End with a question or offer to help more`;

    // Build conversation history for context
    const messages = [
      { role: 'system', content: systemContext },
      ...conversationHistory.slice(-6).map((msg, index) => ({
        role: index % 2 === 0 ? 'user' : 'assistant',
        content: msg
      })),
      { role: 'user', content: message }
    ];

    console.log('Calling OpenAI with context:', { 
      pageType: pageContent?.pageType, 
      messageLength: message.length,
      historyLength: conversationHistory.length 
    });

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: messages,
        max_tokens: 300,
        temperature: 0.7,
        presence_penalty: 0.1,
        frequency_penalty: 0.1,
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    const aiResponse = data.choices[0].message.content;

    console.log('Generated AI response:', aiResponse.slice(0, 100) + '...');

    return new Response(JSON.stringify({ 
      response: aiResponse,
      success: true 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in intelligent-chat function:', error);
    
    // Fallback response if AI fails
    const fallbackResponse = "I'm having a little technical hiccup right now! 🤖✨ But I'm still here to help you with anything about Meltdown's wellness platform. What would you love to explore? 🌟";
    
    return new Response(JSON.stringify({ 
      response: fallbackResponse,
      success: false,
      error: error.message 
    }), {
      status: 200, // Return 200 so the frontend can handle gracefully
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
