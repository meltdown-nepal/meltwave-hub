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
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
  // Business Information
  businessName: z.string().min(1, { message: "Business name is required" }).min(2, { message: "Business name must be at least 2 characters" }),
  address: z.string().min(1, { message: "Address is required" }).min(5, { message: "Please enter a complete address" }),
  
  // Service Types (multi-select)
  serviceTypes: z.array(z.string()).min(1, { message: "Please select at least one service type" }),
  serviceTypeOther: z.string().optional(),
  
  // Contact Person Information
  contactName: z.string().min(1, { message: "Contact name is required" }).min(2, { message: "Contact name must be at least 2 characters" }),
  contactRole: z.string().min(1, { message: "Please select a role" }),
  contactRoleOther: z.string().optional(),
  contactEmail: z.string().min(1, { message: "Contact email is required" }).email({ message: "Please enter a valid email" }),
  contactPhone: z.string().min(1, { message: "Contact phone is required" }).min(10, { message: "Please enter a valid phone number" }),
  
  // Additional Notes (optional)
  additionalNotes: z.string().optional(),
}).refine((data) => {
  // If serviceTypes includes "other", serviceTypeOther must be provided
  if (data.serviceTypes.includes("other")) {
    return data.serviceTypeOther && data.serviceTypeOther.length > 0;
  }
  return true;
}, {
  message: "Please specify your other service type",
  path: ["serviceTypeOther"]
}).refine((data) => {
  // If contactRole is "other", contactRoleOther must be provided
  if (data.contactRole === "other") {
    return data.contactRoleOther && data.contactRoleOther.length > 0;
  }
  return true;
}, {
  message: "Please specify your role",
  path: ["contactRoleOther"]
});

type WellnessProviderData = z.infer<typeof wellnessProviderSchema>;

