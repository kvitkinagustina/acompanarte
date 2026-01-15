import { Heart, Users, Clock, Shield } from 'lucide-react';
import { motion } from 'motion/react';

export function Services() {
  const services = [
    {
      icon: Heart,
      title: 'Acompañamiento Personalizado',
      description: 'Cada persona es única. Diseñamos un plan de acompañamiento adaptado a las necesidades individuales de cada paciente.',
      color: 'from-red-400 to-red-500'
    },
    {
      icon: Users,
      title: 'Profesionales Capacitados',
      description: 'Nuestro equipo está formado por acompañantes terapéuticos certificados con experiencia en diversas áreas de la salud mental.',
      color: 'from-teal-400 to-teal-500'
    },
    {
      icon: Clock,
      title: 'Disponibilidad Flexible',
      description: 'Ofrecemos horarios flexibles y modalidades de acompañamiento que se adaptan a tus necesidades y rutina.',
      color: 'from-yellow-400 to-yellow-500'
    },
    {
      icon: Shield,
      title: 'Confianza y Seguridad',
      description: 'Trabajamos con total confidencialidad y profesionalismo, priorizando siempre el bienestar de nuestros pacientes.',
      color: 'from-rose-400 to-rose-500'
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ¿Qué ofrecemos?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Un servicio integral de acompañamiento terapéutico centrado en las personas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}