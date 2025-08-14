import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, MapPin, Clock } from 'lucide-react';

interface Trainer {
  id: string;
  name: string;
  bio: string;
  profile_picture_url: string | null;
  specialties: string[] | null;
  hourly_rate: number;
}

const TrainerBooking = () => {
  const { data: trainers, isLoading, error } = useQuery({
    queryKey: ['public-trainers'],
    queryFn: async (): Promise<Trainer[]> => {
      const { data, error } = await supabase.rpc('get_public_trainers') as { data: Trainer[] | null, error: any };
      
      if (error) throw error;
      return data || [];
    }
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading trainers...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-red-600">Error loading trainers. Please try again.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Find Your Perfect Fitness Trainer
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Book sessions with certified trainers and start your fitness journey today
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers?.map((trainer) => (
            <Card key={trainer.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={trainer.profile_picture_url || '/placeholder.svg'}
                  alt={trainer.name}
                  className="w-full h-48 object-cover"
                />
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{trainer.name}</CardTitle>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">4.9</span>
                  </div>
                </div>
                <CardDescription className="line-clamp-2">
                  {trainer.bio}
                </CardDescription>
              </CardHeader>

              <CardContent>
                {/* Specialties */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {trainer.specialties?.slice(0, 3).map((specialty) => (
                      <Badge key={specialty} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Price and availability */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>NPR {trainer.hourly_rate}/hour</span>
                  </div>
                  <Badge variant="outline" className="text-green-600">
                    Available
                  </Badge>
                </div>

                {/* Book button */}
                <Link to={`/trainer/${trainer.id}`}>
                  <Button className="w-full">
                    View Schedule & Book
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainerBooking;
