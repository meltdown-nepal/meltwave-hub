
import React from 'react';
import { Link } from 'react-router-dom';

const ForCompanies = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/20 to-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Wellness Solutions for Companies
              </h1>
              <p className="text-lg mb-8">
                Create a healthier, more productive workplace with customized wellness programs that meet your company's specific needs and goals.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary">Schedule a Demo</Link>
                <Link to="/corporate-wellness" className="btn-outline">Explore Our Programs</Link>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04" 
                alt="Company Wellness Program" 
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Invest in Employee Wellness?</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Companies that prioritize wellness see significant improvements in multiple areas of business performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-trending-up"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Increased Productivity</h3>
              <p>
                Studies show that wellness programs can increase employee productivity by up to 20%, resulting in significant ROI for your business.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-user-check"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><polyline points="16 11 18 13 22 9"></polyline></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Improved Retention</h3>
              <p>
                Companies with wellness programs report up to 40% lower turnover rates, saving significant recruitment and training costs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-piggy-bank"><path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2 0-.3-.5-1-1-1"></path><path d="M2 9v1c0 1.1.9 2 2 2h1"></path><path d="M16 11h0"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Reduced Healthcare Costs</h3>
              <p>
                Effective wellness programs can reduce healthcare expenses by an average of $3.27 for every $1 spent on wellness initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Meltdown Works for Your Company</h2>
            <p className="text-lg max-w-3xl mx-auto">
              A simple, effective process to implement comprehensive wellness solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-black font-bold w-8 h-8 rounded-full flex items-center justify-center">
                1
              </div>
              <div className="pt-4">
                <h3 className="text-xl font-bold mb-3">Assessment</h3>
                <p>
                  We evaluate your company's current wellness status and identify specific needs and goals.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-black font-bold w-8 h-8 rounded-full flex items-center justify-center">
                2
              </div>
              <div className="pt-4">
                <h3 className="text-xl font-bold mb-3">Custom Program Design</h3>
                <p>
                  Our experts create a tailored wellness program aligned with your company's culture and objectives.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-black font-bold w-8 h-8 rounded-full flex items-center justify-center">
                3
              </div>
              <div className="pt-4">
                <h3 className="text-xl font-bold mb-3">Implementation</h3>
                <p>
                  We handle all aspects of program rollout, from provider management to employee engagement.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-black font-bold w-8 h-8 rounded-full flex items-center justify-center">
                4
              </div>
              <div className="pt-4">
                <h3 className="text-xl font-bold mb-3">Ongoing Support</h3>
                <p>
                  We provide continuous monitoring, reporting, and program adjustments to ensure optimal results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Hear what other companies have achieved with Meltdown wellness programs.
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
                "After partnering with Meltdown, we've seen a 25% decrease in sick days and a 30% increase in employee satisfaction scores. The ROI has been tremendous not just in terms of healthcare savings but in overall productivity."
              </p>
              <div className="flex items-center">
                <div className="bg-gray-200 w-10 h-10 rounded-full mr-3"></div>
                <div>
                  <p className="font-bold">Robert Thompson</p>
                  <p className="text-sm text-gray-600">COO, InnovaTech Solutions</p>
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
                "As a midsize company, we were looking for a wellness solution that wouldn't break the bank but would still deliver real results. Meltdown's customized approach has helped us reduce turnover by 20% and has become a key recruiting advantage."
              </p>
              <div className="flex items-center">
                <div className="bg-gray-200 w-10 h-10 rounded-full mr-3"></div>
                <div>
                  <p className="font-bold">Jennifer Martinez</p>
                  <p className="text-sm text-gray-600">HR Director, GroWell Industries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary/20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Workplace?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Schedule a consultation with our team to discuss how Meltdown can create a customized wellness solution for your company.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/contact" className="btn-primary">Schedule a Consultation</Link>
            <Link to="/corporate-wellness" className="btn-outline">Explore Our Programs</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForCompanies;
