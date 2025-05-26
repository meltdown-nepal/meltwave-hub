
import React from 'react';
import CareersHero from '@/components/careers/CareersHero';
import JobListingsSection from '@/components/careers/JobListingsSection';

const Careers = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <CareersHero />
      <JobListingsSection />
    </div>
  );
};

export default Careers;
