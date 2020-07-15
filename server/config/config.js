// =============================================
// Puerto
// =============================================

process.env.PORT = process.env.PORT || 3000;

// =============================================
// Entorno
// =============================================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// =============================================
// Vencimiento del Token
// =============================================
// 60 segundos
// 60 minutos
// 24 horas
// 30 días
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// =============================================
// SEED de Autenticación
// =============================================
process.env.SEED = process.env.SEED || 'seed-desarrollo';

// =============================================
// Base de datos
// =============================================

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://cafe_user:xavielportador11@cafe.onses.mongodb.net/cafe'
}

process.env.URLDB = urlDB;