
import React from 'react';
import { Link } from 'react-router-dom';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import VideoTestimonial from '@/components/VideoTestimonial';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Clock, Users, Trophy, Activity, Heart, ChevronRight } from 'lucide-react';

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

          {/* Program 1: Group Classes */}
          <div className="max-w-6xl mx-auto mb-20">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">Program 1</div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4">Group Strength and Conditioning Classes</h3>
                  <p className="text-gray-600 mb-6">
                    Our signature group classes focus on functional strength, endurance, and improved movement.
                    We build your foundation with proper technique, progressive strength training, and conditioning workouts tailored for the general population — from beginners to seasoned lifters.
                  </p>
                  
                  <h4 className="font-bold text-lg mb-3">Benefits:</h4>
                  <ul className="mb-6 space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>Boost real-world strength and stamina</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>Improve posture and joint health</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>Fun, motivating group environment</span>
                    </li>
                  </ul>
                  
                  <h4 className="font-bold text-lg mb-3">Frequency:</h4>
                  <ul className="mb-8 space-y-2">
                    <li className="flex items-start">
                      <Clock className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>Classes run 5–6 days a week</span>
                    </li>
                    <li className="flex items-start">
                      <Clock className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>Morning and Evening Batches Available</span>
                    </li>
                  </ul>
                  
                  <Button size="lg" className="text-base" asChild>
                    <Link to="/contact">See Class Timings</Link>
                  </Button>
                </div>
                <div className="hidden lg:block relative">
                  <img src="https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Group Training at MeltFit" className="h-full w-full object-cover" loading="lazy" width="800" height="600" />
                </div>
              </div>
            </div>
          </div>

          {/* Program 2: 6-Week Transformation */}
          <div className="max-w-6xl mx-auto mb-20">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="hidden lg:block relative order-2 lg:order-1">
                  <img src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Transformation Program" className="h-full w-full object-cover" loading="lazy" width="800" height="600" />
                </div>
                <div className="p-8 lg:p-12 order-1 lg:order-2">
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">Program 2</div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4">6-Week Transformation Program</h3>
                  <p className="text-gray-600 mb-6">
                    An intensive 6-week program combining MeltFit's training system with personalized nutrition guidance, progress tracking, and full accountability support.
                  </p>
                  
                  <h4 className="font-bold text-lg mb-3">Includes:</h4>
                  <ul className="mb-6 space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>6 Weeks of Group Training</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>Custom Nutrition Plan</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>Weekly Progress Tracking and Adjustments</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>1-on-1 Accountability Coach</span>
                    </li>
                  </ul>
                  
                  <h4 className="font-bold text-lg mb-3">Ideal For:</h4>
                  <ul className="mb-8 space-y-2">
                    <li className="flex items-start">
                      <Trophy className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>Fat loss</span>
                    </li>
                    <li className="flex items-start">
                      <Trophy className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>Strength gain</span>
                    </li>
                    <li className="flex items-start">
                      <Trophy className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>Building healthy habits that last</span>
                    </li>
                  </ul>
                  
                  <Button size="lg" className="text-base" asChild>
                    <Link to="/contact">Apply for Transformation Program</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Program 3: Corrective Exercise */}
          <div className="max-w-6xl mx-auto mb-20">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">Program 3</div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4">Corrective Exercise Program</h3>
                  <p className="text-gray-600 mb-6">
                    Tailored for older adults or those recovering from injuries, this program focuses on improving movement quality, correcting muscular imbalances, managing pain, and preventing future injuries.
                  </p>
                  
                  <h4 className="font-bold text-lg mb-3">Focus Areas:</h4>
                  <ul className="mb-6 space-y-2">
                    <li className="flex items-start">
                      <Activity className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>Mobility and Flexibility Training</span>
                    </li>
                    <li className="flex items-start">
                      <Activity className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>Balance and Core Stability</span>
                    </li>
                    <li className="flex items-start">
                      <Activity className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>Strengthening Weak Links</span>
                    </li>
                    <li className="flex items-start">
                      <Activity className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>Posture and Joint Health</span>
                    </li>
                  </ul>
                  
                  <h4 className="font-bold text-lg mb-3">Ideal For:</h4>
                  <ul className="mb-8 space-y-2">
                    <li className="flex items-start">
                      <Users className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>Seniors</span>
                    </li>
                    <li className="flex items-start">
                      <Users className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>Post-rehabilitation clients</span>
                    </li>
                    <li className="flex items-start">
                      <Users className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>Anyone struggling with pain or limited movement</span>
                    </li>
                  </ul>
                  
                  <Button size="lg" className="text-base" asChild>
                    <Link to="/contact">Learn More About Corrective Training</Link>
                  </Button>
                </div>
                <div className="hidden lg:block relative">
                  <img src="https://images.unsplash.com/photo-1616279967983-ec413476e824?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Corrective Exercise Training" className="h-full w-full object-cover" loading="lazy" width="800" height="600" />
                </div>
              </div>
            </div>
          </div>

          {/* Program 4: Personal Training */}
          <div className="max-w-6xl mx-auto mb-12">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="hidden lg:block relative order-2 lg:order-1">
                  <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Personal Training" className="h-full w-full object-cover" loading="lazy" width="800" height="600" />
                </div>
                <div className="p-8 lg:p-12 order-1 lg:order-2">
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">Program 4</div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4">Personal Training</h3>
                  <p className="text-gray-600 mb-6">
                    For those who prefer a fully customized approach, MeltFit also offers 1-on-1 Personal Training.
                    Work closely with a coach to set goals, create a tailored program, and get hands-on support every step of the way.
                  </p>
                  
                  <h4 className="font-bold text-lg mb-3">Options:</h4>
                  <ul className="mb-6 space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>Strength and Performance Focus</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>Fat Loss and Body Transformation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>Injury Recovery and Corrective Focus</span>
                    </li>
                  </ul>
                  
                  <h4 className="font-bold text-lg mb-3">Location:</h4>
                  <p className="mb-8">Available at select MeltFit partner facilities</p>
                  
                  <Button size="lg" className="text-base" asChild>
                    <Link to="/contact">Book a Free Consultation</Link>
                  </Button>
                </div>
              </div>
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
              <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="XYZ Gym" className="w-full h-48 object-cover" loading="lazy" width="500" height="300" />
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-1">Banu's Total Fitness </h3>
                <p className="text-sm text-gray-600 mb-3">Kamalpokhari,Kathmandu</p>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link to="/contact">
                    Get Directions
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
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
