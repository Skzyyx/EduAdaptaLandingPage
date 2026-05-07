"use client";

import { motion } from "framer-motion";
import { Layers, Briefcase, Users } from "lucide-react";

type Accent = "blue" | "amber" | "emerald";

const profiles: {
  icon: React.ReactNode;
  badge: string;
  title: string;
  description: string;
  bullets: string[];
  accent: Accent;
}[] = [
  {
    icon: <Layers className="h-7 w-7" />,
    badge: "Maestro multigrado",
    title: "Diseñada para el docente que atiende 6 grados a la vez.",
    description:
      "Automatiza el diagnóstico, recibe rutas de aprendizaje listas para cada nivel y recupera 5 horas de tu semana.",
    bullets: [
      "Diagnósticos por grado en paralelo",
      "Asignación automática de ejercicios por nivel",
      "Reportes individuales sin trabajo extra",
    ],
    accent: "blue",
  },
  {
    icon: <Briefcase className="h-7 w-7" />,
    badge: "Docente-director",
    title: "Si das clases y diriges la escuela, te tocan dos sombreros.",
    description:
      "EduAdapta te da visibilidad de toda la escuela en un solo tablero, sin dejar de atender tu grupo.",
    bullets: [
      "Tablero general de avance por grado",
      "Reportes para supervisión escolar listos en PDF",
      "Sin doble captura de información",
    ],
    accent: "amber",
  },
  {
    icon: <Users className="h-7 w-7" />,
    badge: "Escuelas rurales y comunitarias",
    title: "Pensada para la realidad de tu comunidad.",
    description:
      "Funciona en tablets sencillas, sin red estable y con contenidos sensibles al contexto local.",
    bullets: [
      "Optimizada para hardware de baja gama",
      "Modo de bajo consumo de batería",
      "Compatible con donaciones de equipo",
    ],
    accent: "emerald",
  },
];

const accentMap: Record<
  Accent,
  { bg: string; text: string; border: string; dot: string }
> = {
  blue: {
    bg: "bg-blue-50",
    text: "text-blue-600",
    border: "border-blue-100",
    dot: "bg-blue-600",
  },
  amber: {
    bg: "bg-amber-50",
    text: "text-amber-600",
    border: "border-amber-100",
    dot: "bg-amber-500",
  },
  emerald: {
    bg: "bg-emerald-50",
    text: "text-emerald-600",
    border: "border-emerald-100",
    dot: "bg-emerald-500",
  },
};

export default function Audiences() {
  return (
    <section id="para-quien" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">
            Hecha para tu realidad
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Sabemos que un docente no hace solo una cosa.
          </h3>
          <p className="text-lg text-slate-600">
            EduAdapta se ajusta al perfil real de quien la usa: desde el maestro
            multigrado hasta el director que da clases.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {profiles.map((p, i) => {
            const c = accentMap[p.accent];
            return (
              <motion.article
                key={p.badge}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col"
              >
                <div
                  className={`w-14 h-14 rounded-xl ${c.bg} ${c.text} flex items-center justify-center mb-5`}
                  aria-hidden="true"
                >
                  {p.icon}
                </div>
                <span
                  className={`inline-block self-start py-1 px-3 rounded-full ${c.bg} ${c.text} text-xs font-semibold mb-4 border ${c.border}`}
                >
                  {p.badge}
                </span>
                <h4 className="text-xl font-bold text-slate-900 mb-3 leading-snug">
                  {p.title}
                </h4>
                <p className="text-slate-600 mb-6">{p.description}</p>
                <ul className="space-y-2 mt-auto">
                  {p.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-sm text-slate-700"
                    >
                      <span
                        className={`mt-1.5 w-1.5 h-1.5 rounded-full ${c.dot} flex-shrink-0`}
                        aria-hidden="true"
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
