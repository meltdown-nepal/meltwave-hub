import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Progress } from "@/components/ui/progress";
import { CompanySize } from "@/components/demo/CompanySize";
import { CompanyInfo } from "@/components/demo/CompanyInfo";
import { ContactInfo } from "@/components/demo/ContactInfo";
import { Success } from "@/components/demo/Success";
import { UserTypeSelection } from "@/components/demo/UserTypeSelection";
import { DemoFormData, demoFormSchema } from "@/lib/types/demo";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
const steps = ["Who Are You?", "Company Size", "Company Details", "Contact Info", "Success"] as const;
export default function ScheduleDemoFlow() {
  const [step, setStep] = React.useState(0);
  const [progress, setProgress] = React.useState(0);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const {
    toast
  } = useToast();
  React.useEffect(() => {
    setProgress(step / (steps.length - 1) * 100);
  }, [step]);
  const form = useForm<DemoFormData>({
    resolver: zodResolver(demoFormSchema),
    defaultValues: {
      phoneContact: false
    }
  });
  const onSubmit = async (data: DemoFormData) => {
    try {
      setIsSubmitting(true);
      console.log('Demo form data being submitted:', data);

      // First, save to database
      const {
        error: dbError
      } = await supabase.from('demo_requests').insert([{
        company_size: data.companySize,
        company_name: data.companyName,
        company_type: data.companyType,
        role: data.role,
        full_name: data.fullName,
        email: data.email,
        phone: data.phone
      }]);
      if (dbError) {
        console.error('Database error:', dbError);
        throw dbError;
      }

      // Then, send email notification with the correct data structure
      const {
        error: emailError
      } = await supabase.functions.invoke('demo-notification', {
        body: {
          companySize: data.companySize,
          companyName: data.companyName,
          companyType: data.companyType,
          role: data.role,
          fullName: data.fullName,
          email: data.email,
          phone: data.phone,
          userType: data.userType
        }
      });
      if (emailError) {
        console.error("Email notification error:", emailError);
        throw new Error('Failed to send email notification');
      }

      // Move to success step
      setStep(4);
    } catch (error) {
      console.error('Submission error:', error);
      toast({
        title: "Error",
        description: "There was a problem submitting your request. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <div className="relative min-h-screen bg-gradient-to-tl from-yellow-100 via-yellow-100 to-white py-12 px-4 sm:px-6 lg:px-8">
      {/* Content with relative positioning to appear above background */}
      <div className="relative z-10 max-w-xl mx-auto">
        {/* Progress Bar */}
        {step < steps.length - 1 && <div className="mb-8 space-y-4">
            <Progress value={progress} className="h-2 w-full" />
            <div className="flex justify-between text-sm text-gray-600">
              {steps.slice(0, -1).map((stepName, index) => <span key={stepName} className="text-gray-950">
                  {stepName}
                </span>)}
            </div>
          </div>}

        <div className="bg-white/95 backdrop-blur-sm shadow-lg rounded-lg p-6 md:p-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              {step === 0 && <UserTypeSelection onSelect={type => {
              form.setValue("userType", type);
              setStep(1);
            }} />}
              {step === 1 && <CompanySize form={form} onNext={() => setStep(2)} />}
              {step === 2 && <CompanyInfo form={form} onNext={() => setStep(3)} onBack={() => setStep(1)} />}
              {step === 3 && <ContactInfo form={form} onSubmit={form.handleSubmit(onSubmit)} onBack={() => setStep(2)} isSubmitting={isSubmitting} />}
              {step === 4 && <Success />}
            </form>
          </Form>
        </div>
      </div>
    </div>;
}