
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const ThankYou = () => {
  return (
    <div className="text-center space-y-6">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <CheckCircle className="w-16 h-16 text-primary mx-auto" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-4"
      >
        <h2 className="text-2xl font-semibold">Thanks! We'll reach out via email shortly.</h2>
        <p className="text-gray-600">
          Our team will review your information and get back to you within one business day.
        </p>
      </motion.div>
    </div>
  );
};

export default ThankYou;
