import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle } from "lucide-react";
import { Link } from "react-router-dom";
const PACKAGE_COLORS = ["bg-gray-100",
// BASIC
"bg-yellow-100",
// GOLD
"bg-green-100" // PREMIUM
];
const packages = [{
  name: "BASIC",
  offline: "Rs.4,000/month",
  online: ["Rs.4,500/3 months", "Rs.7,500/6 months"],
  centers: "15+ centers",
  color: "bg-gray-100",
  buttonStyle: "border border-gray-300 text-gray-900 hover:bg-gray-200"
}, {
  name: "GOLD",
  offline: "Rs.9,500/month",
  online: ["Rs.10,500/3 months", "Rs.18,000/6 months"],
  centers: "40+ centers",
  color: "bg-yellow-100",
  buttonStyle: "border border-yellow-400 text-yellow-950 hover:bg-yellow-200"
}, {
  name: "PREMIUM",
  offline: "Rs.14,000/month",
  online: ["Rs.16,500/3 months", "Rs.27,000/6 months"],
  centers: "60+ centers",
  color: "bg-green-100",
  buttonStyle: "border border-green-400 text-green-900 hover:bg-green-200"
}];
const features = [{
  name: "Gym & Cardio",
  values: [true, true, true],
  notes: ["15+ centers", "40+ centers", "60+ centers"]
}, {
  name: "Yoga",
  values: [false, true, true]
}, {
  name: "Zumba",
  values: [false, true, true]
}, {
  name: "Boxing/Muaythai",
  values: [false, true, true]
}, {
  name: "Functional Fitness",
  values: [false, true, true]
}, {
  name: "Simulated Golf",
  values: [false, true, true]
}, {
  name: "Group Classes",
  values: [false, true, true]
}, {
  name: "Rock Climbing/Bouldering",
  values: [false, true, true]
}, {
  name: "Physiotherapy Classes",
  values: [false, false, true]
}, {
  name: "Swimming",
  values: [false, false, true]
}, {
  name: "Mental Health Counseling",
  values: [false, false, true]
}, {
  name: "Steam/Sauna",
  values: [false, false, true]
}, {
  name: "Pilates",
  values: [false, false, true]
}];
const MeltdownPricing = () => {
  return <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-gray-50 to-green-50 py-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Meltdown Pricing Packages
          </h1>
          <p className="text-lg text-gray-700 max-w-xl mx-auto">
            Compare our flexible fitness membership options and choose your ideal plan.
          </p>
        </div>
        {/* Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
          {packages.map((pkg, i) => <Card key={pkg.name} className={`rounded-2xl shadow transition-all border-2 ${pkg.color} border-opacity-40`}>
              <CardHeader className="text-center pt-8">
                <CardTitle className="text-2xl font-bold uppercase">{pkg.name} Subscription</CardTitle>
                <CardDescription className="text-base text-gray-800 mt-2 mb-4">
                  <span className="block font-semibold text-gray-900">Offline: <span className="font-bold">{pkg.offline}</span></span>
                  <span className="block">
                    <span className="text-gray-600">Via Meltdown:</span>
                    <br />
                    <span className="font-medium">{pkg.online[0]}</span>
                    <span className="mx-1">|</span>
                    <span className="font-medium">{pkg.online[1]}</span>
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <div className="text-lg font-medium mb-3">
                  <span className="text-gray-800">Facilities:</span> <span className="font-semibold">{pkg.centers}</span>
                </div>
                
              </CardContent>
            </Card>)}
        </div>
        {/* Table / Comparison */}
        <div className="rounded-2xl shadow bg-white overflow-auto max-w-5xl mx-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-100">
                <TableHead className="w-2/6 text-lg py-4">Facilities</TableHead>
                {packages.map((pkg, i) => <TableHead key={pkg.name} className={`text-lg text-center bg-opacity-60`} style={{
                backgroundColor: i === 0 ? "#f3f4f6" : i === 1 ? "#fef9c3" : "#d1fae5"
              }}>
                    {pkg.name}
                  </TableHead>)}
              </TableRow>
            </TableHeader>
            <TableBody>
              {features.map((feature, fIdx) => <TableRow key={feature.name} className={fIdx % 2 === 0 ? "bg-gray-50" : ""}>
                  <TableCell className="font-medium">
                    {feature.name}
                  </TableCell>
                  {feature.values.map((hasFeature, pIdx) => <TableCell key={pIdx} className="text-center">
                      {feature.notes ? <span className="inline-block font-semibold text-gray-800">{feature.notes[pIdx]}</span> : hasFeature ? <CheckCircle2 className="mx-auto text-green-500 h-6 w-6" aria-label="Included" /> : <XCircle className="mx-auto text-gray-300 h-6 w-6" aria-label="Not included" />}
                    </TableCell>)}
                </TableRow>)}
            </TableBody>
          </Table>
        </div>
        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" asChild className="bg-primary text-white hover:bg-primary/90 text-lg px-8 py-4 rounded-full shadow">
            <Link to="/contact">Get Started with Meltdown</Link>
          </Button>
        </div>
      </div>
    </div>;
};
export default MeltdownPricing;