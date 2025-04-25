
import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const ThankYou = () => {
  return (
    <motion.div 
      className="text-center py-8 flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 200, 
          damping: 10,
          delay: 0.2 
        }}
        className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6"
      >
        <Check className="h-10 w-10 text-green-600" />
      </motion.div>
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-3xl font-bold mb-4"
      >
        Thanks! We'll reach out shortly
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-gray-600 max-w-md mx-auto mb-8"
      >
        Our team is reviewing your request and preparing a personalized demo just for you. Sit tight, we'll be in touch soon via email!
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="p-4 bg-gray-50 border border-gray-200 rounded-lg max-w-md"
      >
        <h3 className="font-semibold mb-2">What happens next?</h3>
        <ol className="text-left text-sm text-gray-600 space-y-2">
          <li className="flex items-start gap-2">
            <span className="mt-1 bg-primary/20 p-1 rounded-full flex items-center justify-center">
              <span className="text-xs text-black font-semibold">1</span>
            </span>
            <span>Our team will review your request (usually within 1 business day)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 bg-primary/20 p-1 rounded-full flex items-center justify-center">
              <span className="text-xs text-black font-semibold">2</span>
            </span>
            <span>You'll receive a personalized email with available time slots</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 bg-primary/20 p-1 rounded-full flex items-center justify-center">
              <span className="text-xs text-black font-semibold">3</span>
            </span>
            <span>We'll prepare a custom demo based on your company's needs</span>
          </li>
        </ol>
      </motion.div>
    </motion.div>
  );
};

export default ThankYou;
