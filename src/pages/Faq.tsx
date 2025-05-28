
import React, { useState, useMemo } from 'react';
import { Search, Brain, Building2, Users, Settings, TrendingUp, Target, Shield, Lightbulb } from 'lucide-react';
import { Input } from "@/components/ui/input";
import FaqSection from '../components/faq/FaqSection';
import { faqData } from '../data/faqData';

const Faq = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter FAQ data based on search term
  const filteredFaqData = useMemo(() => {
    if (!searchTerm.trim()) return faqData;

    return faqData.map(section => ({
      ...section,
      questions: section.questions.filter(
        q => 
          q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchTerm.toLowerCase())
      )
    })).filter(section => section.questions.length > 0);
  }, [searchTerm]);

  const getSectionIcon = (sectionId: string) => {
    const iconMap: Record<string, any> = {
      'general': Brain,
      'business': Building2,
      'engagement': Users,
      'technology': Settings,
      'onboarding': Target,
      'metrics': TrendingUp,
      'value': Lightbulb,
      'customization': Settings,
      'challenges': Shield,
      'mission': Target
    };
    return iconMap[sectionId] || Brain;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary/10 to-secondary/10 py-[50px]">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 flex items-center justify-center gap-3">
              <Brain className="h-12 w-12 text-primary" />
              Meltdown – FAQ for Clients
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Find answers to all your questions about our corporate wellness platform. 
              Search by keyword or browse through our comprehensive categories below.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="section-padding pb-8">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search FAQ questions by keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 py-3 text-lg bg-white shadow-sm border-gray-200 focus:border-primary"
              />
            </div>
            {searchTerm && (
              <p className="text-gray-600 mt-3 text-center">
                {filteredFaqData.reduce((total, section) => total + section.questions.length, 0)} 
                {' '}results found for "{searchTerm}"
              </p>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {filteredFaqData.length === 0 ? (
              <div className="text-center py-12">
                <div className="bg-gray-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Search className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No results found</h3>
                <p className="text-gray-600">
                  Try adjusting your search terms to find what you're looking for.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {filteredFaqData.map((section) => {
                  const IconComponent = getSectionIcon(section.id);
                  return (
                    <FaqSection
                      key={section.id}
                      title={section.title}
                      icon={<IconComponent className="h-6 w-6" />}
                      questions={section.questions}
                      defaultOpen={searchTerm.length > 0}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-gradient-to-r from-primary/20 to-secondary/20">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our team is here to help you understand 
            how Meltdown can transform your workplace wellness.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#/contact" className="btn-primary">
              Contact Our Team
            </a>
            <a href="#/schedule-demo" className="btn-outline">
              Schedule a Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
