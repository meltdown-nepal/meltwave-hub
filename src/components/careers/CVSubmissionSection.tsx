
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Upload } from 'lucide-react';
import CVSubmissionModal from './CVSubmissionModal';

const CVSubmissionSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Don't See the Right Opening for You?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We're always looking for talented individuals to join our team. Drop your CV and we'll reach out when we have an opportunity that matches your skills and interests.
            </p>
            <Button
              onClick={() => setIsModalOpen(true)}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3"
            >
              <Upload className="w-5 h-5 mr-2" />
              Submit Your CV
            </Button>
            <p className="text-sm text-gray-500 mt-4">
              We'll keep your information on file and contact you when suitable positions become available.
            </p>
          </div>
        </div>
      </section>

      <CVSubmissionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default CVSubmissionSection;
