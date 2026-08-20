
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import Ecommerce from "./pages/Ecommerce";
import CRM from "./pages/CRM";
import Sales from "./pages/Sales";
import Leads from "./pages/Leads";
import Analytics from "./pages/Analytics";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
import SettingsPage from "./pages/Settings";
import Communications from "./pages/Communications";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/ecommerce" element={<Ecommerce />} />
            <Route path="/crm" element={<CRM />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/communications" element={<Communications />} />
            <Route path="/calendar" element={<div className="p-8 text-center text-slate-500">Módulo de Calendario - Próximamente</div>} />
            <Route path="/reports" element={<div className="p-8 text-center text-slate-500">Módulo de Reportes - Próximamente</div>} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
