// Objeto de cuenta
let cuenta = {
  saldo: 0,
  transacciones: [], // Array de objetos para almacenar transacciones
};

// Mostrar el estado actual del saldo
function consultarSaldo() {
  alert(`Tu saldo actual es: $${cuenta.saldo}`);
}

// Mostrar historial de transacciones
function verHistorial() {
  let historial = "Últimas transacciones:\n";
  if (cuenta.transacciones.length === 0) {
    historial += "No hay transacciones registradas.";
  } else {
    cuenta.transacciones.forEach((t) => {
      historial += `${t.tipo}: $${t.monto}\n`;
    });
  }
  alert(historial);
}

// Depositar dinero
function depositar() {
  let monto = parseFloat(prompt("Ingresa el monto que deseas depositar:"));
  if (isNaN(monto) || monto <= 0) {
    alert("Monto inválido.");
    return;
  }
  cuenta.saldo += monto;
  registrarTransaccion("Depósito", monto);
  alert(`Depósito exitoso. Nuevo saldo: $${cuenta.saldo}`);
}

// Retirar dinero
function retirar() {
  let monto = parseFloat(prompt("Ingresa el monto que deseas retirar (máx $500):"));
  if (isNaN(monto) || monto <= 0) {
    alert("Monto inválido.");
    return;
  }
  if (monto > 500) {
    alert("No puedes retirar más de $500 en una sola transacción.");
    return;
  }
  if (monto > cuenta.saldo) {
    alert("Fondos insuficientes.");
    return;
  }
  cuenta.saldo -= monto;
  registrarTransaccion("Retiro", monto);
  alert(`Retiro exitoso. Nuevo saldo: $${cuenta.saldo}`);
}

// Registrar una transacción como objeto y mantener solo las últimas 5
function registrarTransaccion(tipo, monto) {
  cuenta.transacciones.push({ tipo, monto });
  if (cuenta.transacciones.length > 5) {
    cuenta.transacciones.shift(); // Elimina la más antigua
  }
}

// Menú principal
function menu() {
  let opcion;
  do {
    opcion = prompt(
      "Bienvenido al Cajero Automático\n\n" +
      "¿Qué quieres hacer?\n" +
      "1. Consultar saldo\n" +
      "2. Depositar dinero\n" +
      "3. Retirar dinero\n" +
      "4. Ver historial de transacciones\n" +
      "5. Salir\n\n"
    );

    switch (opcion) {
      case "1":
        consultarSaldo();
        break;
      case "2":
        depositar();
        break;
      case "3":
        retirar();
        break;
      case "4":
        verHistorial();
        break;
      case "5":
        alert("Gracias por usar el cajero. ¡Hasta luego!");
        break;
      default:
        alert("Opción no válida. Intenta de nuevo.");
    }
  } while (opcion !== "5");
}

// Ejecutar el menú
menu();
