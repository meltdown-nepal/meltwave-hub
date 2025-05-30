
import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown, LucideIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface FaqItemProps {
  question: string;
  answer: string;
  icon?: LucideIcon;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, icon: Icon }) => {
  const [feedback, setFeedback] = useState<'helpful' | 'not-helpful' | null>(null);
  const { toast } = useToast();

  const handleFeedback = (type: 'helpful' | 'not-helpful') => {
    setFeedback(type);
    toast({
      title: "Thank you for your feedback!",
      description: type === 'helpful' 
        ? "We're glad this answer was helpful." 
        : "We'll work on improving this answer.",
    });
  };

  // Format answer text to handle line breaks and lists
  const formatAnswer = (text: string) => {
    return text.split('\n').map((line, index) => {
      if (line.trim() === '') return <br key={index} />;
      
      // Handle numbered lists
      if (/^\d+\./.test(line.trim())) {
        return (
          <div key={index} className="ml-4 mb-2">
            <strong>{line.trim()}</strong>
          </div>
        );
      }
      
      // Handle bullet points or sub-items
      if (line.trim().startsWith('•') || line.trim().startsWith('-')) {
        return (
          <div key={index} className="ml-6 mb-1 text-gray-700">
            {line.trim().substring(1).trim()}
          </div>
        );
      }
      
      // Regular paragraphs
      return (
        <p key={index} className="mb-3 text-gray-700 leading-relaxed">
          {line.trim()}
        </p>
      );
    });
  };

  return (
    <div className="space-y-4">
      {/* Question with Icon */}
      {Icon && (
        <div className="flex items-center gap-3 mb-3">
          <div className="flex-shrink-0 w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
            <Icon className="h-5 w-5 text-yellow-600" />
          </div>
          <span className="font-medium text-gray-800">{question}</span>
        </div>
      )}
      
      <div className="prose prose-gray max-w-none">
        {formatAnswer(answer)}
      </div>
      
      {/* Feedback Widget */}
      <div className="border-t border-gray-100 pt-4">
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600 font-medium">
            Did this answer help you?
          </span>
          <div className="flex gap-2">
            <Button
              variant={feedback === 'helpful' ? 'default' : 'outline'}
              size="sm"
              onClick={() => handleFeedback('helpful')}
              className={`flex items-center gap-2 ${
                feedback === 'helpful' 
                  ? 'bg-green-500 hover:bg-green-600 text-white' 
                  : 'hover:bg-green-50 hover:text-green-600'
              }`}
              disabled={feedback !== null}
            >
              <ThumbsUp className="h-4 w-4" />
              Yes
            </Button>
            <Button
              variant={feedback === 'not-helpful' ? 'default' : 'outline'}
              size="sm"
              onClick={() => handleFeedback('not-helpful')}
              className={`flex items-center gap-2 ${
                feedback === 'not-helpful' 
                  ? 'bg-red-500 hover:bg-red-600 text-white' 
                  : 'hover:bg-red-50 hover:text-red-600'
              }`}
              disabled={feedback !== null}
            >
              <ThumbsDown className="h-4 w-4" />
              No
            </Button>
          </div>
          {feedback && (
            <span className="text-sm text-gray-500 italic">
              Thank you for your feedback!
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
