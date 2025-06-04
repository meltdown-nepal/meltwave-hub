
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Clock, User, Mail, Phone, CreditCard } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { format } from 'date-fns';

interface Trainer {
  id: string;
  name: string;
  bio: string;
  profile_picture_url: string;
  specialties: string[];
  hourly_rate: number;
}

interface TimeSlot {
  id: string;
  start_time: string;
  end_time: string;
  is_available: boolean;
}

interface BookingForm {
  user_name: string;
  user_email: string;
  user_phone: string;
  payment_method: 'esewa' | 'khalti';
  slot_id: string;
}

const TrainerDetail = () => {
  const { trainerId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [bookingForm, setBookingForm] = useState<BookingForm>({
    user_name: '',
    user_email: '',
    user_phone: '',
    payment_method: 'esewa',
    slot_id: ''
  });

  const { data: trainer, isLoading: trainerLoading } = useQuery({
    queryKey: ['trainer', trainerId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('trainers')
        .select('*')
        .eq('id', trainerId)
        .single();
      
      if (error) throw error;
      return data as Trainer;
    }
  });

  const { data: timeSlots, isLoading: slotsLoading } = useQuery({
    queryKey: ['trainer-slots', trainerId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('trainer_slots')
        .select('*')
        .eq('trainer_id', trainerId)
        .eq('is_available', true)
        .gte('start_time', new Date().toISOString())
        .order('start_time');
      
      if (error) throw error;
      return data as TimeSlot[];
    }
  });

  const bookingMutation = useMutation({
    mutationFn: async (booking: BookingForm) => {
      const { data, error } = await supabase
        .from('bookings')
        .insert({
          trainer_id: trainerId,
          slot_id: booking.slot_id,
          user_name: booking.user_name,
          user_email: booking.user_email,
          user_phone: booking.user_phone,
          payment_method: booking.payment_method,
          booking_status: 'pending'
        })
        .select()
        .single();

      if (error) throw error;

      // Update slot availability
      await supabase
        .from('trainer_slots')
        .update({ is_available: false })
        .eq('id', booking.slot_id);

      return data;
    },
    onSuccess: (data) => {
      toast({
        title: "Booking Successful!",
        description: "Your booking has been created. You will receive payment instructions via email.",
      });
      queryClient.invalidateQueries({ queryKey: ['trainer-slots', trainerId] });
      navigate('/booking-confirmation', { state: { bookingId: data.id } });
    },
    onError: (error) => {
      toast({
        title: "Booking Failed",
        description: "There was an error creating your booking. Please try again.",
        variant: "destructive",
      });
      console.error('Booking error:', error);
    }
  });

  const handleSlotSelect = (slot: TimeSlot) => {
    setSelectedSlot(slot);
    setBookingForm(prev => ({ ...prev, slot_id: slot.id }));
    setShowBookingForm(true);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSlot || !bookingForm.user_name || !bookingForm.user_email) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    bookingMutation.mutate(bookingForm);
  };

  if (trainerLoading || slotsLoading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading trainer details...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!trainer) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-red-600">Trainer not found.</p>
            <Button onClick={() => navigate('/trainers')} className="mt-4">
              Back to Trainers
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Trainer Info */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader className="text-center">
                <div className="w-32 h-32 mx-auto mb-4">
                  <img
                    src={trainer.profile_picture_url || '/placeholder.svg'}
                    alt={trainer.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <CardTitle className="text-2xl">{trainer.name}</CardTitle>
                <p className="text-lg font-semibold text-primary">
                  NPR {trainer.hourly_rate}/hour
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">About</h4>
                    <p className="text-gray-600">{trainer.bio}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                      {trainer.specialties?.map((specialty) => (
                        <Badge key={specialty} variant="secondary">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Available Slots and Booking */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Available Time Slots
                </CardTitle>
              </CardHeader>
              <CardContent>
                {!showBookingForm ? (
                  <div className="space-y-4">
                    {timeSlots && timeSlots.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {timeSlots.map((slot) => (
                          <Button
                            key={slot.id}
                            variant="outline"
                            className="p-4 h-auto flex flex-col items-start"
                            onClick={() => handleSlotSelect(slot)}
                          >
                            <div className="flex items-center gap-2 mb-1">
                              <Clock className="w-4 h-4" />
                              <span className="font-semibold">
                                {format(new Date(slot.start_time), 'MMM dd, yyyy')}
                              </span>
                            </div>
                            <span className="text-sm text-gray-600">
                              {format(new Date(slot.start_time), 'h:mm a')} - {format(new Date(slot.end_time), 'h:mm a')}
                            </span>
                          </Button>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-gray-600">No available slots at the moment.</p>
                        <p className="text-sm text-gray-500 mt-2">Please check back later.</p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="space-y-6">
                    {selectedSlot && (
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Selected Time Slot</h4>
                        <p className="text-sm">
                          {format(new Date(selectedSlot.start_time), 'MMMM dd, yyyy')} at{' '}
                          {format(new Date(selectedSlot.start_time), 'h:mm a')} - {format(new Date(selectedSlot.end_time), 'h:mm a')}
                        </p>
                        <p className="text-lg font-semibold mt-2">
                          Total: NPR {trainer.hourly_rate}
                        </p>
                      </div>
                    )}

                    <form onSubmit={handleBookingSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="user_name">Full Name *</Label>
                          <Input
                            id="user_name"
                            value={bookingForm.user_name}
                            onChange={(e) => setBookingForm(prev => ({ ...prev, user_name: e.target.value }))}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="user_email">Email *</Label>
                          <Input
                            id="user_email"
                            type="email"
                            value={bookingForm.user_email}
                            onChange={(e) => setBookingForm(prev => ({ ...prev, user_email: e.target.value }))}
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="user_phone">Phone Number</Label>
                        <Input
                          id="user_phone"
                          value={bookingForm.user_phone}
                          onChange={(e) => setBookingForm(prev => ({ ...prev, user_phone: e.target.value }))}
                        />
                      </div>

                      <div>
                        <Label htmlFor="payment_method">Payment Method *</Label>
                        <Select
                          value={bookingForm.payment_method}
                          onValueChange={(value: 'esewa' | 'khalti') => 
                            setBookingForm(prev => ({ ...prev, payment_method: value }))}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="esewa">eSewa</SelectItem>
                            <SelectItem value="khalti">Khalti</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="flex gap-3">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setShowBookingForm(false)}
                        >
                          Back to Slots
                        </Button>
                        <Button 
                          type="submit" 
                          disabled={bookingMutation.isPending}
                          className="flex-1"
                        >
                          {bookingMutation.isPending ? 'Booking...' : 'Confirm Booking'}
                        </Button>
                      </div>
                    </form>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerDetail;
