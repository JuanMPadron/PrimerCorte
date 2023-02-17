// pedir la cantidad de estudiantes
const n = parseInt(prompt("Ingrese la cantidad de estudiantes"));

// arreglo para almacenar los estudiantes
const estudiantes = [];

// leer los datos de los estudiantes
for (let i = 0; i < n; i++) {
  const estudiante = {
    cedula: prompt(`Ingrese la cedula del estudiante ${i + 1}`),
    nombre: prompt(`Ingrese el nombre del estudiante ${i + 1}`),
    matematicas: {
      cantidad: parseInt(prompt(`Ingrese la cantidad de notas de matematicas del estudiante ${i + 1}`)),
      promedio: 0,
    },
    fisica: {
      cantidad: parseInt(prompt(`Ingrese la cantidad de notas de fisica del estudiante ${i + 1}`)),
      promedio: 0,
    },
    programacion: {
      cantidad: parseInt(prompt(`Ingrese la cantidad de notas de programacion del estudiante ${i + 1}`)),
      promedio: 0,
    },
  };

  // leer las notas de matematicas
  let sumaNotas = 0;
  for (let j = 0; j < estudiante.matematicas.cantidad; j++) {
    const nota = parseFloat(prompt(`Ingrese la nota ${j + 1} de matematicas del estudiante ${i + 1}`));
    sumaNotas += nota;
  }
  estudiante.matematicas.promedio = sumaNotas / estudiante.matematicas.cantidad;

  // leer las notas de fisica
  sumaNotas = 0;
  for (let j = 0; j < estudiante.fisica.cantidad; j++) {
    const nota = parseFloat(prompt(`Ingrese la nota ${j + 1} de fisica del estudiante ${i + 1}`));
    sumaNotas += nota;
  }
  estudiante.fisica.promedio = sumaNotas / estudiante.fisica.cantidad;

  // leer las notas de programacion
  sumaNotas = 0;
  for (let j = 0; j < estudiante.programacion.cantidad; j++) {
    const nota = parseFloat(prompt(`Ingrese la nota ${j + 1} de programacion del estudiante ${i + 1}`));
    sumaNotas += nota;
  }
  estudiante.programacion.promedio = sumaNotas / estudiante.programacion.cantidad;

  estudiantes.push(estudiante);
}

document.write(estudiante.matematicas.promedio)
document.write(estudiante.fisica.promedio)
document.write(estudiante.programacion.promedio)