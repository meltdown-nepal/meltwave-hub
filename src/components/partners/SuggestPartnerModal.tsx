
import React, { useState } from 'react';
import { X, MapPin, Building, User, Mail, Phone } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface SuggestPartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const serviceTypes = [
  'Gym/Fitness Center',
  'Yoga Studio',
  'Pilates Studio',
  'Martial Arts',
  'Dance Studio',
  'Swimming Pool',
  'Spa/Wellness Center',
  'Personal Training',
  'Physiotherapy',
  'Nutrition/Dietician',
  'Mental Health/Counseling',
  'Other'
];

const SuggestPartnerModal: React.FC<SuggestPartnerModalProps> = ({ isOpen, onClose }) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    centerName: '',
    serviceType: '',
    serviceTypeOther: '',
    location: '',
    centerDescription: '',
    // User information
    userName: '',
    userEmail: '',
    userPhone: '',
    additionalInfo: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.centerName || !formData.serviceType || !formData.location || !formData.userName || !formData.userEmail) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://isqyxkfodhgxzcyplbkg.supabase.co/functions/v1/suggest-partner', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlzcXl4a2ZvZGhneHpjeXBsYmtnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU0ODY1MzMsImV4cCI6MjA2MTA2MjUzM30.WJUzLqHivLWpuBABIUxAn_Mb5yu1iKQAAwT-W_Ht9Yo`
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit suggestion');
      }

      toast({
        title: "Suggestion Submitted!",
        description: "Thank you for suggesting a wellness partner. We'll review your suggestion and get back to you soon.",
      });

      // Reset form
      setFormData({
        centerName: '',
        serviceType: '',
        serviceTypeOther: '',
        location: '',
        centerDescription: '',
        userName: '',
        userEmail: '',
        userPhone: '',
        additionalInfo: ''
      });

      onClose();
    } catch (error) {
      console.error('Error submitting suggestion:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your suggestion. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Suggest a Wellness Partner</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Wellness Center Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Building className="h-5 w-5" />
              Wellness Center Information
            </h3>
            
            <div className="space-y-2">
              <Label htmlFor="centerName">Wellness Center Name *</Label>
              <Input
                id="centerName"
                value={formData.centerName}
                onChange={(e) => handleInputChange('centerName', e.target.value)}
                placeholder="Enter the name of the wellness center"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="serviceType">Wellness Service Type *</Label>
              <Select value={formData.serviceType} onValueChange={(value) => handleInputChange('serviceType', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select service type" />
                </SelectTrigger>
                <SelectContent>
                  {serviceTypes.map(type => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {formData.serviceType === 'Other' && (
              <div className="space-y-2">
                <Label htmlFor="serviceTypeOther">Please specify the service type</Label>
                <Input
                  id="serviceTypeOther"
                  value={formData.serviceTypeOther}
                  onChange={(e) => handleInputChange('serviceTypeOther', e.target.value)}
                  placeholder="Specify the wellness service type"
                />
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="location">Location *</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  placeholder="Enter the location (city, area, address)"
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="centerDescription">Center Description (Optional)</Label>
              <Textarea
                id="centerDescription"
                value={formData.centerDescription}
                onChange={(e) => handleInputChange('centerDescription', e.target.value)}
                placeholder="Tell us more about this wellness center..."
                rows={3}
              />
            </div>
          </div>

          {/* User Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <User className="h-5 w-5" />
              Your Information
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="userName">Your Name *</Label>
                <Input
                  id="userName"
                  value={formData.userName}
                  onChange={(e) => handleInputChange('userName', e.target.value)}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="userEmail">Your Email *</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    id="userEmail"
                    type="email"
                    value={formData.userEmail}
                    onChange={(e) => handleInputChange('userEmail', e.target.value)}
                    placeholder="Enter your email address"
                    className="pl-10"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="userPhone">Your Phone (Optional)</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  id="userPhone"
                  value={formData.userPhone}
                  onChange={(e) => handleInputChange('userPhone', e.target.value)}
                  placeholder="Enter your phone number"
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="additionalInfo">Additional Information (Optional)</Label>
              <Textarea
                id="additionalInfo"
                value={formData.additionalInfo}
                onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                placeholder="Any additional information you'd like to share..."
                rows={3}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 btn-primary"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Suggestion'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SuggestPartnerModal;
