## Festival de Conciertos en Colombia

*Evidencia de operaciones realizadas en MongoDB (terminal)*

---

### 1. Conexión y Selección de Base de Datos

![Shell de MongoDB iniciado](./img/01MongoDBShellExecution.png)

### 2. Creación de la Base de Datos

![Base de datos festival\_conciertos seleccionada](./img/02CreationAndSelectionDBfestival_concerts.png)

---

### 3. Inserción de Datos Iniciales

#### 3.1 Colección `bandas`

![InsertBandas](./img/03CreatebandasCollection.png)

#### 3.2 Colección `escenarios`

![InsertEscenarios](./img/04CreateescenariosCollection.png)

#### 3.3 Colección `presentaciones`

![InsertPresentaciones](./img/05CreatepresentacionesCollection.png)

#### 3.4 Colección `asistentes`

![InsertAsistentes](./img/06CreateasistentesCollection.png)

---

### 4. Consultas Realizadas

#### 4.1 Expresiones Regulares

* Bandas que empiezan con “A”:
  ![RegexBandA](./img/07SearchBandsByA.png)

* Asistentes con “Gómez” en el nombre:
  ![RegexNombreGomez](./img/08SearchGómezInName.png)

#### 4.2 Operadores de Arreglos

* Asistentes con “Rock” en géneros favoritos:
  ![ArrayRock](./img/09SearchRockInFavoriteGenre.png)

#### 4.3 Aggregation Framework

* Conteo de presentaciones por escenario:
  ![CountByStage](./img/10CountingPresentationsByStage.png)

* Promedio de duración de presentaciones:
  ![AvgDuration](./img/11CalculateAveragePresentationDuration.png)

---

### 5. Funciones en `system.js`

* Archivo `system.js` cargado:
  ![CargarSystemJS](./img/12UploadSystemJS.png)

* Prueba `escenariosPorCiudad("Bogotá")`:
  ![TestEscenariosCiudad](./img/13TestFunctionEscenariosByCity.png)

* Prueba `bandasPorGenero("Rock")`:
  ![TestBandasGenero](./img/14TestFunctionBandsByGenre.png)

---

> Todas las imágenes muestran la ejecución exitosa de cada operación en MongoDB, evidenciando el cumplimiento de los requerimientos solicitados.
