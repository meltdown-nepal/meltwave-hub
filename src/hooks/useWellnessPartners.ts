
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Partner, Tier } from '../pages/WellnessPartners';

export const useWellnessPartners = () => {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('wellness_partners')
          .select('*')
          .order('tier', { ascending: false }) // Platinum first, then Gold, then Basic
          .order('name', { ascending: true });

        if (error) throw error;

        // Transform database data to match our Partner interface
        const transformedPartners: Partner[] = data.map(partner => ({
          id: parseInt(partner.id.slice(-8), 16), // Convert UUID to number for compatibility
          name: partner.name,
          location: partner.location,
          tier: partner.tier as Tier,
          services: partner.services
        }));

        setPartners(transformedPartners);
      } catch (err) {
        console.error('Error fetching wellness partners:', err);
        setError('Failed to load wellness partners');
      } finally {
        setLoading(false);
      }
    };

    fetchPartners();
  }, []);

  return { partners, loading, error };
};
