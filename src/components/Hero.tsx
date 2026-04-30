"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, WifiOff, BarChart3 } from "lucide-react";
import DemoModal from "./ui/DemoModal";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blue-100 opacity-50 blur-3xl" />
        <div className="absolute top-40 -left-40 w-96 h-96 rounded-full bg-amber-100 opacity-50 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-6 border border-blue-100">
              Para escuelas, gobiernos y ONGs en México
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            La única app de aprendizaje adaptativo <span className="text-blue-600 relative whitespace-nowrap">
              100% offline
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-amber-400" viewBox="0 0 100 10" preserveAspectRatio="none" aria-hidden="true">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
              </svg>
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Combate el rezago educativo en primaria (6-12 años) mediante exámenes diagnósticos y personalización de contenido, sin necesidad de conexión a internet.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-lg"
            >
              Agendar un Piloto
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </button>
            <a 
              href="#solucion"
              className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-semibold px-8 py-4 rounded-full transition-all flex items-center justify-center gap-2 text-lg"
            >
              Conocer más
            </a>
          </motion.div>
        </div>

        {/* Feature quick hits */}
        <motion.div 
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
            <div className="bg-blue-50 p-3 rounded-lg text-blue-600">
              <WifiOff className="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Cero Internet</h3>
              <p className="text-sm text-slate-500">Funciona offline tras la instalación</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
            <div className="bg-amber-50 p-3 rounded-lg text-amber-600">
              <BarChart3 className="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Reportes Automáticos</h3>
              <p className="text-sm text-slate-500">Visibilidad total para el docente</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
            <div className="bg-emerald-50 p-3 rounded-lg text-emerald-600">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Rápida Instalación</h3>
              <p className="text-sm text-slate-500">Despliegue masivo sin fricción</p>
            </div>
          </div>
        </motion.div>
      </div>
      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