const WellnessOnboarding = () => {
  const [step, setStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSummaryOpen, setIsSummaryOpen] = useState(false);
  const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const totalSteps = 4; // Total number of steps in the flow
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
      
      // Transform data to match the expected format in the edge function
      const transformedData = {
        serviceType: data.serviceTypes.length === 1 ? data.serviceTypes[0] : 'multiple',
        serviceTypeOther: data.serviceTypeOther || '',
        companyName: data.businessName,
        companyAddress: data.address,
        companyEmail: data.contactEmail,
        companyPhone: data.contactPhone,
        senderName: data.contactName,
        senderEmail: data.contactEmail,
        senderPhone: data.contactPhone,
        senderPosition: data.contactRole === 'other' ? data.contactRoleOther : data.contactRole,
        additionalNotes: data.additionalNotes || ''
      };
      
      // Send data to Supabase Edge Function
      const { error } = await supabase.functions.invoke('wellness-provider', {
        body: transformedData
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
              {/* Step 1: Wellness Provider Information */}
              {step === 0 && (
                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <h2 className="text-2xl font-semibold">🧘 Wellness Provider Information</h2>
                    <p className="text-gray-600">Tell us about your business or organization</p>
                  </div>
                  
                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="businessName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Business / Organization Name</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="e.g., FitLife Studio, Serenity Yoga Center" />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Address</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="Street, City, District" />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="flex justify-end">
                    <Button 
                      type="button" 
                      onClick={nextStep}
                      disabled={!form.watch("businessName")?.trim() || !form.watch("address")?.trim()}
                      className="flex items-center gap-1"
                    >
                      Next <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
              
              {/* Step 2: Type of Service(s) Offered */}
              {step === 1 && (
                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <h2 className="text-2xl font-semibold">Type of Service(s) Offered</h2>
                    <p className="text-gray-600">What type of wellness services do you offer? Select all that apply</p>
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="serviceTypes"
                    render={({ field }) => (
                      <FormItem className="space-y-4">
                        <div className="grid grid-cols-1 gap-3">
                          {[
                            { value: "gym", label: "Gym / Fitness Center", icon: "🏋️‍♀️" },
                            { value: "yoga", label: "Yoga Studio", icon: "🧘‍♀️" },
                            { value: "dance", label: "Dance Studio", icon: "💃" },
                            { value: "therapy", label: "Therapy / Counseling", icon: "🧠" },
                            { value: "martial-arts", label: "Martial Arts / Combat Sports", icon: "🥋" },
                            { value: "spa", label: "Spa / Massage", icon: "💆‍♀️" },
                            { value: "nutrition", label: "Nutrition / Diet Consultation", icon: "🥗" },
                            { value: "physical-therapy", label: "Physical Therapy / Rehab", icon: "🏥" },
                            { value: "other", label: "Other", icon: "✨" },
                          ].map((option) => (
                            <FormControl key={option.value}>
                              <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50">
                                <Checkbox
                                  checked={field.value?.includes(option.value) || false}
                                  onCheckedChange={(checked) => {
                                    const currentValues = field.value || [];
                                    if (checked) {
                                      field.onChange([...currentValues, option.value]);
                                    } else {
                                      field.onChange(currentValues.filter((value: string) => value !== option.value));
                                    }
                                  }}
                                />
                                <span className="text-xl">{option.icon}</span>
                                <Label className="font-medium cursor-pointer">{option.label}</Label>
                              </div>
                            </FormControl>
                          ))}
                        </div>
                      </FormItem>
                    )}
                  />
                  
                  {form.watch("serviceTypes")?.includes("other") && (
                    <FormField
                      control={form.control}
                      name="serviceTypeOther"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Please specify your other service type</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Describe your wellness service"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  )}
                  
                  <div className="flex justify-between">
                    <Button type="button" variant="outline" onClick={prevStep} className="flex items-center gap-1">
                      <ChevronLeft className="h-4 w-4" /> Back
                    </Button>
                    <Button 
                      type="button" 
                      onClick={nextStep}
                      disabled={!form.watch("serviceTypes")?.length || (form.watch("serviceTypes")?.includes("other") && !form.watch("serviceTypeOther")?.trim())}
                      className="flex items-center gap-1"
                    >
                      Next <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
              
              {/* Step 3: Contact Person Information */}
              {step === 2 && (
                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <h2 className="text-2xl font-semibold">Contact Person (Owner / Manager)</h2>
                    <p className="text-gray-600">Primary contact for this wellness provider</p>
                  </div>
                  
                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="contactName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name of Contact Person</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="Full name" />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="contactRole"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Role in the Organization</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your role" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-white border border-gray-200 shadow-lg z-50">
                              <SelectItem value="owner">Owner</SelectItem>
                              <SelectItem value="manager">Manager</SelectItem>
                              <SelectItem value="admin">Admin Staff</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormItem>
                      )}
                    />
                    
                    {form.watch("contactRole") === "other" && (
                      <FormField
                        control={form.control}
                        name="contactRoleOther"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Please specify your role</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your role in the organization"
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    )}
                    
                    <FormField
                      control={form.control}
                      name="contactEmail"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Contact Email</FormLabel>
                          <FormControl>
                            <Input {...field} type="email" placeholder="your@email.com" />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="contactPhone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Contact Phone Number</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="+977 98xxxxxxxx" />
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
                      disabled={!form.watch("contactName")?.trim() || !form.watch("contactRole") || !form.watch("contactEmail")?.trim() || !form.watch("contactPhone")?.trim() || (form.watch("contactRole") === "other" && !form.watch("contactRoleOther")?.trim())}
                      className="flex items-center gap-1"
                    >
                      Next <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
              
              {/* Step 4: Additional Notes */}
              {step === 3 && (
                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <h2 className="text-2xl font-semibold">Additional Notes</h2>
                    <p className="text-gray-600">Is there anything else you'd like us to know about your organization?</p>
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="additionalNotes"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            {...field}
                            placeholder="Share any special instructions, business goals, or anything else you'd like us to consider..."
                            className="min-h-32 resize-none"
                          />
                        </FormControl>
                        <p className="text-sm text-gray-500 mt-2">Optional - but helps us understand your needs better</p>
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
                      className="flex items-center gap-1"
                    >
                      Review Application <ChevronRight className="h-4 w-4" />
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
              <h3 className="font-medium text-lg">Business Information</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="text-muted-foreground">Business Name:</div>
                <div className="font-medium">{form.watch("businessName")}</div>
                
                <div className="text-muted-foreground">Address:</div>
                <div className="font-medium">{form.watch("address")}</div>
              </div>
            </div>
            
            <Separator />
            
            <div className="space-y-2">
              <h3 className="font-medium text-lg">Services Offered</h3>
              <div className="space-y-2">
                <div className="text-muted-foreground">Service Types:</div>
                <div className="font-medium">
                  {form.watch("serviceTypes")?.map((service: string) => {
                    if (service === "other") {
                      return form.watch("serviceTypeOther") || "Other";
                    }
                    return service.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
                  }).join(", ")}
                </div>
              </div>
            </div>
            
            <Separator />
            
            <div className="space-y-2">
              <h3 className="font-medium text-lg">Contact Person</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="text-muted-foreground">Name:</div>
                <div className="font-medium">{form.watch("contactName")}</div>
                
                <div className="text-muted-foreground">Role:</div>
                <div className="font-medium">
                  {form.watch("contactRole") === "other" 
                    ? form.watch("contactRoleOther") 
                    : form.watch("contactRole")?.charAt(0).toUpperCase() + form.watch("contactRole")?.slice(1)}
                </div>
                
                <div className="text-muted-foreground">Email:</div>
                <div className="font-medium">{form.watch("contactEmail")}</div>
                
                <div className="text-muted-foreground">Phone:</div>
                <div className="font-medium">{form.watch("contactPhone")}</div>
              </div>
            </div>
            
            {form.watch("additionalNotes") && (
              <>
                <Separator />
                <div className="space-y-2">
                  <h3 className="font-medium text-lg">Additional Notes</h3>
                  <div className="text-sm text-muted-foreground">
                    {form.watch("additionalNotes")}
                  </div>
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
