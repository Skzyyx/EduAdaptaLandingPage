"use client";

import { motion } from "framer-motion";
import { AlertTriangle, BookX, Globe } from "lucide-react";

export default function Problem() {
  return (
    <section id="problema" className="py-24 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              El rezago educativo y la brecha digital en México
            </h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Las herramientas actuales asumen que todas las escuelas tienen internet de alta velocidad. La realidad es que las zonas con mayor rezago son precisamente las que carecen de conectividad.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500">
                    <BookX className="h-5 w-5" aria-hidden="true" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-white">50% de rezago en primaria</h3>
                  <p className="text-slate-400">Miles de estudiantes avanzan de grado sin dominar habilidades básicas de lectura y matemáticas.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                    <Globe className="h-5 w-5" aria-hidden="true" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-white">Desconexión en las aulas</h3>
                  <p className="text-slate-400">Más del 40% de las escuelas públicas no cuentan con acceso estable a internet, volviendo inútiles las plataformas tradicionales.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-3xl transform rotate-3" />
            <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8 relative shadow-2xl">
              <div className="flex items-center gap-3 mb-6 text-amber-400">
                <AlertTriangle className="h-8 w-8" aria-hidden="true" />
                <span className="text-2xl font-bold">La Realidad</span>
              </div>
              <blockquote className="text-xl text-slate-300 italic mb-6">
                "No podemos cerrar la brecha de aprendizaje usando herramientas que excluyen a quienes no tienen conectividad."
              </blockquote>
              <div className="h-1 w-20 bg-blue-500 rounded-full mb-6" />
              <p className="text-slate-400">
                EduAdapta nació para resolver este problema fundamental, llevando educación personalizada al dispositivo, no a la nube.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
