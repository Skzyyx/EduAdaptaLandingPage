"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { toast, Toaster } from "sonner";

export default function Contacto() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Mensaje enviado correctamente. Un asesor se pondrá en contacto pronto.");
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Toaster position="top-center" richColors />
      <Navbar />
      <main className="flex-1 pt-32 pb-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors font-medium">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver al inicio
          </Link>
          
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="grid md:grid-cols-5">
              <div className="md:col-span-2 bg-slate-900 p-10 text-white flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Hablemos</h2>
                  <p className="text-slate-300 mb-10">
                    Déjanos tus datos y platícanos sobre tu institución o proyecto. Nuestro equipo técnico y pedagógico te guiará en la implementación de EduAdapta.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <Mail className="h-6 w-6 text-blue-400" />
                      <span className="text-slate-200">contacto@eduadapta.mx</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Phone className="h-6 w-6 text-blue-400" />
                      <span className="text-slate-200">+52 (55) 1234-5678</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <MapPin className="h-6 w-6 text-blue-400" />
                      <span className="text-slate-200">Ciudad de México, México</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-3 p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Nombre completo</label>
                      <input required type="text" className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="Juan Pérez" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Institución</label>
                      <input required type="text" className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="Escuela o Dependencia" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Correo de contacto</label>
                    <input required type="email" className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="juan@ejemplo.com" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">¿En qué podemos ayudarte?</label>
                    <textarea required rows={4} className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none" placeholder="Cuéntanos sobre tu proyecto..."></textarea>
                  </div>
                  
                  <button type="submit" disabled={isSubmitting} className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full transition-all shadow-md disabled:opacity-70 disabled:cursor-not-allowed">
                    {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
