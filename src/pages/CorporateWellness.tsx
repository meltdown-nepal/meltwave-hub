
import React from 'react';
import { Link } from 'react-router-dom';

const CorporateWellness = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/20 to-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Corporate Wellness Solutions
              </h1>
              <p className="text-lg mb-8">
                Comprehensive wellness programs tailored to your company's unique needs and goals. Boost productivity, improve morale, and reduce healthcare costs.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary">Get Started</Link>
                <Link to="/companies" className="btn-outline">For Companies</Link>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                alt="Corporate Wellness" 
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Meltdown Advantage</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Our corporate wellness solutions are designed to create lasting change within your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-bar-chart-3"><path d="M3 3v18h18"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Increased Productivity</h3>
              <p>
                Employees who engage in wellness programs show improved focus, energy, and overall performance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-heart-pulse"><path d="M19 14V6"></path><path d="M14 9h10"></path><path d="M21 17h-2.5a2 2 0 0 0-1.5.7l-1.7 2.6a2 2 0 0 1-3.3 0l-1.7-2.6a2 2 0 0 0-3.3 0l-1.7 2.6a2 2 0 0 1-3.3 0L1 17.8"></path><path d="M5 6a1 1 0 0 0-1 1v3.7a1 1 0 0 0 .4.8L9 15"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Reduced Healthcare Costs</h3>
              <p>
                Preventative wellness programs can lower healthcare expenses and reduce absenteeism.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Enhanced Retention</h3>
              <p>
                Wellness programs demonstrate investment in employees, improving morale and reducing turnover.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-trophy"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Competitive Advantage</h3>
              <p>
                Stand out in recruitment and build a positive company culture known for valuing employee wellbeing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Comprehensive Programs</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Tailored solutions to meet the diverse needs of your workforce.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Physical Wellness</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-2 flex-shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>
                  <span>Fitness challenges and group classes</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-2 flex-shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>
                  <span>Ergonomic workspace assessments</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-2 flex-shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>
                  <span>Nutrition workshops and meal planning</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-2 flex-shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>
                  <span>Health screenings and assessments</span>
                </li>
              </ul>
              <Link to="/meltfit" className="text-secondary font-bold hover:underline">
                Learn more about MeltFit →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Mental & Emotional Wellness</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-2 flex-shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>
                  <span>Stress management workshops</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-2 flex-shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>
                  <span>Mindfulness and meditation sessions</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-2 flex-shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>
                  <span>Mental health resources and support</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-2 flex-shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>
                  <span>Work-life balance coaching</span>
                </li>
              </ul>
              <Link to="/events" className="text-secondary font-bold hover:underline">
                View upcoming events →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Social Wellness</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-2 flex-shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>
                  <span>Team-building events and activities</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-2 flex-shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>
                  <span>Volunteer opportunities and community service</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-2 flex-shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>
                  <span>Diversity and inclusion initiatives</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-2 flex-shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>
                  <span>Social connection programs for remote teams</span>
                </li>
              </ul>
              <Link to="/companies" className="text-secondary font-bold hover:underline">
                Learn more about company offerings →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Professional Development</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-2 flex-shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>
                  <span>Career coaching and mentorship</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-2 flex-shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>
                  <span>Skill development workshops</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-2 flex-shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>
                  <span>Leadership training</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-2 flex-shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>
                  <span>Continuing education opportunities</span>
                </li>
              </ul>
              <Link to="/academy" className="text-secondary font-bold hover:underline">
                Explore our Academy for Trainers →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary/20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create a Healthier Workplace?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Our team of wellness experts is ready to help you design and implement a program that meets your company's unique needs and goals.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/contact" className="btn-primary">Schedule a Consultation</Link>
            <Link to="/companies" className="btn-outline">Learn About Our Company Solutions</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateWellness;
