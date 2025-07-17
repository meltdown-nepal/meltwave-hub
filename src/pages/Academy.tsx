import React from 'react';
import { Link } from 'react-router-dom';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { BookOpen, GraduationCap, Users, Award, CheckCircle, Calendar, ChevronDown, Clock, Monitor, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import FacultyPhotosSection from '@/components/academy/FacultyPhotosSection';
const Academy = () => {
  const {
    scrollToSection
  } = useSmoothScroll();

  // Course data
  const courses = [{
    title: "Strength & Conditioning Specialist",
    subtitle: "CSCS® Prep + Meltdown Certification",
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
    overview: "Prepare for the CSCS® exam while gaining practical experience in strength and conditioning program design.",
    audience: "FCertified Personal trainers, Physiotherapist, Sports science graduates, atheltes who have trained under strength coached before",
    learnings: ["Program design for athletes", "Strength training science", "Performance testing", "Injury prevention", "Speed and agility development"],
    certification: "Includes CSCS® exam prep and Meltdown Academy certification upon completion.",
    duration: "12 weeks (weekends)"
  }, {
    title: "Corrective Exercise Specialist",
    subtitle: "CES® Prep + Meltdown Certification",
    icon: <Award className="h-8 w-8 text-primary" />,
    overview: "Learn to identify and address movement dysfunctions while preparing for the CES® certification exam.",
    audience: "Personal trainers, physical therapists, and fitness professionals seeking to specialize in corrective exercise.",
    learnings: ["Movement assessments", "Corrective exercise techniques", "Functional anatomy", "Program design for special populations", "Mobility enhancement strategies"],
    certification: "Includes CES® exam prep and Meltdown Academy certification upon completion.",
    duration: "8 weeks (weekends)"
  }, {
    title: "Sports Nutrition Specialist",
    subtitle: "Meltdown Certification",
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    overview: "Master the science of nutrition for performance enhancement and optimal athletic recovery.",
    audience: "Coaches, trainers, nutritionists, and health professionals working with active populations.",
    learnings: ["Performance nutrition principles", "Supplement evaluation", "Meal planning for athletes", "Hydration strategies", "Weight management for sports"],
    certification: "Meltdown Academy certification upon successful completion.",
    duration: "6 weeks (weekends)"
  }];

  // Schedule data
  const scheduleData = [{
    course: "Strength & Conditioning Specialist",
    weekdays: {
      online: {
        time: "7:00 PM - 9:00 PM",
        days: "Monday, Wednesday, Friday",
        format: "Theory Sessions"
      },
      offline: {
        time: "6:00 AM - 8:00 AM",
        days: "Tuesday, Thursday",
        format: "Practical Training"
      }
    },
    weekends: {
      online: {
        time: "9:00 AM - 12:00 PM",
        days: "Saturday",
        format: "Live Theory & Q&A"
      },
      offline: {
        time: "9:00 AM - 1:00 PM",
        days: "Sunday",
        format: "Hands-on Practicals"
      }
    }
  }, {
    course: "Corrective Exercise Specialist",
    weekdays: {
      online: {
        time: "8:00 PM - 9:30 PM",
        days: "Monday, Wednesday",
        format: "Theory Sessions"
      },
      offline: {
        time: "6:30 AM - 8:00 AM",
        days: "Thursday",
        format: "Movement Assessment"
      }
    },
    weekends: {
      online: {
        time: "10:00 AM - 12:00 PM",
        days: "Saturday",
        format: "Case Study Reviews"
      },
      offline: {
        time: "2:00 PM - 6:00 PM",
        days: "Sunday",
        format: "Practical Applications"
      }
    }
  }, {
    course: "Sports Nutrition Specialist",
    weekdays: {
      online: {
        time: "7:30 PM - 9:00 PM",
        days: "Tuesday, Thursday",
        format: "Theory & Guidelines"
      },
      offline: {
        time: "7:00 AM - 8:30 AM",
        days: "Friday",
        format: "Meal Planning Lab"
      }
    },
    weekends: {
      online: {
        time: "11:00 AM - 1:00 PM",
        days: "Saturday",
        format: "Interactive Sessions"
      },
      offline: {
        time: "10:00 AM - 3:00 PM",
        days: "Sunday",
        format: "Practical Workshops"
      }
    }
  }];

  // Upcoming batches
  const upcomingBatches = [{
    course: "Strength & Conditioning Specialist",
    date: "August 30, 2025",
    schedule: "Saturdays & Sundays, 9am - 1pm",
    spots: "12 spots remaining"
  }, {
    course: "Corrective Exercise Specialist",
    date: "Coming Soon",
    schedule: "Saturdays & Sundays, 2pm - 6pm",
    spots: "Coming Soon"
  }, {
    course: "Sports Nutrition Specialist",
    date: "Coming Soon",
    schedule: "Saturdays, 10am - 3pm",
    spots: "Coming Soon"
  }];

  // Testimonials
  const testimonials = [{
    quote: "The CSCS prep program at Meltdown Academy was rigorous and comprehensive. I passed my exam on the first attempt and secured a coaching position with a professional sports team.",
    name: "Michael Johnson",
    title: "Strength Coach, Kathmandu Kings XI"
  }, {
    quote: "The practical experience I gained through Meltdown's CES program was invaluable. Their dual certification approach gave me an edge in the job market.",
    name: "Priya Sharma",
    title: "Rehabilitation Specialist, Wellness Center"
  }, {
    quote: "The Sports Nutrition program completely transformed my approach to working with athletic clients. The evidence-based curriculum and hands-on practice set it apart from other certifications.",
    name: "Raj Thapa",
    title: "Performance Nutritionist, National Team"
  }];

  // FAQ items
  const faqItems = [{
    question: "Are these certifications recognized internationally?",
    answer: "Yes, the CSCS® and CES® certifications we prepare you for are internationally recognized industry standards. Our Meltdown certification adds practical value and is recognized throughout South Asia. In Nepal, Meltdown is currently recognized as a leading fitness education provider, with our graduates working in top gyms, sports teams, and wellness centers across the country. We maintain partnerships with major fitness facilities and corporate wellness programs in Kathmandu, Pokhara, and other major cities."
  }, {
    question: "What prerequisites are required to enroll?",
    answer: "For CSCS® preparation, a bachelor's degree in a related field or final year student status is recommended. For CES® and Sports Nutrition programs, a background in fitness or health is beneficial but not required."
  }, {
    question: "How are the courses structured?",
    answer: "Our courses combine weekend classes with practical sessions, online learning modules, and hands-on experience opportunities. Each course concludes with both practical assessments and exam preparations."
  }, {
    question: "What is included in the course fees?",
    answer: "Course fees cover all learning materials, practical sessions, Meltdown certification, and exam preparation. CSCS® and CES® examination fees to the certifying bodies are not included."
  }, {
    question: "Do you offer job placement assistance?",
    answer: "Yes, we provide ongoing career support including resume building, interview preparation, and connections with our industry partners who regularly hire our graduates."
  }];
  return <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/20 to-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Prepare for Internationally Recognized Certifications in Fitness and Strength Coaching
              </h1>
              <p className="text-lg mb-8">
                We train you to excel in the CSCS® by NSCA, CES® by NASM, and Sports Nutrition fields — and award you a Meltdown Certification upon successful completion.
              </p>
              <button onClick={() => scrollToSection('courses')} className="btn-primary">
                Explore Courses
              </button>
            </div>
            <div className="flex justify-center">
              <img alt="Fitness Coach Training Athletes" className="rounded-lg shadow-xl max-w-full h-auto" src="/lovable-uploads/547fbeca-a702-4751-89c3-c305cd703c61.jpg" />
            </div>
          </div>
        </div>
      </section>

      {/* About the Academy Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Meltdown Academy</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Our academy prepares fitness professionals for leading industry certifications while providing hands-on practical experience and career support. We combine exam preparation with real-world training to create well-rounded graduates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">CSCS® Certification</h3>
              <p>
                Certified Strength and Conditioning Specialist® by the National Strength and Conditioning Association (NSCA).
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">CES® Certification</h3>
              <p>
                Corrective Exercise Specialist® by the National Academy of Sports Medicine (NASM).
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Meltdown Certification</h3>
              <p>
                Our own rigorous certification that validates your practical skills and readiness for real-world application.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-sm mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Why Choose Meltdown Academy?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">World-Class Exam Preparation</h4>
                  <p className="text-gray-700">Comprehensive curriculum designed to ensure exam success.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">Deep Practical Training</h4>
                  <p className="text-gray-700">Beyond theory—apply your knowledge in supervised settings.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">Hands-on Experience</h4>
                  <p className="text-gray-700">Work with real clients and athletes during your training.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">Dual Certification</h4>
                  <p className="text-gray-700">Earn industry certification and Meltdown certification.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">Ongoing Career Support</h4>
                  <p className="text-gray-700">Job placement assistance and networking opportunities.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">Industry Connections</h4>
                  <p className="text-gray-700">Access to professional network and employment opportunities.</p>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link to="/contact" className="btn-primary">
                Join the Next Batch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Photos Section */}
      <FacultyPhotosSection />

      {/* Courses Offered Section */}
      <section id="courses" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Courses Offered</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Our comprehensive certification programs are designed to prepare you for international exams while providing practical experience.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => <Card key={index} className="transition-all duration-300 hover:shadow-lg">
                <CardHeader className="bg-primary/10">
                  <Collapsible>
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                        <CardDescription className="text-base font-medium">
                          {course.subtitle}
                        </CardDescription>
                      </div>
                      {course.icon}
                    </div>
                    
                    <CollapsibleTrigger className="text-sm text-primary hover:underline mt-4 inline-block">
                      View More
                    </CollapsibleTrigger>

                    <CollapsibleContent className="pt-6 space-y-4">
                      <div>
                        <h4 className="font-bold mb-1">Overview</h4>
                        <p className="text-sm text-gray-700">{course.overview}</p>
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Who Should Take This Course</h4>
                        <p className="text-sm text-gray-700">{course.audience}</p>
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">What You Will Learn</h4>
                        <ul className="text-sm text-gray-700 list-disc list-inside">
                          {course.learnings.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Certification Details</h4>
                        <p className="text-sm text-gray-700">{course.certification}</p>
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Duration</h4>
                        <p className="text-sm text-gray-700">{course.duration}</p>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </CardHeader>
                
              </Card>)}
          </div>
        </div>
      </section>

      {/* Schedule & Timetable Section */}
      

      {/* Upcoming Batches Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Batches</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Secure your spot in our upcoming certification programs. Limited seats available for each batch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingBatches.map((batch, index) => <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="bg-primary/10 p-5">
                  <h3 className="text-xl font-bold mb-1">{batch.course}</h3>
                  <div className="flex items-center text-sm text-gray-600 mb-1">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>Starts: {batch.date}</span>
                  </div>
                  
                  <p className="text-sm font-medium text-primary">{batch.spots}</p>
                </div>
                <div className="p-5">
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSf_VSDXTvKWnzDkusFz_L1uSFAiVWXhARgbl9Ah3AlvUElCdQ/viewform" target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button className="w-full" variant="default">Register Now</Button>
                  </a>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Student Success Stories</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Hear from our graduates who have advanced their careers through our certification programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex justify-center mb-4">
                  <Avatar className="h-16 w-16">
                    <AvatarFallback className="bg-gradient-to-br from-primary/20 to-primary/40 font-bold text-slate-950">
                      {testimonial.name.split(' ').map(name => name[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <p className="text-gray-700 mb-6">"{testimonial.quote}"</p>
                <div className="text-center">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-primary/20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Meltdown Academy?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-10">
              <div className="flex items-start">
                <div className="rounded-full bg-primary/10 p-2 mr-3">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">International Preparation</h4>
                  <p className="text-gray-700">Expert-led preparation for globally recognized certifications</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="rounded-full bg-primary/10 p-2 mr-3">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Dual Certification</h4>
                  <p className="text-gray-700">Industry certification plus Meltdown's practical certification</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="rounded-full bg-primary/10 p-2 mr-3">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Practical Experience</h4>
                  <p className="text-gray-700">Hands-on training with real clients and athletes</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="rounded-full bg-primary/10 p-2 mr-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Career Support</h4>
                  <p className="text-gray-700">Job placement assistance and industry connections</p>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link to="/contact" className="btn-primary">Schedule a Consultation</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Find answers to common questions about our certification programs.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-4 md:p-8">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, i) => <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left font-medium text-lg hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="py-2 text-gray-700">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>)}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary/20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Advance Your Career?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Join our Academy and gain the skills, knowledge, and credentials you need to excel in fitness and strength coaching.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/contact?program=academy" className="btn-primary">Apply Now</Link>
            <Link to="/contact?inquiry=academy" className="btn-outline">Request Information</Link>
          </div>
        </div>
      </section>
    </div>;
};
export default Academy;