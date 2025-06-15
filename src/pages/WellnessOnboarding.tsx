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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTitle, SheetDescription, SheetHeader, SheetFooter } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import { supabase } from "@/integrations/supabase/client";

// Wellness Provider Schema
const wellnessProviderSchema = z.object({
  serviceType: z.enum(["yoga", "nutrition", "meditation", "fitness", "therapy", "other"]),
  serviceTypeOther: z.string().optional(),
  operationMode: z.enum(["independent", "facility", "both"]),
  location: z.string().min(2, { message: "Please enter your city" }),
  clientsPerWeek: z.enum(["1-5", "6-10", "11-20", "20+"]),
  gymCollaboration: z.boolean().default(false),
  name: z.string().min(2, { message: "Please enter your name" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  phone: z.string().optional(),
  additionalInfo: z.string().optional(),
});

type WellnessProviderData = z.infer<typeof wellnessProviderSchema>;

const WellnessOnboarding = () => {
  const [step, setStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSummaryOpen, setIsSummaryOpen] = useState(false);
  const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const totalSteps = 5; // Total number of steps in the flow
  const progress = ((step + 1) / totalSteps) * 100;
  
  const form = useForm<WellnessProviderData>({
    resolver: zodResolver(wellnessProviderSchema),
    defaultValues: {
      gymCollaboration: false,
    },
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
    <div className="relative min-h-[calc(100dvh-70px)] bg-gradient-to-tl from-yellow-100 via-yellow-100 to-white py-5 px-2 sm:px-3 lg:px-4 flex items-center justify-center" style={{ minHeight: "100dvh" }}>
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
                      disabled={!form.watch("serviceType")}
                      className="flex items-center gap-1"
                    >
                      Next <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
              
              {/* Step 2: Operation Mode */}
              {step === 1 && (
                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <h2 className="text-2xl font-semibold">How do you operate your service?</h2>
                    <p className="text-gray-600">Tell us about your working arrangement</p>
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="operationMode"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormControl>
                          <RadioGroup 
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col gap-3"
                          >
                            {[
                              { value: "independent", label: "I work independently", desc: "I operate on my own without a facility" },
                              { value: "facility", label: "I work with a facility", desc: "I'm associated with a gym, studio, or wellness center" },
                              { value: "both", label: "I do both", desc: "I work independently and with facilities" },
                            ].map((option) => (
                              <label
                                key={option.value}
                                className={`
                                  p-4 rounded-lg border-2 cursor-pointer flex items-center gap-4
                                  transition-all duration-200 hover:border-primary/70
                                  ${field.value === option.value ? "border-primary bg-primary/10" : "border-gray-200"}
                                `}
                              >
                                <RadioGroupItem value={option.value} id={option.value} />
                                <div>
                                  <div className="font-medium">{option.label}</div>
                                  <div className="text-sm text-gray-500">{option.desc}</div>
                                </div>
                              </label>
                            ))}
                          </RadioGroup>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <div className="flex justify-between">
                    <Button type="button" variant="outline" onClick={prevStep} className="flex items-center gap-1">
                      <ChevronLeft className="h-4 w-4" /> Back
                    </Button>
                    <Button 
                      type="button" 
                      onClick={nextStep}
                      disabled={!form.watch("operationMode")}
                      className="flex items-center gap-1"
                    >
                      Next <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
              
              {/* Step 3: Location */}
              {step === 2 && (
                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <h2 className="text-2xl font-semibold">Where are you based?</h2>
                    <p className="text-gray-600">Enter your primary service location</p>
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="City name"
                            className="w-full text-center text-lg py-6"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <div className="flex justify-between">
                    <Button type="button" variant="outline" onClick={prevStep} className="flex items-center gap-1">
                      <ChevronLeft className="h-4 w-4" /> Back
                    </Button>
                    <Button 
                      type="button" 
                      onClick={nextStep}
                      disabled={!form.watch("location") || form.watch("location").length < 2}
                      className="flex items-center gap-1"
                    >
                      Next <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
              
              {/* Step 4: Clients per week */}
              {step === 3 && (
                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <h2 className="text-2xl font-semibold">How many clients do you handle per week?</h2>
                    <p className="text-gray-600">This helps us understand your capacity</p>
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="clientsPerWeek"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormControl>
                          <RadioGroup 
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="grid grid-cols-2 gap-3"
                          >
                            {[
                              { value: "1-5", label: "1-5 clients" },
                              { value: "6-10", label: "6-10 clients" },
                              { value: "11-20", label: "11-20 clients" },
                              { value: "20+", label: "20+ clients" },
                            ].map((option) => (
                              <label
                                key={option.value}
                                className={`
                                  p-4 rounded-lg border-2 cursor-pointer flex flex-col items-center justify-center h-24
                                  transition-all duration-200 hover:border-primary/70 text-center
                                  ${field.value === option.value ? "border-primary bg-primary/10" : "border-gray-200"}
                                `}
                              >
                                <RadioGroupItem value={option.value} id={option.value} className="sr-only" />
                                <div className="font-medium">{option.label}</div>
                              </label>
                            ))}
                          </RadioGroup>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <div className="flex justify-between">
                    <Button type="button" variant="outline" onClick={prevStep} className="flex items-center gap-1">
                      <ChevronLeft className="h-4 w-4" /> Back
                    </Button>
                    <Button 
                      type="button" 
                      onClick={nextStep}
                      disabled={!form.watch("clientsPerWeek")}
                      className="flex items-center gap-1"
                    >
                      Next <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
              
              {/* Step 5: Contact Information and Collaboration */}
              {step === 4 && (
                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <h2 className="text-2xl font-semibold">Just a few more details</h2>
                    <p className="text-gray-600">Tell us how to reach you</p>
                  </div>
                  
                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="Your name" />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input {...field} type="email" placeholder="you@example.com" />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number (optional)</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="Your contact number" />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <Separator className="my-4" />
                    
                    <FormField
                      control={form.control}
                      name="gymCollaboration"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              I'm interested in collaborating with local gyms and fitness centers
                            </FormLabel>
                            <p className="text-sm text-muted-foreground">
                              We'll connect you with potential partners in your area
                            </p>
                          </div>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="additionalInfo"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Additional Information (optional)</FormLabel>
                          <FormControl>
                            <textarea
                              className="w-full min-h-[100px] p-3 rounded-md border border-input"
                              placeholder="Tell us more about your services or any specific requirements"
                              {...field}
                            />
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
                      disabled={!form.watch("name") || !form.watch("email")}
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
                
                <div className="text-muted-foreground">Operation Mode:</div>
                <div className="font-medium">
                  {form.watch("operationMode")?.charAt(0).toUpperCase() + form.watch("operationMode")?.slice(1)}
                </div>
                
                <div className="text-muted-foreground">Location:</div>
                <div className="font-medium">{form.watch("location")}</div>
                
                <div className="text-muted-foreground">Clients per Week:</div>
                <div className="font-medium">{form.watch("clientsPerWeek")}</div>
                
                <div className="text-muted-foreground">Gym Collaboration:</div>
                <div className="font-medium">{form.watch("gymCollaboration") ? "Yes" : "No"}</div>
              </div>
            </div>
            
            <Separator />
            
            <div className="space-y-2">
              <h3 className="font-medium text-lg">Contact Information</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="text-muted-foreground">Name:</div>
                <div className="font-medium">{form.watch("name")}</div>
                
                <div className="text-muted-foreground">Email:</div>
                <div className="font-medium">{form.watch("email")}</div>
                
                <div className="text-muted-foreground">Phone:</div>
                <div className="font-medium">{form.watch("phone") || "Not provided"}</div>
              </div>
            </div>
            
            {form.watch("additionalInfo") && (
              <>
                <Separator />
                <div className="space-y-2">
                  <h3 className="font-medium text-lg">Additional Information</h3>
                  <p className="text-sm">{form.watch("additionalInfo")}</p>
                </div>
              </>
            )}
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
