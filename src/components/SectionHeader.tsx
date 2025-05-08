
import React from 'react';

interface SectionHeaderProps {
  title: string;
  description: string;
}

const SectionHeader = ({ title, description }: SectionHeaderProps) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="max-w-3xl mx-auto text-lg text-gray-600">{description}</p>
    </div>
  );
};

export default SectionHeader;
