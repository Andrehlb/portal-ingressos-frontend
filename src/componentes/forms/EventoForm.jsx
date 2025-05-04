// src/pages/eventos/CadastroEvento.jsx
import React from "react";
import EventoForm from "../../components/forms/EventoForm.jsx";
import { Card } from "../../components/ui/card";

export default function CadastroEvento() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar Configuração à la Sympla */}
      <aside className="w-1/4 bg-white border-r p-6 hidden md:block">
        <h3 className="text-lg font-semibold mb-4">Configurações Rápidas</h3>
        <div className="space-y-2">
          <button className="border rounded px-3 py-1 text-sm hover:bg-blue-50">+ CPF / CNPJ</button>
          <button className="border rounded px-3 py-1 text-sm hover:bg-blue-50">+ Endereço</button>
          <button className="border rounded px-3 py-1 text-sm hover:bg-blue-50">+ Data / Hora</button>
          <button className="border rounded px-3 py-1 text-sm hover:bg-blue-50">+ Termo</button>
        </div>
      </aside>

      {/* Conteúdo principal */}
      <main className="flex-1 p-6">
        <Card className="max-w-4xl mx-auto p-10 bg-white rounded-2xl shadow-lg border border-gray-200">
          <EventoForm />
        </Card>
      </main>
    </div>
  );
}
