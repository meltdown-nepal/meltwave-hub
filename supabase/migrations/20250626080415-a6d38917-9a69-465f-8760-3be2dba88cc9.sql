
-- Create a table to store registered companies
CREATE TABLE public.registered_companies (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  company_name TEXT NOT NULL,
  company_email TEXT,
  contact_person TEXT,
  phone TEXT,
  address TEXT,
  industry TEXT,
  employee_count INTEGER,
  registration_date TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create index for faster company name searches (case-insensitive)
CREATE INDEX idx_registered_companies_name_lower ON public.registered_companies (LOWER(company_name));

-- Enable RLS (though this data might be publicly searchable for employee verification)
ALTER TABLE public.registered_companies ENABLE ROW LEVEL SECURITY;

-- Policy to allow anyone to read registered companies (for employee verification)
CREATE POLICY "Anyone can view registered companies" 
  ON public.registered_companies 
  FOR SELECT 
  TO public 
  USING (is_active = true);

-- Insert some sample companies for testing
INSERT INTO public.registered_companies (company_name, company_email, contact_person, industry, employee_count) VALUES
('Golchha Group', 'hr@golchhagroup.com', 'HR Team', 'Conglomerate', 500),
('Himalayan Java Coffee', 'hr@himalayanjava.com', 'HR Department', 'Food & Beverage', 200),
('Young Innovations', 'hr@younginnovations.com.np', 'People Team', 'Technology', 150),
('Leapfrog Technology', 'careers@lftechnology.com', 'Talent Team', 'Software Development', 300),
('Security Pal', 'hr@securitypal.com', 'HR Team', 'Security Services', 100);
