// -----------------------------
// 1. Expresiones Regulares
// -----------------------------

// 1.1 Bandas cuyo nombre empiece por "A"
db.bandas.find({ nombre: /^A/ });

// 1.2 Asistentes cuyo nombre contenga "Gómez"
db.asistentes.find({ nombre: /Gómez/ });


// -----------------------------
// 2. Operadores de Arreglos
// -----------------------------

// 2.1 Asistentes que tienen "Rock" en generos_favoritos
db.asistentes.find({ generos_favoritos: "Rock" });


// -----------------------------
// 3. Aggregation Framework
// -----------------------------

// 3.1 Agrupar presentaciones por escenario y contar cuántas hay
db.presentaciones.aggregate([
  { $group: { _id: "$escenario", totalPresentaciones: { $sum: 1 } } }
]);

// 3.2 Calcular el promedio de duración de todas las presentaciones
db.presentaciones.aggregate([
  { $group: { _id: null, avgDuracion: { $avg: "$duracion_minutos" } } }
]);
