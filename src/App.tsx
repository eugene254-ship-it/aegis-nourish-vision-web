import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/AboutPage";
import SolutionPage from "./pages/SolutionPage";
import ImpactPage from "./pages/ImpactPage";
import PartnersPage from "./pages/PartnersPage";
import GetInvolvedPage from "./pages/GetInvolvedPage";
import ReportsPage from "./pages/ReportsPage";
import AuthPage from "./components/AuthPage";
import Dashboard from "./components/Dashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/solution" element={<SolutionPage />} />
          <Route path="/impact" element={<ImpactPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/get-involved" element={<GetInvolvedPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
