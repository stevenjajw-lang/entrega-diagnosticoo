console.log("=== DIAGNÓSTICO DEL ENTORNO ===");
console.log(`Versión de Node.js: ${process.version}`);
console.log(`Plataforma: ${process.platform}`);
console.log("Argumentos de ejecución:", process.argv.slice(2));
console.log(`Variable de entorno (USER o USERNAME): ${process.env.USER || process.env.USERNAME || 'No definida'}`);