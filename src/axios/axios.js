import axios from 'axios';

// Crear una instancia de axios con configuración personalizada
const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/', // Reemplaza con tu URL base
  timeout: 5000, // Tiempo de espera de 5 segundos
  headers: {
    'Content-Type': 'application/json', // Formato de las solicitudes
    'Accept': 'application/json', // Formato de las respuestas aceptadas
    // Agregar más encabezados si es necesario, por ejemplo, para tokens de autenticación:
    // 'Authorization': `Bearer ${token}`
  }
});

// Manejar errores globalmente
api.interceptors.response.use(
  response => response, // Si la respuesta es exitosa, solo la devuelve
  error => {
    // Manejo de errores global, por ejemplo, manejo de errores 401 (no autenticado)
    if (error.response && error.response.status === 401) {
      console.error('No autenticado. Redirigiendo al login...');
      // Redirigir al login o cualquier otra lógica
    }
    return Promise.reject(error); // Rechazar la promesa con el error para manejarlo localmente
  }
);

export default api;
