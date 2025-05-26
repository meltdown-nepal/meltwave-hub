
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { Job } from "@/data/jobListings";

interface JobCardProps {
  job: Job;
  onJobClick: (job: Job) => void;
}

const JobCard: React.FC<JobCardProps> = ({ job, onJobClick }) => {
  return (
    <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group">
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
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">About Meltdown</h4>
          <p className="text-xs text-gray-600 mb-3">
            Meltdown is a corporate wellbeing tech ecosystem designed for companies who want to build a culture of active living through gamified challenges, social experiences, and wellness services across Nepal.
          </p>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {job.summary}
        </p>
        <Button 
          onClick={() => onJobClick(job)}
          variant="outline" 
          className="w-full group-hover:bg-primary group-hover:text-black transition-colors"
        >
          View More Information
        </Button>
      </CardContent>
    </Card>
  );
};

export default JobCard;
