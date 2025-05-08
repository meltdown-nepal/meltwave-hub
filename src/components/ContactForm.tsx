
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { PersonalInfoFields, InterestAndMessageFields } from "./contact-form/FormFields";
import { FormError } from "./contact-form/FormError";
import { useContactForm } from "./contact-form/useContactForm";

// Use 'export type' when re-exporting types with isolatedModules enabled
export type { ContactFormData } from "./contact-form/types";

export function ContactForm() {
  const { form, isSubmitting, submissionError, onSubmit } = useContactForm();

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="space-y-6">
        <PersonalInfoFields form={form} />
        <InterestAndMessageFields form={form} />
        
        <FormError errorMessage={submissionError} />

        <Button 
          type="submit" 
          className="btn-primary w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </Form>
  );
}
