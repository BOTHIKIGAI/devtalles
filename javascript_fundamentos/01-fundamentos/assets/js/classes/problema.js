const fher = {
    nombre: 'Fernando',
    edad: 30,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`); // this nos trae los datos de la propiedad
    }
}

const pedro = {
    nombre: 'Pedro',
    edad: 15,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`); // this nos trae los datos de la propiedad
    }
}

fher.imprimir();
pedro.imprimir();

// Las clases son en mayuscula
function Persona (nombre, edad) {
    console.log('Se ejecuto esta linea');

    this.nombre = nombre;
    this.edad = edad;
    
    this.imprimir = function() {
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }

}

const maria = new Persona('Maria', 18);
const melissa = new Persona('Melissa', 35);

console.log(maria, melissa);
