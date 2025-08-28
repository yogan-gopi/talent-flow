import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Index from "./pages/Index";
import Recruitment from "./pages/Recruitment";
import NotFound from "./pages/NotFound";
import PlaceholderPage from "./pages/PlaceholderPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Index />} />
            <Route path="recruitment" element={<Recruitment />} />
            <Route path="onboarding" element={<PlaceholderPage title="Onboarding" description="Centralized onboarding portal for new hires with personalized checklists and interactive walkthroughs." />} />
            <Route path="analytics" element={<PlaceholderPage title="Analytics & Insights" description="Real-time dashboards with hiring efficiency charts and onboarding bottleneck analysis." />} />
            <Route path="tasks" element={<PlaceholderPage title="Tasks & Progress" description="Task dashboard with completion tracking and automated reminders." />} />
            <Route path="directory" element={<PlaceholderPage title="Contact Directory" description="Directory of managers, mentors, and team leads with direct communication options." />} />
            <Route path="assistant" element={<PlaceholderPage title="Q&A Assistant" description="AI-powered chatbot for policies, project info, and onboarding guidance." />} />
            <Route path="settings" element={<PlaceholderPage title="Settings" description="Account settings and platform configuration options." />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
