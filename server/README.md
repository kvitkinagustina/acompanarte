# Backend - Acompañarte

Servidor backend para manejar los formularios de pacientes y acompañantes.

## Instalación

1. Instalar dependencias:
```bash
cd server
npm install
```

## Ejecutar

### Desarrollo (con auto-reload):
```bash
npm run dev
```

### Producción:
```bash
npm start
```

El servidor se ejecutará en `http://localhost:3001`

## Endpoints API

### POST `/api/pacientes`
Guarda un formulario de paciente.

**Body:**
```json
{
  "nombre": "Juan Pérez",
  "email": "juan@example.com",
  "telefono": "+54 9 11 1234-5678",
  "mensaje": "Mensaje opcional"
}
```

### POST `/api/acompanantes`
Guarda un formulario de acompañante.

**Body:**
```json
{
  "nombre": "María García",
  "email": "maria@example.com",
  "telefono": "+54 9 11 1234-5678",
  "experiencia": "Descripción de experiencia",
  "cv": "nombre-archivo.pdf"
}
```

### GET `/api/pacientes`
Obtiene todos los formularios de pacientes.

### GET `/api/acompanantes`
Obtiene todos los formularios de acompañantes.

### GET `/api/health`
Verifica el estado del servidor.

## Base de Datos

Se utiliza SQLite. La base de datos se crea automáticamente en `server/database.sqlite` al iniciar el servidor por primera vez.

## Configuración de Email

El sistema puede enviar emails automáticamente cuando se reciben formularios. Para configurarlo:

### 1. Crear archivo `.env`

Copia el archivo `env.example` como `.env`:
```bash
cp env.example .env
```

### 2. Configurar Gmail (Recomendado)

1. Ve a tu cuenta de Google: https://myaccount.google.com/
2. Activa la verificación en 2 pasos
3. Ve a "Contraseñas de aplicaciones": https://myaccount.google.com/apppasswords
4. Crea una nueva contraseña de aplicación para "Correo"
5. Copia la contraseña generada

Edita el archivo `.env`:
```env
EMAIL_USER=tu-email@gmail.com
EMAIL_PASS=la-contraseña-de-aplicación-generada
RECIPIENT_EMAIL=tu-email@gmail.com
```

### 3. Configurar otro proveedor SMTP (Opcional)

Si prefieres usar otro proveedor de email (Outlook, Yahoo, etc.):
```env
SMTP_HOST=smtp.tu-proveedor.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=tu-usuario
SMTP_PASS=tu-contraseña
RECIPIENT_EMAIL=tu-email@ejemplo.com
```

### 4. Reiniciar el servidor

Después de configurar el `.env`, reinicia el servidor para que tome los cambios.

**Nota:** Si no configuras el email, los datos se seguirán guardando en la base de datos, solo que no recibirás notificaciones por email.

