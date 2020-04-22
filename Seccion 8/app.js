function filtrarPorLetra(heroes,letra) {

  let nombreArr = [];

  for (let i = 0; i < heroes.length; i++) {
    const nombre = heroes[i];

    if (nombre[0] === letra){
      nombreArr.push(nombre);
    }
    
  }

  return nombreArr;
  
}

let heroes = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel'];
let heroesCon = filtrarPorLetra( heroes, 'C');
console.log( heroesCon ); // She Hulk, Spiderman