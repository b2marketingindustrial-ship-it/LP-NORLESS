'use client';
import { useState } from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import ProductCarousels from './sections/ProductCarousels';
import WhyParker from './sections/WhyParker';
import Segments from './sections/Segments';
import Consultative from './sections/Consultative';
import WhyNorless from './sections/WhyNorless';
import FinalCTA from './sections/FinalCTA';
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
        <Consultative />
        <WhyNorless />
        <FinalCTA />
      </main>

      <Footer />

      <ModalForm isOpen={isModalOpen} onClose={closeModal} />
      <WhatsButton onOpenModal={openModal} />
    </div>
  );
}
