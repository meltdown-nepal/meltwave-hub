import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
