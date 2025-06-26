
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Building2, Search, CheckCircle, AlertCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import CompanyFoundModal from "@/components/demo/CompanyFoundModal";
import { Separator } from "@/components/ui/separator";

const CompanyEligibilityCheck = () => {
  const [companyName, setCompanyName] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [foundCompany, setFoundCompany] = useState(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSearch = async () => {
    if (!companyName.trim()) {
      toast({
        title: "Please enter a company name",
        description: "Company name is required to check eligibility.",
        variant: "destructive",
      });
      return;
    }

    setIsSearching(true);
    
    try {
      // Search for the company (case-insensitive)
      const { data, error } = await supabase
        .from("registered_companies")
        .select("*")
        .ilike("company_name", `%${companyName.trim()}%`)
        .eq("is_active", true)
        .limit(1);

      if (error) {
        console.error("Search error:", error);
        toast({
          title: "Search Error",
          description: "There was a problem searching for your company. Please try again.",
          variant: "destructive",
        });
        return;
      }

      if (data && data.length > 0) {
        // Company found - show success modal
        setFoundCompany(data[0]);
        setShowModal(true);
      } else {
        // Company not found - redirect to registration
        toast({
          title: "Company Not Found",
          description: "We couldn't find your company in our system. Redirecting to registration...",
        });
        
        // Wait a moment for user to read the message, then redirect
        setTimeout(() => {
          navigate("/schedule-demo", { 
            state: { 
              userType: "company", 
              companyName: companyName.trim(),
              fromEmployeeFlow: true 
            } 
          });
        }, 2000);
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSearching(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div
      className="min-h-screen w-full py-8 px-4"
      style={{
        background: "linear-gradient(to bottom, #fff 0%, #fff 30%, #fef08a 100%)",
      }}
    >
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center">
              <Building2 className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Company Eligibility Check
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Let's verify if your company is already registered with our wellness platform
          </p>
        </div>

        <Separator className="my-8" />

        {/* Search Form */}
        <Card className="p-8 shadow-xl bg-white/95 backdrop-blur-sm">
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <Search className="w-6 h-6 text-primary" />
              <h2 className="text-xl font-semibold">Enter Your Company Name</h2>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="companyName" className="text-base font-medium">
                  Company Name *
                </Label>
                <Input
                  id="companyName"
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Enter your company name..."
                  className="mt-2 text-base py-3"
                  disabled={isSearching}
                />
              </div>

              <Button
                onClick={handleSearch}
                disabled={isSearching || !companyName.trim()}
                className="w-full py-3 text-base font-medium bg-primary hover:bg-primary/90"
              >
                {isSearching ? (
                  <div className="flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Searching...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Search className="w-4 h-4" />
                    <span>Check Eligibility</span>
                  </div>
                )}
              </Button>
            </div>

            {/* Info section */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-blue-800">
                  <p className="font-medium mb-1">What happens next?</p>
                  <ul className="space-y-1 text-blue-700">
                    <li>• <strong>Company Found:</strong> You'll get instructions to contact your HR team</li>
                    <li>• <strong>Company Not Found:</strong> We'll help your company get registered</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Back button */}
        <div className="text-center mt-8">
          <Button
            variant="outline"
            onClick={() => navigate("/schedule-demo")}
            className="text-gray-600 hover:text-gray-800"
          >
            ← Back to User Selection
          </Button>
        </div>
      </div>

      {/* Company Found Modal */}
      {showModal && foundCompany && (
        <CompanyFoundModal
          company={foundCompany}
          isOpen={showModal}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default CompanyEligibilityCheck;
