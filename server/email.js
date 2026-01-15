import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// Configurar el transporter de email
const createTransporter = () => {
  // Si hay credenciales de Gmail configuradas
  if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Contraseña de aplicación de Gmail
      },
    });
  }

  // Si hay configuración SMTP personalizada
  if (process.env.SMTP_HOST) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  return null;
};

// Función para enviar email de nuevo paciente
export const sendPacienteEmail = async (pacienteData) => {
  const transporter = createTransporter();
  
  if (!transporter) {
    console.warn('⚠️  Email no configurado. Los datos se guardan en la base de datos pero no se enviará email.');
    return false;
  }

  const recipientEmail = process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER;

  if (!recipientEmail) {
    console.warn('⚠️  RECIPIENT_EMAIL no configurado. No se enviará email.');
    return false;
  }

  const mailOptions = {
    from: `"Acompañarte" <${process.env.EMAIL_USER}>`,
    to: recipientEmail,
    subject: `📋 Nuevo formulario de paciente: ${pacienteData.nombre}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #ff6b6b;">Nuevo formulario de paciente recibido</h2>
        
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Información del paciente:</h3>
          <p><strong>Nombre:</strong> ${pacienteData.nombre}</p>
          <p><strong>Email:</strong> ${pacienteData.email}</p>
          <p><strong>Teléfono:</strong> ${pacienteData.telefono || 'No proporcionado'}</p>
          ${pacienteData.mensaje ? `<p><strong>Mensaje:</strong></p><p style="background-color: white; padding: 10px; border-radius: 4px;">${pacienteData.mensaje}</p>` : ''}
        </div>
        
        <p style="color: #666; font-size: 12px;">
          Fecha: ${new Date().toLocaleString('es-AR')}
        </p>
      </div>
    `,
    text: `
Nuevo formulario de paciente recibido

Información del paciente:
- Nombre: ${pacienteData.nombre}
- Email: ${pacienteData.email}
- Teléfono: ${pacienteData.telefono || 'No proporcionado'}
${pacienteData.mensaje ? `- Mensaje: ${pacienteData.mensaje}` : ''}

Fecha: ${new Date().toLocaleString('es-AR')}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('✅ Email de paciente enviado correctamente a:', recipientEmail);
    return true;
  } catch (error) {
    console.error('❌ Error al enviar email de paciente:', error);
    return false;
  }
};

// Función para enviar email de nuevo acompañante
export const sendAcompananteEmail = async (acompananteData) => {
  const transporter = createTransporter();
  
  if (!transporter) {
    console.warn('⚠️  Email no configurado. Los datos se guardan en la base de datos pero no se enviará email.');
    return false;
  }

  const recipientEmail = process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER;

  if (!recipientEmail) {
    console.warn('⚠️  RECIPIENT_EMAIL no configurado. No se enviará email.');
    return false;
  }

  const mailOptions = {
    from: `"Acompañarte" <${process.env.EMAIL_USER}>`,
    to: recipientEmail,
    subject: `🤝 Nueva postulación de acompañante: ${acompananteData.nombre}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #4ecdc4;">Nueva postulación de acompañante recibida</h2>
        
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Información del acompañante:</h3>
          <p><strong>Nombre:</strong> ${acompananteData.nombre}</p>
          <p><strong>Email:</strong> ${acompananteData.email}</p>
          <p><strong>Teléfono:</strong> ${acompananteData.telefono || 'No proporcionado'}</p>
          ${acompananteData.experiencia ? `<p><strong>Experiencia y formación:</strong></p><p style="background-color: white; padding: 10px; border-radius: 4px; white-space: pre-wrap;">${acompananteData.experiencia}</p>` : ''}
          ${acompananteData.cv ? `<p><strong>CV:</strong> ${acompananteData.cv}</p>` : ''}
        </div>
        
        <p style="color: #666; font-size: 12px;">
          Fecha: ${new Date().toLocaleString('es-AR')}
        </p>
      </div>
    `,
    text: `
Nueva postulación de acompañante recibida

Información del acompañante:
- Nombre: ${acompananteData.nombre}
- Email: ${acompananteData.email}
- Teléfono: ${acompananteData.telefono || 'No proporcionado'}
${acompananteData.experiencia ? `- Experiencia y formación: ${acompananteData.experiencia}` : ''}
${acompananteData.cv ? `- CV: ${acompananteData.cv}` : ''}

Fecha: ${new Date().toLocaleString('es-AR')}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('✅ Email de acompañante enviado correctamente a:', recipientEmail);
    return true;
  } catch (error) {
    console.error('❌ Error al enviar email de acompañante:', error);
    return false;
  }
};

