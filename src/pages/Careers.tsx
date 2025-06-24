
import React from 'react';
import CareersHero from '@/components/careers/CareersHero';
import JobListingsSection from '@/components/careers/JobListingsSection';
import CVSubmissionSection from '@/components/careers/CVSubmissionSection';
import { Helmet } from 'react-helmet-async';


const Careers = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <CareersHero />
      <JobListingsSection />
      <CVSubmissionSection />
    </div>
  );
};

export default Careers;
