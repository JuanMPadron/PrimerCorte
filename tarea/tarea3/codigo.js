// Leemos la cantidad de tarjetas de datos que vamos a procesar
const n = prompt('Ingrese la cantidad de alumnos a procesar');

// Inicializamos los contadores de aprobados
let aprobadosMatematicas = 0;
let aprobadosFisica = 0;
let aprobadosProgramacion = 0;
let reprobadosMatematicas = 0;
let reprobadosFisica = 0;
let reprobadosProgramacion = 0;

// Inicializamos las sumas de notas
let sumaMatematicas = 0;
let sumaFisica = 0;
let sumaProgramacion = 0;

let aprobadoTotal = 3;

let aprobado = 0;
let aprobado3 = 0;
let aprobado2 = 0;
let aprobado1 = 0;

// sumas de las notas de cada materia
let sumaNotasMatematicas = 0;
let sumaNotasFisica = 0;
let sumaNotasProgramacion = 0;

// Leemos cada tarjeta de datos y realizamos los cálculos
for (let i = 1; i <= n; i++) {
  // Leemos los datos de la tarjeta
  const cedula = prompt(`Ingrese la cedula del alumno ${i}`);
  const nombre = prompt(`Ingrese el nombre del alumno ${i}`);
  const cantNotasMatematicas = parseInt(prompt(`Ingrese la cantidad de notas de matematicas del alumno ${i}`));
  const cantNotasFisica = parseInt(prompt(`Ingrese la cantidad de notas de fisica del alumno ${i}`));
  const cantNotasProgramacion = parseInt(prompt(`Ingrese la cantidad de notas de programacion del alumno ${i}`));

  // Leemos las notas de cada materia y realizamos la suma
  for (let j = 1; j <= cantNotasMatematicas; j++) {
    const nota = parseFloat(prompt(`Ingrese la nota ${j} de matematicas del alumno ${i}`));
    sumaNotasMatematicas += nota;
  }

  if (sumaNotasMatematicas/cantNotasMatematicas >=9.5){
    aprobadosMatematicas++;
  }
  else{
    aprobadoTotal--;
  }

  for (let j = 1; j <= cantNotasFisica; j++) {
    const nota = parseFloat(prompt(`Ingrese la nota ${j} de fisica del alumno ${i}`));
    sumaNotasFisica += nota;
  }

  if (sumaNotasFisica/sumaNotasFisica >=9.5){
    aprobadosFisica++;
  }
  else{
    aprobadoTotal--;
  }

  for (let j = 1; j <= cantNotasProgramacion; j++) {
    const nota = parseFloat(prompt(`Ingrese la nota ${j} de programacion del alumno ${i}`));
    sumaNotasProgramacion += nota;
  }
  if (sumaNotasProgramacion/cantNotasProgramacion >=9.5){
    aprobadosProgramacion++;
    aprobado++;
  }
  else{
    aprobadoTotal--;
  }

  if (aprobadoTotal=3) {
    aprobado3++;
  }
  if(aprobadoTotal=2){
    aprobado2++;
  }
  if(aprobadoTotal=1){
    aprobado1++;
  }
  aprobadoTotal=3;
}

// Nota promedio de cada materia
const promedioMatematicasTotal = sumaNotasMatematicas / n;
document.write("promedio general de matematicas: " + promedioMatematicasTotal, "<br>");
const promedioFisicaTotal = sumaNotasFisica / n;
document.write("promedio general de fisica: " + promedioFisicaTotal, "<br>");
const promedioProgramacionTotal = sumaNotasProgramacion / n;
document.write("promedio general de programacion: " + promedioProgramacionTotal, "<br>");
document.write("<br>");

// cantidad de aprobados en cada materia
document.write("cantidad de aprobados en matematicas: " + aprobadosMatematicas, "<br>");
document.write("cantidad de aprobados en fisica: " + aprobadosFisica, "<br>");
document.write("cantidad de aprobados en programacion: " + aprobadosProgramacion, "<br>");
document.write("<br>");