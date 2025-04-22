import React from 'react';
import { Link } from 'react-router-dom';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

const MeltFit = () => {
  const { scrollToSection } = useSmoothScroll();
  
  // Sample training programs
  const trainingPrograms = [
    {
      title: "Foundations",
      level: "Beginner",
      duration: "4 weeks",
      focus: "Building basic fitness habits and introducing key movement patterns",
      description: "Perfect for those new to regular exercise or returning after a long break. Focuses on establishing sustainable fitness habits with gentle, progressive workouts."
    },
    {
      title: "Core Strength",
      level: "Intermediate",
      duration: "6 weeks",
      focus: "Developing core stability, back strength, and proper posture",
      description: "Designed to address the common issues of desk workers - weak core, poor posture, and back pain. Builds functional strength for everyday activities."
    },
    {
      title: "Performance",
      level: "Advanced",
      duration: "8 weeks",
      focus: "Optimizing fitness for peak mental and physical performance",
      description: "For those looking to take their fitness to the next level. Combines high-intensity interval training, strength work, and recovery techniques for maximum results."
    }
  ];

  // Sample training approaches
  const trainingApproaches = [
    {
      title: "Personalized Assessment",
      description: "Every program begins with a comprehensive assessment of your current fitness level, goals, and any limitations to create a truly personalized plan.",
      icon: "clipboard-check"
    },
    {
      title: "Adaptive Programming",
      description: "Our programs adjust to your progress, ensuring you're always working at the optimal level for improvement without risking injury.",
      icon: "refresh-cw"
    },
    {
      title: "Data-Driven Results",
      description: "Regular progress checks and adjustments based on measurable outcomes ensure you're always moving toward your goals efficiently.",
      icon: "line-chart"
    },
    {
      title: "Holistic Approach",
      description: "We address all aspects of fitness including strength, endurance, flexibility, and recovery for complete physical wellbeing.",
      icon: "circle-dashed"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/20 to-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                MeltFit Training Programs
              </h1>
              <p className="text-lg mb-8">
                Science-based fitness programs designed specifically for busy professionals. Improve your energy, focus, and productivity through targeted physical training that fits your schedule and goals.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary">Schedule a Consultation</Link>
                <button 
                  onClick={() => scrollToSection('programs')} 
                  className="btn-outline"
                >
                  View Programs
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                alt="MeltFit Training" 
                className="rounded-lg shadow-xl max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The MeltFit Advantage</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Our programs are specifically designed to address the unique needs and challenges of busy professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-brain"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"></path><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Enhanced Cognitive Function</h3>
              <p>
                Boost your mental performance through physical training that optimizes brain function and focus.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-battery-charging"><path d="M7 7h10v10H7z"></path><path d="M11 7v10"></path><path d="M7 12h4"></path><line x1="5" x2="5" y1="18" y2="19"></line><line x1="19" x2="19" y1="18" y2="19"></line><line x1="5" x2="5" y1="5" y2="6"></line><line x1="19" x2="19" y1="5" y2="6"></line></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Sustainable Energy</h3>
              <p>
                Develop physical training habits that create consistent, all-day energy rather than peaks and crashes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-calendar-clock"><path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path><path d="M16 2v4"></path><path d="M8 2v4"></path><path d="M3 10h5"></path><path d="M17.5 17.5 16 16.25V14"></path><path d="M22 16a5 5 0 1 0-10 0 5 5 0 0 0 10 0Z"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Time-Efficient</h3>
              <p>
                Programs designed for busy schedules with maximum results in minimum time through evidence-based methods.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-activity"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Stress Resilience</h3>
              <p>
                Build physical strength that translates to mental resilience in high-pressure work environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Training Programs</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Structured fitness programs designed to meet you at your current level and progressively move you toward your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainingPrograms.map((program, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-primary/10 p-5">
                  <h3 className="text-2xl font-bold mb-1">{program.title}</h3>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Level: {program.level}</span>
                    <span className="text-gray-600">Duration: {program.duration}</span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="font-bold mb-2">Focus: {program.focus}</p>
                  <p className="text-gray-700 mb-6">{program.description}</p>
                  <Link to="/contact" className="btn-primary w-full text-center">
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg mb-6">
              Not sure which program is right for you? Schedule a free consultation with one of our fitness specialists.
            </p>
            <Link to="/contact" className="btn-outline">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Training Approach</h2>
            <p className="text-lg max-w-3xl mx-auto">
              MeltFit's methodology is based on exercise science, behavioral psychology, and real-world application for busy professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trainingApproaches.map((approach, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    {approach.icon === "clipboard-check" && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-clipboard-check"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="m9 14 2 2 4-4"></path></svg>
                    )}
                    {approach.icon === "refresh-cw" && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-refresh-cw"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M3 21v-5h5"></path></svg>
                    )}
                    {approach.icon === "line-chart" && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-line-chart"><path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
                    )}
                    {approach.icon === "circle-dashed" && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-circle-dashed"><path d="M10.1 2.18a9.93 9.93 0 0 1 3.8 0"></path><path d="M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7"></path><path d="M21.82 10.1a9.93 9.93 0 0 1 0 3.8"></path><path d="M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69"></path><path d="M13.9 21.82a9.94 9.94 0 0 1-3.8 0"></path><path d="M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7"></path><path d="M2.18 13.9a9.93 9.93 0 0 1 0-3.8"></path><path d="M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69"></path></svg>
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{approach.title}</h3>
                    <p className="text-gray-700">{approach.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Hear from professionals who have transformed their health and performance through MeltFit training programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FFD838" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FFD838" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FFD838" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FFD838" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FFD838" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              </div>
              <p className="mb-6">
                "As a CEO, I never had time for lengthy workouts. MeltFit's 30-minute sessions fit perfectly into my schedule, and the results have been fantastic. My energy levels are consistently high throughout the day, and I'm handling stress better than ever."
              </p>
              <div className="flex items-center">
                <div className="bg-gray-200 w-10 h-10 rounded-full mr-3"></div>
                <div>
                  <p className="font-bold">Jonathan Lee</p>
                  <p className="text-sm text-gray-600">Chief Executive Officer</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FFD838" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FFD838" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FFD838" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FFD838" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FFD838" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              </div>
              <p className="mb-6">
                "The Core Strength program completely eliminated my chronic back pain from long hours at my desk. The personalized approach and attention to proper form made all the difference compared to other fitness programs I've tried."
              </p>
              <div className="flex items-center">
                <div className="bg-gray-200 w-10 h-10 rounded-full mr-3"></div>
                <div>
                  <p className="font-bold">Sophia Patel</p>
                  <p className="text-sm text-gray-600">Senior Software Engineer</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FFD838" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FFD838" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FFD838" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FFD838" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FFD838" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              </div>
              <p className="mb-6">
                "I was skeptical about fitting exercise into my already-packed schedule as a sales director, but MeltFit's approach changed everything. The adaptable workouts and focus on mental performance boosted my sales numbers by 20%."
              </p>
              <div className="flex items-center">
                <div className="bg-gray-200 w-10 h-10 rounded-full mr-3"></div>
                <div>
                  <p className="font-bold">Marcus Johnson</p>
                  <p className="text-sm text-gray-600">Sales Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Get answers to common questions about our MeltFit training programs.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">How much time will I need to commit each week?</h3>
              <p className="text-gray-700">
                Our programs typically require 2-4 sessions per week, with each session lasting 30-45 minutes. The exact schedule depends on your specific program and goals, but we design everything with busy professionals in mind.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Do I need a gym membership or special equipment?</h3>
              <p className="text-gray-700">
                Most of our programs offer both gym-based and home workout options. For home workouts, we provide alternative exercises that require minimal equipment, typically just a set of dumbbells and resistance bands.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">How quickly will I see results?</h3>
              <p className="text-gray-700">
                Most clients report noticeable improvements in energy and focus within 2 weeks. Physical changes such as strength gains and body composition improvements typically become apparent within 4-6 weeks of consistent training.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Can programs be adapted for injuries or physical limitations?</h3>
              <p className="text-gray-700">
                Absolutely. Our initial assessment identifies any limitations, and our programs are fully customizable. We work around injuries and provide modifications to ensure safe, effective training for everyone.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Is nutrition support included?</h3>
              <p className="text-gray-700">
                Yes, all programs include basic nutrition guidance customized to your goals. For more comprehensive nutrition support, we offer additional nutrition coaching packages that can be added to any training program.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary/20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Performance?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Join MeltFit and discover how targeted physical training can enhance your energy, focus, and productivity in just 30 minutes a day.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/contact" className="btn-primary">Get Started Today</Link>
            <Link to="/contact" className="btn-outline">Schedule a Consultation</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MeltFit;
