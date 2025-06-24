
import React from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package } from "lucide-react";

const EmployeePackageShowcase = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Wellness Package</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Select the perfect package that fits your wellness goals and lifestyle. All packages are heavily subsidized by your company.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left side - Package Options */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="bg-gray-200 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Your Company Investment</h3>
                <p className="text-gray-600">
                  Your company has made an annual investment per employee, unlocking access to our comprehensive wellness platform for the entire team.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-gray-200 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Personalized App Access</h3>
                <p className="text-gray-600">
                  Access your company's personalized Meltdown app to explore services, track progress, and join wellness challenges with your colleagues.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-primary text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Choose Your Package</h3>
                <p className="text-gray-600">
                  Select from Basic, Gold, or Platinum packages - all heavily subsidized thanks to your company's investment in your wellness.
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Package Options Card */}
          <div className="bg-white rounded-lg p-6 shadow-xl relative">
            {/* View Details Button */}
            <Link to="/meltdown-pricing" className="absolute right-5 top-5">
              <Button variant="outline" className="!px-4 py-1 text-sm">View Pricing</Button>
            </Link>
            
            <div className="flex items-center justify-center mb-6">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center">
                <Package className="w-8 h-8 text-primary" />
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-center mb-6">Available Packages</h3>
            
            <div className="space-y-4">
              <div className="flex flex-col items-start p-3 bg-gray-50 rounded-lg py-[15px]">
                <span className="font-medium text-base">Basic Package</span>
                <span className="text-gray-600 text-sm mt-1">Gym Cardio & Group Fitness Classes</span>
              </div>
              
              <div className="flex flex-col items-start p-3 bg-amber-50 rounded-lg border border-amber-200 py-[15px]">
                <span className="font-medium text-base">Gold Package</span>
                <span className="text-gray-600 text-sm mt-1">+ Golfing, Yoga, Rock Climbing, Boxing, Dance Classes</span>
              </div>
              
              <div className="flex flex-col items-start p-3 bg-blue-50 rounded-lg border border-blue-200 py-[15px]">
                <span className="font-medium text-base">Platinum Package</span>
                <span className="text-gray-600 text-sm mt-1">+ Swimming, Mental Health Services and many more</span>
              </div>
            </div>

            <div className="text-center mt-6">
              <Link to="/meltdown-pricing">
                <Button className="w-full bg-primary hover:bg-primary/90 text-black">
                  Explore All Packages
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployeePackageShowcase;
