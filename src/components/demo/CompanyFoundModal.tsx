
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle, Building2, Mail, Phone, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface CompanyFoundModalProps {
  company: {
    id: string;
    company_name: string;
    company_email?: string;
    contact_person?: string;
    phone?: string;
    address?: string;
    industry?: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

const CompanyFoundModal: React.FC<CompanyFoundModalProps> = ({
  company,
  isOpen,
  onClose,
}) => {
  const navigate = useNavigate();

  const handleClose = () => {
    onClose();
    // Navigate back to home or wherever appropriate
    navigate("/");
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center pb-4">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
          </div>
          <DialogTitle className="text-2xl font-bold text-green-800">
            Great News!
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 text-center">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Building2 className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-green-800">{company.company_name}</h3>
            </div>
            <p className="text-green-700 text-sm">
              Your company is already registered with our wellness platform!
            </p>
          </div>

          {/* Company Details */}
          {(company.contact_person || company.company_email || company.phone) && (
            <div className="bg-gray-50 rounded-lg p-4 text-left">
              <h4 className="font-medium text-gray-800 mb-3">Contact Information:</h4>
              <div className="space-y-2 text-sm text-gray-600">
                {company.contact_person && (
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">Contact Person:</span>
                    <span>{company.contact_person}</span>
                  </div>
                )}
                {company.company_email && (
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>{company.company_email}</span>
                  </div>
                )}
                {company.phone && (
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>{company.phone}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Instructions */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-800 mb-2">Next Steps:</h4>
            <div className="text-sm text-blue-700 text-left space-y-1">
              <p>1. Contact your HR department or company admin</p>
              <p>2. Ask them about accessing the Meltdown wellness platform</p>
              <p>3. They will provide you with login credentials or enrollment instructions</p>
            </div>
          </div>

          <div className="text-xs text-gray-500">
            If you have any questions, please reach out to our support team.
          </div>

          <Button
            onClick={handleClose}
            className="w-full bg-primary hover:bg-primary/90 text-black"
          >
            Got it, thanks!
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CompanyFoundModal;
