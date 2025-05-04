// src/components/forms/EventoForm.jsx
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function EventoForm() {
  const [formData, setFormData] = useState({
    nome: "",
    descricao: "",
    local: "",
    data: "",
    horario: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resposta = await fetch("http://localhost:3001/eventos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (resposta.ok) {
        alert("Evento cadastrado com sucesso!");
        setFormData({
          nome: "",
          descricao: "",
          local: "",
          data: "",
          horario: "",
        });
      } else {
        alert("Erro ao cadastrar evento.");
      }
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao conectar com o servidor.");
    }
  };

  return (
    <form className="space-y-8" onSubmit={handleSubmit}>
      {/* Seção 1: Sobre o Evento */}
      <div>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">📌 Sobre o Evento</h2>

        <div className="space-y-4">
          <div>
            <Label htmlFor="nome">Nome do Evento</Label>
            <Input
              id="nome"
              name="nome"
              placeholder="Ex: Stray Kids World Tour"
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <Label htmlFor="descricao">Descrição</Label>
            <Textarea
              id="descricao"
              name="descricao"
              placeholder="Escreva uma breve descrição do evento..."
              value={formData.descricao}
              onChange={handleChange}
              rows={4}
              required
            />
          </div>
        </div>
      </div>
      /* Seção 2: Localização e Data */
      <div>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">📍 Local e Data</h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="local">Local</Label>
            <Input
              id="local"
              name="local"
              placeholder="Ex: Allianz Parque, SP"
              value={formData.local}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <Label htmlFor="data">Data</Label>
            <Input
              id="data"
              name="data"
              type="date"
              value={formData.data}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>
      {/* Seção 3: Horário */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="horario">Horário</Label>
          <Input
            id="horario"
            name="horario"
            type="time"
            value={formData.horario}
            onChange={handleChange}
            required
          />
        </div>
      </div>
       {/* Botão de Envio */}
      <div className="flex justify-end">
       <Button
         type="submit"
         className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md"
       >
         Salvar Evento
       </Button>
      </div>
    </form>
  );
}