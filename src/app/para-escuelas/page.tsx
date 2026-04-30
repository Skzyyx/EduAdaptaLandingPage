import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function ParaEscuelas() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-32 pb-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors font-medium">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver al inicio
          </Link>
          
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-12">
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">EduAdapta para Escuelas</h1>
            <div className="prose prose-slate prose-lg max-w-none text-slate-600">
              <p className="text-xl text-slate-700 font-medium">Empodera a tus docentes y asegura el éxito de tus alumnos, sin importar la infraestructura tecnológica de tu plantel.</p>
              <p>Entendemos los retos únicos que enfrentan las escuelas de educación básica en México. Las aulas saturadas y la diversidad en los ritmos de aprendizaje de cada alumno hacen imposible la personalización tradicional. EduAdapta llega para ser el asistente silencioso de cada profesor.</p>
              
              <h3 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">Beneficios Clave para tu Institución</h3>
              <ul className="space-y-4 list-none pl-0">
                <li className="flex items-start gap-3"><CheckCircle2 className="h-6 w-6 text-emerald-500 flex-shrink-0" /><span><strong>Diagnóstico Preciso:</strong> Evalúa el nivel real de cada niño al inicio del ciclo escolar sin quitar tiempo de clase al docente.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="h-6 w-6 text-emerald-500 flex-shrink-0" /><span><strong>Alineación Oficial:</strong> Todo el contenido está 100% alineado con la Nueva Escuela Mexicana y la SEP.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="h-6 w-6 text-emerald-500 flex-shrink-0" /><span><strong>Cero Estrés Técnico:</strong> Instalamos el software en tus equipos (tablets, PCs) y listo. Nunca requerirán WiFi para funcionar.</span></li>
              </ul>

              <div className="mt-12 p-8 bg-blue-600 rounded-2xl text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Inicia la transformación hoy</h3>
                <p className="mb-6 text-blue-100">Equipa tu escuela con la herramienta que cerrará las brechas de conocimiento en solo 30 días.</p>
                <Link href="/contacto" className="inline-block bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold px-8 py-4 rounded-full transition-all shadow-lg hover:-translate-y-1">
                  Agendar una reunión con nuestro equipo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
