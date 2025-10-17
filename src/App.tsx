
import React, { useState, Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import SmartChatbot from "./components/chatbot/SmartChatbot";

// Eagerly load critical pages
import EnhancedHome from "./pages/EnhancedHome";
import Contact from "./pages/Contact";
import ForEmployees from "./pages/ForEmployees";
import ForCompanies from "./pages/ForCompanies";
import CompanyEligibilityCheck from "./pages/CompanyEligibilityCheck";

// Lazy load non-critical pages
const CorporateWellness = lazy(() => import("./pages/CorporateWellness"));
const ForProviders = lazy(() => import("./pages/ForProviders"));
const Events = lazy(() => import("./pages/Events"));
const Academy = lazy(() => import("./pages/Academy"));
const MeltFit = lazy(() => import("./pages/MeltFit"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ScheduleDemoFlow = lazy(() => import("./pages/ScheduleDemoFlow"));
const WellnessProviders = lazy(() => import("./pages/WellnessProviders"));
const WellnessOnboarding = lazy(() => import("./pages/WellnessOnboarding"));
const WellnessPartners = lazy(() => import("./pages/WellnessPartners"));
const Careers = lazy(() => import("./pages/Careers"));
const AnalyticsPage = lazy(() => import("./pages/Analytics"));
const Faq = lazy(() => import("./pages/Faq"));
const Pricing = lazy(() => import("./pages/Pricing"));
const MeltdownPricing = lazy(() => import("./pages/MeltdownPricing"));
const Packages = lazy(() => import("./pages/Packages"));
const PackageDetail = lazy(() => import("./pages/PackageDetail"));
const EssentialPlan = lazy(() => import("./pages/EssentialPlan"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));

// Simple loading fallback
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-pulse flex flex-col items-center space-y-4">
      <div className="w-12 h-12 bg-primary/20 rounded-full animate-bounce"></div>
      <div className="text-sm text-gray-500">Loading...</div>
    </div>
  </div>
);

function AppContent() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<EnhancedHome />} />
            <Route path="/corporate-wellness" element={<CorporateWellness />} />
            <Route path="/companies" element={<ForCompanies />} />
            <Route path="/providers" element={<ForProviders />} />
            <Route path="/employees" element={<ForEmployees />} />
            <Route path="/events" element={<Events />} />
            <Route path="/academy" element={<Academy />} />
            <Route path="/meltfit" element={<MeltFit />} />
            <Route path="/essential-plan" element={<EssentialPlan />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/schedule-demo" element={<ScheduleDemoFlow />} />
            <Route path="/company-eligibility-check" element={<CompanyEligibilityCheck />} />
            <Route path="/wellness-providers" element={<WellnessProviders />} />
            <Route path="/wellness-onboarding" element={<WellnessOnboarding />} />
            <Route path="/wellness-partners" element={<WellnessPartners />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/meltdown-pricing" element={<MeltdownPricing />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/packages/:packageId" element={<PackageDetail />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      
      {/* Smart Chatbot - Available on all pages */}
      <SmartChatbot />
    </>
  );
}

const App = () => {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: 5 * 60 * 1000,
        retry: 1
      },
    },
  }));

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AppContent />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
