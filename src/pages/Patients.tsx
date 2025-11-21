import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Plus, Phone, Mail, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Patients = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const patients = [
    {
      id: 1,
      name: "Maria Silva",
      email: "maria.silva@email.com",
      phone: "(11) 98765-4321",
      nextAppointment: "25/11/2025 - 09:00",
      status: "Ativo",
    },
    {
      id: 2,
      name: "João Santos",
      email: "joao.santos@email.com",
      phone: "(11) 98765-1234",
      nextAppointment: "26/11/2025 - 10:30",
      status: "Ativo",
    },
    {
      id: 3,
      name: "Ana Costa",
      email: "ana.costa@email.com",
      phone: "(11) 98765-5678",
      nextAppointment: "27/11/2025 - 14:00",
      status: "Ativo",
    },
  ];

  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const goTo = (e: React.FormEvent, id:number) => {
    e.preventDefault();
    navigate("/pacientes/"+id);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Pacientes</h1>
          <p className="text-muted-foreground">Gerencie seus pacientes</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Novo Paciente
        </Button>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Buscar paciente..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredPatients.map((patient) => (
          <Card key={patient.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <span className="text-lg font-semibold">
                      {patient.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">
                      {patient.name}
                    </h3>
                    <span className="inline-flex items-center rounded-full bg-success/10 px-2 py-0.5 text-xs font-medium text-success">
                      {patient.status}
                    </span>
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    <span>{patient.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    <span>{patient.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{patient.nextAppointment}</span>
                  </div>
                </div>

                <Button onClick={(e) => goTo(e, patient.id)} variant="outline" className="w-full">
                  Ver Detalhes
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Patients;
