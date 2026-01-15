import { Calendar, Users, UserCheck, Heart, ClipboardCheck } from 'lucide-react';
import { motion } from 'motion/react';

export function HowItWorks() {
  const steps = [
    {
      icon: Calendar,
      number: '01',
      title: 'Primer Contacto',
      description: 'Completás el formulario o nos contactás por teléfono/WhatsApp para contarnos tu situación.',
      color: 'from-coral-500 to-orange-500'
    },
    {
      icon: Users,
      number: '02',
      title: 'Entrevista Inicial',
      description: 'Coordinamos una entrevista sin cargo para conocerte, entender tus necesidades y responder todas tus dudas.',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: UserCheck,
      number: '03',
      title: 'Asignación del Acompañante',
      description: 'Seleccionamos al profesional más adecuado para tu caso según tu perfil y necesidades específicas.',
      color: 'from-yellow-500 to-amber-500'
    },
    {
      icon: Heart,
      number: '04',
      title: 'Inicio del Acompañamiento',
      description: 'Comenzás el proceso terapéutico con tu acompañante en los horarios y modalidad que acordamos juntos.',
      color: 'from-rose-500 to-pink-500'
    },
    {
      icon: ClipboardCheck,
      number: '05',
      title: 'Seguimiento Continuo',
      description: 'Evaluamos periódicamente el proceso para asegurar que el acompañamiento esté cumpliendo los objetivos.',
      color: 'from-purple-500 to-violet-500'
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            ¿Cómo funciona?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un proceso simple y transparente diseñado para que encuentres el acompañamiento que necesitás
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative mb-12 last:mb-0"
              >
                <div className={`flex flex-col md:flex-row gap-8 items-center ${isEven ? '' : 'md:flex-row-reverse'}`}>
                  {/* Número y línea conectora */}
                  <div className="flex-shrink-0 relative">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </motion.div>
                    
                    {/* Línea conectora - solo si no es el último */}
                    {index < steps.length - 1 && (
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                        className="hidden md:block absolute left-1/2 top-20 w-0.5 h-12 bg-gradient-to-b from-gray-300 to-transparent transform -translate-x-1/2"
                      />
                    )}
                  </div>

                  {/* Contenido */}
                  <div className={`flex-1 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                    <div className={`flex items-center gap-3 mb-4 ${isEven ? '' : 'md:flex-row-reverse'}`}>
                      <span className={`text-5xl font-bold bg-gradient-to-br ${step.color} bg-clip-text text-transparent`}>
                        {step.number}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 relative bg-white rounded-3xl p-12 max-w-3xl mx-auto border-2 border-gray-100 shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-coral-50/30 via-cyan-50/30 to-amber-50/30 rounded-3xl"></div>
          <div className="relative flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-coral-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              ¿Tenés dudas sobre el proceso?
            </h3>
            <p className="text-gray-600 mb-8 max-w-xl">
              Estamos para ayudarte y responder todas tus preguntas sin compromiso
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contacto');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-gradient-to-r from-coral-500 to-cyan-500 text-white rounded-full hover:from-coral-600 hover:to-cyan-600 transition-all shadow-lg hover:shadow-xl font-medium hover:scale-105"
            >
              Contactanos Ahora
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}