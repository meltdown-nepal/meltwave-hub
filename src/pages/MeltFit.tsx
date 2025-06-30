import React from 'react';
import { Link } from 'react-router-dom';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import VideoTestimonial from '@/components/VideoTestimonial';
import CyclingHeroImage from '@/components/CyclingHeroImage';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Clock, Users, Trophy, Activity, Heart, ChevronRight, LayoutGrid, List, Grid2x2, LayoutList, Dumbbell, Leaf } from 'lucide-react';
import EssentialPlanSection from '@/components/essential-plan/EssentialPlanSection';
const MeltFit = () => {
  const {
    scrollToSection
  } = useSmoothScroll();

  // FAQ data
  const faqs = [{
    question: "I'm a beginner. Can I still join MeltFit classes?",
    answer: "Absolutely. Our coaches scale every workout to match your current fitness level."
  }, {
    question: "What is the difference between Group Classes and the Essential Plan?",
    answer: "Group classes focus on strength and conditioning, while the Essential Plan includes personalized 1:1 coaching, nutrition support, and weekly tracking for maximum results."
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
  const programCards = [{
    icon: <LayoutGrid className="h-7 w-7 text-primary mb-2" />,
    title: "Group Strength and Conditioning Classes",
    description: "Signature group classes focused on functional strength, endurance, and improved movement for all levels.",
    cta: "See Class Timings",
    ctaLink: "/contact"
  }, {
    icon: <Grid2x2 className="h-7 w-7 text-primary mb-2" />,
    title: "Essential Plan",
    description: "A flexible, personalized coaching system that adapts to your lifestyle with expert support for long-term changes.",
    cta: "View Essential Plans",
    ctaLink: "#essential-plan"
  }, {
    icon: <LayoutList className="h-7 w-7 text-primary mb-2" />,
    title: "Corrective Exercise Program",
    description: "Tailored for seniors or those recovering from injury, focusing on movement quality and pain management.",
    cta: "Learn More About Corrective Training",
    ctaLink: "/contact"
  }, {
    icon: <List className="h-7 w-7 text-primary mb-2" />,
    title: "Personal Training",
    description: "1-on-1 training with a coach to set goals and get custom support—ideal for specific needs and flexible scheduling.",
    cta: "View Plans",
    ctaLink: "/package-detail/personal-training"
  }];

  // Hero images for cycling
  const heroImages = ["/lovable-uploads/meltfittraning.webp", "/lovable-uploads/439aa1b0-5b3b-4ec6-aeb3-d3bcd6ad20fe.png"];
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
                <Button size="lg" className="text-base" onClick={() => scrollToSection('programs')}>
                  View Programs
                </Button>
                <Button variant="outline" size="lg" className="text-base" asChild>
                  <a href="https://meltdownnepal.com/packages/personal-training" target="_blank" rel="noopener noreferrer">
                    Start Online Training
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <CyclingHeroImage images={heroImages} alt="MeltFit Group Training" className="rounded-lg shadow-lg w-full max-w-sm md:max-w-md h-auto object-cover" width={400} height={300} interval={2500} />
            </div>
          </div>
        </div>
      </section>

      {/* About MeltFit - IMPROVED REPRESENTATION */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About MeltFit</h2>
            <p className="text-lg text-gray-700 mb-5">
              Strength & Conditioning made for <span className="font-semibold text-primary">everybody</span>. Build a body that performs in the real world, not just the gym.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-primary/10 border-0 text-center py-8 px-6 hover:shadow-lg transition-shadow">
              <div className="mx-auto mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-primary/20">
                <Dumbbell className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Functional Strength</h3>
              <p className="text-gray-700 text-base">Train for real-life movement, not just aesthetics. Improve strength, mobility, and confidence for daily living.</p>
            </Card>
            <Card className="bg-primary/10 border-0 text-center py-8 px-6 hover:shadow-lg transition-shadow">
              <div className="mx-auto mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-primary/20">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Inclusive Community</h3>
              <p className="text-gray-700 text-base">Join a positive, supportive group where everyone is welcomed, celebrated, and progress is shared.</p>
            </Card>
            <Card className="bg-primary/10 border-0 text-center py-8 px-6 hover:shadow-lg transition-shadow">
              <div className="mx-auto mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-primary/20">
                <Leaf className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Sustainable Health</h3>
              <p className="text-gray-700 text-base">Programs built to create lasting healthy habits so you can move, feel, and live better—long term.</p>
            </Card>
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
          <div className="space-y-12 max-w-4xl mx-auto">
            {/* Personal Training - MOVED TO FIRST */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 bg-white rounded-2xl shadow-sm p-7 mb-4">
              <div className="flex-shrink-0">
                <div className="bg-primary/10 rounded-full w-14 h-14 flex items-center justify-center mb-2">
                  <List className="h-7 w-7 text-primary" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">Online Fitness Training</h3>
                <p className="text-gray-700 mb-2">
                  Get focused, personalized support with 1-on-1 coaching—perfect for individual goals, rehabilitation, or sport-specific improvement. You set the schedule and the goal, your coach guides you all the way.
                </p>
                <ul className="mb-3 pl-5 list-disc text-gray-600">
                  <li>Custom training plans for your goals</li>
                  <li>Flexible scheduling</li>
                  <li>Expert accountability and motivation</li>
                  <li>Open to all ages and needs</li>
                </ul>
                <Button size="sm" asChild>
                  <Link to="/packages/personal-training">View Plans</Link>
                </Button>
              </div>
            </div>
            {/* Nutrition Only Packages */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 bg-white rounded-2xl shadow-sm p-7 mb-4">
              <div className="flex-shrink-0">
                <div className="bg-primary/10 rounded-full w-14 h-14 flex items-center justify-center mb-2">
                  <Leaf className="h-7 w-7 text-primary" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  Nutrition Only Packages
                </h3>
                <p className="text-gray-700 mb-2">
                  Transform your relationship with food through personalized nutrition coaching. Get custom meal plans, nutritional guidance, and ongoing support to achieve your health goals through better eating habits.
                </p>
                <ul className="mb-3 pl-5 list-disc text-gray-600">
                  <li>Personalized meal plans and nutrition guidance</li>
                  <li>Food preference customization and local ingredients</li>
                  <li>Weekly nutrition coaching and progress tracking</li>
                  <li>Sustainable eating habits for long-term success</li>
                </ul>
                <Button size="sm" asChild>
                  <Link to="/packages/nutrition-only">View Plans</Link>
                </Button>
              </div>
            </div>
            {/* Essential Plan */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 bg-white rounded-2xl shadow-sm p-7 mb-4">
              <div className="flex-shrink-0">
                <div className="bg-primary/10 rounded-full w-14 h-14 flex items-center justify-center mb-2">
                  <LayoutList className="h-7 w-7 text-primary" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">Essential Plan</h3>
                <p className="text-gray-700 mb-2">A flexible, personalized coaching system that adapts to your lifestyle. Whether you want to focus on fitness, nutrition, or both — the Essential Plan gives you the structure, accountability, and expert support to make long-term changes.</p>
                <ul className="mb-3 pl-5 list-disc text-gray-600">
                  <li>Choose Your Coach: Diet, Fitness, or Both</li>
                  <li>Weekly 1:1 Coaching Sessions</li>
                  <li>Progress Tracking: Workout, Meal, Habit & Weigh-ins</li>
                  <li>WhatsApp Support (Mon–Fri, 8hr Response)</li>
                </ul>
                <Button size="sm" asChild>
                  <Link to="/essential-plan">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Essential Plan Section - REMOVE THIS ENTIRE SECTION */}
      
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