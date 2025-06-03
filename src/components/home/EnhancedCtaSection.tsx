import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedElement from '../animations/AnimatedElement';
const EnhancedCtaSection = () => {
  return <section className="relative section-padding overflow-hidden">
      {/* Background with gradient and patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary"></div>
      <div className="absolute inset-0 bg-black/10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden bg-yellow-50">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container-custom text-center">
        <AnimatedElement animation="slideUp" delay={0.2}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black lg:text-5xl">
            Ready to Transform
            <br />
            <span className="bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">
              Your Workplace?
            </span>
          </h2>
        </AnimatedElement>

        <AnimatedElement animation="slideUp" delay={0.4}>
          <p className="text-xl mb-12 max-w-4xl mx-auto text-black/80 leading-relaxed md:text-xl">
            Join thousands of companies, employees, and providers who are creating healthier, happier workplaces with Meltdown.
          </p>
        </AnimatedElement>

        <AnimatedElement animation="slideUp" delay={0.6}>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/schedule-demo" className="group bg-black hover:bg-gray-800 text-white font-bold py-5 px-10 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center justify-center gap-3 text-lg">
              <span>Get Started Today</span>
              <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link to="/corporate-wellness" className="group bg-white/20 backdrop-blur-sm hover:bg-white/30 text-black font-bold py-5 px-10 rounded-full transition-all duration-300 transform hover:scale-105 border-2 border-black/20 hover:border-black/40 inline-flex items-center justify-center gap-3 text-lg">
              <span>Learn More</span>
              <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </AnimatedElement>
      </div>
    </section>;
};
export default EnhancedCtaSection;