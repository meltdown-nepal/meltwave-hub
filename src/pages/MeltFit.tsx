import React from 'react';
import { Link } from 'react-router-dom';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import VideoTestimonial from '@/components/VideoTestimonial';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Clock, Users, Trophy, Activity, Heart, ChevronRight, LayoutGrid, List, Grid2x2, LayoutList } from 'lucide-react';

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

  // Program data for simple cards with icons instead of large images
  const programCards = [
    {
      icon: <LayoutGrid className="h-7 w-7 text-primary mb-2" />,
      title: "Group Strength and Conditioning Classes",
      description: "Signature group classes focused on functional strength, endurance, and improved movement for all levels.",
      cta: "See Class Timings",
      ctaLink: "/contact"
    },
    {
      icon: <Grid2x2 className="h-7 w-7 text-primary mb-2" />,
      title: "6-Week Transformation Program",
      description: "An intensive 6-week system with group training, nutrition coaching, and weekly tracking for proven results.",
      cta: "Apply for Transformation Program",
      ctaLink: "/contact"
    },
    {
      icon: <LayoutList className="h-7 w-7 text-primary mb-2" />,
      title: "Corrective Exercise Program",
      description: "Tailored for seniors or those recovering from injury, focusing on movement quality and pain management.",
      cta: "Learn More About Corrective Training",
      ctaLink: "/contact"
    },
    {
      icon: <List className="h-7 w-7 text-primary mb-2" />,
      title: "Personal Training",
      description: "1-on-1 training with a coach to set goals and get custom support—ideal for specific needs and flexible scheduling.",
      cta: "Book a Free Consultation",
      ctaLink: "/contact"
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

      {/* Programs Section */}
      <section id="programs" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Programs Offered</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Choose the right program to match your goals, fitness level, and preferences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {programCards.map((prog, i) => (
              <Card key={i} className="flex flex-col items-center p-7 text-center hover:shadow-lg transition-shadow min-h-[265px]">
                <div>{prog.icon}</div>
                <h3 className="text-lg md:text-xl font-bold mb-2">{prog.title}</h3>
                <p className="text-gray-600 mb-4">{prog.description}</p>
                <Button size="sm" asChild>
                  <Link to={prog.ctaLink}>{prog.cta}</Link>
                </Button>
              </Card>
            ))}
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
