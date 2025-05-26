import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, ExternalLink } from "lucide-react";

interface Job {
  id: number;
  title: string;
  summary: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  location: string;
  applyEmail: string;
  benefits: string[];
}

const jobListings: Job[] = [
  {
    id: 1,
    title: "Sales Manager",
    summary: "Full-time on-site role managing and growing corporate accounts, building client relationships, and driving sales for our corporate wellbeing tech ecosystem.",
    description: "Meltdown is a corporate wellbeing tech ecosystem designed for companies who want to not just offer wellness benefits but build a culture of active living. Unlike typical gym subsidies or one-off wellness sessions - which most employees don't use - Meltdown combines access to wellness services across Nepal with gamified challenges, social experiences, and behavior tracking that drive participation and build team connection. This is a full-time on-site role for a Sales Manager, based in Kathmandu. The role will be responsible for managing and growing corporate accounts, building and maintaining relationships with clients, driving sales, and providing exceptional client service.",
    requirements: [
      "2-4 years experience in Sales Execution",
      "Strong track record to exceed sales targets",
      "Strong Communication Skills and Account Management Skills",
      "Strong networking and relationship-building abilities",
      "Bachelor's degree in Business, Marketing, or related field. Master's degree is a plus."
    ],
    responsibilities: [
      "Identify, target, and convert potential corporate clients through strategic outreach and relationship-building",
      "Develop and execute sales strategies to meet and exceed revenue goals",
      "Build and manage a pipeline of qualified leads and track progress through the sales cycle",
      "Conduct effective sales presentations and negotiations tailored to client needs",
      "Maintain strong post-sales relationships to ensure client satisfaction and retention",
      "Work closely with marketing team to align on campaign strategies and brand positioning",
      "Manage and mentor junior sales team members, providing guidance and performance feedback",
      "Provide regular sales forecasts, reporting, and market insights to the leadership team",
      "Represent Meltdown at networking events, conferences, and wellness expos"
    ],
    location: "Kathmandu, Nepal",
    applyEmail: "meltdownnepal@gmail.com",
    benefits: [
      "Competitive salary with performance-based growth",
      "High growth rate in the tech and corporate wellness sector",
      "Attractive incentives based on performance",
      "5-day work week (Monday to Friday)",
      "Exclusive access to Meltdown's wellbeing services"
    ]
  },
  {
    id: 2,
    title: "Wellness Program Coordinator",
    summary: "Design and implement comprehensive wellness programs for corporate clients.",
    description: "Join our team as a Wellness Program Coordinator where you'll be responsible for developing, implementing, and managing wellness programs for our corporate clients. You'll work closely with companies to assess their needs, design customized programs, and ensure successful implementation and ongoing support.",
    requirements: [
      "Bachelor's degree in Health Promotion, Exercise Science, or related field",
      "3+ years experience in wellness program development",
      "Strong project management skills",
      "Experience working with corporate clients",
      "Knowledge of health metrics and program evaluation"
    ],
    responsibilities: [],
    location: "Kathmandu, Nepal",
    applyEmail: "meltdownnepal@gmail.com",
    benefits: []
  },
  {
    id: 3,
    title: "Nutritionist",
    summary: "Provide nutritional guidance and meal planning support to our members.",
    description: "We're seeking a qualified nutritionist to provide expert nutritional guidance to our members. You'll conduct assessments, create personalized meal plans, and educate clients on healthy eating habits. This role involves one-on-one consultations, group workshops, and collaborating with our fitness team to provide comprehensive wellness support.",
    requirements: [
      "Licensed Nutritionist or Registered Dietitian",
      "2+ years of clinical or consulting experience",
      "Experience with meal planning and nutritional assessments",
      "Strong counseling and communication skills",
      "Knowledge of fitness and exercise nutrition"
    ],
    responsibilities: [],
    location: "Kathmandu, Nepal",
    applyEmail: "meltdownnepal@gmail.com",
    benefits: []
  },
  {
    id: 4,
    title: "Marketing Specialist",
    summary: "Drive brand awareness and member acquisition through creative marketing campaigns.",
    description: "Join our marketing team to help grow the Meltdown brand and expand our reach in the corporate wellness space. You'll develop and execute marketing campaigns, manage social media presence, create engaging content, and analyze campaign performance. This role is perfect for a creative marketer passionate about health and wellness.",
    requirements: [
      "Bachelor's degree in Marketing, Communications, or related field",
      "2+ years of digital marketing experience",
      "Proficiency in social media management and content creation",
      "Experience with email marketing and CRM systems",
      "Strong analytical skills and attention to detail"
    ],
    responsibilities: [],
    location: "Kathmandu, Nepal",
    applyEmail: "meltdownnepal@gmail.com",
    benefits: []
  }
];

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const handleJobClick = (job: Job) => {
    setSelectedJob(job);
  };

  const handleCloseModal = () => {
    setSelectedJob(null);
  };

  const handleApplyNow = () => {
    // TODO: Replace with actual Google Form URL
    const googleFormUrl = "https://forms.google.com/your-form-url";
    window.open(googleFormUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/20 to-white section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Join the Meltdown Team
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Help us transform corporate wellness and make a positive impact on people's lives. 
              We're looking for passionate individuals who share our vision of creating healthier workplaces.
            </p>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover exciting career opportunities at Meltdown and become part of our mission to promote wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {jobListings.map((job) => (
              <Card key={job.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group">
                <CardHeader>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                    {job.title}
                  </CardTitle>
                  <div className="flex items-center text-gray-500 text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    {job.location}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {job.summary}
                  </p>
                  <Button 
                    onClick={() => handleJobClick(job)}
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-black transition-colors"
                  >
                    View More Information
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Job Details Modal */}
      <Dialog open={!!selectedJob} onOpenChange={handleCloseModal}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          {selectedJob && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">
                  {selectedJob.title}
                </DialogTitle>
                <DialogDescription className="flex items-center text-gray-500">
                  <MapPin className="w-4 h-4 mr-1" />
                  {selectedJob.location}
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Requirements</h3>
                  <ul className="space-y-2">
                    {selectedJob.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2 mt-1">•</span>
                        <span className="text-gray-600">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {selectedJob.responsibilities.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Responsibilities</h3>
                    <ul className="space-y-2">
                      {selectedJob.responsibilities.map((responsibility, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary mr-2 mt-1">•</span>
                          <span className="text-gray-600">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="pt-4 border-t">
                  <Button 
                    onClick={handleApplyNow}
                    className="w-full bg-primary hover:bg-secondary text-black font-semibold"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Apply Now
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Careers;
