
import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Users, Handshake } from 'lucide-react';
import AnimatedElement from '../animations/AnimatedElement';

const ModernFeaturesSection = () => {
  const features = [
    {
      icon: Building2,
      title: "For Companies",
      description: "Implement effective wellness programs that boost productivity, reduce turnover, and create a positive workplace culture.",
      link: "/companies",
      color: "from-primary to-secondary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Users,
      title: "For Employees",
      description: "Access high-quality wellness programs that help you stay healthy, reduce stress, and improve your work-life balance.",
      link: "/employees",
      color: "from-secondary to-primary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: Handshake,
      title: "For Providers",
      description: "Grow your wellness business by connecting with companies seeking your specific expertise and services.",
      link: "/providers",
      color: "from-primary to-secondary",
      bgColor: "bg-primary/10"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <AnimatedElement animation="slideUp" delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              How Meltdown Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our comprehensive platform connects companies with top wellness providers to create effective programs for employees.
            </p>
          </div>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <AnimatedElement key={feature.title} animation="slideUp" delay={0.4 + index * 0.2}>
                <div className="group relative">
                  {/* Card */}
                  <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                    {/* Background gradient on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                    
                    {/* Icon */}
                    <div className="w-20 h-20 rounded-full border-2 border-yellow-400 bg-white flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-yellow-600" />
                    </div>

                    {/* Content */}
                    <div className="relative text-center">
                      <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-gray-800 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {feature.description}
                      </p>
                      <Link 
                        to={feature.link} 
                        className={`inline-flex items-center gap-2 bg-gradient-to-r ${feature.color} text-black font-semibold px-6 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
                      >
                        Learn more
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ModernFeaturesSection;
