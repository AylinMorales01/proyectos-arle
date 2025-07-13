const mysql = require('mysql2');

// Crear conexión
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',         
  database: 'clientes',  // ✅ Cambia aquí al nombre correcto
  port: 3306           
});

// Conectar con mejor manejo de errores
db.connect((err) => {
  if (err) {
    console.log('❌ Error de conexión a MySQL:');
    console.log('Código:', err.code);
    console.log('Mensaje:', err.message);
  } else {
    console.log('✅ Conectado exitosamente a MySQL - Base de datos:');
  }
});

module.exports = db;