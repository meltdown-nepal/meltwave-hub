import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Copy, Mail, X } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface ApplyNowModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle: string;
  applyEmail: string;
}

const ApplyNowModal = ({ isOpen, onClose, jobTitle, applyEmail }: ApplyNowModalProps) => {
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(applyEmail);
      toast({
        title: "Email copied!",
        description: "The email address has been copied to your clipboard.",
      });
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Please copy the email address manually.",
        variant: "destructive",
      });
    }
  };

  const openEmailClient = () => {
    const subject = encodeURIComponent(`Application for ${jobTitle} Position`);
    const body = encodeURIComponent(
      `Hello,\n\nI am interested in applying for the ${jobTitle} position at Meltdown Nepal. Please find my portfolio and introduction attached.\n\nBest regards,`
    );
    window.open(`mailto:${applyEmail}?subject=${subject}&body=${body}`);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Mail className="w-5 h-5" />
            Apply for {jobTitle}
          </DialogTitle>
          <DialogClose />
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="text-center space-y-3">
            <p className="text-gray-600">
              Send your portfolio and short intro to:
            </p>
            
            <div className="bg-gray-50 p-3 rounded-lg border">
              <p className="font-medium text-primary">{applyEmail}</p>
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <Button onClick={copyEmail} variant="outline" className="w-full">
              <Copy className="w-4 h-4 mr-2" />
              Copy Email Address
            </Button>
            
            <Button onClick={openEmailClient} className="w-full">
              <Mail className="w-4 h-4 mr-2" />
              Open Email Client
            </Button>
          </div>
          
          <div className="text-xs text-gray-500 text-center">
            Include your portfolio, relevant work samples, and a brief introduction about yourself.
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ApplyNowModal;