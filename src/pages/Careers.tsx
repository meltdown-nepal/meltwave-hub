
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
  location: string;
  applyLink: string;
}

const jobListings: Job[] = [
  {
    id: 1,
    title: "Fitness Instructor",
    summary: "Lead engaging group fitness classes and help members achieve their wellness goals.",
    description: "We're looking for an energetic and passionate fitness instructor to join our team. You'll lead various group fitness classes, provide personalized guidance to members, and contribute to our positive, supportive environment. This role is perfect for someone who loves fitness and enjoys motivating others to reach their health goals.",
    requirements: [
      "Certified fitness instructor (ACE, NASM, ACSM, or equivalent)",
      "2+ years of group fitness instruction experience",
      "Excellent communication and motivational skills",
      "CPR/AED certification required",
      "Ability to modify exercises for different fitness levels"
    ],
    location: "Kathmandu, Nepal",
    applyLink: "https://forms.gle/fitness-instructor-application"
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
    location: "Kathmandu, Nepal",
    applyLink: "https://forms.gle/wellness-coordinator-application"
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
    location: "Kathmandu, Nepal",
    applyLink: "https://forms.gle/nutritionist-application"
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
    location: "Kathmandu, Nepal",
    applyLink: "https://forms.gle/marketing-specialist-application"
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
    if (selectedJob) {
      window.open(selectedJob.applyLink, '_blank');
    }
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
                  <h3 className="text-lg font-semibold mb-3">Job Description</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedJob.description}
                  </p>
                </div>

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
