import express from 'express';
import cors from 'cors';
import sqlite3 from 'sqlite3';
import { promisify } from 'util';
import path from 'path';
import { fileURLToPath } from 'url';
import { sendPacienteEmail, sendAcompananteEmail } from './email.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Configurar SQLite
const dbPath = path.join(__dirname, 'database.sqlite');
const db = new sqlite3.Database(dbPath);

// Promisificar métodos de la base de datos
const dbRun = promisify(db.run.bind(db));
const dbAll = promisify(db.all.bind(db));
const dbGet = promisify(db.get.bind(db));

// Inicializar tablas
const initDatabase = async () => {
  try {
    // Tabla para formularios de pacientes
    await dbRun(`
      CREATE TABLE IF NOT EXISTS pacientes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT NOT NULL,
        email TEXT NOT NULL,
        telefono TEXT,
        mensaje TEXT,
        fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Tabla para formularios de acompañantes
    await dbRun(`
      CREATE TABLE IF NOT EXISTS acompanantes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT NOT NULL,
        email TEXT NOT NULL,
        telefono TEXT,
        experiencia TEXT,
        cv TEXT,
        fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    console.log('Base de datos inicializada correctamente');
  } catch (error) {
    console.error('Error al inicializar la base de datos:', error);
  }
};

// Inicializar base de datos al iniciar el servidor
initDatabase();

// Rutas API

// Endpoint para guardar formulario de pacientes
app.post('/api/pacientes', async (req, res) => {
  try {
    const { nombre, email, telefono, mensaje } = req.body;

    // Validación básica
    if (!nombre || !email) {
      return res.status(400).json({ 
        error: 'Nombre y email son requeridos' 
      });
    }

    await dbRun(
      `INSERT INTO pacientes (nombre, email, telefono, mensaje) 
       VALUES (?, ?, ?, ?)`,
      [nombre, email, telefono || null, mensaje || null]
    );

    // Enviar email de notificación
    await sendPacienteEmail({ nombre, email, telefono, mensaje });

    res.status(201).json({ 
      success: true, 
      message: 'Formulario enviado correctamente' 
    });
  } catch (error) {
    console.error('Error al guardar formulario de paciente:', error);
    res.status(500).json({ 
      error: 'Error al procesar el formulario' 
    });
  }
});

// Endpoint para guardar formulario de acompañantes
app.post('/api/acompanantes', async (req, res) => {
  try {
    const { nombre, email, telefono, experiencia, cv } = req.body;

    // Validación básica
    if (!nombre || !email) {
      return res.status(400).json({ 
        error: 'Nombre y email son requeridos' 
      });
    }

    await dbRun(
      `INSERT INTO acompanantes (nombre, email, telefono, experiencia, cv) 
       VALUES (?, ?, ?, ?, ?)`,
      [nombre, email, telefono || null, experiencia || null, cv || null]
    );

    // Enviar email de notificación
    await sendAcompananteEmail({ nombre, email, telefono, experiencia, cv });

    res.status(201).json({ 
      success: true, 
      message: 'Postulación enviada correctamente' 
    });
  } catch (error) {
    console.error('Error al guardar formulario de acompañante:', error);
    res.status(500).json({ 
      error: 'Error al procesar la postulación' 
    });
  }
});

// Endpoint para obtener todos los pacientes (útil para administración)
app.get('/api/pacientes', async (req, res) => {
  try {
    const pacientes = await dbAll('SELECT * FROM pacientes ORDER BY fecha_creacion DESC');
    res.json(pacientes);
  } catch (error) {
    console.error('Error al obtener pacientes:', error);
    res.status(500).json({ error: 'Error al obtener los datos' });
  }
});

// Endpoint para obtener todos los acompañantes (útil para administración)
app.get('/api/acompanantes', async (req, res) => {
  try {
    const acompanantes = await dbAll('SELECT * FROM acompanantes ORDER BY fecha_creacion DESC');
    res.json(acompanantes);
  } catch (error) {
    console.error('Error al obtener acompañantes:', error);
    res.status(500).json({ error: 'Error al obtener los datos' });
  }
});

// Endpoint de salud
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Servidor funcionando correctamente' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor backend corriendo en http://localhost:${PORT}`);
  console.log(`📊 Base de datos: ${dbPath}`);
});

