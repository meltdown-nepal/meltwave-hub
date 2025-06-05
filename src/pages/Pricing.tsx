
import React from 'react';
import { Check, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Pick the Perfect Plan For You
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your fitness goals and get ready to transform your wellness journey
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Melt Pro Plan - Recommended */}
          <Card className="relative overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-primary/20">
            {/* Recommended Badge */}
            <div className="absolute top-0 right-0 bg-gradient-to-r from-primary to-secondary text-black text-sm font-bold px-4 py-2 rounded-bl-lg">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4" />
                Recommended
              </div>
            </div>

            <CardHeader className="text-center pt-8">
              <CardTitle className="text-2xl font-bold text-gray-900">Melt Pro Plan</CardTitle>
              <CardDescription className="text-gray-600 mb-4">
                Get dedicated coaching and premium features
              </CardDescription>
              
              {/* Pricing */}
              <div className="mb-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-3xl text-gray-400 line-through">$299</span>
                  <span className="text-5xl font-bold text-gray-900">$149</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  Save $150/month
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Features */}
              <div className="space-y-4">
                {[
                  'Dedicated Fitness Coach with daily check-ins',
                  'Weekly 1-on-1 video calls for progress and goals',
                  'Unlimited in-app support and feedback',
                  'Access to premium app features: XP boosters, bonus Meltz, advanced leaderboards'
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-primary rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-black" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button 
                className="w-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-black font-bold py-3 text-lg"
                size="lg"
              >
                Subscribe Now $149/mo
              </Button>

              {/* Small Note */}
              <p className="text-center text-sm text-gray-500 italic">
                Reach your goals 2x faster with Melt Pro
              </p>
            </CardContent>
          </Card>

          {/* One-Time Boost Session */}
          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-gray-900">One-Time Boost Session</CardTitle>
              <CardDescription className="text-gray-600 mb-4">
                Perfect for getting started or a quick strategy boost
              </CardDescription>
              
              {/* Pricing */}
              <div className="mb-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-2xl text-gray-400 line-through">$99</span>
                  <span className="text-4xl font-bold text-gray-900">$49</span>
                </div>
                <Badge variant="outline" className="border-secondary text-secondary">
                  Save $50
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Features */}
              <div className="space-y-4">
                {[
                  'One-time video session with a fitness coach',
                  'Custom strategy for streaks and leaderboard performance'
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-secondary rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-black" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button 
                variant="outline" 
                className="w-full border-2 border-secondary text-gray-900 hover:bg-secondary hover:text-black font-bold py-3 text-lg transition-all duration-300"
                size="lg"
              >
                Book One-Time Call $49
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            All plans include access to our gamified fitness platform
          </p>
          <div className="flex justify-center items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              30-day money-back guarantee
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              Cancel anytime
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
