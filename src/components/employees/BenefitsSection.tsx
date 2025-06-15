import React from 'react';
const BenefitsSection = () => {
  return <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How You Benefit</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Our programs are designed to help you achieve balance, well-being, and success in all areas of your life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-amber-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-heart-pulse"><path d="M19 14V6"></path><path d="M14 9h10"></path><path d="M21 17h-2.5a2 2 0 0 0-1.5.7l-1.7 2.6a2 2 0 0 1-3.3 0l-1.7-2.6a2 2 0 0 0-3.3 0l-1.7 2.6a2 2 0 0 1-3.3 0L1 17.8"></path><path d="M5 6a1 1 0 0 0-1 1v3.7a1 1 0 0 0 .4.8L9 15"></path></svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Accessibility</h3>
            <p>Visit any center any day accordingly to your timing</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-amber-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-brain"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 0-4.96.44 2.5 2.5 0 0 0-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 0 1.32-4.24 2.5 2.5 0 0 0 1.98-3A2.5 2.5 0 0 0 9.5 2Z"></path><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"></path></svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Variety</h3>
            <p>Try different activities and find what you love</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-amber-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-coins"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Affordability</h3>
            <p>You company subsidizes a portion of your subscription</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-amber-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 1 0 7.75"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Challenges</h3>
            <p>Compete with your friends and win rewards</p>
          </div>
        </div>
      </div>
    </section>;
};
export default BenefitsSection;