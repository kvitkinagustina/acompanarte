import { Star, Award, BookOpen, HeartHandshake } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';

export function ForCompanions() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    experiencia: '',
    cv: '' as string | File
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      // Si hay un archivo CV, convertirlo a base64 para enviarlo como string
      let cvData = '';
      if (formData.cv && typeof formData.cv === 'object') {
        // Por ahora, solo guardamos el nombre del archivo
        // En producción, podrías subir el archivo a un servicio de almacenamiento
        cvData = formData.cv.name;
      } else {
        cvData = formData.cv || '';
      }

      const response = await fetch('http://localhost:3001/api/acompanantes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: formData.nombre,
          email: formData.email,
          telefono: formData.telefono,
          experiencia: formData.experiencia,
          cv: cvData,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage({
          type: 'success',
          text: '¡Gracias por tu interés! Revisaremos tu postulación y nos contactaremos con vos pronto.'
        });
        setFormData({ nombre: '', email: '', telefono: '', experiencia: '', cv: '' });
        // Limpiar mensaje después de 5 segundos
        setTimeout(() => setSubmitMessage(null), 5000);
      } else {
        setSubmitMessage({
          type: 'error',
          text: data.error || 'Hubo un error al enviar la postulación. Por favor, intentá nuevamente.'
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
    {
      icon: Star,
      title: 'Trabajo Significativo',
      description: 'Hacé una diferencia real en la vida de las personas'
    },
    {
      icon: Award,
      title: 'Desarrollo Profesional',
      description: 'Formación continua y supervisión de calidad'
    },
    {
      icon: BookOpen,
      title: 'Capacitación Constante',
      description: 'Acceso a cursos y talleres especializados'
    },
    {
      icon: HeartHandshake,
      title: 'Equipo Colaborativo',
      description: 'Trabajo en red con otros profesionales'
    }
  ];

  return (
    <section id="acompanantes" className="py-24 bg-gradient-to-br from-coral-50 via-cyan-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Unite a Nuestro Equipo
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Buscamos acompañantes terapéuticos comprometidos con el bienestar de las personas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 bg-gradient-to-br from-coral-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4"
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Requisitos
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Título de Acompañante Terapéutico o formación afín en salud mental</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Experiencia previa en el área (deseable)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Empatía, paciencia y vocación de servicio</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Disponibilidad horaria flexible</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Compromiso con la formación continua</span>
                </li>
              </ul>
            </div>

          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 sticky top-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Postulate Ahora
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="companion-nombre" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="companion-nombre"
                  required
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="companion-email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="companion-email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="companion-telefono" className="block text-sm font-medium text-gray-700 mb-2">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  id="companion-telefono"
                  required
                  value={formData.telefono}
                  onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  placeholder="+54 9 11 1234-5678"
                />
              </div>

              <div>
                <label htmlFor="companion-experiencia" className="block text-sm font-medium text-gray-700 mb-2">
                  Experiencia y formación *
                </label>
                <textarea
                  id="companion-experiencia"
                  rows={4}
                  required
                  value={formData.experiencia}
                  onChange={(e) => setFormData({ ...formData, experiencia: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none"
                  placeholder="Contanos sobre tu formación, experiencia y por qué querés unirte a Acompañarte..."
                />
              </div>

              <div>
                <label htmlFor="companion-cv" className="block text-sm font-medium text-gray-700 mb-2">
                  Subir CV (PDF, DOC, DOCX)
                </label>
                <div className="relative">
                  <input
                    type="file"
                    id="companion-cv"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => setFormData({ ...formData, cv: e.target.files?.[0] || '' })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-cyan-50 file:text-cyan-700 hover:file:bg-cyan-100 cursor-pointer"
                  />
                  {formData.cv && typeof formData.cv === 'object' && (
                    <p className="mt-2 text-sm text-gray-600">
                      Archivo seleccionado: {formData.cv.name}
                    </p>
                  )}
                </div>
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
                className={`w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-xl transition-all shadow-lg hover:shadow-xl font-medium ${
                  isSubmitting 
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'hover:from-cyan-600 hover:to-cyan-700'
                }`}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Postulación'}
              </button>

              <p className="text-sm text-gray-500 text-center">
                Evaluaremos tu perfil y te contactaremos para una entrevista
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}