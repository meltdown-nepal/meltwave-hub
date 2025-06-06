
import React, { useState, Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { usePerfMonitor } from "./hooks/usePerfMonitor";

// Eagerly load critical pages
import EnhancedHome from "./pages/EnhancedHome";
import Contact from "./pages/Contact";

// Lazy load non-critical pages
const Home = lazy(() => import("./pages/Home"));
const CorporateWellness = lazy(() => import("./pages/CorporateWellness"));
const ForCompanies = lazy(() => import("./pages/ForCompanies"));
const ForProviders = lazy(() => import("./pages/ForProviders"));
const ForEmployees = lazy(() => import("./pages/ForEmployees"));
const Events = lazy(() => import("./pages/Events"));
const Academy = lazy(() => import("./pages/Academy"));
const MeltFit = lazy(() => import("./pages/MeltFit"));
const Blog = lazy(() => import("./pages/Blog"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ScheduleDemoFlow = lazy(() => import("./pages/ScheduleDemoFlow"));
const WellnessProviders = lazy(() => import("./pages/WellnessProviders"));
const WellnessOnboarding = lazy(() => import("./pages/WellnessOnboarding"));
const WellnessPartners = lazy(() => import("./pages/WellnessPartners"));
const Careers = lazy(() => import("./pages/Careers"));
const AnalyticsPage = lazy(() => import("./pages/Analytics"));
const Faq = lazy(() => import("./pages/Faq"));
const Pricing = lazy(() => import("./pages/Pricing"));

// Loading fallback
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-pulse flex flex-col items-center">
      <div className="w-12 h-12 bg-primary/20 rounded-full mb-3"></div>
      <div className="h-4 w-24 bg-gray-200 rounded"></div>
    </div>
  </div>
);

function AppContent() {
  // Monitor performance
  usePerfMonitor();
  
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<EnhancedHome />} />
            <Route path="/simple" element={<Home />} />
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
            <Route path="/pricing" element={<Pricing />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

const App = () => {
  // Create a query client with optimized settings
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: 5 * 60 * 1000, // 5 minutes
        gcTime: 10 * 60 * 1000, // 10 minutes (renamed from cacheTime)
      },
    },
  }));

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
