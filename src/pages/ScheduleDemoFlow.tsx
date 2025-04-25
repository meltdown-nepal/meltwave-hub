
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Progress } from "@/components/ui/progress";
import { CompanySize } from "@/components/demo/CompanySize";
import { CompanyInfo } from "@/components/demo/CompanyInfo";
import { ContactInfo } from "@/components/demo/ContactInfo";
import { Success } from "@/components/demo/Success";
import { DemoFormData, demoFormSchema } from "@/lib/types/demo";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

const steps = ["Company Size", "Company Details", "Contact Info", "Success"] as const;

export default function ScheduleDemoFlow() {
  const [step, setStep] = React.useState(0);
  const [progress, setProgress] = React.useState(0);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const { toast } = useToast();

  React.useEffect(() => {
    setProgress((step / (steps.length - 1)) * 100);
  }, [step]);

  const form = useForm<DemoFormData>({
    resolver: zodResolver(demoFormSchema),
    defaultValues: {
      phoneContact: false,
    },
  });

  const onSubmit = async (data: DemoFormData) => {
    try {
      setIsSubmitting(true);
      
      // First, save to database
      const { error: dbError } = await supabase
        .from('demo_requests')
        .insert([{
          company_size: data.companySize,
          company_name: data.companyName,
          company_type: data.companyType,
          role: data.role,
          full_name: data.fullName,
          email: data.email,
          phone: data.phone,
        }]);

      if (dbError) throw dbError;

      // Then, send email notification
      const response = await fetch(
        "https://isqyxkfodhgxzcyplbkg.supabase.co/functions/v1/demo-notification",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            company_size: data.companySize,
            company_name: data.companyName,
            company_type: data.companyType,
            role: data.role,
            full_name: data.fullName,
            email: data.email,
            phone: data.phone,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Email notification error:", errorData);
        throw new Error('Failed to send email notification');
      }

      // Move to success step
      setStep(3);
      
    } catch (error) {
      console.error('Submission error:', error);
      toast({
        title: "Error",
        description: "There was a problem submitting your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto">
        {/* Progress Bar */}
        {step < 3 && (
          <div className="mb-8 space-y-4">
            <Progress value={progress} className="h-2 w-full" />
            <div className="flex justify-between text-sm text-gray-600">
              {steps.slice(0, -1).map((stepName, index) => (
                <span
                  key={stepName}
                  className={index <= step ? "text-primary font-medium" : ""}
                >
                  {stepName}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="bg-white shadow-lg rounded-lg p-6 md:p-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              {step === 0 && (
                <CompanySize
                  form={form}
                  onNext={() => setStep(1)}
                />
              )}
              {step === 1 && (
                <CompanyInfo
                  form={form}
                  onNext={() => setStep(2)}
                  onBack={() => setStep(0)}
                />
              )}
              {step === 2 && (
                <ContactInfo
                  form={form}
                  onSubmit={form.handleSubmit(onSubmit)}
                  onBack={() => setStep(1)}
                  isSubmitting={isSubmitting}
                />
              )}
              {step === 3 && <Success />}
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
