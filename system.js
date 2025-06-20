// -----------------------------
// Funciones para consultar escenarios y bandas
// -----------------------------

// 1. Obtener todos los escenarios en una ciudad específica
function escenariosPorCiudad(ciudad) {
    return db.escenarios.find({ ciudad: ciudad }).toArray();
}

// 2. Obtener bandas activas de un género en particular
function bandasPorGenero(genero) {
    return db.bandas.find({ genero: genero, activa: true }).toArray();
}