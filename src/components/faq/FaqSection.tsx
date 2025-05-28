
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from 'lucide-react';
import FaqItem from './FaqItem';

interface Question {
  id: string;
  question: string;
  answer: string;
}

interface FaqSectionProps {
  title: string;
  questions: Question[];
  defaultOpen?: boolean;
}

const FaqSection: React.FC<FaqSectionProps> = ({ 
  title, 
  questions, 
  defaultOpen = false 
}) => {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  React.useEffect(() => {
    setIsOpen(defaultOpen);
  }, [defaultOpen]);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-bold text-left">{title}</h2>
          </div>
          <ChevronDown 
            className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`} 
          />
        </CollapsibleTrigger>
        
        <CollapsibleContent className="border-t border-gray-100">
          <div className="p-6 pt-4">
            <Accordion type="single" collapsible className="w-full space-y-2">
              {questions.map((question) => (
                <AccordionItem 
                  key={question.id} 
                  value={question.id}
                  className="border border-gray-100 rounded-lg overflow-hidden"
                >
                  <AccordionTrigger className="px-4 py-3 text-left font-medium hover:no-underline hover:bg-gray-50 transition-colors">
                    {question.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <FaqItem question={question.question} answer={question.answer} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default FaqSection;
