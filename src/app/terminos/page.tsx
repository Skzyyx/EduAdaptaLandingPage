import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Terminos() {
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
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Términos de Uso</h1>
            <p className="text-sm text-slate-500 mb-10">Última actualización: Noviembre 2026</p>
            
            <div className="prose prose-slate prose-lg max-w-none text-slate-600 space-y-6">
              <p>El uso del software EduAdapta, ya sea en su modalidad "Software as a Service" (cuando hay conectividad) o en su despliegue local (Offline), está sujeto a los siguientes términos y condiciones para instituciones y entidades gubernamentales.</p>
              
              <h3 className="text-xl font-bold text-slate-900">Uso Licenciado, no Venta</h3>
              <p>EduAdapta concede a la Institución Escolar o Entidad Gubernamental contratante una licencia no exclusiva, intransferible y limitada para instalar y ejecutar el software en los dispositivos especificados en el contrato comercial. El código fuente, los algoritmos adaptativos (Motor IRT) y el contenido pedagógico son propiedad intelectual exclusiva de EduAdapta.</p>
              
              <h3 className="text-xl font-bold text-slate-900">Despliegue y Mantenimiento</h3>
              <p>Para instalaciones 100% offline, EduAdapta provee paquetes de instalación (ej. APKs, ejecutables de Windows) pre-verificados. La Institución es responsable del estado del hardware físico. EduAdapta proporcionará actualizaciones pedagógicas de manera trimestral, que podrán ser inyectadas vía red local (LAN) o dispositivos USB por el personal autorizado.</p>
              
              <h3 className="text-xl font-bold text-slate-900">Uso Responsable del Motor Diagnóstico</h3>
              <p>El software está diseñado como una herramienta de apoyo formativo. Las calificaciones y diagnósticos automatizados emitidos por la aplicación offline no pretenden sustituir el juicio clínico o pedagógico del profesor a cargo del aula. EduAdapta no asume responsabilidad si las métricas del software son usadas para medidas punitivas contra los estudiantes en lugar de fines de regularización académica.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
