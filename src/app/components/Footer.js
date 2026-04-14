'use client';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="
      py-10 md:py-2
      bg-black text-white
      border-t border-white/10
    ">
      <div className="container-custom">
        <div className="
          flex flex-col md:flex-row
          items-center justify-between
          gap-8
          text-[10px] md:text-[11px]
          font-black uppercase
          tracking-[0.2em]
          text-white/70
        ">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Image
              src="/logoNoBg.webp"
              alt="Norless"
              width={250}
              height={50}
              className="
                object-contain
                w-full h-[80px] md:h-[120px]
              "
              priority={false}
            />
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-center">
            <span className="text-white/90">Brasil</span>
            <span className="text-yellow-400">(11) 3839-6900</span>
            <span className="lowercase tracking-normal font-bold text-orange-400">contato@norless.com.br</span>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right flex flex-col items-center md:items-end">
            <span className="text-white">© {new Date().getFullYear()} Norless · Parker</span>
            <a
              href="https://b2marketing.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:text-orange-400 transition-colors"
            >
              Desenvolvido por B2 Marketing Industrial
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
