import { Mail, Phone, MapPin, Clock, CheckCircle, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function Contact() {
  const contactItems = [
    {
      icon: Mail,
      title: 'Email',
      content: 'info@acompanarte.com',
      link: 'mailto:info@acompanarte.com',
      bgColor: 'bg-coral-100',
      iconColor: 'text-coral-600',
      hoverColor: 'hover:text-coral-600'
    },
    {
      icon: Phone,
      title: 'Teléfono',
      content: '+54 9 11 1234-5678',
      link: 'https://wa.me/5491112345678?text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20acompa%C3%B1amiento%20terap%C3%A9utico',
      bgColor: 'bg-cyan-100',
      iconColor: 'text-cyan-600',
      hoverColor: 'hover:text-cyan-600'
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      content: 'Buenos Aires, Argentina\n(Atención en modalidad presencial y virtual)',
      bgColor: 'bg-amber-100',
      iconColor: 'text-amber-600'
    },
    {
      icon: Clock,
      title: 'Horarios',
      content: 'Lunes a Viernes: 9:00 - 18:00\nSábados: 9:00 - 13:00',
      bgColor: 'bg-rose-100',
      iconColor: 'text-rose-600'
    }
  ];

  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Contacto
            </h2>
            <p className="text-xl text-gray-600">
              Estamos acá para responder tus consultas
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-xl p-8 md:p-12 max-w-3xl mx-auto"
          >
            <div className="space-y-6">
              {/* Email y Teléfono en fila */}
              <div className="grid md:grid-cols-2 gap-6">
                {contactItems.filter(item => item.title === 'Email' || item.title === 'Teléfono').map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all"
                    >
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`w-14 h-14 ${item.bgColor} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm`}
                      >
                        <Icon className={`w-7 h-7 ${item.iconColor}`} />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                        {item.link ? (
                          <a href={item.link} target="_blank" rel="noopener noreferrer" className={`text-gray-600 ${item.hoverColor} transition-colors font-medium`}>
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-gray-600 whitespace-pre-line leading-relaxed">
                            {item.content}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Horarios ocupando todo el ancho */}
              {contactItems.filter(item => item.title === 'Horarios').map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    whileHover={{ y: -5 }}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-14 h-14 ${item.bgColor} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm`}
                    >
                      <Icon className={`w-7 h-7 ${item.iconColor}`} />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 whitespace-pre-line leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            
            {/* Botón WhatsApp destacado */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8"
            >
              <motion.a
                href="https://wa.me/5491112345678?text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20acompa%C3%B1amiento%20terap%C3%A9utico"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-3 w-full px-8 py-5 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl hover:from-green-600 hover:to-green-700 transition-all shadow-lg hover:shadow-xl font-medium text-lg"
              >
                <MessageCircle className="w-6 h-6" />
                Escribinos por WhatsApp
              </motion.a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 pt-6 border-t border-gray-200"
            >
              <div className="bg-gradient-to-br from-coral-50 to-cyan-50 rounded-2xl p-6 text-center">
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-5 h-5 text-cyan-600" />
                  <p className="text-gray-700 font-medium">
                    Respondemos todas las consultas dentro de las 24 horas hábiles
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}