import { Heart, Users, Shield, Target, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const values = [
    {
      icon: Heart,
      title: 'Compromiso',
      description: 'Nos comprometemos con el bienestar de cada persona que confía en nosotros.'
    },
    {
      icon: Users,
      title: 'Profesionalismo',
      description: 'Contamos con un equipo de acompañantes terapéuticos capacitados y supervisados.'
    },
    {
      icon: Shield,
      title: 'Confianza',
      description: 'Construimos relaciones basadas en la empatía, el respeto y la confidencialidad.'
    },
    {
      icon: Target,
      title: 'Personalización',
      description: 'Cada proceso es único y diseñamos el acompañamiento según las necesidades de cada persona.'
    }
  ];

  return (
    <section id="nosotros" className="py-20 bg-gradient-to-br from-cyan-50 via-white to-orange-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            ¿Quiénes somos?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conectamos personas con acompañantes terapéuticos profesionales para que encuentres el apoyo que necesitás.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-24 max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Nuestra misión
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Facilitamos el acceso a acompañamiento terapéutico de calidad, conectando personas que necesitan apoyo con profesionales capacitados.
            </p>
            <div className="bg-gradient-to-r from-coral-500 to-cyan-500 h-1 w-24 rounded-full mx-auto"></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-24"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Nuestros valores
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow cursor-pointer"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-14 h-14 bg-gradient-to-br from-coral-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4"
                >
                  <value.icon className="w-7 h-7 text-white" />
                </motion.div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-r from-coral-500 to-cyan-500 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">
            ¿Querés conocer más?
          </h3>
          <p className="text-lg mb-8 opacity-90">
            Estamos para ayudarte a encontrar el acompañamiento que necesitás.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById('contacto');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-coral-500 rounded-full hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl font-medium"
          >
            <MessageCircle className="w-5 h-5" />
            Contactanos
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}