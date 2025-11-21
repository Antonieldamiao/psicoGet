import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ReportEditor = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { toast } = useToast();
  const isEditing = !!id;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: isEditing ? "Relatório atualizado!" : "Relatório criado!",
      description: "O relatório foi salvo com sucesso.",
    });
    navigate("/relatorios");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => navigate("/relatorios")}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            {isEditing ? "Editar Relatório" : "Novo Relatório"}
          </h1>
          <p className="text-muted-foreground">Registre as informações da sessão</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Informações da Sessão</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="patient">Paciente</Label>
                <Select required defaultValue={isEditing ? "1" : undefined}>
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
                <Label htmlFor="sessionNumber">Número da Sessão</Label>
                <Input 
                  id="sessionNumber" 
                  type="text" 
                  placeholder="Ex: Sessão #5"
                  defaultValue={isEditing ? "Sessão #5" : ""}
                  required 
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="date">Data da Sessão</Label>
                <Input 
                  id="date" 
                  type="date" 
                  defaultValue={isEditing ? "2025-11-20" : ""}
                  required 
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="duration">Duração (minutos)</Label>
                <Input 
                  id="duration" 
                  type="number" 
                  defaultValue="50" 
                  required 
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="summary">Resumo da Sessão</Label>
              <Textarea 
                id="summary" 
                placeholder="Breve resumo do que foi trabalhado na sessão..."
                rows={3}
                defaultValue={isEditing ? "Paciente apresentou melhora significativa na ansiedade." : ""}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="observations">Observações Clínicas</Label>
              <Textarea 
                id="observations" 
                placeholder="Observações detalhadas sobre o estado do paciente, comportamentos, emoções..."
                rows={5}
                defaultValue={isEditing ? "Paciente demonstrou maior consciência dos gatilhos emocionais..." : ""}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="techniques">Técnicas Utilizadas</Label>
              <Textarea 
                id="techniques" 
                placeholder="Descreva as técnicas terapêuticas aplicadas durante a sessão..."
                rows={4}
                defaultValue={isEditing ? "Técnicas de respiração diafragmática, reestruturação cognitiva..." : ""}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="progress">Progresso Terapêutico</Label>
              <Select defaultValue={isEditing ? "positivo" : undefined}>
                <SelectTrigger id="progress">
                  <SelectValue placeholder="Avalie o progresso" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="excelente">Excelente</SelectItem>
                  <SelectItem value="positivo">Positivo</SelectItem>
                  <SelectItem value="estavel">Estável</SelectItem>
                  <SelectItem value="atencao">Necessita Atenção</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="plan">Plano para Próxima Sessão</Label>
              <Textarea 
                id="plan" 
                placeholder="Planejamento e objetivos para o próximo encontro..."
                rows={4}
                defaultValue={isEditing ? "Continuar o trabalho com técnicas cognitivas..." : ""}
              />
            </div>

            <div className="flex gap-3 justify-end">
              <Button type="button" variant="outline" onClick={() => navigate("/relatorios")}>
                Cancelar
              </Button>
              <Button type="submit" className="gap-2">
                <Save className="h-4 w-4" />
                Salvar Relatório
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
};

export default ReportEditor;
