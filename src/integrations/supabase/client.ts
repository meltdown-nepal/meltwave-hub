// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://isqyxkfodhgxzcyplbkg.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlzcXl4a2ZvZGhneHpjeXBsYmtnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU0ODY1MzMsImV4cCI6MjA2MTA2MjUzM30.WJUzLqHivLWpuBABIUxAn_Mb5yu1iKQAAwT-W_Ht9Yo";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);