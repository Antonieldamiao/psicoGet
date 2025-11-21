import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sidebar } from "@/components/Sidebar";
import Index from "./pages/Index";
import Patients from "./pages/Patients";
import PatientDetails from "./pages/PatientDetails";
import Appointments from "./pages/Appointments";
import NewAppointment from "./pages/NewAppointment";
import Reports from "./pages/Reports";
import ReportEditor from "./pages/ReportEditor";
import Financial from "./pages/Financial";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex h-screen overflow-hidden bg-background">
          <Sidebar />
          <main className="flex-1 overflow-y-auto">
            <div className="container mx-auto p-6 lg:p-8">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/pacientes" element={<Patients />} />
                <Route path="/pacientes/:id" element={<PatientDetails />} />
                <Route path="/agendamentos" element={<Appointments />} />
                <Route path="/agendamentos/novo" element={<NewAppointment />} />
                <Route path="/relatorios" element={<Reports />} />
                <Route path="/relatorios/novo" element={<ReportEditor />} />
                <Route path="/relatorios/:id" element={<ReportEditor />} />
                <Route path="/financeiro" element={<Financial />} />
                <Route path="/configuracoes" element={<Settings />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </main>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
