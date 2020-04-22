function describirPersona(p) {
  console.log(`${p.nombre} tiene una edad de ${p.edad} y mide ${p.estatura}`);
}

let persona = {
  nombre: "Osmar",
  edad: 17,
  estatura: 1.85,
};

describirPersona(persona);
