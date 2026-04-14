'use client';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Car, Package, Cpu, Wind, ShieldCheck } from 'lucide-react';

const applications = [
  { name: 'Indústrias automotivas e manufatura', Icon: Car },
  { name: 'Sistemas de embalagem automatizada', Icon: Package },
  { name: 'Equipamentos de automação industrial', Icon: Cpu },
  { name: 'Controle e distribuição de ar comprimido', Icon: Wind },
  { name: 'Segurança e controle de fluxo', Icon: ShieldCheck },
];

export default function Segments() {
  const scrollerRef = useRef(null);

  const scrollByDir = (direction) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector('[data-segment-card]');
    const step = card ? card.offsetWidth + 16 : Math.min(el.clientWidth * 0.75, 320);
    el.scrollBy({ left: direction * step, behavior: 'smooth' });
  };

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
          Atendemos diversos segmentos industriais com soluções personalizadas em válvulas pneumáticas Parker.
        </p>
      </div>

      <div className="container-custom">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 hidden md:flex items-center pl-2">
            <button
              type="button"
              onClick={() => scrollByDir(-1)}
              className="h-11 w-11 flex items-center justify-center rounded-full bg-white text-black shadow-md border border-slate-200 hover:bg-yellow-400 hover:border-yellow-400 transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft size={20} strokeWidth={2.5} />
            </button>
          </div>

          <div className="absolute inset-y-0 right-0 hidden md:flex items-center pr-2">
            <button
              type="button"
              onClick={() => scrollByDir(1)}
              className="h-11 w-11 flex items-center justify-center rounded-full bg-white text-black shadow-md border border-slate-200 hover:bg-yellow-400 hover:border-yellow-400 transition-colors"
              aria-label="Próximo"
            >
              <ChevronRight size={20} strokeWidth={2.5} />
            </button>
          </div>

          <div
            ref={scrollerRef}
            className="min-w-0 flex gap-4 md:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory py-2 pb-4 md:px-12 [scrollbar-width:thin] [scrollbar-color:#cbd5e1_transparent]"
          >
          {applications.map((item, idx) => (
            <motion.div
              key={item.name}
              data-segment-card
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className="snap-start shrink-0 w-[min(100%,260px)] sm:w-[300px] p-6 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="text-orange-400 p-3.5 bg-yellow-400/15 rounded-xl border border-orange-400/20">
                  <item.Icon size={28} strokeWidth={1.75} />
                </div>
                <span className="text-orange-400 font-black text-lg">➡️</span>
              </div>
              <h3 className="text-[11px] md:text-[12px] font-black text-black uppercase tracking-[0.12em] leading-snug">
                {item.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
  );
}
