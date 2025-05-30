import React from 'react';
import { Link } from 'react-router-dom';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import VideoTestimonial from '@/components/VideoTestimonial';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Clock, Users, Trophy, Activity, Heart, ChevronRight, Dumbbell, Target, UserCheck, Sparkles } from 'lucide-react';

const MeltFit = () => {
  const {
    scrollToSection
  } = useSmoothScroll();

  // FAQ data
  const faqs = [{
    question: "I'm a beginner. Can I still join MeltFit classes?",
    answer: "Absolutely. Our coaches scale every workout to match your current fitness level."
  }, {
    question: "What is the difference between Group Classes and the Transformation Program?",
    answer: "Group classes focus on strength and conditioning, while the Transformation Program includes training, nutrition coaching, and weekly tracking for maximum results."
  }, {
    question: "How do I know which program is right for me?",
    answer: "You can book a free consultation with our coaches. We'll guide you based on your goals."
  }, {
    question: "Can I join just for Personal Training?",
    answer: "Yes! You don't need to join group classes to work with a personal trainer."
  }];

  // Transformation stories
  const transformationStories = [{
    quote: "In just 6 weeks, I gained strength, lost 5kg, and learned how to maintain my results for life!",
    name: "Nisha K.",
    role: "MeltFit Member",
    videoSrc: "#"
  }, {
    quote: "The corrective exercise program helped me walk pain-free again after years of knee trouble.",
    name: "Rajesh M.",
    role: "MeltFit Client",
    videoSrc: "#"
  }];

  // Programs data with enhanced structure
  const programs = [
    {
      id: 1,
      title: "Group Strength & Conditioning",
      subtitle: "Build strength in a community setting",
      icon: <Users className="h-8 w-8" />,
      gradient: "from-blue-500 to-blue-600",
      description: "Our signature group classes focus on functional strength, endurance, and improved movement.",
      highlights: ["Real-world strength", "Improved posture", "Motivating environment"],
      schedule: "5-6 days/week • Morning & Evening",
      image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "6-Week Transformation",
      subtitle: "Complete body & lifestyle transformation",
      icon: <Target className="h-8 w-8" />,
      gradient: "from-purple-500 to-purple-600",
      description: "Intensive program combining training, nutrition guidance, and accountability support.",
      highlights: ["Custom nutrition plan", "Weekly tracking", "1-on-1 coaching"],
      schedule: "6 weeks intensive program",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Corrective Exercise",
      subtitle: "Movement quality & injury prevention",
      icon: <Activity className="h-8 w-8" />,
      gradient: "from-green-500 to-green-600",
      description: "Specialized program for improving movement quality and addressing muscular imbalances.",
      highlights: ["Mobility training", "Pain management", "Balance & stability"],
      schedule: "Flexible scheduling available",
      image: "https://images.unsplash.com/photo-1616279967983-ec413476e824?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Personal Training",
      subtitle: "One-on-one customized coaching",
      icon: <UserCheck className="h-8 w-8" />,
      gradient: "from-orange-500 to-orange-600",
      description: "Fully customized 1-on-1 training with personalized program design and hands-on support.",
      highlights: ["Tailored programs", "Flexible focus areas", "Premium locations"],
      schedule: "Flexible 1-on-1 sessions",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/20 to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Stronger. Fitter. Healthier. <span className="text-primary">For Life.</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-xl">
                MeltFit offers group strength and conditioning classes, transformation programs, corrective exercise training, and personal training — built to help you move better, feel better, and live better.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-base" asChild>
                  <Link to="/contact">Join MeltFit</Link>
                </Button>
                <Button variant="outline" size="lg" className="text-base" asChild>
                  <Link to="/contact">Try a Free Class</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="MeltFit Group Training" className="rounded-lg shadow-xl max-w-full h-auto" loading="lazy" width="600" height="400" />
            </div>
          </div>
        </div>
      </section>

      {/* About MeltFit */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About MeltFit</h2>
            <p className="text-lg text-gray-700 mb-8">
              At MeltFit, we specialize in Strength and Conditioning for everyday people.
              Whether you're aiming to get stronger, improve your mobility, transform your physique, or prevent injuries, MeltFit programs are designed to build a body that performs better in real life — not just in the gym.
            </p>
            <p className="text-lg font-medium">
              MeltFit isn't just a workout — it's a community focused on long-term health, strength, and vitality.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Section - Redesigned */}
      <section id="programs" className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="text-primary font-medium">Our Programs</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Choose Your Fitness Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From group energy to personal attention, find the perfect program to match your goals and lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {programs.map((program, index) => (
              <Card key={program.id} className={`group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 ${index % 2 === 0 ? 'lg:translate-y-4' : 'lg:-translate-y-4'} hover:translate-y-0`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${program.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative">
                  {/* Header with Icon and Title */}
                  <div className={`p-6 bg-gradient-to-r ${program.gradient} text-white`}>
                    <div className="flex items-center gap-4">
                      <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                        {program.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-1">{program.title}</h3>
                        <p className="text-white/90 font-medium">{program.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={program.image} 
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  {/* Content */}
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {program.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <Trophy className="h-4 w-4 text-primary" />
                        Key Benefits
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {program.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-gray-700">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Schedule */}
                    <div className="mb-6 p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium text-gray-900">{program.schedule}</span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Button className="w-full group-hover:scale-105 transition-transform duration-300" asChild>
                      <Link to="/contact">
                        Get Started
                        <ChevronRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto border">
              <h3 className="text-2xl font-bold mb-4">Not sure which program is right for you?</h3>
              <p className="text-gray-600 mb-6">
                Book a free consultation with our coaches and we'll help you find the perfect fit for your goals.
              </p>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Schedule Free Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose MeltFit */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose MeltFit?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Certified Coaches</h3>
              <p className="text-gray-600">Our trainers hold advanced certifications and have years of practical experience.</p>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Community-Driven Culture</h3>
              <p className="text-gray-600">Join a supportive community that celebrates every member's progress and achievements.</p>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Activity className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Focus on Real-Life Movement</h3>
              <p className="text-gray-600">Train for better performance in daily activities, not just aesthetic results.</p>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Trophy className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Proven Results</h3>
              <p className="text-gray-600">Nutrition + Training + Accountability = Lasting Results that transform lives.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">MeltFit Locations</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Find a MeltFit class near you and start your fitness journey today.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <img alt="XYZ Gym" className="w-full h-48 object-cover" loading="lazy" width="500" height="300" src="/lovable-uploads/406dca25-b0f3-4db8-986f-1fbb3151341d.png" />
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-1">Banu's Total Fitness </h3>
                <p className="text-sm text-gray-600 mb-3">Kamalpokhari,Kathmandu</p>
                <Button variant="outline" size="sm" className="w-full" onClick={() => window.open("https://www.google.com/maps/place/Banu's+Total+Fitness/@27.7116617,85.322952,17z/data=!3m1!4b1!4m6!3m5!1s0x39eb190f34770a11:0xf08d1474a9fa25ee!8m2!3d27.711657!4d85.3255269!16s%2Fg%2F1thl3v8p?entry=ttu&g_ep=EgoyMDI1MDUwNS4wIKXMDSoASAFQAw%3D%3D", "_blank")}>
                  Get Directions
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <img src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="ABC Fitness" className="w-full h-48 object-cover" loading="lazy" width="500" height="300" />
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-1">Comming Soon </h3>
                <p className="text-sm text-gray-600 mb-3">Expanding soon into multiple Locaitons </p>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link to="/contact">
                    Get Directions
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <img src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="FitZone" className="w-full h-48 object-cover" loading="lazy" width="500" height="300" />
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-1">Comming Soon </h3>
                <p className="text-sm text-gray-600 mb-3">Expanding Soon in multiple locations</p>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link to="/contact">
                    Get Directions
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-10">
            <Button size="lg" asChild>
              <Link to="/contact">Find a Class Near You</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Transformation Stories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Transformation Stories</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Real results from real people just like you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {transformationStories.map((story, index) => <div key={index} className="mx-auto w-full max-w-md">
                <VideoTestimonial videoSrc={story.videoSrc} title={story.quote} name={story.name} role={story.role} />
              </div>)}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50" id="faq">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Get answers to common questions about our MeltFit programs.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="py-2 text-gray-700">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>)}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your strength, movement, and life?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/contact">Join MeltFit Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default MeltFit;
