import logo from "figma:asset/1e7bfac9809975988c171df9e917a9937e39cc95.png";
import heroImage from "figma:asset/5800691d30bced287286c9976054ff0f18e837b2.png";
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export function Hero() {
  const [activeSection, setActiveSection] = useState('');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['nosotros', 'servicios', 'acompanantes', 'contacto'];
      const scrollPosition = window.scrollY + 200;

      // Si está en el tope de la página, no hay sección activa
      if (window.scrollY < 100) {
        setActiveSection('');
        return;
      }

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-orange-50 via-white to-cyan-50 overflow-hidden">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="sticky top-0 z-40 bg-white/80 backdrop-blur-md shadow-sm"
      >
        <div className="flex items-center justify-between pl-4 pr-4 py-2">
          <button 
            onClick={scrollToTop}
            className="transition-transform hover:scale-105 cursor-pointer"
            aria-label="Volver al inicio"
          >
            <img src={logo} alt="Acompañarte Logo" className="h-28 w-auto rounded-[10px]" />
          </button>
          <div className="hidden md:flex gap-8">
            <button 
              onClick={() => scrollToSection('nosotros')}
              className={`relative text-lg px-4 py-2 text-gray-700 transition-colors group ${
                activeSection === 'nosotros' ? 'text-orange-500' : 'hover:text-orange-500'
              }`}
            >
              Nosotros
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-orange-500 transition-all duration-300 ${
                activeSection === 'nosotros' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </button>
            <button 
              onClick={() => scrollToSection('servicios')}
              className={`relative text-lg px-4 py-2 text-gray-700 transition-colors group ${
                activeSection === 'servicios' ? 'text-orange-500' : 'hover:text-orange-500'
              }`}
            >
              Servicios
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-orange-500 transition-all duration-300 ${
                activeSection === 'servicios' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </button>
            <button 
              onClick={() => scrollToSection('acompanantes')}
              className={`relative text-lg px-4 py-2 text-gray-700 transition-colors group ${
                activeSection === 'acompanantes' ? 'text-orange-500' : 'hover:text-orange-500'
              }`}
            >
              Unite al Equipo
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-orange-500 transition-all duration-300 ${
                activeSection === 'acompanantes' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className={`relative text-lg px-4 py-2 text-gray-700 transition-colors group ${
                activeSection === 'contacto' ? 'text-orange-500' : 'hover:text-orange-500'
              }`}
            >
              Contacto
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-orange-500 transition-all duration-300 ${
                activeSection === 'contacto' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center -mt-20">
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl text-gray-900 font-bold">
              Conectamos personas,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral-500 to-cyan-500">
                acompañamos vidas
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              Profesionales capacitados para brindar acompañamiento terapéutico personalizado y de calidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={() => scrollToSection('pacientes')}
                className="px-8 py-4 bg-coral-500 text-white rounded-full hover:bg-coral-600 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
              >
                Agendá una Entrevista
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection('acompanantes')}
                className="px-8 py-4 bg-white text-coral-500 border-2 border-coral-500 rounded-full hover:bg-coral-50 transition-all flex items-center justify-center gap-2 group"
              >
                Unite al Equipo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-coral-400/20 to-cyan-400/20 rounded-3xl blur-3xl"></div>
            <div className="relative rounded-3xl shadow-2xl w-full h-[500px] bg-gradient-to-br from-coral-100 via-amber-50 to-cyan-100 flex items-center justify-center overflow-hidden">
              <img src={heroImage} alt="Acompañamiento terapéutico" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-10 w-20 h-20 bg-amber-400/20 rounded-full blur-2xl"
      ></motion.div>
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-20 left-10 w-32 h-32 bg-cyan-400/20 rounded-full blur-3xl"
      ></motion.div>
    </div>
  );
}