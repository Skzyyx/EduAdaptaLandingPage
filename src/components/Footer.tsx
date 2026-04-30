import { BookOpen } from "lucide-react";
import Link from "next/link";

export default function Footer() {

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8 text-blue-500" aria-hidden="true" />
              <span className="text-2xl font-bold text-white tracking-tight">Edu<span className="text-blue-500">Adapta</span></span>
            </div>
            <p className="text-slate-400 max-w-sm">
              Combatiendo el rezago educativo en México, una escuela a la vez. Sin excusas, sin necesidad de internet.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Solución</h4>
            <ul className="space-y-2">
              <li><Link href="/para-escuelas" className="hover:text-blue-400 transition-colors">Para Escuelas</Link></li>
              <li><Link href="/para-gobiernos" className="hover:text-blue-400 transition-colors">Para Gobiernos</Link></li>
              <li><Link href="/para-ongs" className="hover:text-blue-400 transition-colors">Para ONGs</Link></li>
              <li><Link href="/metodologia" className="hover:text-blue-400 transition-colors">Metodología</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Compañía</h4>
            <ul className="space-y-2">
              <li><Link href="/sobre-nosotros" className="hover:text-blue-400 transition-colors">Sobre Nosotros</Link></li>
              <li><Link href="/contacto" className="hover:text-blue-400 transition-colors">Contacto</Link></li>
              <li><Link href="/privacidad" className="hover:text-blue-400 transition-colors">Aviso de Privacidad</Link></li>
              <li><Link href="/terminos" className="hover:text-blue-400 transition-colors">Términos de Uso</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} EduAdapta. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6">
            <span className="text-sm text-slate-500">Hecho con el ❤️ en México</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
