import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function Metodologia() {
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
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Nuestra Metodología Adaptativa</h1>
            <div className="prose prose-slate prose-lg max-w-none text-slate-600">
              <p className="text-xl text-slate-700 font-medium">Un motor de recomendación educativo construido con datos 100% mexicanos.</p>
              <p>A diferencia de otras plataformas que traducen currículos extranjeros, EduAdapta utiliza un Árbol de Conocimiento (Knowledge Graph) basado íntegramente en los Aprendizajes Esperados de la Secretaría de Educación Pública (SEP).</p>
              
              <h3 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">¿Cómo funciona el algoritmo offline?</h3>
              <ul className="space-y-4 list-none pl-0">
                <li className="flex items-start gap-3"><CheckCircle2 className="h-6 w-6 text-emerald-500 flex-shrink-0" /><span><strong>Diagnóstico Dinámico (IRT):</strong> Utilizando la Teoría de Respuesta al Ítem, el primer examen calibra la dificultad de la siguiente pregunta en tiempo real. En 20 preguntas conocemos exactamente las deficiencias del alumno.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="h-6 w-6 text-emerald-500 flex-shrink-0" /><span><strong>Rutas de Remediación:</strong> Si un alumno de 6to grado falla en fracciones, el sistema no lo castiga; automáticamente le provee micro-lecciones de 4to grado para construir la base faltante.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="h-6 w-6 text-emerald-500 flex-shrink-0" /><span><strong>Procesamiento en el Borde (Edge Computing):</strong> Toda esta lógica matemática corre en el procesador local de la tableta o computadora. No hay latencia de red ni llamadas a servidores externos.</span></li>
              </ul>

              <div className="mt-12 p-8 bg-slate-900 rounded-2xl text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Validado por expertos</h3>
                <p className="mb-6 text-slate-400">Nuestra metodología ha sido puesta a prueba en entornos rurales con un 98% de precisión en la identificación de rezago en lectoescritura.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
