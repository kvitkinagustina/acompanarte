import { CheckCircle, Calendar } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';

export function ForPatients() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const response = await fetch('http://localhost:3001/api/pacientes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage({
          type: 'success',
          text: '¡Gracias por contactarnos! Nos comunicaremos con vos pronto para coordinar una entrevista.'
        });
        setFormData({ nombre: '', email: '', telefono: '', mensaje: '' });
        // Limpiar mensaje después de 5 segundos
        setTimeout(() => setSubmitMessage(null), 5000);
      } else {
        setSubmitMessage({
          type: 'error',
          text: data.error || 'Hubo un error al enviar el formulario. Por favor, intentá nuevamente.'
        });
      }
    } catch (error) {
      console.error('Error al enviar formulario:', error);
      setSubmitMessage({
        type: 'error',
        text: 'No se pudo conectar con el servidor. Por favor, verificá tu conexión e intentá nuevamente.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    'Entrevista inicial sin cargo',
    'Evaluación personalizada de necesidades',
    'Asignación del acompañante más adecuado',
    'Seguimiento continuo del proceso',
    'Flexibilidad de horarios y modalidades'
  ];

  return (
    <section id="pacientes" className="py-20 bg-gradient-to-br from-coral-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ¿Necesitás acompañamiento terapéutico?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Estamos acá para ayudarte. Agendá una entrevista con nuestro equipo profesional y encontremos juntos la mejor forma de acompañarte.
            </p>
            
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-coral-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>

          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-8 h-8 text-coral-500" />
              <h3 className="text-2xl font-bold text-gray-900">
                Solicita una Entrevista
              </h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="patient-nombre" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="patient-nombre"
                  required
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-coral-500 focus:border-transparent transition-all"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="patient-email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="patient-email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-coral-500 focus:border-transparent transition-all"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="patient-telefono" className="block text-sm font-medium text-gray-700 mb-2">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  id="patient-telefono"
                  required
                  value={formData.telefono}
                  onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-coral-500 focus:border-transparent transition-all"
                  placeholder="+54 9 11 1234-5678"
                />
              </div>

              <div>
                <label htmlFor="patient-mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                  Contanos brevemente tu situación
                </label>
                <textarea
                  id="patient-mensaje"
                  rows={4}
                  value={formData.mensaje}
                  onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-coral-500 focus:border-transparent transition-all resize-none"
                  placeholder="Escribí acá cualquier información que consideres relevante..."
                />
              </div>

              {submitMessage && (
                <div className={`p-4 rounded-xl ${
                  submitMessage.type === 'success' 
                    ? 'bg-green-50 text-green-800 border border-green-200' 
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}>
                  <p className="text-sm font-medium">{submitMessage.text}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-4 bg-coral-500 text-white rounded-xl transition-all shadow-lg hover:shadow-xl font-medium ${
                  isSubmitting 
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'hover:bg-coral-600'
                }`}
              >
                {isSubmitting ? 'Enviando...' : 'Solicitar Entrevista'}
              </button>

              <p className="text-sm text-gray-500 text-center">
                Nos pondremos en contacto con vos dentro de las 24 horas hábiles
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}