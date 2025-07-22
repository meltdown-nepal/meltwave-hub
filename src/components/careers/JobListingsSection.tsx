
import React, { useState } from 'react';
import { jobListings, Job } from "@/data/jobListings";
import JobCard from './JobCard';
import JobModal from './JobModal';

const JobListingsSection = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const handleJobClick = (job: Job) => {
    setSelectedJob(job);
  };

  const handleCloseModal = () => {
    setSelectedJob(null);
  };

  return (
    <>
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
              <JobCard
                key={job.id}
                job={job}
                onJobClick={handleJobClick}
              />
            ))}
          </div>
        </div>
      </section>

      <JobModal
        job={selectedJob}
        isOpen={!!selectedJob}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default JobListingsSection;
