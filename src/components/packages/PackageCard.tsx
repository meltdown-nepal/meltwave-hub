
import React from "react";
import { Link } from "react-router-dom";
import { Dumbbell, Salad } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const packageIconMap: Record<string, React.ReactNode> = {
  "personal-training": <Dumbbell size={40} className="text-primary"/>,
  "health-nutrition": <Salad size={40} className="text-green-600"/>,
};

export interface PackageCardProps {
  id: string;
  name: string;
  description: string;
  icon?: React.ReactNode;
}

const PackageCard: React.FC<PackageCardProps> = ({ id, name, description }) => (
  <Card className="flex flex-col h-full shadow-md hover:shadow-lg transition-shadow duration-200">
    <CardHeader className="flex flex-col items-center">
      <div className="mb-3">{packageIconMap[id]}</div>
      <CardTitle className="text-xl text-center">{name}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-gray-600 text-center">{description}</p>
    </CardContent>
    <CardFooter className="flex justify-center">
      <Button asChild>
        <Link to={`/packages/${id}`}>
          View Details
        </Link>
      </Button>
    </CardFooter>
  </Card>
);

export default PackageCard;
