'use client';

import { motion } from 'framer-motion';
import { Check, Gem, Rocket } from 'lucide-react';

const DIFFERENTIALS = [
  'Controle preciso do fluxo',
  'Alta resistência a vibrações e pressões extremas',
  'Durabilidade e longa vida útil',
  'Design inovador para instalação rápida',
  'Eficiência energética, reduzindo o custo operacional',
];

const PILLARS = [
  {
    title: 'Durabilidade e resistência',
    text: 'Nossas válvulas são projetadas para resistir ao desgaste e garantir alto desempenho durante longos períodos de uso.',
    Icon: Gem,
  },
  {
    title: 'Desempenho superior',
    text: 'Controle de fluxo otimizado para garantir máxima eficiência no seu sistema pneumático.',
    Icon: Rocket,
  },
];

export default function WhyParker() {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-14 md:mb-20"
        >
          <span className="text-yellow-400 font-black tracking-[0.4em] text-[10px] uppercase mb-4 block">
            Tecnologia Parker
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-black mb-8 uppercase tracking-tighter leading-[1.1]">
            Por que escolher as{' '}
            <span className="text-orange-400 font-black">válvulas pneumáticas </span>
            <span className="text-yellow-400 font-black">Parker?</span>
          </h2>
          <p className="text-sm md:text-base text-neutral-900 font-medium leading-relaxed">
            A Parker é líder mundial em soluções para automação e controle de sistemas pneumáticos. Nossas
            válvulas são projetadas para proporcionar eficiência e confiabilidade, mantendo o desempenho
            superior em ambientes industriais exigentes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="max-w-5xl mx-auto mb-16 md:mb-20"
        >
          {/* Bloco externo: blur + camadas suaves */}
          <div className="relative overflow-hidden rounded-[1.75rem] md:rounded-[2rem] border border-slate-200/70 bg-gradient-to-br from-slate-100/90 via-white/50 to-amber-50/40 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.12)]">
            <div
              className="pointer-events-none absolute -top-28 -right-20 h-56 w-56 rounded-full bg-yellow-400/25 blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-24 -left-16 h-48 w-48 rounded-full bg-orange-400/20 blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/40 blur-3xl"
              aria-hidden
            />

            <div className="relative backdrop-blur-xl bg-white/35 p-6 md:p-8 lg:p-10">
              <h3 className="text-center text-base md:text-lg font-black text-black uppercase tracking-tight mb-6 md:mb-8">
                Diferenciais das{' '}
                <span className="text-orange-400">válvulas pneumáticas</span>{' '}
                <span className="text-yellow-400">Parker</span>
              </h3>

              <div className="grid grid-cols-1 
              sm:grid-cols-2 
              lg:grid-cols-5 gap-3 md:gap-4
              ">
                {DIFFERENTIALS.map((item, idx) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="group flex gap-3 
                    rounded-xl 
                    border 
                    border-white/80 
                    bg-white/80 b 
                    px-3.5 py-3.5 
                    shadow-xl backdrop-blur-md 
                    ring-1 ring-slate-200/40 
                    transition-all duration-300 
                    hover:border-orange-400/35 
                    hover:bg-white/85 hover:shadow-md 
                    hover:ring-orange-400/20 md:flex-col 
                    md:items-start md:gap-2.5 
                    md:px-4 md:py-8"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-yellow-400/35 shadow-inner">
                      <Check size={15} strokeWidth={3} className="text-orange-400" />
                    </span>
                    <span className="text-[11px] font-bold uppercase leading-snug tracking-wide text-black md:text-[12px]">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 
        md:grid-cols-2 
        gap-8 md:gap-10 
        max-w-5xl mx-auto
                  ">
          {PILLARS.map((pillar, idx) => (
            <motion.article
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + idx * 0.08 }}
              className="relative 
              rounded-3xl 
              border 
              border-slate-100 
              bg-gradient-to-br from-[#003366] to-[#004a99] 
              p-8 md:p-10 text-white 
              overflow-hidden shadow-lg
              shadow-[0_24px_60px_-15px_rgba(0,51,102,0.45)]"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#ffd700]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10 flex gap-4 mb-5">
                <span className="text-yellow-400 text-xl font-black">🔹</span>
                <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm">
                  <pillar.Icon size={28} strokeWidth={2} className="text-orange-400" />
                </div>
              </div>
              <h3 className="relative z-10 text-lg md:text-xl font-black uppercase tracking-tight mb-4 text-white">
                {pillar.title}
              </h3>
              <p className="relative z-10 text-sm text-white/90 leading-relaxed font-medium">
                {pillar.text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
