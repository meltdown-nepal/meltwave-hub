
import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Clock, Users, DollarSign, CheckCircle, XCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { format } from 'date-fns';

interface Booking {
  id: string;
  user_name: string;
  user_email: string;
  user_phone: string;
  payment_method: string;
  payment_verified: boolean;
  session_completed: boolean;
  trainer_notes: string;
  booking_status: string;
  created_at: string;
  trainer_slots: {
    start_time: string;
    end_time: string;
  };
  trainers: {
    name: string;
    hourly_rate: number;
  };
}

const TrainerDashboard = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [selectedBooking, setSelectedBooking] = useState<string | null>(null);
  const [notes, setNotes] = useState('');

  const { data: bookings, isLoading } = useQuery({
    queryKey: ['trainer-bookings'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('bookings')
        .select(`
          *,
          trainer_slots (start_time, end_time),
          trainers (name, hourly_rate)
        `)
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data as Booking[];
    }
  });

  const updateBookingMutation = useMutation({
    mutationFn: async ({ id, updates }: { id: string; updates: any }) => {
      const { error } = await supabase
        .from('bookings')
        .update(updates)
        .eq('id', id);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['trainer-bookings'] });
      toast({
        title: "Booking Updated",
        description: "The booking has been successfully updated.",
      });
    }
  });

  const handleStatusUpdate = (bookingId: string, status: string) => {
    updateBookingMutation.mutate({
      id: bookingId,
      updates: { booking_status: status }
    });
  };

  const handlePaymentVerification = (bookingId: string, verified: boolean) => {
    updateBookingMutation.mutate({
      id: bookingId,
      updates: { payment_verified: verified }
    });
  };

  const handleSessionComplete = (bookingId: string, notes: string) => {
    updateBookingMutation.mutate({
      id: bookingId,
      updates: { 
        session_completed: true, 
        trainer_notes: notes,
        booking_status: 'completed'
      }
    });
  };

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      pending: { variant: 'secondary' as const, label: 'Pending' },
      confirmed: { variant: 'default' as const, label: 'Confirmed' },
      completed: { variant: 'default' as const, label: 'Completed' },
      cancelled: { variant: 'destructive' as const, label: 'Cancelled' }
    };
    
    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.pending;
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  const stats = bookings ? {
    total: bookings.length,
    pending: bookings.filter(b => b.booking_status === 'pending').length,
    confirmed: bookings.filter(b => b.booking_status === 'confirmed').length,
    completed: bookings.filter(b => b.booking_status === 'completed').length,
    revenue: bookings
      .filter(b => b.payment_verified)
      .reduce((sum, b) => sum + (b.trainers?.hourly_rate || 0), 0)
  } : null;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading dashboard...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Trainer Dashboard</h1>
          <p className="text-gray-600">Manage your bookings and sessions</p>
        </div>

        {/* Stats Cards */}
        {stats && (
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <Users className="h-8 w-8 text-blue-600" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Total Bookings</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <Clock className="h-8 w-8 text-yellow-600" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Pending</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.pending}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Confirmed</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.confirmed}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <Calendar className="h-8 w-8 text-purple-600" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Completed</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.completed}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <DollarSign className="h-8 w-8 text-green-600" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Revenue</p>
                    <p className="text-2xl font-bold text-gray-900">NPR {stats.revenue}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Bookings Table */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Client</TableHead>
                    <TableHead>Date & Time</TableHead>
                    <TableHead>Payment</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {bookings?.map((booking) => (
                    <TableRow key={booking.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium">{booking.user_name}</p>
                          <p className="text-sm text-gray-500">{booking.user_email}</p>
                          {booking.user_phone && (
                            <p className="text-sm text-gray-500">{booking.user_phone}</p>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <p className="font-medium">
                            {format(new Date(booking.trainer_slots.start_time), 'MMM dd, yyyy')}
                          </p>
                          <p className="text-sm text-gray-500">
                            {format(new Date(booking.trainer_slots.start_time), 'h:mm a')} - {format(new Date(booking.trainer_slots.end_time), 'h:mm a')}
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Badge variant={booking.payment_verified ? 'default' : 'secondary'}>
                            {booking.payment_verified ? 'Verified' : 'Pending'}
                          </Badge>
                          <span className="text-sm text-gray-500 capitalize">
                            {booking.payment_method}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        {getStatusBadge(booking.booking_status)}
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          {!booking.payment_verified && (
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handlePaymentVerification(booking.id, true)}
                            >
                              Verify Payment
                            </Button>
                          )}
                          
                          {booking.payment_verified && booking.booking_status === 'pending' && (
                            <Button
                              size="sm"
                              onClick={() => handleStatusUpdate(booking.id, 'confirmed')}
                            >
                              Confirm
                            </Button>
                          )}
                          
                          {booking.booking_status === 'confirmed' && !booking.session_completed && (
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => setSelectedBooking(booking.id)}
                            >
                              Complete Session
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Complete Session Modal (simplified inline form) */}
        {selectedBooking && (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Complete Session</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Session Notes (optional)</label>
                  <Textarea
                    placeholder="Add any notes about the session..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </div>
                <div className="flex gap-2">
                  <Button onClick={() => setSelectedBooking(null)} variant="outline">
                    Cancel
                  </Button>
                  <Button onClick={() => {
                    handleSessionComplete(selectedBooking, notes);
                    setSelectedBooking(null);
                    setNotes('');
                  }}>
                    Mark as Completed
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default TrainerDashboard;
