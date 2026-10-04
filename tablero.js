
// 1. GENERADOR DETERMINISTA CON SEMILLA

function crearGeneradorSemilla(semilla) {
    let s = semilla;
    return function() {
        s = (s * 9301 + 49297) % 233280;
        return s / 233280;
    };
}


// 2. CREACIÓN DEL TABLERO DE 10x10 Y CASAS

function inicializarTablero(semilla, cantidadCasas = 10) {
    const TAMANO = 10;
    let tablero = Array.from({ length: TAMANO }, () => Array(TAMANO).fill(0));
    const random = crearGeneradorSemilla(semilla);
    
    let casasColocadas = 0;
    while (casasColocadas < cantidadCasas) {
        let fila = Math.floor(random() * TAMANO);
        let col = Math.floor(random() * TAMANO);
        
        if (tablero[fila][col] === 0) {
            tablero[fila][col] = 1;
            casasColocadas++;
        }
    }
    
    return tablero;
}


// 3. CALCULAR MOVIMIENTOS VÁLIDOS

function obtenerMovimientosValidos(fila, col, tablero) {
    const TAMANO = 10;
    const movimientos = [];
    const direcciones = [
        [-1, 0], // Arriba
        [1, 0],  // Abajo
        [0, -1], // Izquierda
        [0, 1]   // Derecha
    ];
    
    for (let [dFila, dCol] of direcciones) {
        let nuevaFila = fila + dFila;
        let nuevaCol = col + dCol;
        
        if (nuevaFila >= 0 && nuevaFila < TAMANO && nuevaCol >= 0 && nuevaCol < TAMANO) {
            movimientos.push({
                posicion: [nuevaFila, nuevaCol],
                contenido: tablero[nuevaFila][nuevaCol] === 1 ? "Casa" : "Vacío"
            });
        }
    }
    
    return movimientos;
}


// 4. LLAMADAS Y SALIDA EN TERMINAL

console.log("========================================");
console.log(" TABLERO 10x10 Y REGLAS DE MOVIMIENTO ");
console.log("========================================\n");

const semillaPrueba = 1234;
const miTablero = inicializarTablero(semillaPrueba, 10);

console.log("1. Tablero de 10x10 (0 = Vacío, 1 = Casa):");
console.table(miTablero);

console.log("\n2. Movimientos válidos desde la esquina (0, 0):");
console.log(obtenerMovimientosValidos(0, 0, miTablero));

console.log("\n3. Movimientos válidos desde el centro (5, 5):");
console.log(obtenerMovimientosValidos(5, 5, miTablero));
