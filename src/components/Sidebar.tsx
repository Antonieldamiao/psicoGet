import { NavLink } from "react-router-dom";
import { LayoutDashboard, Users, Calendar, FileText, DollarSign, Settings, Brain } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Pacientes", href: "/pacientes", icon: Users },
  { name: "Agendamentos", href: "/agendamentos", icon: Calendar },
  { name: "Relatórios", href: "/relatorios", icon: FileText },
  { name: "Financeiro", href: "/financeiro", icon: DollarSign },
  { name: "Configurações", href: "/configuracoes", icon: Settings },
];

export const Sidebar = () => {
  return (
    <div className="flex h-screen w-64 flex-col border-r border-border bg-sidebar">
      <div className="flex h-16 items-center gap-3 border-b border-sidebar-border px-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
          <Brain className="h-6 w-6 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-lg font-semibold text-sidebar-foreground">PsicoGest</h1>
          <p className="text-xs text-muted-foreground">Gestão Profissional</p>
        </div>
      </div>
      
      <nav className="flex-1 space-y-1 p-4">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
              )
            }
          >
            <item.icon className="h-5 w-5" />
            {item.name}
          </NavLink>
        ))}
      </nav>

      <div className="border-t border-sidebar-border p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <span className="text-sm font-medium">PS</span>
          </div>
          <div className="flex-1 text-sm">
            <p className="font-medium text-sidebar-foreground">Dr. Psicólogo</p>
            <p className="text-xs text-muted-foreground">CRP: 06/123456</p>
          </div>
        </div>
      </div>
    </div>
  );
};
