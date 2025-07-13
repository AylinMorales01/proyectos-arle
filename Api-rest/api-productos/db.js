const mysql = require('mysql2');

// Crear conexión a la base de datos
const conexion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',        // pon tu contraseña si tienes
  database: 'inventario'
});

// Conectar a la base de datos
conexion.connect((err) => {
  if (err) {
    console.error('Error de conexión:', err);
  } else {
    console.log('Conectado a la base de datos MySQL');
  }
});

module.exports = conexion;