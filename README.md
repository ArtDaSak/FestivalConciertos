<h1 align="center"> Festival de Conciertos</h1>

Evidencia de operaciones realizadas en MongoDB (terminal).

---

### 1. Conexión a MongoDB Shell:

![Shell de MongoDB iniciado](./img/01MongoDBShellExecution.png)

### 2. Creación y Selección de la Base de Datos:

![Base de datos festival\_conciertos seleccionada](./img/02CreationAndSelectionDBfestival_concerts.png)

---

### 3. Inserción de Datos Iniciales:

#### 3.1 Colección `bandas`:

![InsertBandas](./img/03CreatebandasCollection.png)

#### 3.2 Colección `escenarios`:

![InsertEscenarios](./img/04CreateescenariosCollection.png)

#### 3.3 Colección `presentaciones`:

![InsertPresentaciones](./img/05CreatepresentacionesCollection.png)

#### 3.4 Colección `asistentes`:

![InsertAsistentes](./img/06CreateasistentesCollection.png)

---

### 4. Consultas Realizadas:

#### 4.1 Expresiones Regulares:

* Bandas que empiezan con «A»:
  ![RegexBandA](./img/07SearchBandsByA.png)

* Asistentes con «Gómez» en el nombre:
  ![RegexNombreGomez](./img/08SearchGómezInName.png)

#### 4.2 Operadores de Arreglos:

* Asistentes con «Rock» en géneros favoritos:
  ![ArrayRock](./img/09SearchRockInFavoriteGenre.png)

#### 4.3 Aggregation Framework:

* Conteo de presentaciones por escenario:
  ![CountByStage](./img/10CountingPresentationsByStage.png)

* Promedio de duración de presentaciones:
  ![AvgDuration](./img/11CalculateAveragePresentationDuration.png)

---

### 5. Funciones en `system.js`:

* Archivo [system.js](./system.js) cargado:
  ![CargarSystemJS](./img/12UploadSystemJS.png)

* Prueba `escenariosPorCiudad("Bogotá")`:
  ![TestEscenariosCiudad](./img/13TestFunctionEscenariosByCity.png)

* Prueba `bandasPorGenero("Rock")`:
  ![TestBandasGenero](./img/14TestFunctionBandsByGenre.png)

---

### 6. Configuración de Replica Set:

![ConfigureReplicaSet](./img/15ConfigureReplicaSet.png)

### 7. Ejecución del Archivo [transacciones.js](./transacciones.js):

![ExecuteFileTransaccionesJS](./img/16ExecuteFileTransacionesJS.png)

### 8. Índices y Consultas:

#### 8.1 Índice en `bandas.nombre` y búsqueda por nombre:

![IndexAndSearchByName](./img/17IndexAndSearchByName.png)

#### 8.2 Índice en `presentaciones.escenario` y conteo de presentaciones:

![IndexAndCountPresentations](./img/18IndexAndCountPresentations.png)

#### 8.3 Índice compuesto en `asistentes.ciudad` y `edad`, consulta de asistentes de Bogotá menores de 30:

![CompositeIndexAndAttendeeConsultation](./img/19CompositeIndexAndAttendeeConsultation.png)

---

>[!NOTE]
> Todas las imágenes muestran la ejecución exitosa de cada operación en MongoDB, evidenciando el cumplimiento de los requerimientos solicitados.
