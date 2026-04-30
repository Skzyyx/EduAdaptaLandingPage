import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function ParaGobiernos() {
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
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Implementaciones a Nivel Estatal y Federal</h1>
            <div className="prose prose-slate prose-lg max-w-none text-slate-600">
              <p className="text-xl text-slate-700 font-medium">EduAdapta es la única plataforma de aprendizaje adaptativo masivo diseñada para la infraestructura real del país.</p>
              <p>Las inversiones gubernamentales en hardware (tabletas y computadoras) frecuentemente fracasan debido a la dependencia de conectividad en zonas rurales o marginadas. EduAdapta soluciona la brecha digital permitiendo que esos dispositivos tengan software educativo de primer nivel, operando 100% offline.</p>
              
              <h3 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">¿Por qué elegir EduAdapta para su estrategia de estado?</h3>
              <ul className="space-y-4 list-none pl-0">
                <li className="flex items-start gap-3"><CheckCircle2 className="h-6 w-6 text-emerald-500 flex-shrink-0" /><span><strong>Métricas Confiables:</strong> Obtenga reportes consolidados del avance educativo del estado cuando los dispositivos se sincronicen esporádicamente en zonas de conexión.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="h-6 w-6 text-emerald-500 flex-shrink-0" /><span><strong>Despliegue Masivo Sencillo:</strong> Imagen de sistema pre-cargable en hardware de licitación pública gubernamental.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="h-6 w-6 text-emerald-500 flex-shrink-0" /><span><strong>Alta Tasa de Retorno (ROI):</strong> Maximiza la utilidad del hardware entregado, convirtiéndolo de una simple pantalla a un tutor privado personalizado para cada estudiante.</span></li>
              </ul>

              <div className="mt-12 p-8 bg-slate-900 rounded-2xl text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Coordinemos un proyecto piloto a nivel zona</h3>
                <p className="mb-6 text-slate-400">Nuestro equipo de sector público está listo para revisar licitaciones o propuestas de despliegue estatal.</p>
                <Link href="/contacto" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg hover:-translate-y-1">
                  Contactar al área de Sector Público
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
