import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  ChevronLeft, 
  ChevronRight,
  Check,
  ArrowLeft
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTitle, SheetDescription, SheetHeader, SheetFooter } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

// Wellness Provider Schema
const wellnessProviderSchema = z.object({
  serviceType: z.enum(["yoga", "nutrition", "meditation", "fitness", "therapy", "other"], {
    required_error: "Please select a service type"
  }),
  serviceTypeOther: z.string().min(1, { message: "Please specify your service type" }).optional(),
  
  // Company Information
  companyName: z.string().min(1, { message: "Company name is required" }).min(2, { message: "Company name must be at least 2 characters" }),
  companyAddress: z.string().min(1, { message: "Company address is required" }).min(5, { message: "Please enter a complete address" }),
  companyEmail: z.string().min(1, { message: "Company email is required" }).email({ message: "Please enter a valid company email" }),
  companyPhone: z.string().min(1, { message: "Company phone number is required" }).min(10, { message: "Please enter a valid phone number" }),
  
  // Sender Contact Information
  senderName: z.string().min(1, { message: "Your name is required" }).min(2, { message: "Name must be at least 2 characters" }),
  senderEmail: z.string().min(1, { message: "Your email is required" }).email({ message: "Please enter a valid email" }),
  senderPhone: z.string().min(1, { message: "Your phone number is required" }).min(10, { message: "Please enter a valid phone number" }),
  senderPosition: z.string().min(1, { message: "Your position is required" }).min(2, { message: "Position must be at least 2 characters" }),
}).refine((data) => {
  // If serviceType is "other", serviceTypeOther must be provided
  if (data.serviceType === "other") {
    return data.serviceTypeOther && data.serviceTypeOther.length > 0;
  }
  return true;
}, {
  message: "Please specify your service type",
  path: ["serviceTypeOther"]
});

type WellnessProviderData = z.infer<typeof wellnessProviderSchema>;

