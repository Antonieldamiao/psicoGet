import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ArrowLeft, Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const NewAppointment = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [date, setDate] = useState<Date>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Agendamento criado!",
      description: "O agendamento foi salvo com sucesso.",
    });
    navigate("/agendamentos");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => navigate("/agendamentos")}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold text-foreground">Novo Agendamento</h1>
          <p className="text-muted-foreground">Agende uma nova consulta</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Informações do Agendamento</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="patient">Paciente</Label>
                <Select required>
                  <SelectTrigger id="patient">
                    <SelectValue placeholder="Selecione o paciente" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Maria Silva</SelectItem>
                    <SelectItem value="2">João Santos</SelectItem>
                    <SelectItem value="3">Ana Costa</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="type">Tipo de Consulta</Label>
                <Select required>
                  <SelectTrigger id="type">
                    <SelectValue placeholder="Selecione o tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="inicial">Consulta Inicial</SelectItem>
                    <SelectItem value="retorno">Retorno</SelectItem>
                    <SelectItem value="avaliacao">Avaliação</SelectItem>
                    <SelectItem value="terapia">Terapia</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label>Data</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP", { locale: ptBR }) : "Selecione a data"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      locale={ptBR}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <Label htmlFor="time">Horário</Label>
                <Select required>
                  <SelectTrigger id="time">
                    <SelectValue placeholder="Selecione o horário" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="08:00">08:00</SelectItem>
                    <SelectItem value="09:00">09:00</SelectItem>
                    <SelectItem value="10:00">10:00</SelectItem>
                    <SelectItem value="11:00">11:00</SelectItem>
                    <SelectItem value="14:00">14:00</SelectItem>
                    <SelectItem value="15:00">15:00</SelectItem>
                    <SelectItem value="16:00">16:00</SelectItem>
                    <SelectItem value="17:00">17:00</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="duration">Duração (minutos)</Label>
              <Input id="duration" type="number" defaultValue="50" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Observações</Label>
              <Textarea 
                id="notes" 
                placeholder="Adicione observações sobre o agendamento..."
                rows={4}
              />
            </div>

            <div className="flex gap-3 justify-end">
              <Button type="button" variant="outline" onClick={() => navigate("/agendamentos")}>
                Cancelar
              </Button>
              <Button type="submit">
                Criar Agendamento
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
};

export default NewAppointment;
