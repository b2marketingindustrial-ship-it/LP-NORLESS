'use client';
import { motion } from 'framer-motion';
import { Car, Package, Cpu, Wind, ShieldCheck } from 'lucide-react';

const applications = [
  { name: 'Indústrias automotivas e manufatura', Icon: Car },
  { name: 'Sistemas de embalagem automatizada', Icon: Package },
  { name: 'Equipamentos de automação industrial', Icon: Cpu },
  { name: 'Controle e distribuição de ar comprimido', Icon: Wind },
  { name: 'Segurança e controle de fluxo', Icon: ShieldCheck },
];

export default function Segments() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom text-center mb-14 md:mb-20">
        <span className="text-yellow-400 font-black tracking-[0.4em] text-[10px] uppercase mb-4 block">
          Onde atuamos
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-black mb-8 uppercase tracking-tighter">
          <span className="text-orange-400 font-black">Aplicações</span>{' '}
          <span className="text-neutral-900 font-black">industriais</span>
        </h2>
        <p className="text-sm md:text-[12px] text-black max-w-2xl mx-auto font-bold uppercase tracking-wide leading-relaxed">
          Atendemos diversos segmentos industriais com soluções personalizadas em válvulas pneumáticas
          Parker.
        </p>
      </div>

      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {applications.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className="group flex gap-5 items-start p-7 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-left"
            >
              <span className="text-orange-400 font-black text-lg shrink-0 mt-0.5">➡️</span>
              <div className="flex gap-4 flex-1 min-w-0">
                <div className="text-orange-400 p-3.5 bg-yellow-400/15 rounded-xl border border-orange-400/20 shrink-0 group-hover:bg-yellow-400/25 transition-colors">
                  <item.Icon size={28} strokeWidth={1.75} />
                </div>
                <h3 className="text-[11px] md:text-[12px] font-black text-black uppercase tracking-[0.12em] leading-snug pt-1">
                  {item.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