const WellnessOnboarding = () => {
  const [step, setStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSummaryOpen, setIsSummaryOpen] = useState(false);
  const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const totalSteps = 3; // Total number of steps in the flow
  const progress = ((step + 1) / totalSteps) * 100;
  
  const form = useForm<WellnessProviderData>({
    resolver: zodResolver(wellnessProviderSchema),
    defaultValues: {},
  });
  
  // Handle navigation between steps
  const nextStep = () => {
    if (step === totalSteps - 1) {
      // Show summary before submitting
      setIsSummaryOpen(true);
    } else {
      setStep((prev) => prev + 1);
    }
  };
  
  const prevStep = () => {
    setStep((prev) => Math.max(0, prev - 1));
  };
  
  const handleSubmit = async (data: WellnessProviderData) => {
    try {
      setIsSubmitting(true);
      console.log("Form submitted with data:", data);
      
      // Send data to Supabase Edge Function
      const { error } = await supabase.functions.invoke('wellness-provider', {
        body: data
      });
      
      if (error) {
        console.error("Submission error:", error);
        throw new Error(error.message || "Failed to submit application");
      }
      
      setIsSubmitting(false);
      setIsSummaryOpen(false);
      setIsSuccessDialogOpen(true);
      
      toast({
        title: "Application Submitted!",
        description: "Thank you for applying to join our wellness provider network.",
      });
      
    } catch (error: any) {
      console.error("Submission error:", error);
      setIsSubmitting(false);
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: error.message || "Please try again later",
      });
    }
  };
  
  // Go back to the main onboarding flow
  const handleBackToStart = () => {
    navigate("/schedule-demo");
  };
  
  // Handle success case
  const handleFinish = () => {
    setIsSuccessDialogOpen(false);
    navigate("/"); // Navigate to home or dashboard
  };

  return (
    <div
      className="relative min-h-[calc(100dvh-70px)] py-5 px-2 sm:px-3 lg:px-4 flex items-center justify-center"
      style={{
        minHeight: "100dvh",
        background: "linear-gradient(to bottom, #fff 0%, #fff 30%, #fef08a 100%)",
      }}
    >
      {/* Content with relative positioning */}
      <div className="relative z-10 max-w-xl mx-auto">
        {/* Header with Progress */}
        <div className="mb-8 space-y-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              size="sm"
              className="flex items-center gap-1 text-gray-600"
              onClick={step === 0 ? handleBackToStart : prevStep}
            >
              <ArrowLeft className="h-4 w-4" />
              {step === 0 ? "Back to Selection" : "Back"}
            </Button>
            <span className="text-sm font-medium text-gray-600">
              {step + 1} of {totalSteps}
            </span>
          </div>
          <Progress value={progress} className="h-2 w-full" />
        </div>

        {/* Main Content Card */}
        <Card className="bg-white/95 backdrop-blur-sm shadow-lg rounded-lg p-6 md:p-8 animate-fade-in">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
              {/* Step 1: Service Type */}
              {step === 0 && (
                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <h2 className="text-2xl font-semibold">What type of wellness service do you provide?</h2>
                    <p className="text-gray-600">Select the option that best describes your practice</p>
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="serviceType"
                    render={({ field }) => (
                      <FormItem className="space-y-4">
                        <div className="grid grid-cols-2 gap-3">
                          {[
                            { value: "yoga", label: "Yoga Instructor", icon: "🧘‍♀️" },
                            { value: "nutrition", label: "Nutritionist", icon: "🥗" },
                            { value: "meditation", label: "Meditation Guide", icon: "🧠" },
                            { value: "fitness", label: "Fitness Coach", icon: "💪" },
                            { value: "therapy", label: "Therapist", icon: "🧡" },
                            { value: "other", label: "Other", icon: "✨" },
                          ].map((option) => (
                            <FormControl key={option.value}>
                              <div
                                className={`
                                  p-4 rounded-lg border-2 cursor-pointer flex flex-col items-center text-center gap-2
                                  transition-all duration-200 hover:border-primary/70
                                  ${field.value === option.value ? "border-primary bg-primary/10" : "border-gray-200"}
                                `}
                                onClick={() => field.onChange(option.value)}
                              >
                                <span className="text-2xl">{option.icon}</span>
                                <Label className="font-medium">{option.label}</Label>
                              </div>
                            </FormControl>
                          ))}
                        </div>
                      </FormItem>
                    )}
                  />
                  
                  {form.watch("serviceType") === "other" && (
                    <FormField
                      control={form.control}
                      name="serviceTypeOther"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="Please specify your wellness service"
                              className="w-full"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  )}
                  
                  <div className="flex justify-end">
                    <Button 
                      type="button" 
                      onClick={nextStep}
                      disabled={!form.watch("serviceType") || (form.watch("serviceType") === "other" && !form.watch("serviceTypeOther"))}
                      className="flex items-center gap-1"
                    >
                      Next <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
              
              {/* Step 2: Company Information */}
              {step === 1 && (
                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <h2 className="text-2xl font-semibold">Tell us about your wellness center</h2>
                    <p className="text-gray-600">Company contact information</p>
                  </div>
                  
                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="companyName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company/Wellness Center Name</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="Your wellness center name" />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="companyAddress"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Address</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="Full address of your wellness center" />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="companyEmail"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Email</FormLabel>
                          <FormControl>
                            <Input {...field} type="email" placeholder="info@yourcompany.com" />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="companyPhone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Phone Number</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="+977 01-xxxxxxx" />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="flex justify-between">
                    <Button type="button" variant="outline" onClick={prevStep} className="flex items-center gap-1">
                      <ChevronLeft className="h-4 w-4" /> Back
                    </Button>
                    <Button 
                      type="button" 
                      onClick={nextStep}
                      disabled={!form.watch("companyName")?.trim() || !form.watch("companyAddress")?.trim() || !form.watch("companyEmail")?.trim() || !form.watch("companyPhone")?.trim()}
                      className="flex items-center gap-1"
                    >
                      Next <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
              
              {/* Step 3: Sender Contact Information */}
              {step === 2 && (
                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <h2 className="text-2xl font-semibold">Your contact information</h2>
                    <p className="text-gray-600">Tell us about the person submitting this application</p>
                  </div>
                  
                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="senderName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Full Name</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="Your full name" />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="senderEmail"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Email Address</FormLabel>
                          <FormControl>
                            <Input {...field} type="email" placeholder="your@email.com" />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="senderPhone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Phone Number</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="+977 98xxxxxxxx" />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="senderPosition"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Position/Role</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="e.g., Owner, Manager, Trainer" />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="flex justify-between">
                    <Button type="button" variant="outline" onClick={prevStep} className="flex items-center gap-1">
                      <ChevronLeft className="h-4 w-4" /> Back
                    </Button>
                    <Button 
                      type="button" 
                      onClick={nextStep}
                      disabled={!form.watch("senderName")?.trim() || !form.watch("senderEmail")?.trim() || !form.watch("senderPhone")?.trim() || !form.watch("senderPosition")?.trim()}
                      className="flex items-center gap-1"
                    >
                      Review <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
            </form>
          </Form>
        </Card>
      </div>
      
      {/* Summary Sheet */}
      <Sheet open={isSummaryOpen} onOpenChange={setIsSummaryOpen}>
        <SheetContent className="sm:max-w-md overflow-y-auto">
          <SheetHeader>
            <SheetTitle>Review Your Information</SheetTitle>
            <SheetDescription>
              Please review your information before submitting
            </SheetDescription>
          </SheetHeader>
          
          <div className="py-6 space-y-6">
            <div className="space-y-2">
              <h3 className="font-medium text-lg">Service Information</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="text-muted-foreground">Service Type:</div>
                <div className="font-medium">
                  {form.watch("serviceType") === "other" 
                    ? form.watch("serviceTypeOther") 
                    : form.watch("serviceType")?.charAt(0).toUpperCase() + form.watch("serviceType")?.slice(1)}
                </div>
              </div>
            </div>
            
            <Separator />
            
            <div className="space-y-2">
              <h3 className="font-medium text-lg">Company Information</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="text-muted-foreground">Company Name:</div>
                <div className="font-medium">{form.watch("companyName")}</div>
                
                <div className="text-muted-foreground">Address:</div>
                <div className="font-medium">{form.watch("companyAddress")}</div>
                
                <div className="text-muted-foreground">Email:</div>
                <div className="font-medium">{form.watch("companyEmail")}</div>
                
                <div className="text-muted-foreground">Phone:</div>
                <div className="font-medium">{form.watch("companyPhone")}</div>
              </div>
            </div>
            
            <Separator />
            
            <div className="space-y-2">
              <h3 className="font-medium text-lg">Your Contact Information</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="text-muted-foreground">Name:</div>
                <div className="font-medium">{form.watch("senderName")}</div>
                
                <div className="text-muted-foreground">Email:</div>
                <div className="font-medium">{form.watch("senderEmail")}</div>
                
                <div className="text-muted-foreground">Phone:</div>
                <div className="font-medium">{form.watch("senderPhone")}</div>
                
                <div className="text-muted-foreground">Position:</div>
                <div className="font-medium">{form.watch("senderPosition")}</div>
              </div>
            </div>
          </div>
          
          <SheetFooter>
            <Button variant="outline" onClick={() => setIsSummaryOpen(false)}>
              Edit Information
            </Button>
            <Button 
              onClick={form.handleSubmit(handleSubmit)} 
              disabled={isSubmitting}
              className="flex items-center gap-2"
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
              {isSubmitting ? null : <Check className="h-4 w-4" />}
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
      
      {/* Success Dialog */}
      <Dialog open={isSuccessDialogOpen} onOpenChange={setIsSuccessDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center text-2xl">Application Submitted!</DialogTitle>
            <DialogDescription className="text-center">
              Thank you for applying to join our wellness provider network. We'll review your information and get back to you soon.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center py-6">
            <div className="rounded-full bg-green-100 p-3">
              <Check className="h-10 w-10 text-green-600" />
            </div>
          </div>
          <div className="flex justify-center">
            <Button onClick={handleFinish}>Return to Home</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default WellnessOnboarding;