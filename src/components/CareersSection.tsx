
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ExternalLink, MapPin, Briefcase } from 'lucide-react';

interface JobPosition {
  id: string;
  title: string;
  summary: string;
  description: string;
  requirements: string[];
  location: string;
  applyLink: string;
}

const jobPositions: JobPosition[] = [
  {
    id: '1',
    title: 'Gym Manager',
    summary: 'Lead daily operations and manage our fitness facility team to deliver exceptional member experiences.',
    description: 'We are seeking an experienced Gym Manager to oversee our fitness facility operations. You will be responsible for managing staff, ensuring excellent customer service, maintaining equipment, and driving membership growth. The ideal candidate will have strong leadership skills and a passion for fitness.',
    requirements: [
      '3+ years of fitness industry management experience',
      'Strong leadership and communication skills',
      'Customer service oriented mindset',
      'Knowledge of fitness equipment and safety protocols',
      'Business development experience preferred'
    ],
    location: 'Kathmandu, Nepal',
    applyLink: 'https://forms.gle/gym-manager-application'
  },
  {
    id: '2',
    title: 'Fitness Trainer',
    summary: 'Inspire and guide members to achieve their fitness goals through personalized training programs.',
    description: 'Join our team of dedicated fitness professionals! As a Fitness Trainer, you will work one-on-one with clients to develop customized workout plans, provide motivation, and ensure safe exercise practices. You will be part of creating life-changing experiences for our members.',
    requirements: [
      'Certified Personal Trainer (ACSM, NASM, or equivalent)',
      'Excellent interpersonal and communication skills',
      'Knowledge of exercise physiology and nutrition basics',
      'CPR/AED certification',
      'Minimum 1 year of training experience'
    ],
    location: 'Multiple Locations',
    applyLink: 'https://forms.gle/fitness-trainer-application'
  },
  {
    id: '3',
    title: 'Marketing Intern',
    summary: 'Support our marketing initiatives and gain hands-on experience in the wellness industry.',
    description: 'This internship opportunity is perfect for marketing students or recent graduates looking to gain real-world experience in the fitness and wellness industry. You will assist with social media management, content creation, event planning, and market research.',
    requirements: [
      'Currently pursuing or recently completed marketing/communications degree',
      'Strong social media and digital marketing knowledge',
      'Creative thinking and content creation skills',
      'Excellent written and verbal communication',
      'Passion for fitness and wellness'
    ],
    location: 'Kathmandu, Nepal',
    applyLink: 'https://forms.gle/marketing-intern-application'
  },
  {
    id: '4',
    title: 'Wellness Coach',
    summary: 'Help corporate clients develop sustainable wellness habits and improve their overall well-being.',
    description: 'As a Wellness Coach, you will work with our corporate clients to design and implement comprehensive wellness programs. You will conduct workshops, provide health assessments, and guide employees on their journey to better health and work-life balance.',
    requirements: [
      'Certified Health/Wellness Coach credentials',
      'Experience in corporate wellness programs',
      'Strong presentation and facilitation skills',
      'Knowledge of stress management and mental health',
      'Ability to work with diverse groups'
    ],
    location: 'Remote/On-site',
    applyLink: 'https://forms.gle/wellness-coach-application'
  }
];

const JobCard: React.FC<{ job: JobPosition }> = ({ job }) => {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-gray-800">{job.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col justify-between h-full">
        <div className="mb-4">
          <p className="text-gray-600 mb-3">{job.summary}</p>
          <div className="flex items-center text-sm text-gray-500">
            <MapPin className="w-4 h-4 mr-1" />
            {job.location}
          </div>
        </div>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full">
              View More Information
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-gray-800 mb-2">
                {job.title}
              </DialogTitle>
            </DialogHeader>
            
            <div className="space-y-6">
              <div className="flex items-center text-gray-600">
                <MapPin className="w-5 h-5 mr-2" />
                <span className="font-medium">{job.location}</span>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Briefcase className="w-5 h-5 mr-2" />
                  Job Description
                </h3>
                <p className="text-gray-700 leading-relaxed">{job.description}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Requirements</h3>
                <ul className="space-y-2">
                  {job.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-primary/20 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-4 border-t">
                <Button 
                  className="w-full bg-primary hover:bg-secondary text-black font-semibold"
                  onClick={() => window.open(job.applyLink, '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Apply Now
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};

const CareersSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Join Our Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Be part of transforming corporate wellness and helping people lead healthier, more active lives.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {jobPositions.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">
            Don't see a position that fits? We're always looking for talented individuals.
          </p>
          <Button 
            variant="outline" 
            onClick={() => window.open('https://forms.gle/general-application', '_blank')}
          >
            Submit General Application
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
