'use client';

import { motion } from 'framer-motion';
import { BadgeCheck, Users, Handshake, Headphones } from 'lucide-react';

const REASONS = [
  {
    title: 'Distribuidor oficial Parker',
    text: 'Garantia de qualidade e procedência em todas as soluções Parker.',
    Icon: BadgeCheck,
  },
  {
    title: 'Equipe especializada',
    text: 'Profissionais qualificados para indicar a melhor solução para sua indústria.',
    Icon: Users,
  },
  {
    title: 'Atendimento personalizado',
    text: 'Soluções sob medida para a sua aplicação, com orçamento acessível e ideal.',
    Icon: Handshake,
  },
  {
    title: 'Suporte completo',
    text: 'Acompanhamento técnico desde a escolha do produto até a instalação e manutenção.',
    Icon: Headphones,
  },
];

export default function WhyNorless() {
  return (
    <section className="section-padding bg-white border-t border-slate-100">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14 md:mb-20"
        >
          <span className="text-orange-400 font-black tracking-[0.4em] text-[10px] uppercase mb-4 block">
            Norless
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-black uppercase tracking-tighter">
            Por que escolher a <span className="text-yellow-400 font-black">Norless?</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {REASONS.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className="group flex flex-col h-full p-8 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:border-[#004a99]/10 transition-all duration-400"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-orange-400 font-black text-lg">✔</span>
                <div className="p-2.5 rounded-xl bg-white text-black shadow-sm group-hover:bg-yellow-400/25 transition-colors">
                  <item.Icon size={22} strokeWidth={2.2} className="text-orange-400" />
                </div>
              </div>
              <h3 className="text-[12px] md:text-[13px] font-black text-black uppercase tracking-wide mb-3 leading-snug">
                {item.title}
              </h3>
              <p className="text-[11px] md:text-[12px] text-neutral-900 font-bold uppercase tracking-wide leading-relaxed flex-1">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
