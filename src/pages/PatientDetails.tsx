import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Mail, Phone, Calendar, FileText, Edit } from "lucide-react";
import { useEffect, useState } from "react";

const PatientDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);

  const [patient, setPatient] = useState({
    id: id,
    name: "Maria Silva",
    email: "maria.silva@email.com",
    phone: "(11) 98765-4321",
    birthDate: "15/03/1985",
    cpf: "123.456.789-00",
    address: "Rua das Flores, 123 - São Paulo, SP",
    emergencyContact: "João Silva - (11) 98765-1234",
    observations: "Paciente com histórico de ansiedade generalizada",
  });

  const list_patient = [
    {
    id: 1,
    name: "Maria Silva",
    email: "maria.silva@email.com",
    phone: "(11) 98765-4321",
    birthDate: "15/03/1985",
    cpf: "123.456.789-00",
    address: "Rua das Flores, 123 - São Paulo, SP",
    emergencyContact: "João Silva - (11) 98765-1234",
    observations: "Paciente com histórico de ansiedade generalizada",
  }, 
  {
    id: 2,
    name: "João Santos",
    email: "joao.santos@email.com",
    phone: "(11) 98765-1234",
    birthDate: "15/12/2000",
    cpf: "000.000.000.15",
    address: "Rua das das almas, 123 - Bom Jesus - PB",
    emergencyContact: "",
    observations: "Paciente com TDAH",
  }, 
   {
    id: 3,
    name: "Ana Costa",
    email: "ana.costa@email.com",
    phone: "(11) 98765-5678",
    birthDate: "19/01/200",
    cpf: "000.000.000.15",
    address: "Rua projetada, 12 - Joao pessoa - PB",
    emergencyContact: "",
    observations: "Paciente com TEA",
  }
  ]

  const sessions = [
    {
      id: 1,
      date: "20/11/2025",
      type: "Sessão #5",
      notes: "Paciente apresentou melhora significativa",
    },
    {
      id: 2,
      date: "13/11/2025",
      type: "Sessão #4",
      notes: "Trabalho focado em técnicas cognitivas",
    },
    {
      id: 3,
      date: "06/11/2025",
      type: "Sessão #3",
      notes: "Discussão sobre gatilhos emocionais",
    },
  ];

  const appointments = [
    { id: 1, date: "25/11/2025", time: "09:00", status: "Confirmado" },
    { id: 2, date: "02/12/2025", time: "09:00", status: "Agendado" },
  ];

  useEffect(() => {
    list_patient.map((p) => {
      if(p.id === Number(id)){
          setPatient(p)
      }
    })
    
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/pacientes")}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              {patient.name}
            </h1>
            <p className="text-muted-foreground">
              Dados do paciente e histórico
            </p>
          </div>
        </div>
        <Button onClick={() => setIsEditing(!isEditing)} className="gap-2">
          <Edit className="h-4 w-4" />
          {isEditing ? "Salvar" : "Editar"}
        </Button>
      </div>

      <Tabs defaultValue="dados" className="space-y-6">
        <TabsList>
          <TabsTrigger value="dados">Dados Pessoais</TabsTrigger>
          <TabsTrigger value="historico">Histórico de Sessões</TabsTrigger>
          <TabsTrigger value="agendamentos">Agendamentos</TabsTrigger>
        </TabsList>

        <TabsContent value="dados" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Informações Pessoais</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input id="name" value={patient.name} disabled={!isEditing} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="birthDate">Data de Nascimento</Label>
                  <Input
                    id="birthDate"
                    value={patient.birthDate}
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cpf">CPF</Label>
                  <Input id="cpf" value={patient.cpf} disabled={!isEditing} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input
                    id="phone"
                    value={patient.phone}
                    disabled={!isEditing}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  value={patient.email}
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Endereço</Label>
                <Input
                  id="address"
                  value={patient.address}
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="emergency">Contato de Emergência</Label>
                <Input
                  id="emergency"
                  value={patient.emergencyContact}
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="observations">Observações</Label>
                <Textarea
                  id="observations"
                  value={patient.observations}
                  disabled={!isEditing}
                  rows={4}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="historico" className="space-y-4">
          {sessions.map((session) => (
            <Card
              key={session.id}
              className="hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <CardTitle className="text-lg">{session.type}</CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{session.date}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Ver Relatório
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{session.notes}</p>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="agendamentos" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Próximos Agendamentos</CardTitle>
                <Button size="sm">Novo Agendamento</Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {appointments.map((apt) => (
                <div
                  key={apt.id}
                  className="flex items-center justify-between rounded-lg border border-border p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Calendar className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        {apt.date} às {apt.time}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Status: {apt.status}
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Detalhes
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PatientDetails;
