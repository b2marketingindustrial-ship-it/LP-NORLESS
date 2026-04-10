'use client';
import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCarousels from './components/ProductCarousels';
import WhyParker from './components/WhyParker';
import Segments from './components/Segments';
import Consultative from './components/Consultative';
import WhyNorless from './components/WhyNorless';
import FinalCTA from './components/FinalCTA';
import Solution from './components/Solution';
import ModalForm from './components/ModalForm';
import Footer from './components/Footer';
import WhatsButton from './components/WhatsButton';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-white">
      <Header onOpenModal={openModal} />

      <main>
        <Hero onOpenModal={openModal} />
        <ProductCarousels />
        <WhyParker />
        <Segments />
        <Consultative onOpenModal={openModal} />
        <WhyNorless />
        <FinalCTA />
        <Solution />
      </main>

      <Footer />

      <ModalForm isOpen={isModalOpen} onClose={closeModal} />
      <WhatsButton onOpenModal={openModal} />
    </div>
  );
}
