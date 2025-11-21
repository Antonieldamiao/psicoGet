import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  DollarSign, 
  TrendingUp, 
  Calendar, 
  Download,
  Plus,
  CheckCircle,
  XCircle,
  Clock
} from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Financial = () => {
  const [selectedMonth, setSelectedMonth] = useState("11");

  const summary = {
    totalReceived: "R$ 8.450,00",
    pending: "R$ 2.100,00",
    scheduled: "R$ 3.500,00",
    sessions: 24,
  };

  const transactions = [
    {
      id: 1,
      patient: "Maria Silva",
      date: "20/11/2025",
      value: "R$ 200,00",
      status: "paid",
      method: "PIX",
    },
    {
      id: 2,
      patient: "João Santos",
      date: "19/11/2025",
      value: "R$ 200,00",
      status: "pending",
      method: "Cartão",
    },
    {
      id: 3,
      patient: "Ana Costa",
      date: "18/11/2025",
      value: "R$ 200,00",
      status: "paid",
      method: "Dinheiro",
    },
    {
      id: 4,
      patient: "Pedro Oliveira",
      date: "17/11/2025",
      value: "R$ 200,00",
      status: "overdue",
      method: "PIX",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "paid":
        return <CheckCircle className="h-5 w-5 text-success" />;
      case "pending":
        return <Clock className="h-5 w-5 text-warning" />;
      case "overdue":
        return <XCircle className="h-5 w-5 text-destructive" />;
      default:
        return null;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "paid":
        return "Pago";
      case "pending":
        return "Pendente";
      case "overdue":
        return "Atrasado";
      default:
        return status;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Gestão Financeira</h1>
          <p className="text-muted-foreground">Controle de receitas e pagamentos</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Registrar Pagamento
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Recebido</p>
                <p className="text-2xl font-bold text-foreground">{summary.totalReceived}</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-success/10">
                <DollarSign className="h-6 w-6 text-success" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Pendente</p>
                <p className="text-2xl font-bold text-foreground">{summary.pending}</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-warning/10">
                <Clock className="h-6 w-6 text-warning" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Agendado</p>
                <p className="text-2xl font-bold text-foreground">{summary.scheduled}</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Sessões</p>
                <p className="text-2xl font-bold text-foreground">{summary.sessions}</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                <TrendingUp className="h-6 w-6 text-accent" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Transações</CardTitle>
            <div className="flex items-center gap-3">
              <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="11">Novembro 2025</SelectItem>
                  <SelectItem value="10">Outubro 2025</SelectItem>
                  <SelectItem value="09">Setembro 2025</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="sm" className="gap-2">
                <Download className="h-4 w-4" />
                Exportar
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between rounded-lg border border-border p-4"
              >
                <div className="flex items-center gap-4">
                  {getStatusIcon(transaction.status)}
                  <div>
                    <p className="font-medium text-foreground">{transaction.patient}</p>
                    <p className="text-sm text-muted-foreground">
                      {transaction.date} • {transaction.method}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-foreground">{transaction.value}</p>
                  <p className="text-sm text-muted-foreground">
                    {getStatusText(transaction.status)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Receita Mensal</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Janeiro</span>
                <span className="font-semibold text-foreground">R$ 7.200,00</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Fevereiro</span>
                <span className="font-semibold text-foreground">R$ 8.100,00</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Março</span>
                <span className="font-semibold text-foreground">R$ 7.800,00</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Métodos de Pagamento</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">PIX</span>
                <span className="font-semibold text-foreground">65%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Cartão</span>
                <span className="font-semibold text-foreground">25%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Dinheiro</span>
                <span className="font-semibold text-foreground">10%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Financial;
