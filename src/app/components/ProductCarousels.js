'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

/**
 * Cada slide: defina `image` com o caminho em /public (ex: "/carousel/pneumatica-01.webp").
 * Enquanto não houver arquivo, deixe `image` vazio ou null para exibir o placeholder.
 */
function CategoryCarousel({ title, description, categoryUrl, slides, slideDelay = 0 }) {
  const scrollerRef = useRef(null);

  const scrollByDir = (direction) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector('[data-carousel-card]');
    const step = card ? card.offsetWidth + 16 : Math.min(el.clientWidth * 0.75, 320);
    el.scrollBy({ left: direction * step, behavior: 'smooth' });
  };

  return (
    <div className="mb-20 md:mb-28 last:mb-0">
      <div className="container-custom mb-8 md:mb-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <h3 className="text-2xl md:text-4xl font-black text-black uppercase tracking-tighter leading-tight">
              {title}
            </h3>
            <p className="text-xs md:text-sm text-neutral-900 font-bold uppercase tracking-wide mt-4 leading-relaxed">
              {description}
            </p>
          </div>
          <a
            href={categoryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 self-start lg:self-auto px-6 py-3.5 bg-[#003366] text-white font-black text-[10px] md:text-[11px] tracking-[0.12em] uppercase rounded-xl hover:bg-[#004a99] transition-colors shadow-lg shrink-0"
          >
            Ver categoria completa
            <ExternalLink size={16} strokeWidth={2.5} />
          </a>
        </div>
      </div>

      {/* Setas fora da faixa de scroll — não sobrepõem os cards */}
      <div className="container-custom">
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          <button
            type="button"
            aria-label="Slide anterior"
            onClick={() => scrollByDir(-1)}
            className="hidden sm:flex shrink-0 h-11 w-11 md:h-12 md:w-12 items-center justify-center rounded-full bg-white text-black shadow-md border border-slate-200 hover:bg-yellow-400 hover:border-yellow-400 transition-colors z-10"
          >
            <ChevronLeft size={22} strokeWidth={2.5} className="-ml-0.5 text-orange-400" />
          </button>

          <div
            ref={scrollerRef}
            className="min-w-0 flex-1 flex gap-4 md:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory py-2 pb-4 [scrollbar-width:thin] [scrollbar-color:#cbd5e1_transparent]"
          >
            {slides.map((slide, idx) => (
              <motion.a
                key={`${title}-${slide.title}`}
                data-carousel-card
                href={categoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: slideDelay + idx * 0.06, duration: 0.45 }}
                className="snap-start shrink-0 w-[min(100%,260px)] sm:w-[280px] md:w-[300px] group/card"
              >
                <article className="h-full flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-[0_20px_45px_-12px_rgba(0,51,102,0.2)] hover:border-[#004a99]/25 transition-all duration-500 hover:-translate-y-1">
                  <div className="relative aspect-[4/3] w-full bg-slate-100">
                    {slide.image?.trim() ? (
                      <Image
                        src={slide.image.trim()}
                        alt={slide.title}
                        fill
                        sizes="(max-width: 640px) 85vw, 300px"
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200/80">
                        <span className="text-[9px] font-black text-orange-400 uppercase tracking-[0.2em] text-center">
                          Slot de imagem
                        </span>
                        <span className="text-[10px] font-bold text-black/70 text-center leading-snug px-2">
                          Coloque o arquivo em{' '}
                          <code className="text-orange-400 bg-white/90 px-1 rounded font-black">public/</code> e defina{' '}
                          <code className="text-yellow-500 bg-white/90 px-1 rounded font-black">image</code> no slide
                        </span>
                      </div>
                    )}
                    <div className="absolute top-2 right-2 rounded-lg bg-white/90 p-1.5 shadow-sm opacity-0 group-hover/card:opacity-100 transition-opacity">
                      <ExternalLink size={16} className="text-orange-400" strokeWidth={2.2} />
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h4 className="text-sm font-black text-black uppercase tracking-tight mb-2 leading-snug">
                      {slide.title}
                    </h4>
                    <p className="text-[11px] text-neutral-900 font-bold uppercase tracking-wide leading-relaxed flex-1">
                      {slide.blurb}
                    </p>
                    <div className="mt-4 h-1 w-8 rounded-full bg-[#ffd700] group-hover/card:w-full transition-all duration-500" />
                  </div>
                </article>
              </motion.a>
            ))}
          </div>

          <button
            type="button"
            aria-label="Próximo slide"
            onClick={() => scrollByDir(1)}
            className="hidden sm:flex shrink-0 h-11 w-11 md:h-12 md:w-12 items-center justify-center rounded-full bg-white text-black shadow-md border border-slate-200 hover:bg-yellow-400 hover:border-yellow-400 transition-colors z-10"
          >
            <ChevronRight size={22} strokeWidth={2.5} className="-mr-0.5 text-orange-400" />
          </button>
        </div>

        {/* Mobile: setas compactas abaixo do carrossel para não cobrir cards */}
        <div className="flex sm:hidden justify-center gap-6 mt-2">
          <button
            type="button"
            aria-label="Slide anterior"
            onClick={() => scrollByDir(-1)}
            className="h-10 w-10 flex items-center justify-center rounded-full bg-white shadow border border-slate-200 text-orange-400"
          >
            <ChevronLeft size={20} strokeWidth={2.5} />
          </button>
          <button
            type="button"
            aria-label="Próximo slide"
            onClick={() => scrollByDir(1)}
            className="h-10 w-10 flex items-center justify-center rounded-full bg-white shadow border border-slate-200 text-orange-400"
          >
            <ChevronRight size={20} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );
}

