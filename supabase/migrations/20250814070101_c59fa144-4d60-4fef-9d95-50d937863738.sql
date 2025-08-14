
-- Phase 1: Critical Data Protection - Secure Bookings Table
DROP POLICY IF EXISTS "Allow public read own bookings" ON public.bookings;
DROP POLICY IF EXISTS "Allow public insert bookings" ON public.bookings;
DROP POLICY IF EXISTS "Allow public update bookings" ON public.bookings;

-- Create secure booking policies that require authentication
CREATE POLICY "Users can view their own bookings" 
  ON public.bookings 
  FOR SELECT 
  USING (auth.uid() IS NOT NULL AND user_email = (SELECT email FROM auth.users WHERE id = auth.uid()));

CREATE POLICY "Users can create their own bookings" 
  ON public.bookings 
  FOR INSERT 
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Trainers can view their bookings" 
  ON public.bookings 
  FOR SELECT 
  USING (auth.uid() IS NOT NULL AND trainer_id IN (
    SELECT id FROM public.trainers WHERE email = (SELECT email FROM auth.users WHERE id = auth.uid())
  ));

CREATE POLICY "Trainers can update their bookings" 
  ON public.bookings 
  FOR UPDATE 
  USING (auth.uid() IS NOT NULL AND trainer_id IN (
    SELECT id FROM public.trainers WHERE email = (SELECT email FROM auth.users WHERE id = auth.uid())
  ));

-- Phase 2: Secure Trainers Table - Hide sensitive email data
DROP POLICY IF EXISTS "Allow public read access to trainers" ON public.trainers;

-- Create a public view for trainers with only non-sensitive data
CREATE OR REPLACE VIEW public.trainers_public AS
SELECT 
  id,
  name,
  bio,
  profile_picture_url,
  specialties,
  hourly_rate,
  created_at
FROM public.trainers;

-- Allow public access to the safe trainer view
CREATE POLICY "Allow public read access to trainer profiles" 
  ON public.trainers 
  FOR SELECT 
  USING (false); -- Block direct access to trainers table

-- Phase 3: Secure Company Data
DROP POLICY IF EXISTS "Anyone can view registered companies" ON public.registered_companies;

CREATE POLICY "Restricted access to company data" 
  ON public.registered_companies 
  FOR SELECT 
  USING (false); -- Block public access, only admins should see this

-- Phase 4: Secure Analytics Data
DROP POLICY IF EXISTS "Allow public read access to page_views" ON public.page_views;
DROP POLICY IF EXISTS "Allow public read access to visitor_sessions" ON public.visitor_sessions;

CREATE POLICY "Admin only access to page views" 
  ON public.page_views 
  FOR SELECT 
  USING (false); -- Will be updated once admin roles are implemented

CREATE POLICY "Admin only access to visitor sessions" 
  ON public.visitor_sessions 
  FOR SELECT 
  USING (false); -- Will be updated once admin roles are implemented

-- Keep insert policies for analytics as they're needed for functionality
CREATE POLICY "Allow public insert to page_views" 
  ON public.page_views 
  FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Allow public insert and update to visitor_sessions" 
  ON public.visitor_sessions 
  FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Allow public update to visitor_sessions" 
  ON public.visitor_sessions 
  FOR UPDATE 
  USING (true);

-- Create a function to safely get trainer profiles for public use
CREATE OR REPLACE FUNCTION get_public_trainers()
RETURNS TABLE (
  id uuid,
  name text,
  bio text,
  profile_picture_url text,
  specialties text[],
  hourly_rate integer,
  created_at timestamp with time zone
) 
SECURITY DEFINER
SET search_path = public
LANGUAGE sql
AS $$
  SELECT 
    t.id,
    t.name,
    t.bio,
    t.profile_picture_url,
    t.specialties,
    t.hourly_rate,
    t.created_at
  FROM trainers t;
$$;
