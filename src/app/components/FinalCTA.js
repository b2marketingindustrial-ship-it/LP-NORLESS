'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function FinalCTA() {
  const scrollToForm = () => {
    document.getElementById('orcamento')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="section-padding bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(90vw,640px)] h-[min(90vw,640px)] bg-[#004a99]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-black text-black mb-6 leading-[1.1] tracking-tighter uppercase">
            Solicite seu orçamento personalizado para{' '}
            <span className="text-yellow-400 font-black">válvulas pneumáticas </span>
            <span className="text-orange-400 font-black">Parker</span>
          </h2>
          <p className="text-sm md:text-base text-neutral-900 mb-10 leading-relaxed font-medium">
            Preencha o formulário abaixo para receber uma proposta feita sob medida para sua empresa. Nossa
            equipe retornará rapidamente com a solução ideal para o controle de fluxo em seus sistemas
            pneumáticos.
          </p>

          <button
            type="button"
            onClick={scrollToForm}
            className="inline-flex items-center gap-2 px-9 py-4 md:px-10 md:py-5 font-black text-[11px] tracking-[0.12em] bg-yellow-400 text-black rounded-sm hover:bg-orange-400 transition-colors shadow-xl uppercase border-2 border-transparent"
          >
            👉 SOLICITE SUA COTAÇÃO
            <ArrowDown size={18} strokeWidth={2.5} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
