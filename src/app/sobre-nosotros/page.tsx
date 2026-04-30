import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function SobreNosotros() {
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
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Sobre EduAdapta</h1>
            <div className="prose prose-slate prose-lg max-w-none text-slate-600">
              <p className="text-xl text-slate-700 font-medium">Construido en México, para México.</p>
              <p>Nuestra historia comenzó al observar una realidad incómoda: la innovación tecnológica educativa, los grandes algoritmos de inteligencia artificial y las plataformas de aprendizaje adaptativo estaban diseñadas para un mundo hiperconectado. Un mundo donde el internet de fibra óptica fluye sin problemas.</p>
              <p>Pero en México y en gran parte de Latinoamérica, la realidad de las aulas públicas es otra. Cientos de miles de dispositivos gubernamentales terminan siendo pisapapeles por falta de conectividad.</p>
              
              <h3 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">Nuestra Misión</h3>
              <p>Democratizar la educación personalizada mediante tecnología de frontera que funcione en los contextos más adversos. Creemos que ningún estudiante debería quedarse atrás por falta de internet.</p>
              
              <h3 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">El Equipo</h3>
              <p>Somos un grupo interdisciplinario de educadores, ingenieros de software, científicos de datos y diseñadores mexicanos apasionados por cerrar la brecha digital y educativa.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
