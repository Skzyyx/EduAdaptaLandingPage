"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Landmark, Heart, Building, CheckCircle2 } from "lucide-react";

const models = [
  {
    icon: <Landmark className="h-7 w-7" />,
    tag: "Convenio con gobierno",
    title: "Sin costo para la escuela",
    description:
      "Cuando el estado, municipio o la SEP financia el despliegue, las escuelas reciben EduAdapta y soporte sin pagar nada.",
    features: [
      "Cobertura por entidad o municipio",
      "Capacitación incluida para docentes",
      "Soporte técnico durante el ciclo escolar",
    ],
    cta: "Soy gobierno",
    href: "/para-gobiernos",
    highlight: false,
  },
  {
    icon: <Heart className="h-7 w-7" />,
    tag: "Patrocinado por ONG",
    title: "Gratis para escuelas rurales",
    description:
      "Versión 100% gratuita para escuelas rurales, indígenas y comunitarias, financiada por nuestros aliados sociales.",
    features: [
      "Sin costo para la comunidad escolar",
      "Contenidos contextualizados al entorno local",
      "Acompañamiento durante el piloto",
    ],
    cta: "Soy ONG o aliado",
    href: "/para-ongs",
    highlight: true,
  },
  {
    icon: <Building className="h-7 w-7" />,
    tag: "Plan institucional",
    title: "Suscripción anual por escuela",
    description:
      "Para escuelas privadas o redes que prefieren contratar directo. Precio por número de alumnos atendidos.",
    features: [
      "Tablero administrativo por plantel",
      "Onboarding y reportes personalizados",
      "Facturación con CFDI",
    ],
    cta: "Cotizar para mi escuela",
    href: "/para-escuelas",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="modelos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">
            Modelos de acceso
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Un costo claro según quién implementa.
          </h3>
          <p className="text-lg text-slate-600">
            EduAdapta no tiene un solo precio porque no hay una sola realidad
            educativa. Elige el modelo que aplica a tu caso.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 pt-4">
          {models.map((m, i) => (
            <motion.div
              key={m.tag}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 flex flex-col border-2 transition-all ${
                m.highlight
                  ? "bg-slate-900 text-white border-amber-500 shadow-xl md:scale-105"
                  : "bg-white border-slate-100 shadow-sm"
              }`}
            >
              {m.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-slate-900 text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                  Más solicitado
                </span>
              )}
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${
                  m.highlight
                    ? "bg-amber-500/20 text-amber-400"
                    : "bg-blue-50 text-blue-600"
                }`}
                aria-hidden="true"
              >
                {m.icon}
              </div>
              <span
                className={`text-sm font-semibold mb-2 ${
                  m.highlight ? "text-amber-400" : "text-blue-600"
                }`}
              >
                {m.tag}
              </span>
              <h4
                className={`text-2xl font-bold mb-3 ${
                  m.highlight ? "text-white" : "text-slate-900"
                }`}
              >
                {m.title}
              </h4>
              <p
                className={`mb-6 ${
                  m.highlight ? "text-slate-300" : "text-slate-600"
                }`}
              >
                {m.description}
              </p>
              <ul className="space-y-3 mb-8">
                {m.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <CheckCircle2
                      className={`h-5 w-5 flex-shrink-0 ${
                        m.highlight ? "text-amber-400" : "text-emerald-500"
                      }`}
                      aria-hidden="true"
                    />
                    <span
                      className={
                        m.highlight ? "text-slate-200" : "text-slate-700"
                      }
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href={m.href}
                className={`mt-auto text-center font-semibold px-6 py-3 rounded-full transition-all ${
                  m.highlight
                    ? "bg-amber-500 hover:bg-amber-600 text-slate-900"
                    : "bg-slate-900 hover:bg-slate-800 text-white"
                }`}
              >
                {m.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-sm text-slate-500 mt-12 max-w-2xl mx-auto">
          ¿No estás seguro de cuál te aplica? Agenda una llamada y te orientamos
          según tu contexto: pública, privada, rural o comunitaria.
        </p>
      </div>
    </section>
  );
}
