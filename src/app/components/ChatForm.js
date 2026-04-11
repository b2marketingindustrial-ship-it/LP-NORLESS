"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatForm() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Olá! Para iniciar o atendimento digite seu nome" },
  ]);
  const [currentInput, setCurrentInput] = useState("");
  const [formData, setFormData] = useState({
    finalidade: "",
    nome: "",
    empresa: "",
    telefone: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const numberPattern = /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/;

  const handleSend = async () => {
    if (!currentInput.trim()) return;

    if (!formData.nome) {
      setFormData({ ...formData, nome: currentInput });
      setMessages([
        ...messages,
        { from: "user", text: currentInput },
        {
          from: "bot",
          text: `Olá ${currentInput}! Agora, qual a finalidade do seu negócio? (revenda ou varejo)`,
        },
      ]);
      setCurrentInput("");
      return;
    }

    if (!formData.finalidade) {
      setFormData({ ...formData, finalidade: currentInput });
      setMessages([
        ...messages,
        { from: "user", text: currentInput },
        { from: "bot", text: "Qual o seu WhatsApp/Telefone com DDD para contato?" },
      ]);
      setCurrentInput("");
      return;
    }

    if (!formData.telefone) {
      if (!numberPattern.test(currentInput)) {
        setMessages([
          ...messages,
          { from: "bot", text: "Número inválido. Use o formato (11) 91234-5678 ou 11912345678." },
        ]);
        return;
      }
      setFormData({ ...formData, telefone: currentInput });
      setMessages([
        ...messages,
        { from: "user", text: currentInput },
        { from: "bot", text: "Qual o nome da sua empresa?" },
      ]);
      setCurrentInput("");
      return;
    }

    if (!formData.empresa) {
      setFormData({ ...formData, empresa: currentInput });
      setMessages([
        ...messages,
        { from: "user", text: currentInput },
        { from: "bot", text: "Por favor, informe seu melhor e-mail:" },
      ]);
      setCurrentInput("");
      return;
    }

    if (!formData.email) {
      const updatedFormData = { ...formData, email: currentInput };
      setFormData(updatedFormData);
      setMessages([
        ...messages,
        { from: "user", text: currentInput },
        { from: "bot", text: "Perfeito! Nossa equipe entrará em contato em breve. Obrigado!" },
      ]);
      setSubmitted(true);
      setCurrentInput("");

      try {
        let utmData = {};
        const savedUtm = localStorage.getItem("utmData");
        if (savedUtm) {
          utmData = JSON.parse(savedUtm);
        }
        const payload = {
          event_type: "CONVERSION",
          event_family: "CDP",
          payload: {
            conversion_identifier: " [B2] ATENDIMENTO CHAT",
            name: updatedFormData.nome,
            email: updatedFormData.email,
            mobile_phone: updatedFormData.telefone,
            company_name: updatedFormData.empresa,
            cf_finality: updatedFormData.finalidade,
            traffic_source: utmData.utm_source || "",
            traffic_medium: utmData.utm_medium || "",
            traffic_campaign: utmData.utm_campaign || "",
            traffic_content: utmData.utm_content || "",
            traffic_term: utmData.utm_term || "",
          },
        };

        const res = await fetch(
          "https://api.rd.services/platform/conversions?api_key=ZbuvlkNkvmSrkbaiuNYrObuUvCDMgPRoCRgn",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          }
        );
        const result = await res.json();

        if (!res.ok) {
          console.log("Erro HTTP:", res.status);
          console.log("API Error:", result.error || result);
          return;
        }
        console.log("Lead enviado com sucesso:");
      } catch (err) {
        console.error("Erro ao enviar para o RD", err);
      }
      const message = `Olá! Meu nome é ${updatedFormData.nome} e trabalho na empresa ${updatedFormData.empresa}. Vim pelo chatbot da Norless. Gostaria de solicitar informações sobre válvulas pneumáticas Parker (${updatedFormData.finalidade}). Meu telefone é ${updatedFormData.telefone} e meu e-mail é ${updatedFormData.email}.`;
      window.open(`https://wa.me/11984471850?text=${encodeURIComponent(message)}`);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border flex flex-col h-[480px] overflow-hidden">
      <div className="bg-yellow-500 px-5 py-4 flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0">
          <span className="text-black font-bold text-sm">N</span>
        </div>
        <div>
          <p className="text-black font-semibold text-sm">Especialista Norless</p>
          <p className="text-black text-xs font-medium">Responde em minutos</p>
        </div>
        <div className="ml-auto flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
          <span className="text-yellow-400 text-xs font-bold">Online</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50">
        <AnimatePresence>
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
            >
              {msg.from === "bot" && (
                <div className="w-7 h-7 
                rounded-full 
                bg-yellow-400
                flex items-center justify-center text-black text-xs font-bold mr-2">
                  N
                </div>
              )}
              <div
                className={`max-w-[75%] px-4 py-2 rounded-2xl text-sm leading-relaxed ${
                  msg.from === "user"
                    ? "bg-yellow-400 text-black rounded-br-sm font-medium"
                    : "bg-white text-black shadow-sm border border-gray-200 rounded-bl-sm"
                }`}
              >
                {msg.text}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {!submitted ? (
        <div className="p-3 bg-white border-t border-gray-200 flex gap-2">
          <input
            type="text"
            className="flex-1 border border-gray-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 text-black placeholder-gray-400"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Digite sua resposta..."
          />
          <button
            type="button"
            onClick={handleSend}
            disabled={!currentInput.trim()}
            className="bg-orange-400 hover:bg-yellow-400 disabled:opacity-40 text-black rounded-xl px-4 py-2 transition-colors font-semibold text-sm"
          >
            Enviar
          </button>
        </div>
      ) : (
        <div className="p-4 bg-green-50 border-t border-green-100 text-center">
          <p className="text-green-700 text-sm font-medium">✓ Mensagem enviada com sucesso!</p>
          <p className="text-green-600 text-xs mt-0.5">Em breve nossa equipe entrará em contato.</p>
        </div>
      )}
    </div>
  );
}
