import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: '¿Cuánto tiempo dura un proceso de acompañamiento terapéutico?',
      answer: 'La duración depende de cada situación particular y de los objetivos terapéuticos que se establezcan. Algunos acompañamientos pueden ser breves (algunas semanas) mientras que otros se extienden durante meses. Lo importante es que el proceso se evalúa periódicamente junto con vos y el equipo tratante.'
    },
    {
      question: '¿El acompañamiento es presencial o virtual?',
      answer: 'Ofrecemos ambas modalidades según lo que sea más conveniente y terapéuticamente indicado para cada caso. Muchas veces se combinan encuentros presenciales con seguimiento virtual. En la entrevista inicial definimos juntos la mejor modalidad para tu situación.'
    },
    {
      question: '¿En qué zonas trabajan?',
      answer: 'Trabajamos principalmente en Ciudad Autónoma de Buenos Aires (CABA) y Gran Buenos Aires (GBA). Para el acompañamiento virtual no hay límites geográficos, podemos atender personas de cualquier parte de Argentina.'
    },
    {
      question: '¿Qué horarios tienen disponibles?',
      answer: 'Contamos con acompañantes con disponibilidad flexible que incluye mañana, tarde, noche y fines de semana. Nos adaptamos a tus necesidades y a tu rutina para que el acompañamiento se integre de la mejor manera posible a tu vida cotidiana.'
    },
    {
      question: '¿Qué pasa si no me siento cómodo/a con el acompañante asignado?',
      answer: 'El vínculo terapéutico es fundamental para que el acompañamiento funcione. Si por algún motivo sentís que la relación no está funcionando, podés comunicárnoslo con total confianza y buscaremos otro profesional que se adapte mejor a tu perfil. Tu bienestar es nuestra prioridad.'
    },
    {
      question: '¿La información que comparto es confidencial?',
      answer: 'Absolutamente. Todos nuestros acompañantes están sujetos al secreto profesional. La información que compartas durante el proceso es estrictamente confidencial, excepto en situaciones de riesgo donde sea necesario intervenir por tu seguridad, lo cual siempre se hace en articulación con vos y el equipo tratante.'
    },
    {
      question: '¿Necesito tener una indicación médica o de mi psicólogo/a?',
      answer: 'Si bien es recomendable que el acompañamiento terapéutico esté articulado con otros profesionales de la salud mental (psicólogo/a, psiquiatra, terapeuta ocupacional, etc.), no es excluyente. En la entrevista inicial evaluamos tu situación y, si es necesario, te sugerimos que consultes con otros profesionales para armar un equipo de trabajo integral.'
    },
    {
      question: '¿Qué incluye la entrevista inicial?',
      answer: 'La entrevista inicial es un encuentro sin cargo donde nos conocemos, nos contás tu situación y tus necesidades, te explicamos cómo trabajamos, respondemos todas tus dudas y evaluamos juntos si nuestro servicio es adecuado para vos. No hay compromiso de contratación después de la entrevista.'
    }
  ];

  return (
    <section id="preguntas-frecuentes" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Respondemos las consultas más comunes para que tengas toda la información que necesitás
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="mb-6"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full text-left bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border-2 ${
                  openIndex === index 
                    ? 'border-coral-500 shadow-lg' 
                    : 'border-gray-200 hover:border-cyan-300'
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-bold text-gray-900 pr-8">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className={`w-6 h-6 transition-colors ${
                      openIndex === index ? 'text-coral-500' : 'text-gray-400'
                    }`} />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-600 mt-4 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center mt-16 max-w-2xl mx-auto"
        >
          <div className="bg-gradient-to-r from-coral-500 to-cyan-500 rounded-3xl p-8 md:p-10 text-white">
            <h3 className="text-2xl font-bold mb-4">
              ¿Todavía tenés dudas?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Estamos para ayudarte. Escribinos y te respondemos todas tus consultas.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById('contacto');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-white text-coral-500 rounded-full hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl font-medium"
            >
              Contactanos
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}