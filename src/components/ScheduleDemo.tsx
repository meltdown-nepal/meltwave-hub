
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import CompanySize from "./demo/CompanySize";
import CompanyInfo from "./demo/CompanyInfo";
import ContactInfo from "./demo/ContactInfo";
import ThankYou from "./demo/ThankYou";
import StepIndicator from "./demo/StepIndicator";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";
import Confetti from "./demo/Confetti";

// Define the form schema
const demoFormSchema = z.object({
  companySize: z.enum(["solo", "small", "medium", "large", "enterprise"]),
  companyName: z.string().min(2, "Please enter your company name"),
  companyType: z.string().min(2, "Please select or enter company type"),
  role: z.string().min(2, "Please enter your role"),
  fullName: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  phoneContact: z.boolean().default(false),
  phone: z.string().optional(),
});

export type DemoFormData = z.infer<typeof demoFormSchema>;

const ScheduleDemo = () => {
  const [step, setStep] = useState(1);
  const [showConfetti, setShowConfetti] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<DemoFormData>({
    resolver: zodResolver(demoFormSchema),
    defaultValues: {
      companySize: undefined,
      companyName: "",
      companyType: "",
      role: "",
      fullName: "",
      email: "",
      phoneContact: false,
      phone: "",
    },
  });

  const nextStep = () => {
    // Simple validation for each step
    if (step === 1 && !form.getValues("companySize")) {
      toast({
        variant: "destructive",
        title: "Please select your company size",
        description: "We need this information to proceed.",
      });
      return;
    }
    
    if (step === 2) {
      const { companyName, companyType, role } = form.getValues();
      if (!companyName || !companyType || !role) {
        toast({
          variant: "destructive",
          title: "Missing information",
          description: "Please fill out all fields to continue.",
        });
        return;
      }
    }
    
    if (step === 3) {
      const { fullName, email, phoneContact, phone } = form.getValues();
      if (!fullName || !email || (phoneContact && !phone)) {
        toast({
          variant: "destructive",
          title: "Missing information",
          description: "Please fill out all required fields to continue.",
        });
        return;
      }
    }
    
    if (step < 4) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const onSubmit = async (data: DemoFormData) => {
    try {
      // Send data to Supabase function
      const { error } = await supabase.functions.invoke('schedule-demo', {
        body: data
      });

      if (error) throw error;

      // Show confetti and move to thank you page
      setShowConfetti(true);
      setStep(4);
      
      toast({
        title: "✅ Request received!",
        description: "We'll contact you shortly to schedule your demo.",
      });
    } catch (error) {
      console.error('Demo scheduling error:', error);
      toast({
        variant: "destructive",
        title: "❌ Something went wrong",
        description: "We couldn't process your request. Please try again.",
      });
    }
  };

  return (
    <div className="bg-gradient-to-b from-primary/10 to-white min-h-screen py-12 px-4">
      <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg overflow-hidden relative">
        {showConfetti && <Confetti />}
        
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-primary/30 to-secondary/30">
          <h1 className="text-2xl font-bold text-center">Schedule a Demo</h1>
          {step < 4 && (
            <StepIndicator currentStep={step} totalSteps={3} />
          )}
        </div>
        
        {/* Step content */}
        <div className="p-6 min-h-[400px] flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex-1"
            >
              {step === 1 && (
                <CompanySize 
                  value={form.getValues("companySize")} 
                  onChange={(value) => form.setValue("companySize", value)} 
                />
              )}
              
              {step === 2 && (
                <CompanyInfo 
                  form={form}
                />
              )}
              
              {step === 3 && (
                <ContactInfo 
                  form={form}
                />
              )}
              
              {step === 4 && (
                <ThankYou />
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          {step < 4 ? (
            <div className="mt-8 flex justify-between">
              {step > 1 ? (
                <Button 
                  variant="outline" 
                  onClick={prevStep}
                  className="flex items-center gap-1"
                >
                  <ArrowLeft size={16} /> Back
                </Button>
              ) : (
                <div></div>
              )}
              
              <Button 
                onClick={step === 3 ? form.handleSubmit(onSubmit) : nextStep}
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-black"
              >
                {step === 3 ? "Submit" : "Continue"}
              </Button>
            </div>
          ) : (
            <div className="mt-8 flex justify-center">
              <Button 
                onClick={() => window.location.href = "/"}
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-black"
              >
                Back to Homepage
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScheduleDemo;
