
import React, { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Home from "./pages/Home";
import CorporateWellness from "./pages/CorporateWellness";
import ForCompanies from "./pages/ForCompanies";
import ForProviders from "./pages/ForProviders";
import ForEmployees from "./pages/ForEmployees";
import Events from "./pages/Events";
import Academy from "./pages/Academy";
import MeltFit from "./pages/MeltFit";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import ScheduleDemoFlow from "./pages/ScheduleDemoFlow";
import WellnessProviders from "./pages/WellnessProviders";
import WellnessOnboarding from "./pages/WellnessOnboarding";
import WellnessPartners from "./pages/WellnessPartners";
import Careers from "./pages/Careers";
import AnalyticsPage from "./pages/Analytics";
import Faq from "./pages/Faq";

function AppContent() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/corporate-wellness" element={<CorporateWellness />} />
          <Route path="/companies" element={<ForCompanies />} />
          <Route path="/providers" element={<ForProviders />} />
          <Route path="/employees" element={<ForEmployees />} />
          <Route path="/events" element={<Events />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/meltfit" element={<MeltFit />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/schedule-demo" element={<ScheduleDemoFlow />} />
          <Route path="/wellness-providers" element={<WellnessProviders />} />
          <Route path="/wellness-onboarding" element={<WellnessOnboarding />} />
          <Route path="/wellness-partners" element={<WellnessPartners />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

const App = () => {
  // Create a query client instance inside the component
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HashRouter>
          <AppContent />
        </HashRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
