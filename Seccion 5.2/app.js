/*Crear una funcion que me permita determinar
  La calificacion de 3 alumnos
  una con nota de 100, otro con nota de 80
  y el ultimo con nota de 53*/

function calcularNota(nota) {
  let notaLetra = "";

  if (nota >= 90) {
    notaLetra = "A";
  } else if (nota >= 80) {
    notaLetra = "B";
  } else if (nota >= 70) {
    notaLetra = "C";
  } else if (nota >= 60) {
    notaLetra = "D";
  } else {
    notaLetra = "F";
  }
  console.log(nota + " es igual a " + notaLetra);
}

calcularNota(100);
calcularNota(80);
calcularNota(53);

