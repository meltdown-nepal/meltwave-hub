
import React from 'react';
import { Link } from 'react-router-dom';

const ProgramsSection = () => {
  return (
    <section className="bg-gray-50 section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Employee Wellness Programs</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Comprehensive solutions designed to support your total well-being.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary/20 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-dumbbell"><path d="m6.5 6.5 11 11"></path><path d="m21 21-1-1"></path><path d="m3 3 1 1"></path><path d="m18 22 4-4"></path><path d="m2 6 4-4"></path><path d="m3 10 7-7"></path><path d="m14 21 7-7"></path></svg>
              </div>
              <h3 className="text-2xl font-bold">MeltFit Physical Training</h3>
            </div>
            <p className="mb-4">
              Our signature fitness program includes personalized workout plans, group fitness classes, ergonomic assessments, and nutrition guidance to help you achieve your physical health goals.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-2 flex-shrink-0 mt-1"><path d="M20 6 9 17l-5-5"></path></svg>
                <span>Personal fitness assessments</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-2 flex-shrink-0 mt-1"><path d="M20 6 9 17l-5-5"></path></svg>
                <span>Virtual and in-person workout options</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-2 flex-shrink-0 mt-1"><path d="M20 6 9 17l-5-5"></path></svg>
                <span>Nutritional guidance and meal planning</span>
              </li>
            </ul>
            <Link to="/meltfit" className="text-secondary font-bold hover:underline">
              Learn more about MeltFit →
            </Link>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary/20 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-brain"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 0-4.96.44 2.5 2.5 0 0 0-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 0 1.32-4.24 2.5 2.5 0 0 0 1.98-3A2.5 2.5 0 0 0 9.5 2Z"></path><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"></path></svg>
              </div>
              <h3 className="text-2xl font-bold">Mental Wellness Program</h3>
            </div>
            <p className="mb-4">
              Comprehensive mental health support including stress management workshops, mindfulness training, resilience building, and access to mental health resources.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-2 flex-shrink-0 mt-1"><path d="M20 6 9 17l-5-5"></path></svg>
                <span>Guided meditation sessions</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-2 flex-shrink-0 mt-1"><path d="M20 6 9 17l-5-5"></path></svg>
                <span>Stress management techniques</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-2 flex-shrink-0 mt-1"><path d="M20 6 9 17l-5-5"></path></svg>
                <span>Access to mental health counseling</span>
              </li>
            </ul>
            <Link to="/events" className="text-secondary font-bold hover:underline">
              View upcoming workshops →
            </Link>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary/20 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-briefcase"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
              </div>
              <h3 className="text-2xl font-bold">Work-Life Balance</h3>
            </div>
            <p className="mb-4">
              Programs designed to help you create harmony between your professional and personal life, including time management, boundary setting, and productivity strategies.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-2 flex-shrink-0 mt-1"><path d="M20 6 9 17l-5-5"></path></svg>
                <span>Time management workshops</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-2 flex-shrink-0 mt-1"><path d="M20 6 9 17l-5-5"></path></svg>
                <span>Productivity and focus techniques</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-2 flex-shrink-0 mt-1"><path d="M20 6 9 17l-5-5"></path></svg>
                <span>Boundary-setting strategies</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary/20 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-graduation-cap"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path></svg>
              </div>
              <h3 className="text-2xl font-bold">Professional Development</h3>
            </div>
            <p className="mb-4">
              Enhance your career growth with skill development workshops, leadership training, and career coaching to help you achieve your professional goals.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-2 flex-shrink-0 mt-1"><path d="M20 6 9 17l-5-5"></path></svg>
                <span>Leadership development</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-2 flex-shrink-0 mt-1"><path d="M20 6 9 17l-5-5"></path></svg>
                <span>Skill-building workshops</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-2 flex-shrink-0 mt-1"><path d="M20 6 9 17l-5-5"></path></svg>
                <span>Career coaching and planning</span>
              </li>
            </ul>
            <Link to="/academy" className="text-secondary font-bold hover:underline">
              Explore professional development options →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
