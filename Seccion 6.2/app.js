//Creamos una nueva clase
class Carro {
  //Constructor sirve para hacer funciones cuando se instancie la clase
  constructor(marca, tipo, puertas) {
    //this.propiedadClase = elementoContructor
    this.marca = marca;
    this.tipo = tipo;
    this.puertas = puertas;
    this.creadoEn = "Hoy";
    this.encendido = false;
    this.gasolina = 100;
  }

  encederCarro() {
    if (this.encendido) {
      console.info("El carro ya estaba encendido... Se daño el motor!!!!");
    } else {
      this.encendido = true;
      console.log("Se encendio el carro");
    }
    return this;
  }

  realizarViaje(consumo) {
    if (!this.encendido) return "El Carro esta apagado";

    if (consumo > this.gasolina)
      return console.log(
        "No puedes realizar un viaje, la gasolina que te queda es de: " +
          this.gasolina
      );

    this.gasolina -= consumo;
    return `Le queda ${this.gasolina}%`;
  }
}

//Para crear un nuevo objeto a patir de una clase, se declara una variable y le instaciamos la clase con "new ClassName" y se le asigna las propiedades requeridas para crear el nuevo objeto

let carro = new Carro("Toyota", "Sedan", "4");
console.log(carro);
