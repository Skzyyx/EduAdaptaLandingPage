"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import CompetitiveAdvantage from "@/components/CompetitiveAdvantage";
import Footer from "@/components/Footer";
import DemoModal from "@/components/ui/DemoModal";
import { Toaster } from "sonner";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Toaster position="top-center" richColors />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Problem />
        <Solution />
        <CompetitiveAdvantage />
        {/* CTA Final */}
        <section className="bg-blue-600 py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              ¿Listo para transformar tu escuela?
            </h2>
            <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Implementa EduAdapta hoy mismo. Sin instalaciones complejas, sin requerimientos de red. Resultados visibles en 30 días.
            </p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold px-10 py-5 rounded-full transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-lg focus:outline-none focus:ring-4 focus:ring-amber-300"
            >
              Solicitar una Demo Gratuita
            </button>
          </div>
        </section>
      </main>
      <Footer />
      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
