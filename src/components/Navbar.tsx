"use client";

import { useState } from "react";
import { Menu, X, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import DemoModal from "./ui/DemoModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-blue-600" aria-hidden="true" />
              <span className="text-2xl font-bold text-slate-900 tracking-tight">
                Edu<span className="text-blue-600">Adapta</span>
              </span>
            </div>

            {/* Desktop Nav */}
            <nav
              className="hidden md:flex space-x-8 items-center"
              aria-label="Navegación Principal"
            >
              <a
                href="#problema"
                className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
              >
                El Problema
              </a>
              <a
                href="#solucion"
                className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
              >
                Solución
              </a>
              <a
                href="#ventajas"
                className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
              >
                Ventajas
              </a>
              <a
                href="https://www.figma.com/proto/AGPLdEpZ7l5WJv97JaplFQ/ODS-4---SmartStudy-Transit?node-id=173-10&t=zktss5rjYJe3w3HA-9&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=173%3A10&show-proto-sidebar=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
              >
                Prototipo
              </a>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-6 py-2.5 rounded-full transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Solicitar Demo
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-slate-600"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label="Alternar menú"
            >
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col">
                <a
                  href="#problema"
                  onClick={() => setIsOpen(false)}
                  className="block text-slate-600 hover:text-blue-600 font-medium py-2"
                >
                  El Problema
                </a>
                <a
                  href="#solucion"
                  onClick={() => setIsOpen(false)}
                  className="block text-slate-600 hover:text-blue-600 font-medium py-2"
                >
                  Solución
                </a>
                <a
                  href="#ventajas"
                  onClick={() => setIsOpen(false)}
                  className="block text-slate-600 hover:text-blue-600 font-medium py-2"
                >
                  Ventajas
                </a>
                <a
                  href="https://www.figma.com/proto/AGPLdEpZ7l5WJv97JaplFQ/ODS-4---SmartStudy-Transit?node-id=173-10&t=zktss5rjYJe3w3HA-9&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=173%3A10&show-proto-sidebar=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="block text-slate-600 hover:text-blue-600 font-medium py-2"
                >
                  prototipoo
                </a>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setIsModalOpen(true);
                  }}
                  className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-6 py-3 rounded-full transition-all w-full shadow-md text-center"
                >
                  Solicitar Demo
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}