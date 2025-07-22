
import React from 'react';
import { Job } from '@/data/jobListings';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

interface JobCardProps {
  job: Job;
  onJobClick: (job: Job) => void;
}

const JobCard = ({ job, onJobClick }: JobCardProps) => {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-xl">{job.title}</CardTitle>
        <div className="flex items-center text-gray-600 text-sm">
          <MapPin className="w-4 h-4 mr-1" />
          {job.location}
        </div>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <p className="text-gray-600 text-sm leading-relaxed">
          {job.summary}
        </p>
      </CardContent>
      
      <CardFooter className="flex gap-2">
        <Button 
          onClick={() => onJobClick(job)}
          variant="outline"
          className="flex-1"
        >
          View Details
        </Button>
        <Button 
          asChild
          className="flex-1"
        >
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLScGPjjHmNY_7RS0muM_-V0xPnpcD1CEg05_LpWpDCx2NJKxxw/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply Now
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default JobCard;
