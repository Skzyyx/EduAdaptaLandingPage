import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function ParaONGs() {
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
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Alianzas con Fundaciones y ONGs</h1>
            <div className="prose prose-slate prose-lg max-w-none text-slate-600">
              <p className="text-xl text-slate-700 font-medium">Multiplica el impacto de tus donaciones asegurando que la tecnología entregada realmente genere resultados de aprendizaje.</p>
              <p>Las Organizaciones No Gubernamentales hacen un trabajo vital llevando equipamiento a comunidades vulnerables. Sin embargo, donar hardware es solo el primer paso. EduAdapta se asocia con ONGs para garantizar que esas donaciones incluyan el software educativo más potente, diseñado específicamente para contextos de cero conectividad.</p>
              
              <h3 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">Valor para tu Fundación</h3>
              <ul className="space-y-4 list-none pl-0">
                <li className="flex items-start gap-3"><CheckCircle2 className="h-6 w-6 text-emerald-500 flex-shrink-0" /><span><strong>Impacto Medible:</strong> EduAdapta genera métricas de progreso reales que puedes reportar a tus donantes, demostrando que el programa funciona.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="h-6 w-6 text-emerald-500 flex-shrink-0" /><span><strong>Bajo Costo por Beneficiario:</strong> Precios especiales y subsidios cruzados para organizaciones sin fines de lucro enfocadas en educación.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="h-6 w-6 text-emerald-500 flex-shrink-0" /><span><strong>Capacitación Comunitaria:</strong> Proveemos manuales sencillos y capacitación para líderes comunitarios, no solo para docentes formales.</span></li>
              </ul>

              <div className="mt-12 p-8 bg-amber-50 rounded-2xl text-center border border-amber-200">
                <h3 className="text-2xl font-bold text-amber-900 mb-4">Hagamos equipo por la educación</h3>
                <p className="mb-6 text-amber-800">Descubre nuestros planes de licenciamiento especial para Organizaciones de la Sociedad Civil.</p>
                <Link href="/contacto" className="inline-block bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold px-8 py-4 rounded-full transition-all shadow-md hover:-translate-y-1">
                  Explorar Alianzas
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
