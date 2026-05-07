"use client";

import { motion } from "framer-motion";
import { Download, Bluetooth, Smartphone, Clock } from "lucide-react";

const steps = [
  {
    icon: <Download className="h-7 w-7" />,
    number: "01",
    title: "Un maestro descarga",
    description:
      "Un docente con conexión instala EduAdapta una sola vez (APK ligera de ~80 MB). Puede hacerlo desde casa, un cibercafé o la supervisión escolar.",
  },
  {
    icon: <Bluetooth className="h-7 w-7" />,
    number: "02",
    title: "Comparte por Bluetooth o USB",
    description:
      "Pasa el archivo APK al resto del equipo igual que comparte una foto o un audio: por Bluetooth, USB o memoria. Sin red, sin nube, sin trámites.",
  },
  {
    icon: <Smartphone className="h-7 w-7" />,
    number: "03",
    title: "Listo en cada dispositivo",
    description:
      "Cada tablet o celular instala el archivo en menos de 1 minuto y queda 100% funcional. Los diagnósticos arrancan desde la primera clase.",
  },
];

export default function Installation() {
  return (
    <section
      id="instalacion"
      className="py-24 bg-white relative overflow-hidden"
    >
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-50 rounded-full blur-3xl opacity-60 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">
            Instalación cero-internet
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Un maestro la tiene, todos la tienen en 5 minutos.
          </h3>
          <p className="text-lg text-slate-600">
            Olvídate de descargas masivas o del WiFi escolar. EduAdapta se
            distribuye igual que cualquier archivo: por Bluetooth, USB o APK
            local.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 relative">
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 -z-10" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow text-center"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg">
                {step.icon}
              </div>
              <div className="text-amber-500 font-bold text-sm tracking-wider mb-2">
                PASO {step.number}
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-3">
                {step.title}
              </h4>
              <p className="text-slate-600 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 bg-slate-900 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 text-white"
        >
          <div className="flex-shrink-0 w-16 h-16 rounded-full bg-amber-500 flex items-center justify-center">
            <Clock className="h-8 w-8 text-slate-900" aria-hidden="true" />
          </div>
          <div>
            <h4 className="text-xl font-bold mb-1">
              Despliegue masivo en una hora.
            </h4>
            <p className="text-slate-300">
              Si la escuela tiene 30 tablets, basta con 1 docente con la app: el
              equipo completo queda operativo antes del recreo.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
