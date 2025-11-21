import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, FileText, Calendar, User } from "lucide-react";
import { Input } from "@/components/ui/input";

const Reports = () => {
  const reports = [
    {
      id: 1,
      patient: "Maria Silva",
      date: "20/11/2025",
      session: "Sessão #5",
      summary: "Paciente apresentou melhora significativa na ansiedade. Discutimos técnicas de respiração.",
    },
    {
      id: 2,
      patient: "João Santos",
      date: "19/11/2025",
      session: "Sessão #3",
      summary: "Trabalho focado em técnicas cognitivas. Paciente demonstrou boa compreensão dos exercícios.",
    },
    {
      id: 3,
      patient: "Ana Costa",
      date: "18/11/2025",
      session: "Sessão #8",
      summary: "Revisão do progresso terapêutico. Paciente relata redução dos sintomas depressivos.",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Relatórios de Consultas</h1>
          <p className="text-muted-foreground">Acompanhe as anotações das sessões</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Novo Relatório
        </Button>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="flex gap-4">
            <Input placeholder="Buscar relatórios..." className="flex-1" />
            <Button variant="outline">Filtrar por data</Button>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {reports.map((report) => (
          <Card key={report.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <CardTitle className="text-xl">{report.patient}</CardTitle>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{report.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FileText className="h-4 w-4" />
                      <span>{report.session}</span>
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Ver Completo
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{report.summary}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Estatísticas de Relatórios</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-border p-4 text-center">
              <FileText className="mx-auto mb-2 h-8 w-8 text-primary" />
              <p className="text-2xl font-bold text-foreground">48</p>
              <p className="text-sm text-muted-foreground">Total de relatórios</p>
            </div>
            <div className="rounded-lg border border-border p-4 text-center">
              <Calendar className="mx-auto mb-2 h-8 w-8 text-success" />
              <p className="text-2xl font-bold text-foreground">12</p>
              <p className="text-sm text-muted-foreground">Este mês</p>
            </div>
            <div className="rounded-lg border border-border p-4 text-center">
              <User className="mx-auto mb-2 h-8 w-8 text-warning" />
              <p className="text-2xl font-bold text-foreground">25</p>
              <p className="text-sm text-muted-foreground">Pacientes ativos</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reports;
