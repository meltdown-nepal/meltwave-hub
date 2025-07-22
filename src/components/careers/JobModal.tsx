
import React from 'react';
import { Job } from '@/data/jobListings';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, Mail } from 'lucide-react';

interface JobModalProps {
  job: Job | null;
  isOpen: boolean;
  onClose: () => void;
}

const JobModal = ({ job, isOpen, onClose }: JobModalProps) => {
  if (!job) return null;

  const handleApply = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLScGPjjHmNY_7RS0muM_-V0xPnpcD1CEg05_LpWpDCx2NJKxxw/viewform', '_blank');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{job.title}</DialogTitle>
          <div className="flex items-center text-gray-600 space-x-4 mt-2">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              {job.location}
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              Application Deadline: {job.deadline}
            </div>
          </div>
        </DialogHeader>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Job Summary</h3>
            <p className="text-gray-700">{job.summary}</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Job Description</h3>
            <div className="text-gray-700 whitespace-pre-line">{job.description}</div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Requirements</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {job.requirements.map((requirement, index) => (
                <li key={index}>{requirement}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Key Responsibilities</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {job.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Benefits</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {job.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
          
          <div className="flex space-x-3 pt-4 border-t">
            <Button
              onClick={handleApply}
              className="flex-1"
            >
              <Mail className="w-4 h-4 mr-2" />
              Apply Now
            </Button>
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default JobModal;
