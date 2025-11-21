import { Users, Calendar, TrendingUp, Clock } from "lucide-react";
import { StatCard } from "@/components/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const upcomingAppointments = [
    { id: 1, patient: "Maria Silva", time: "09:00", type: "Consulta inicial" },
    { id: 2, patient: "João Santos", time: "10:30", type: "Retorno" },
    { id: 3, patient: "Ana Costa", time: "14:00", type: "Consulta" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">Visão geral da sua prática</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total de Pacientes"
          value="48"
          icon={Users}
          trend="+12% este mês"
          trendUp
        />
        <StatCard
          title="Consultas Hoje"
          value="7"
          icon={Calendar}
        />
        <StatCard
          title="Taxa de Presença"
          value="94%"
          icon={TrendingUp}
          trend="+3% este mês"
          trendUp
        />
        <StatCard
          title="Horas Trabalhadas"
          value="32h"
          icon={Clock}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Próximos Agendamentos</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingAppointments.map((appointment) => (
              <div
                key={appointment.id}
                className="flex items-center justify-between rounded-lg border border-border p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <span className="text-sm font-semibold">{appointment.time}</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{appointment.patient}</p>
                    <p className="text-sm text-muted-foreground">{appointment.type}</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Detalhes
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Atividades Recentes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="h-2 w-2 rounded-full bg-primary mt-2" />
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">
                  Novo paciente cadastrado
                </p>
                <p className="text-xs text-muted-foreground">Pedro Oliveira - Há 2 horas</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-2 w-2 rounded-full bg-success mt-2" />
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">
                  Consulta finalizada
                </p>
                <p className="text-xs text-muted-foreground">Maria Silva - Há 3 horas</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-2 w-2 rounded-full bg-warning mt-2" />
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">
                  Agendamento reagendado
                </p>
                <p className="text-xs text-muted-foreground">Carlos Souza - Há 5 horas</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
