
import React from 'react';
import { Job } from '@/data/jobListings';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar } from 'lucide-react';

interface JobCardProps {
  job: Job;
  onJobClick: (job: Job) => void;
}

const JobCard = ({ job, onJobClick }: JobCardProps) => {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-xl">{job.title}</CardTitle>
        <div className="flex items-center text-gray-600 text-sm space-x-4">
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            {job.location}
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            Deadline: {job.deadline}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <p className="text-gray-600 text-sm leading-relaxed">
          {job.summary}
        </p>
      </CardContent>
      
      <CardFooter>
        <Button 
          onClick={() => onJobClick(job)}
          className="w-full"
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default JobCard;
