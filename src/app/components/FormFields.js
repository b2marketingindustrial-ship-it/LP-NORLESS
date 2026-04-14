'use client';
import { useState } from 'react';

export default function FormFields({ formData, handleChange, handleSubmit, loading, error, sucessMsg, showConsent = false, buttonText = "Enviar Solicitação" }) {
  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          name="name"
          value={formData.name}
          placeholder="Nome"
          required
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-black placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
          onChange={handleChange}
        />

        <input
          name="company"
          value={formData.company}
          placeholder="Empresa"
          required
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-black placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
          onChange={handleChange}
        />

        <input
          name="product"
          value={formData.product}
          placeholder="Produto ou linha de interesse (ex.: válvulas direcionais)"
          required
          className="sm:col-span-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-black placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
          onChange={handleChange}
        />

        <input
          name="email"
          type="email"
          value={formData.email}
          placeholder="Email"
          required
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-black placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
          onChange={handleChange}
        />

        <input
          name="phone"
          value={formData.phone}
          placeholder="Telefone"
          required
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-black placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
          onChange={handleChange}
        />
      </div>

      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          id="consent"
          required
          className="mt-1 w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-400"
        />
        <label htmlFor="consent" className="text-sm text-neutral-900">
          Concordo em receber comunicações e estou ciente da{' '}
          <a href="#" className="text-orange-400 font-semibold hover:text-yellow-500">
            Política de Privacidade
          </a>
        </label>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 pt-4">
        <button
          type="submit"
          disabled={loading}
          className="flex-1 bg-yellow-400 text-black font-extrabold text-base md:text-lg tracking-tight py-4 rounded-xl transition-all duration-300 hover:bg-orange-400 hover:scale-[1.02]"
        >
          {loading ? "Enviando..." : "Enviar Solicitação"}
        </button>
        <p className="text-xs text-slate-400 text-center flex items-center justify-center gap-1">
          {error && <span className="text-red-500">Erro ao enviar formulário</span>}
          {sucessMsg && <span className="text-green-500">Formulário enviado com sucesso</span>}
        </p>
      </div>
    </form>
  );
}