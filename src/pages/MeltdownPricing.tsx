import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
const packages = [{
  name: "BASIC",
  offline: "Rs.4,000/month",
  online: ["Rs.4,500/3 months"],
  centers: "15+ centers",
  color: "bg-gray-50 border-gray-200",
  buttonStyle: "border border-gray-300 text-gray-900 hover:bg-gray-100 focus:ring-2 focus:ring-primary",
  highlight: false
}, {
  name: "GOLD",
  offline: "Rs.9,500/month",
  online: ["Rs.9,500/3 months"],
  // updated price here!
  centers: "40+ centers",
  color: "bg-yellow-50 border-yellow-300",
  buttonStyle: "border-2 border-yellow-400 text-yellow-900 hover:bg-yellow-100 focus:ring-2 focus:ring-yellow-400",
  highlight: true // Most Popular
}, {
  name: "PLATINUM",
  offline: "Rs.14,000/month",
  online: ["Rs.16,500/3 months"],
  // updated price here!
  centers: "60+ centers",
  color: "bg-blue-50 border-blue-300",
  buttonStyle: "border-2 border-blue-400 text-blue-900 hover:bg-blue-100 focus:ring-2 focus:ring-blue-400",
  highlight: false
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
  return (
    <div
      className="min-h-screen py-10"
      style={{
        background: "linear-gradient(to bottom, #fff 0%, #fff 50%, #fffbe8 75%, #fef08a 100%)"
      }}
    >
      <div className="container mx-auto px-2 md:px-4">
        {/* Header */}
        <div className="text-center mb-4 md:mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 gradient-text">
            Meltdown Pricing Packages
          </h1>
          <p className="text-lg text-gray-700 font-medium max-w-2xl mx-auto">
            Compare our flexible membership options and choose your ideal plan.
          </p>
        </div>
        {/* Terms and conditions note (moved up) */}
        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-xs text-gray-500 italic text-center py-[20px]">
            Terms and conditions apply.
          </p>
        </div>
        {/* Package Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 md:gap-10 max-w-6xl mx-auto mb-10">
          {packages.map((pkg, i) => <div key={pkg.name} className={`
                relative flex flex-col items-center justify-between
                rounded-2xl border transition-transform duration-200 
                ${pkg.color} 
                ${pkg.highlight ? "scale-105 md:scale-110 shadow-xl border-yellow-400 border-2 py-8" : "shadow-lg hover:scale-105 hover:z-10 py-6"}
                px-5 md:px-7 
                max-w-sm mx-auto
              `} style={pkg.highlight ? {
          marginTop: "-15px"
        } : {}}>
              {pkg.highlight && <Badge variant="secondary" className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 text-yellow-900 bg-yellow-200 border-yellow-400 px-5 py-1 text-sm rounded-full shadow">
                  Most Popular
                </Badge>}
              
              {/* Title at the top */}
              <div className="w-full flex flex-col gap-0.5 items-center mb-2">
                <span className="text-2xl md:text-3xl font-bold uppercase text-center">
                  {pkg.name}
                </span>
                <span className="text-sm font-semibold uppercase tracking-wider text-gray-500 mt-0.5 mb-0">
                  Subscription
                </span>
              </div>
              
              <CardContent className="flex flex-col items-center flex-1 w-full px-0 pt-2 pb-0">
                {/* Facilities (centered middle content) */}
                <div className="text-base font-medium mb-2 text-gray-700 w-full flex flex-col items-center">
                  {/* Reduced mb-2 from mb-4 for tighter gap */}
                  <span className="font-medium text-gray-700">
                    Facilities:
                  </span>
                  <span className={`font-semibold gradient-text ${pkg.name === "PLATINUM" ? "text-blue-800" : ""}`}>
                    {pkg.centers}
                  </span>
                </div>
                <div className="" /> {/* Removed flex-grow, no spacer so price comes closer below centers */}
                {/* Price info */}
                <div className="w-full flex flex-col gap-2 items-start mt-1 mb-3">
                  {/* Reduced mt-1 (was mt-2) for less gap */}
                  <div className="flex items-center gap-2 font-semibold text-gray-900 text-base">
                    <span>Price (3month)  :</span>
                    <span className="font-bold ml-1 text-nowrap">{pkg.online[0]}</span>
                  </div>
                </div>
                <div className="w-full">
                  <Button size="lg" asChild variant={pkg.highlight ? "default" : "outline"} className={`
                      w-full max-w-full 
                      ${pkg.buttonStyle} 
                      ${pkg.highlight ? "bg-yellow-400 text-gray-900 font-bold shadow-md hover:bg-yellow-300" : ""}
                      ${pkg.name === "PLATINUM" ? "bg-blue-400 text-white font-bold shadow-md hover:bg-blue-300 focus:ring-2 focus:ring-blue-400" : ""}
                      py-3 px-5 mt-2 rounded-lg text-base
                    `}>
                    <Link to="/schedule-demo">
                      {pkg.highlight ? "Choose Gold" : pkg.name === "PLATINUM" ? "Choose Platinum" : `Choose ${pkg.name.charAt(0)}${pkg.name.slice(1).toLowerCase()}`}
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </div>)}
        </div>
        {/* Table / Comparison */}
        <div className="rounded-2xl shadow bg-white/90 overflow-x-auto max-w-5xl mx-auto border border-gray-200 mb-8">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="w-2/6 text-lg lg:text-xl font-semibold py-4">Facilities</TableHead>
                {packages.map((pkg, i) => <TableHead key={pkg.name} className={`text-lg lg:text-xl font-bold text-center px-2 py-4
                    ${pkg.highlight ? "bg-yellow-100 dark:bg-yellow-200 text-yellow-800 ring-2 ring-yellow-400" : i === 0 ? "bg-gray-100 text-gray-700" : pkg.name === "PLATINUM" ? "bg-blue-100 text-blue-900" : "bg-green-100 text-green-900"}`}>
                    {pkg.name}
                  </TableHead>)}
              </TableRow>
            </TableHeader>
            <TableBody>
              {features.map((feature, fIdx) => <TableRow key={feature.name} className={fIdx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <TableCell className="font-medium text-gray-700 text-base">
                    {feature.name}
                  </TableCell>
                  {feature.values.map((hasFeature, pIdx) => <TableCell key={pIdx} className="text-center">
                      {feature.notes ? <span className="inline-block font-semibold text-gray-800">
                          {feature.notes[pIdx]}
                        </span> : hasFeature ? <span className={`inline-block rounded-full ${pIdx === 2 ? "bg-blue-100" : "bg-green-100"} p-1`}>
                          <CheckCircle2 className={`${pIdx === 2 ? "text-blue-600" : "text-green-600"} h-6 w-6`} aria-label="Included" />
                        </span> : <span className="inline-block rounded-full bg-gray-100 p-1">
                          <XCircle className="text-gray-300 h-6 w-6" aria-label="Not included" />
                        </span>}
                    </TableCell>)}
                </TableRow>)}
            </TableBody>
          </Table>
        </div>
        {/* CTA */}
        <div className="text-center mt-10 flex flex-col items-center">
          <Button size="lg" asChild className="bg-primary text-black hover:bg-secondary text-xl px-10 py-5 rounded-full shadow-lg font-bold tracking-wider transition-transform duration-200 transform hover:scale-105">
            <Link to="/schedule-demo">Get Started with Meltdown</Link>
          </Button>
          <p className="text-gray-500 mt-4 text-sm">No hidden fees &middot; Cancel anytime</p>
        </div>
      </div>
    </div>
  );
};
export default MeltdownPricing;
