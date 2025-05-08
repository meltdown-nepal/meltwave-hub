
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { ContactFormData, formSchema } from "./types";

export function useContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      interest: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormData) {
    try {
      setIsSubmitting(true);
      setSubmissionError(null);
      
      const response = await supabase.functions.invoke('contact', {
        body: data
      });
      
      if (response.error) {
        console.error('Contact function error:', response.error);
        throw new Error(response.error.message || 'Failed to send message');
      }
      
      const result = response.data;
      console.log('Contact form submission result:', result);

      toast({
        title: "✅ Success!",
        description: "Your message has been sent successfully! We'll get back to you soon.",
      });
      
      form.reset();
    } catch (error: any) {
      console.error('Contact form error:', error);
      setSubmissionError(error.message || 'Unknown error occurred');
      toast({
        variant: "destructive",
        title: "❌ Error",
        description: "Oops! Something went wrong. Please try again later or contact us directly via email.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return {
    form,
    isSubmitting,
    submissionError,
    onSubmit: form.handleSubmit(onSubmit),
  };
}
