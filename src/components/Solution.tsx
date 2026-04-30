"use client";

import { motion } from "framer-motion";
import { Download, Brain, LineChart, FileText } from "lucide-react";

const features = [
  {
    icon: <Brain className="h-6 w-6" />,
    title: "Diagnósticos Precisos",
    description: "Evaluaciones iniciales que identifican exactamente el nivel de cada estudiante en matemáticas y español."
  },
  {
    icon: <Download className="h-6 w-6" />,
    title: "100% Offline",
    description: "Todo el contenido, ejercicios y algoritmos corren localmente. Cero dependencia de WiFi."
  },
  {
    icon: <LineChart className="h-6 w-6" />,
    title: "Rutas Personalizadas",
    description: "El algoritmo adapta la dificultad y el tipo de ejercicios al ritmo de aprendizaje de cada niño."
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Reportes para Docentes",
    description: "Generación de PDFs automáticos o sincronización en diferido cuando se detecta conexión."
  }
];

export default function Solution() {
  return (
    <section id="solucion" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">La Solución</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Tecnología que se adapta al contexto, no al revés.
          </h3>
          <p className="text-lg text-slate-600">
            Hemos comprimido el poder del aprendizaje adaptativo en una aplicación ligera que funciona perfectamente sin internet.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6" aria-hidden="true">
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h4>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
