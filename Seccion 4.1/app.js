// Crear un algoritmo, que basada en la nota
// Imprima si el alumno aprueba la materia
// aprueba con 60 puntos o mas.
// si el alumno tiene nota menor a 50,
// imprimir un mensaje que diga:
// por favor estudie mas

let nota = 70;

if (nota >= 60) {
  console.log("El alumno aprobo la clase");
} else if (nota < 50) {
  console.log("Por favor estudie mas");
} else {
  console.log("El alumno reprobo la clase");
}
