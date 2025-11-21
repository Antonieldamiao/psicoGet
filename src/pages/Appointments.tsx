import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Clock, User, Calendar as CalendarIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Appointments = () => {
  const navigate = useNavigate();
  const appointments = [
    {
      id: 1,
      patient: "Maria Silva",
      date: "25/11/2025",
      time: "09:00",
      duration: "50min",
      type: "Consulta inicial",
      status: "confirmado",
    },
    {
      id: 2,
      patient: "João Santos",
      date: "25/11/2025",
      time: "10:30",
      duration: "50min",
      type: "Retorno",
      status: "confirmado",
    },
    {
      id: 3,
      patient: "Ana Costa",
      date: "25/11/2025",
      time: "14:00",
      duration: "50min",
      type: "Consulta",
      status: "pendente",
    },
    {
      id: 4,
      patient: "Pedro Oliveira",
      date: "26/11/2025",
      time: "09:00",
      duration: "50min",
      type: "Avaliação",
      status: "confirmado",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmado":
        return "bg-success/10 text-success";
      case "pendente":
        return "bg-warning/10 text-warning";
      case "cancelado":
        return "bg-destructive/10 text-destructive";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const goTo = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/agendamentos/novo");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Agendamentos</h1>
          <p className="text-muted-foreground">Gerencie seus agendamentos</p>
        </div>
        <Button onClick={goTo} className="gap-2">
          <Plus className="h-4 w-4" />
          Novo Agendamento
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          {appointments.map((appointment) => (
            <Card key={appointment.id}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex gap-4">
                    <div className="flex h-14 w-14 flex-col items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <span className="text-xs font-medium">
                        {appointment.date.split("/")[0]}
                      </span>
                      <span className="text-lg font-bold">
                        {appointment.time}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-semibold text-foreground">
                        {appointment.patient}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <CalendarIcon className="h-4 w-4" />
                          <span>{appointment.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{appointment.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          <span>{appointment.type}</span>
                        </div>
                      </div>
                      <span
                        className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${getStatusColor(
                          appointment.status
                        )}`}
                      >
                        {appointment.status.charAt(0).toUpperCase() +
                          appointment.status.slice(1)}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Editar
                    </Button>
                    <Button variant="outline" size="sm">
                      Cancelar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Resumo Semanal</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Total de consultas
                </span>
                <span className="text-2xl font-bold text-foreground">12</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Confirmadas
                </span>
                <span className="text-lg font-semibold text-success">9</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Pendentes</span>
                <span className="text-lg font-semibold text-warning">3</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Taxa de ocupação
                </span>
                <span className="text-lg font-semibold text-primary">75%</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Horários Disponíveis</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="rounded-lg border border-border p-3 text-center">
                <p className="text-sm font-medium text-foreground">Hoje</p>
                <p className="text-xs text-muted-foreground">15:30, 16:30</p>
              </div>
              <div className="rounded-lg border border-border p-3 text-center">
                <p className="text-sm font-medium text-foreground">Amanhã</p>
                <p className="text-xs text-muted-foreground">
                  09:00, 11:00, 14:00
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
