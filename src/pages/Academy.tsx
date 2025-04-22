import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollTo } from '@/hooks/useScrollTo';

const Academy = () => {
  const { scrollToSection } = useScrollTo();
  
  // Sample certification programs
  const certificationPrograms = [
    {
      title: "Corporate Wellness Specialist",
      duration: "6 weeks",
      format: "Online, self-paced with live sessions",
      description: "Become certified to deliver comprehensive wellness programs in corporate settings. Learn assessment, program design, implementation and evaluation techniques."
    },
    {
      title: "Workplace Mindfulness Facilitator",
      duration: "4 weeks",
      format: "Online, self-paced with live sessions",
      description: "Learn to facilitate mindfulness and stress reduction programs specifically designed for workplace settings."
    },
    {
      title: "Ergonomics Consultant",
      duration: "3 weeks",
      format: "Online, self-paced with live sessions",
      description: "Become certified to assess workspaces and provide ergonomic recommendations to prevent injuries and improve comfort."
    }
  ];

  // Sample continuing education courses
  const continuingEducationCourses = [
    {
      title: "Nutrition for Workplace Performance",
      duration: "2 weeks",
      format: "Online, self-paced",
      description: "Learn how to design and deliver nutrition programs that enhance workplace performance and productivity."
    },
    {
      title: "Mental Health First Aid",
      duration: "1 week",
      format: "Online with live practice sessions",
      description: "Learn to identify, understand and respond to signs of mental health challenges in the workplace."
    },
    {
      title: "Remote Team Wellness Strategies",
      duration: "2 weeks",
      format: "Online, self-paced",
      description: "Develop strategies for delivering effective wellness programs to remote and hybrid teams."
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
                Academy for Wellness Trainers
              </h1>
              <p className="text-lg mb-8">
                Enhance your skills and credentials with specialized training in corporate wellness. Our certification programs and continuing education courses are designed for wellness professionals who want to excel in the workplace wellness sector.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => scrollToSection('certifications')}
                  className="btn-primary"
                >
                  View Certification Programs
                </button>
                <Link to="/contact" className="btn-outline">Request Information</Link>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" 
                alt="Academy Training" 
                className="rounded-lg shadow-xl max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certification Programs */}
      <section id="certifications" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Certification Programs</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Comprehensive training programs designed to provide you with the knowledge, skills, and credentials to deliver high-quality wellness services in corporate settings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certificationPrograms.map((program, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-primary/10 p-5">
                  <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                  <div className="flex flex-col gap-2 text-sm">
                    <div className="flex items-center text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-clock mr-2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                      Duration: {program.duration}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-laptop mr-2"><path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"></path></svg>
                      Format: {program.format}
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <p className="mb-6 text-gray-700">{program.description}</p>
                  <div className="flex items-center justify-between">
                    <Link to="/contact" className="text-secondary font-bold hover:underline">
                      Learn More
                    </Link>
                    <Link to="/contact" className="btn-primary text-sm">Enroll Now</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Continuing Education */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Continuing Education</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Keep your skills and knowledge current with our continuing education courses designed for wellness professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {continuingEducationCourses.map((course, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-3">{course.title}</h3>
                  <div className="flex flex-col gap-2 text-sm mb-4">
                    <div className="flex items-center text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-clock mr-2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                      Duration: {course.duration}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-laptop mr-2"><path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"></path></svg>
                      Format: {course.format}
                    </div>
                  </div>
                  <p className="mb-6 text-gray-700">{course.description}</p>
                  <Link to="/contact" className="text-secondary font-bold hover:underline">
                    Enroll Now →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Academy */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Academy</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Our Academy provides high-quality, practical training designed to help wellness professionals succeed in the corporate wellness sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-briefcase"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4v-7a2 2 0 0 0-2 2v16"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Industry-Relevant</h3>
              <p>
                Our curriculum is designed in collaboration with industry leaders to ensure you learn the most relevant and in-demand skills.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Instructors</h3>
              <p>
                Learn from experienced professionals who have a proven track record in corporate wellness program delivery.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-certificate"><path d="M19 5H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"></path><path d="M9 5V3"></path><path d="M15 5V3"></path><path d="M12 12h.01"></path><path d="M9 15h6"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Recognized Credentials</h3>
              <p>
                Our certifications are recognized by leading companies and wellness organizations, enhancing your professional credibility.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-network"><rect x="16" y="16" width="6" height="6" rx="1"></rect><rect x="2" y="16" width="6" height="6" rx="1"></rect><rect x="9" y="2" width="6" height="6" rx="1"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path><path d="M12 12V8"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Career Opportunities</h3>
              <p>
                Graduates gain access to our network of corporate clients seeking qualified wellness providers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor Profiles */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Instructors</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Learn from experienced professionals with deep expertise in corporate wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 aspect-square flex items-center justify-center">
                <span className="text-gray-500">Instructor Photo</span>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-1">Dr. Jessica Chen</h3>
                <p className="text-gray-600 mb-3">Corporate Wellness Director</p>
                <p className="text-gray-700 mb-3">
                  With over 15 years of experience in designing and implementing corporate wellness programs for Fortune 500 companies, Dr. Chen brings practical insights and proven strategies to her training.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-500 hover:text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 aspect-square flex items-center justify-center">
                <span className="text-gray-500">Instructor Photo</span>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-1">Marcus Johnson, MS</h3>
                <p className="text-gray-600 mb-3">Mindfulness & Stress Management Specialist</p>
                <p className="text-gray-700 mb-3">
                  A certified mindfulness instructor with a background in organizational psychology, Marcus specializes in teaching stress reduction techniques tailored for high-pressure workplace environments.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-500 hover:text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 aspect-square flex items-center justify-center">
                <span className="text-gray-500">Instructor Photo</span>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-1">Sarah Rodriguez, RD</h3>
                <p className="text-gray-600 mb-3">Corporate Nutrition Specialist</p>
                <p className="text-gray-700 mb-3">
                  A registered dietitian with expertise in designing and implementing nutrition programs for companies of all sizes, Sarah helps wellness professionals create effective, science-based nutrition interventions.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-500 hover:text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Student Success Stories</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Hear from wellness professionals who have advanced their careers through our Academy programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FFD838" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FFD838" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FFD838" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FFD838" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FFD838" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              </div>
              <p className="mb-6">
                "The Corporate Wellness Specialist certification has completely transformed my career. Within three months of completing the program, I landed contracts with two major corporations and have tripled my income."
              </p>
              <div className="flex items-center">
                <div className="bg-gray-200 w-10 h-10 rounded-full mr-3"></div>
                <div>
                  <p className="font-bold">Michael Williams</p>
                  <p className="text-sm text-gray-600">Fitness Coach & Corporate Wellness Specialist</p>
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
                "What I appreciate most about Meltdown's Academy is the practical, real-world focus. The training gave me specific tools and protocols I could immediately use with my corporate clients, not just theoretical knowledge."
              </p>
              <div className="flex items-center">
                <div className="bg-gray-200 w-10 h-10 rounded-full mr-3"></div>
                <div>
                  <p className="font-bold">Alicia Thompson</p>
                  <p className="text-sm text-gray-600">Workplace Mindfulness Facilitator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary/20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Advance Your Career?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Join our Academy and gain the skills, knowledge, and credentials you need to excel in the corporate wellness sector.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/contact" className="btn-primary">Apply Now</Link>
            <Link to="/contact" className="btn-outline">Request Information</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academy;
