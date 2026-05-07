"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

export default function CompetitiveAdvantage() {
  return (
    <section id="ventajas" className="py-24 bg-white relative overflow-hidden">
      {/* Abstract background shape */}
      <div className="absolute -right-64 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-50 rounded-full blur-3xl opacity-50 -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply" />
              {/* Placeholder for an app screenshot or dashboard */}
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1200" 
                alt="Estudiantes utilizando tabletas en un aula" 
                className="w-full h-auto object-cover aspect-[4/3]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900/90 to-transparent p-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 max-w-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center">
                      <span className="text-white font-bold">98%</span>
                    </div>
                    <p className="text-white text-sm font-medium">De precisión en predicción de nivel de lectura según la SEP.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">Nuestra Ventaja Injusta</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Un algoritmo entrenado con la realidad mexicana
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              No importamos soluciones de otros países. EduAdapta ha sido alimentado con miles de datos de escuelas públicas y privadas en México, comprendiendo las deficiencias comunes del currículo nacional.
            </p>

            <ul className="space-y-5">
              {[
                "Alineado a los planes y programas de la SEP.",
                "Contenidos contextualizados al entorno mexicano, con hoja de ruta hacia lenguas originarias (náhuatl, maya y mixteco).",
                "Reconoce regionalismos y la diversidad cultural del país.",
                "Optimizado para hardware de baja gama (tablets gubernamentales).",
                "Actualizaciones vía USB o conexión esporádica."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-emerald-500 flex-shrink-0" aria-hidden="true" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <button 
                onClick={() => toast.success("Descargando PDF de Evidencia Técnica (Simulado)")}
                className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-4 rounded-full transition-all shadow-md"
              >
                Ver Evidencia Técnica
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
