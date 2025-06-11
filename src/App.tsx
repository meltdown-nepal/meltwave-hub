
import React, { useState, Suspense, lazy, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import PreloaderAnimation from "./components/PreloaderAnimation";
import CriticalCSSLoader from "./components/performance/CriticalCSSLoader";
import ResourcePreloader from "./components/performance/ResourcePreloader";
import { useAdvancedPerformance } from "./hooks/useAdvancedPerformance";
import { addResourceHints, preloadModule } from "./utils/bundleOptimizer";

// Eagerly load critical pages
import EnhancedHome from "./pages/EnhancedHome";
import Contact from "./pages/Contact";
import ForEmployees from "./pages/ForEmployees";

// Lazy load non-critical pages with optimized imports
const Home = lazy(() => import("./pages/Home"));
const CorporateWellness = lazy(() => import("./pages/CorporateWellness"));
const ForCompanies = lazy(() => import("./pages/ForCompanies"));
const ForProviders = lazy(() => import("./pages/ForProviders"));
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

// Critical resources to preload
const criticalResources = [
  {
    href: "/lovable-uploads/ec4d86e4-ddaf-4d5e-8c78-412c449ba69f.png",
    as: "image" as const,
    fetchpriority: "high" as const
  },
  {
    href: "/lovable-uploads/85ad4cbc-7386-45ac-b96e-e70e9cce7179.png",
    as: "image" as const,
    fetchpriority: "high" as const
  }
];

// Optimized loading fallback
const OptimizedLoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
    <div className="animate-pulse flex flex-col items-center space-y-4">
      <div className="w-12 h-12 bg-primary/20 rounded-full animate-bounce"></div>
      <div className="h-4 w-32 bg-gray-200 rounded animate-pulse"></div>
      <div className="text-xs text-gray-500">Loading experience...</div>
    </div>
  </div>
);

function AppContent() {
  const { metrics, getPerformanceGrade } = useAdvancedPerformance();
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Add resource hints immediately
    addResourceHints();
    
    // Preload likely next pages
    const preloadPages = [
      () => import("./pages/CorporateWellness"),
      () => import("./pages/Events"),
      () => import("./pages/ForCompanies")
    ];
    
    // Preload after initial load
    setTimeout(() => {
      preloadPages.forEach(preloadModule);
    }, 2000);
    
    // Performance monitoring in development
    if (process.env.NODE_ENV === 'development') {
      setTimeout(() => {
        console.log('Performance Grade:', getPerformanceGrade());
        console.log('Performance Metrics:', metrics);
      }, 3000);
    }
  }, [getPerformanceGrade, metrics]);
  
  const handleLoadComplete = () => {
    setLoading(false);
  };
  
  return (
    <CriticalCSSLoader>
      <ResourcePreloader resources={criticalResources} />
      {loading && <PreloaderAnimation onLoadComplete={handleLoadComplete} />}
      <ScrollToTop />
      <Navbar />
      <main>
        <Suspense fallback={<OptimizedLoadingFallback />}>
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
    </CriticalCSSLoader>
  );
}

const App = () => {
  // Optimized query client with better caching
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: 10 * 60 * 1000, // 10 minutes
        gcTime: 30 * 60 * 1000, // 30 minutes
        retry: (failureCount, error: any) => {
          // Don't retry on 4xx errors
          if (error?.status >= 400 && error?.status < 500) {
            return false;
          }
          return failureCount < 3;
        }
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
