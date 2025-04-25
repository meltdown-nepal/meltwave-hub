
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { CompanySize } from "@/components/demo/CompanySize";
import { CompanyInfo } from "@/components/demo/CompanyInfo";
import { ContactInfo } from "@/components/demo/ContactInfo";
import { Success } from "@/components/demo/Success";
import { DemoFormData, demoFormSchema } from "@/lib/types/demo";

const steps = ["Company Size", "Company Details", "Contact Info", "Success"] as const;

export default function ScheduleDemoFlow() {
  const [step, setStep] = React.useState(0);

  const form = useForm<DemoFormData>({
    resolver: zodResolver(demoFormSchema),
    defaultValues: {
      phoneContact: false,
    },
  });

  const onSubmit = async (data: DemoFormData) => {
    console.log("Form submitted:", data);
    setStep(3); // Move to success step
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto">
        {/* Progress Indicator */}
        {step < 3 && (
          <div className="mb-8">
            <div className="flex justify-between">
              {steps.slice(0, -1).map((stepName, index) => (
                <div
                  key={stepName}
                  className={`flex items-center ${
                    index < step ? "text-primary" : "text-gray-400"
                  }`}
                >
                  <div
                    className={`rounded-full h-8 w-8 flex items-center justify-center border-2 ${
                      index <= step
                        ? "border-primary bg-primary text-white"
                        : "border-gray-300"
                    }`}
                  >
                    {index + 1}
                  </div>
                  {index < steps.length - 2 && (
                    <div
                      className={`h-0.5 w-full ml-2 ${
                        index < step ? "bg-primary" : "bg-gray-300"
                      }`}
                    />
                  )}
                </div>
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
