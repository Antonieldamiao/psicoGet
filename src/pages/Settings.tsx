import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Save, User, Clock, Bell, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Settings = () => {
  const { toast } = useToast();
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [reminderNotifications, setReminderNotifications] = useState(true);

  const handleSave = () => {
    toast({
      title: "Configurações salvas!",
      description: "Suas alterações foram salvas com sucesso.",
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Configurações</h1>
        <p className="text-muted-foreground">Gerencie suas preferências e informações</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList>
          <TabsTrigger value="profile" className="gap-2">
            <User className="h-4 w-4" />
            Perfil
          </TabsTrigger>
          <TabsTrigger value="schedule" className="gap-2">
            <Clock className="h-4 w-4" />
            Horários
          </TabsTrigger>
          <TabsTrigger value="notifications" className="gap-2">
            <Bell className="h-4 w-4" />
            Notificações
          </TabsTrigger>
          <TabsTrigger value="security" className="gap-2">
            <Shield className="h-4 w-4" />
            Segurança
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Informações Profissionais</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input id="name" defaultValue="Dr. Psicólogo Silva" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="crp">CRP</Label>
                  <Input id="crp" defaultValue="06/123456" />
                </div>
              </div>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" type="email" defaultValue="psicologo@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input id="phone" defaultValue="(11) 98765-4321" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Endereço do Consultório</Label>
                <Input id="address" defaultValue="Rua das Flores, 123 - São Paulo, SP" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Biografia Profissional</Label>
                <Textarea 
                  id="bio" 
                  rows={4}
                  defaultValue="Psicólogo clínico com especialização em TCC..."
                />
              </div>

              <div className="flex justify-end">
                <Button onClick={handleSave} className="gap-2">
                  <Save className="h-4 w-4" />
                  Salvar Alterações
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="schedule" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Horários de Atendimento</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                {["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira"].map((day) => (
                  <div key={day} className="flex items-center gap-4">
                    <div className="w-40">
                      <span className="font-medium text-foreground">{day}</span>
                    </div>
                    <div className="flex items-center gap-2 flex-1">
                      <Input type="time" defaultValue="08:00" className="w-32" />
                      <span className="text-muted-foreground">às</span>
                      <Input type="time" defaultValue="18:00" className="w-32" />
                    </div>
                    <Switch defaultChecked />
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <Label htmlFor="sessionDuration">Duração Padrão da Sessão (minutos)</Label>
                <Input id="sessionDuration" type="number" defaultValue="50" className="w-32" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="interval">Intervalo Entre Sessões (minutos)</Label>
                <Input id="interval" type="number" defaultValue="10" className="w-32" />
              </div>

              <div className="flex justify-end">
                <Button onClick={handleSave} className="gap-2">
                  <Save className="h-4 w-4" />
                  Salvar Horários
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Preferências de Notificações</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="font-medium text-foreground">E-mail</p>
                  <p className="text-sm text-muted-foreground">
                    Receber notificações por e-mail
                  </p>
                </div>
                <Switch checked={emailNotifications} onCheckedChange={setEmailNotifications} />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="font-medium text-foreground">SMS</p>
                  <p className="text-sm text-muted-foreground">
                    Receber notificações por SMS
                  </p>
                </div>
                <Switch checked={smsNotifications} onCheckedChange={setSmsNotifications} />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="font-medium text-foreground">Lembretes de Consulta</p>
                  <p className="text-sm text-muted-foreground">
                    Enviar lembretes automáticos aos pacientes
                  </p>
                </div>
                <Switch checked={reminderNotifications} onCheckedChange={setReminderNotifications} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="reminderTime">Enviar lembretes com antecedência de:</Label>
                <Input id="reminderTime" type="number" defaultValue="24" className="w-32" />
                <p className="text-sm text-muted-foreground">horas antes da consulta</p>
              </div>

              <div className="flex justify-end">
                <Button onClick={handleSave} className="gap-2">
                  <Save className="h-4 w-4" />
                  Salvar Preferências
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Segurança da Conta</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="currentPassword">Senha Atual</Label>
                <Input id="currentPassword" type="password" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="newPassword">Nova Senha</Label>
                <Input id="newPassword" type="password" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirmar Nova Senha</Label>
                <Input id="confirmPassword" type="password" />
              </div>

              <div className="flex justify-end">
                <Button onClick={handleSave} className="gap-2">
                  <Save className="h-4 w-4" />
                  Alterar Senha
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Privacidade de Dados</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="font-medium text-foreground">Backup Automático</p>
                  <p className="text-sm text-muted-foreground">
                    Realizar backup diário dos dados
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="font-medium text-foreground">Autenticação em Dois Fatores</p>
                  <p className="text-sm text-muted-foreground">
                    Adicionar camada extra de segurança
                  </p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
