'use client';
import { motion } from 'framer-motion';

export default function Consultative({ onOpenModal }) {
  return (
    <section className="section-padding bg-black 
    relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-500/10 skew-x-[-15deg] translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-[#ffd700]/5 rounded-full blur-3xl opacity-30" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-orange-400 font-black tracking-[0.4em] text-[10px] uppercase mb-8 block">
              Norless
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-10 leading-[1.1] tracking-tighter uppercase">
              Atendimento{' '}
              <span className="text-yellow-400">especializado</span>
            </h2>
            <p className="text-sm md:text-lg text-yellow-400 mb-6 leading-relaxed max-w-2xl mx-auto font-medium">
              Na Norless, nossa equipe técnica especializada está pronta para fornecer suporte e garantir a
              melhor escolha de válvulas para sua aplicação.
            </p>
            <p className="text-sm md:text-base text-white/85 mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
              Garantimos soluções personalizadas para cada necessidade, com excelência no atendimento e
              compromisso com o sucesso da sua automação industrial.
            </p>

            <button
              type="button"
              onClick={onOpenModal}
              className="group relative inline-flex items-center justify-center px-10 py-5 md:px-12 md:py-6 font-black text-[11px] tracking-[0.14em] bg-yellow-400 text-black rounded-sm overflow-hidden transition-all duration-300 hover:bg-orange-400 active:scale-95 shadow-2xl uppercase border-2 border-transparent"
            >
              👉 SOLICITE SUA COTAÇÃO
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
