// src/pages/eventos/CadastroEvento.jsx
import React from "react";
import EventoForm from "../../components/forms/EventoForm";
import { Card, CardContent } from "@/components/ui/card";

export default function CadastroEvento() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <Card className="w-full max-w-2xl">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-4">Cadastro de Evento</h2>
          <EventoForm />
        </CardContent>
      </Card>
    </div>
  );
}
