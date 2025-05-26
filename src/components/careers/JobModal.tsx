import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MapPin, ExternalLink, Calendar } from "lucide-react";
import { Job } from "@/data/jobListings";

interface JobModalProps {
  job: Job | null;
  isOpen: boolean;
  onClose: () => void;
}

const JobModal: React.FC<JobModalProps> = ({ job, isOpen, onClose }) => {
  const handleApplyNow = () => {
    const googleFormUrl = "https://forms.gle/XhNDyCs6ChLdhjX79";
    window.open(googleFormUrl, '_blank');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        {job && (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">
                {job.title}
              </DialogTitle>
              <DialogDescription className="flex items-center text-gray-500">
                <MapPin className="w-4 h-4 mr-1" />
                {job.location}
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">About Meltdown Wellbeing</h3>
                <p className="text-gray-600">
                  Meltdown is a corporate wellbeing tech ecosystem designed for companies who want to not just offer wellness benefits but build a culture of active living. Unlike typical gym subsidies or one-off wellness sessions - which most employees don't use - Meltdown combines access to wellness services across Nepal with gamified challenges, social experiences, and behavior tracking that drive participation and build team connection.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Job Description</h3>
                <div className="text-gray-600 whitespace-pre-line">
                  {job.description}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Requirements</h3>
                <ul className="space-y-2">
                  {job.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-2 mt-1">•</span>
                      <span className="text-gray-600">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {job.responsibilities.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-3">Responsibilities</h3>
                  <ul className="space-y-2">
                    {job.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2 mt-1">•</span>
                        <span className="text-gray-600">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {job.benefits.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-3">Benefits</h3>
                  <ul className="space-y-2">
                    {job.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2 mt-1">•</span>
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <div className="flex items-center text-orange-700">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Application Deadline</span>
                </div>
                <p className="text-orange-600 mt-1 font-medium">7th June 2025</p>
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
  );
};

export default JobModal;
