'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ChatForm from '../components/ChatForm';

export default function Hero({ onOpenModal }) {
  return (
    <section id="hero" className="relative min-h-[70vh] 
    flex items-center pt-28 pb-12 overflow-hidden bg-black/70">
      {/* Background Section */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src="/bg-hero.webp"
          alt="Automação pneumática industrial"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[80%_center] opacity-25 scale-105"
        />
      </div>

      {/* Content Section */}
      <div className="relative z-20 w-full 
      max-w-7xl mx-auto px-6 lg:px-16 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 
        gap-10 lg:gap-14 items-center">
          {/* Left Side Content */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="
              inline-block px-4 py-1 mb-6
              text-[10px] font-black
              tracking-[0.4em] uppercase
              bg-yellow-400 text-black
              rounded-sm
            ">
              NORLESS · PARKER
            </span>

            <h1 className={`
              text-4xl md:text-5xl lg:text-[46px]
              font-black leading-[1.08] mb-6
              tracking-tighter uppercase
              text-white
            `}>
              Soluções em{' '}
              <span className="text-yellow-400">válvulas pneumáticas </span>
              <span className="text-orange-400">Parker</span>
            </h1>

            <p className="
              text-base md:text-lg
              text-yellow-400 font-semibold
              mb-4 max-w-xl
              leading-snug
            ">
              Desempenho e confiabilidade para sua automação industrial.
            </p>

            <p className="
              text-sm md:text-[15px]
              text-white/85 mb-10
              leading-relaxed max-w-xl
              font-medium
            ">
              Na <span className="text-orange-400 font-semibold">Norless</span>, você encontra a linha completa de
              válvulas pneumáticas <span className="text-yellow-400 font-semibold">Parker</span>, projetada para
              garantir controle preciso, flexibilidade e eficiência em sistemas industriais. Com tecnologia de
              ponta, nossas válvulas atendem às necessidades mais exigentes de controle de fluxo de ar e
              movimentação de sistemas pneumáticos.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 items-center">
              <button
                type="button"
                onClick={onOpenModal}
                className="
                  group relative inline-flex
                  items-center justify-center
                  px-9 py-4 md:px-10 md:py-5
                  font-black text-[11px]
                  tracking-[0.14em]
                  bg-yellow-400 text-black
                  rounded-sm overflow-hidden
                  transition-all duration-300
                  hover:bg-orange-400
                  active:scale-95
                  shadow-xl uppercase
                  border-2 border-transparent
                "
              >
                <span className="relative z-10">👉 SOLICITE SUA COTAÇÃO</span>
              </button>
              <a
                href="#produtos"
                className="
                  text-[11px] font-black
                  uppercase tracking-[0.12em]
                  text-yellow-400
                  hover:text-orange-400
                  transition-colors
                  underline-offset-4 hover:underline
                "
              >
                Ver linha de produtos
              </a>
            </div>
          </motion.div>

          {/* Right Side ChatForm - Desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, x: 24 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="hidden lg:block relative w-full max-w-md mx-auto lg:mx-0 lg:ml-auto"
          >
            <div className="absolute -inset-3 bg-[#ffd700]/15 blur-2xl rounded-3xl" />
            <div className="relative rounded-3xl ring-1 ring-white/20 shadow-2xl">
              <ChatForm />
            </div>
          </motion.div>

          {/* Right Side ChatForm - Mobile */}
          <div className="lg:hidden w-full max-w-md mx-auto">
            <ChatForm />
          </div>
        </div>
      </div>
    </section>
  );
}
