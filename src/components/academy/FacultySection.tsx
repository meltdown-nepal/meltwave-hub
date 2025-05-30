
import React from 'react';
import { GraduationCap } from 'lucide-react';

const FacultySection = () => {
  const facultyMembers = [
    {
      name: "Aman Mishra",
      designation: "S&C Coach",
      image: "/lovable-uploads/c5b9596c-52de-49eb-9686-9c3aca5ba4dc.png",
      credentials: ["ASCA Level 1", "MCA Level 0 Coach"],
      experience: "3+ years",
      specialty: "Training International & Ranji Trophy Cricketers",
      quote: "Excellence in strength training comes from understanding each athlete's unique potential."
    },
    {
      name: "Anuraag Bhetwal", 
      designation: "Master Trainer",
      image: "/lovable-uploads/6aaa40fe-cbaf-409f-9975-c38114ef82a8.png",
      credentials: ["ISSA-CPT/ Nutritionist", "KB-1/ FMT/ NYFA-CPT"],
      experience: "4+ years",
      specialty: "Honors in Psychology",
      quote: "Transforming lives through evidence-based training and nutrition science."
    },
    {
      name: "Karma C. Gurung",
      designation: "Sports Physiotherapist", 
      image: "/lovable-uploads/1a45a541-2db0-40e7-b036-41e0e08bb794.png",
      credentials: ["BPT/ MPT/ CDNT/ CKTT/ CMT"],
      experience: "4+ years",
      specialty: "Masters: Sports Physiotherapy",
      quote: "Recovery and performance go hand in hand - precision in movement is key."
    },
    {
      name: "Sanket Sapkota",
      designation: "Nutritionist",
      image: "/lovable-uploads/e2198571-4415-4768-88a3-9a31b4627a79.png", 
      credentials: ["Mac Nutrition Uni", "Precision Nutrition"],
      experience: "5+ years",
      specialty: "ECNA/INFS Nutrition & CPT",
      quote: "Optimal nutrition is the foundation of peak athletic performance."
    },
    {
      name: "Dr. Biplov Adhikari",
      designation: "Medical Officer",
      image: "/lovable-uploads/25caa255-d3d2-4965-a9fb-b47a1176a006.png",
      credentials: ["MBBS"],
      experience: "4+ years", 
      specialty: "Medical Officer & Educator, Researcher & Published Author",
      quote: "Bridging medical science with fitness to ensure safe and effective training."
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <GraduationCap className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold">Meet Our Faculty</h2>
          </div>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            Learn from industry experts who bring years of practical experience and advanced certifications to guide your professional journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {facultyMembers.map((member, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary/20 transform hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 p-6">
                <div className="relative mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors duration-300 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-semibold text-sm mb-2">
                    {member.designation}
                  </p>
                  <p className="text-xs text-gray-500 mb-3">
                    Experience: {member.experience}
                  </p>
                </div>

                {/* Credentials */}
                <div className="mb-4">
                  <div className="space-y-1">
                    {member.credentials.map((credential, i) => (
                      <div key={i} className="text-xs bg-gray-50 px-2 py-1 rounded text-gray-700 text-center">
                        {credential}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specialty */}
                <div className="mb-4">
                  <p className="text-xs text-gray-600 text-center italic">
                    {member.specialty}
                  </p>
                </div>

                {/* Quote - appears on hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-xs text-gray-600 italic text-center leading-relaxed">
                      "{member.quote}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <div className="bg-primary/10 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold mb-4">World-Class Faculty Expertise</h3>
            <p className="text-gray-700 mb-6">
              Our faculty combines international certifications with local expertise, ensuring you receive the most comprehensive and practical education in fitness and strength coaching.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-gray-600">Combined Years</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">20+</div>
                <div className="text-sm text-gray-600">Certifications</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-gray-600">Students Trained</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacultySection;
