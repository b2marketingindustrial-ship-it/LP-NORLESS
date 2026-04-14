'use client';
import { Phone, Mail, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Header({ onOpenModal }) {
  return (
    <header className="fixed top-0 left-0 
    w-full z-[80] bg-white/90 
    backdrop-blur-lg border-b 
    border-slate-100 shadow-md">
      <div className="container-custom h-20 flex 
      items-center justify-between flex-row md:flex-row">
        {/* Logo */}
        <Link href="#hero">
        <Image
          src="/logoNoBg.webp"
          alt="Norless"
          width={100}
          height={100}
          className="w-[120px] md:w-[240px] h-auto"
        />
        </Link>
        
        <Image
          src="/parkerstore.png"
          alt="Parker Store"
          width={100}
          height={100}
          className="w-[90px] md:w-[200px] h-auto object-contain"
        />
        

        {/* Contact info - Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-2 text-black font-bold text-xs tracking-widest">
            <Phone size={16} className="text-orange-400 shrink-0" />
            <span className="text-neutral-900">(11) 3839-6900</span>
          </div>
          <div className="flex items-center gap-2 text-black font-bold text-xs tracking-widest">
            <Mail size={16} className="text-yellow-400 shrink-0" />
            <span className="text-neutral-900 lowercase tracking-wide">contato@norless.com.br</span>
          </div>
          <button
            onClick={onOpenModal}
            className="bg-yellow-400 text-black px-5 py-3 rounded-xl font-black text-sm tracking-[0.06em] hover:bg-orange-400 hover:text-black transition-all transform hover:scale-105 shadow-lg shadow-orange-400/25 flex items-center gap-2"
          >
            <MessageSquare size={14} /> Fale com um especialista
          </button>
        </div>

        {/* Mobile Button */}
        <button
          onClick={onOpenModal}
          className="lg:hidden bg-yellow-400 p-3 rounded-xl text-black shadow-md"
        >
          <MessageSquare size={20} />
        </button>
      </div>
    </header>
  );
}
