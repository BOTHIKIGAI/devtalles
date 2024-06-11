// OBJETO LITERAL
let person = {
    // DATOS DE PERSONA
    nombre: 'Melissa',
    edad: 30,
    isActiv3e: true,
    hobbies: ['soccer', 'baseball'],

    // METODOS DE PERSONA
    toString() {
        // THIS HACE REFERENCIA A LOS DATOS DEL OBJETO
        let objectString = this.nombre + ' ' + this.edad + ' ' + this.isActiv3e + ' ' + this.hobbies;
        console.log(objectString);
    }
}

// IMPRIMIR TODOS LOS DATOS
console.log(person);
console.log(person.nombre); // IMPRIMIR NOMBRE DE PERSONA
console.log(person.edad); // IMPRIMIR EDAD DE PERSONA
console.log(person.nombre.length); // DEL NOMBRE DE PERSON CONOCER LA LONGITUD
console.log(person.nombre.toUpperCase()); // DEL NOMBRE DE PERSONA PASAR TODO A MAYUSCULAS
person.toString(); // DE PERSONA LLAMAR AL METODO DE toString
