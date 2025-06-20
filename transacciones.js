// COMPRA DE BOLETO
const festivalDb = db.getSiblingDB('festival_conciertos');

try {
    festivalDb.asistentes.updateOne(
        { nombre: "Juan Pérez" },
        {
            $push: {
                boletos_comprados: {
                    escenario: "Escenario Alterno",
                    dia: "2025-06-19"
                }
            }
        }
    );

    festivalDb.escenarios.updateOne(
        { nombre: "Escenario Alterno" },
        { $inc: { capacidad: -1 } }
    );

    print("Transacción de compra exitosa");
} catch (error) {
    print("Error en la transacción de compra:", error);
}

// REVERSIÓN DE COMPRA
try {
    festivalDb.asistentes.updateOne(
        { nombre: "Juan Pérez" },
        {
            $pull: {
                boletos_comprados: {
                    escenario: "Escenario Alterno",
                    dia: "2025-06-19"
                }
            }
        }
    );

    festivalDb.escenarios.updateOne(
        { nombre: "Escenario Alterno" },
        { $inc: { capacidad: 1 } }
    );
    print("Transacción de reversión exitosa");
} catch (error) {
    print("Error en la transacción de reversión:", error);
}
