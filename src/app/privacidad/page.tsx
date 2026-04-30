import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Privacidad() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-32 pb-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors font-medium">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver al inicio
          </Link>
          
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-12">
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Aviso de Privacidad</h1>
            <p className="text-sm text-slate-500 mb-10">Última actualización: Noviembre 2026</p>
            
            <div className="prose prose-slate prose-lg max-w-none text-slate-600 space-y-6">
              <p>En EduAdapta, reconocemos la importancia y la extrema sensibilidad de los datos educativos, especialmente al tratar con información de menores de edad. Nuestro compromiso central es el diseño "Privacidad por Defecto" (Privacy by Design).</p>
              
              <h3 className="text-xl font-bold text-slate-900">1. Privacidad Offline (Local-First)</h3>
              <p>Dado que nuestra aplicación opera 100% offline, el 99% de los datos generados por el alumno (patrones de clic, tiempos de respuesta, errores en ejercicios) se procesan y <strong>almacenan exclusivamente en el dispositivo físico</strong>. No enviamos datos en tiempo real a la nube, protegiendo al alumno de perfiles invasivos de corporaciones de big data.</p>
              
              <h3 className="text-xl font-bold text-slate-900">2. Sincronización Diferida y Anonimización</h3>
              <p>Cuando un dispositivo escolar se conecta a internet para sincronizar reportes al panel del docente o al sistema gubernamental, la información de rendimiento (calificaciones y métricas agregadas) es encriptada de extremo a extremo. Utilizamos protocolos de anonimización para asegurar que los reportes de alto nivel (KPIs estatales) no puedan ser rastreados a estudiantes individuales.</p>
              
              <h3 className="text-xl font-bold text-slate-900">3. Leyes Mexicanas</h3>
              <p>Cumplimos estrictamente con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) de México y nos apegamos a las normativas de la Secretaría de Educación Pública para el resguardo de expedientes electrónicos.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
