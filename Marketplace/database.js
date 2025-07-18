// database.js
import mysql from 'mysql2/promise'

// Creamos un "pool" de conexiones.
// Un pool es más eficiente que crear una conexión por cada consulta,
// ya que reutiliza las conexiones existentes.
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
})

// Exportamos el pool para que pueda ser usado en otros archivos,
// principalmente en el repositorio.
export default pool
