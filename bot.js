// bot.js - Lógica del Bot determinista (v0.1)

function decidirMovimiento(estadoJSON) {
    // Convertimos el texto JSON a objeto JavaScript si viene en formato string
    const estado = typeof estadoJSON === 'string' ? JSON.parse(estadoJSON) : estadoJSON;

    // Regla determinista básica: seleccionar la primera pieza disponible y moverla 'derecha'
    const pieza = estado.piezas && estado.piezas.length > 0 ? estado.piezas[0].id : "P1";
    const direcciones = ["arriba", "abajo", "izquierda", "derecha"];
    
    // Elegimos una dirección basada en el turno para que sea determinista
    const direccionElegida = direcciones[estado.turno % direcciones.length] || "derecha";

    return {
        pieceId: pieza,
        direction: direccionElegida
    };
}

// Datos de prueba en formato JSON
const estadoEjemplo = {
    turno: 1,
    piezas: [{ id: "bot-1", posicion: [0, 0] }],
    tableroTamano: 10
};

console.log("=== EJECUCIÓN DEL BOT v0.1 ===");
console.log("Estado de entrada:", estadoEjemplo);
console.log("Respuesta del Bot:", decidirMovimiento(estadoEjemplo));

module.exports = { decidirMovimiento };