/* Exemplo: image: '/carousel/pneumatica-01.webp' — adicione os arquivos em public/carousel/ */
const PNEUMATIC_SLIDES = [
  {
    title: 'Válvulas solenoides',
    blurb: 'Acionamento elétrico rápido para controle confiável do fluxo de ar em linha.',
    image: '',
  },
  {
    title: 'Válvulas piloto e auxiliares',
    blurb: 'Integração segura em circuitos que exigem comando proporcional e redundância.',
    image: '',
  },
  {
    title: 'Blocos e manifolds',
    blurb: 'Distribuição organizada do ar com instalação compacta e manutenção simplificada.',
    image: '',
  },
  {
    title: 'Conectividade e I/O',
    blurb: 'Prontas para integração com automação moderna e monitoramento de processo.',
    image: '',
  },
  {
    title: 'Acessórios pneumáticos',
    blurb: 'Complementos Parker para fechar o circuito com desempenho homogêneo.',
    image: '',
  },
];

const DIRECTIONAL_SLIDES = [
  {
    title: 'Válvulas 3/2 vias',
    blurb: 'Controle direto de cilindros simples e funções de avanço e retorno.',
    image: '',
  },
  {
    title: 'Válvulas 5/2 e 5/3 vias',
    blurb: 'Comando de atuadores de dupla ação com posições neutras quando necessário.',
    image: '',
  },
  {
    title: 'Ilhas válvulas',
    blurb: 'Concentração de válvulas direcionais para painéis e máquinas complexas.',
    image: '',
  },
  {
    title: 'Válvulas compactas',
    blurb: 'Onde o espaço é crítico, sem abrir mão de vazão e vida útil.',
    image: '',
  },
  {
    title: 'Válvulas de alto fluxo',
    blurb: 'Para aplicações que demandam resposta rápida e baixa queda de pressão.',
    image: '',
  },
];

const URL_PNEUMATIC =
  'https://fluidcenter.com.br/product-category/parker/pneumatica/valvulas-pneumaticas/';
const URL_DIRECTIONAL =
  'https://fluidcenter.com.br/product-category/parker/pneumatica/valvulas-direcionais/';

export default function ProductCarousels() {
  return (
    <section id="produtos" className="section-padding bg-slate-50 overflow-hidden">
      <div className="container-custom text-center mb-14 md:mb-20">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-orange-400 font-black tracking-[0.4em] text-[10px] uppercase mb-4 block"
        >
          Nossa linha de produtos
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="text-3xl md:text-5xl font-black text-black mb-6 uppercase tracking-tighter max-w-4xl mx-auto leading-[1.1]"
        >
          Principais linhas <span className="text-yellow-400 font-black">Parker</span> para sua automação
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-sm md:text-[13px] text-neutral-900 max-w-2xl mx-auto font-bold uppercase tracking-wide leading-relaxed"
        >
          Apresentamos as principais válvulas pneumáticas Parker para sua automação industrial. Navegue pelos
          carrosséis e acesse as categorias completas na Fluid Center.
        </motion.p>
      </div>

      <CategoryCarousel
        title="1º carrossel — Válvulas pneumáticas"
        description="Soluções para controle de ar e integração em sistemas industriais com a qualidade Parker."
        categoryUrl={URL_PNEUMATIC}
        slides={PNEUMATIC_SLIDES}
        slideDelay={0}
      />

      <CategoryCarousel
        title="2º carrossel — Válvulas direcionais"
        description="Direcionamento preciso do fluxo para cilindros, atuadores e sequências de máquina."
        categoryUrl={URL_DIRECTIONAL}
        slides={DIRECTIONAL_SLIDES}
        slideDelay={0.08}
      />
    </section>
  );
}
