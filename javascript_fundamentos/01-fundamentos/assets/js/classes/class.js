// Todas las clases por defecto tienen implementado el 'use stricted'

class Persona { // Las clases siempre en mayusculas

    // Primera manera para definir las propiedades de la clase
    static _conteo = 0; // desaparece de las propiedades de persona 
    static get conteo() {
        return Persona._conteo + ' instancias';
    }
    static mensaje() { // todo lo static queda dentro de la clase y unicamente de la clase, no aparece en la instancia
        console.log('Hola a todos, soy un metodo estatico');
    }


    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    // El constructor tiene definido las caracteristicas que se deben usar
    constructor(nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase') { // Metodo que se ejecuta inmediatamente cuando se crea un objeto
        
        // if (!nombre) throw Error('Se requiere el nombre'); // Por defecto todo puede ser undefined por esto mismo se crea alertas personalizadas
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo ++; // aumenta la propiedad estatica

    }

    // Los set y get debem ir despues del constructor, pero no existe algo que defina si debe ir antes o despues de los metodos
    set setComidaFavorita(comida) { // los set o get siempre deben tener un solo parametro
        this.comida = comida;
    }

    get getComidaFavorita() {
        return `La comida favorita de ${this.nombre} es ${this.comida}`
    }

    // Los metodos se deben crear despues del constructor

    quienSoy() {
        console.log(`Soy ${this.nombre}, mi identidad es ${this.codigo}`);
    }

    miFrase() {
        this.quienSoy(); // se puede llamar metodos de la clase
        console.log(`${this.nombre} dice: ${this.frase}`);
    }

}

const spiderman = new Persona('Peter Parker', 'Spider-man', 'Soy tu amigable venico spider-man');
const ironman = new Persona('Tony Stark', 'Ironman', 'Yo soy Ironman');

// Los metodos se llaman por medio de la instancia
spiderman.miFrase();
spiderman.setComidaFavorita = 'El pie de cereza de la Tía May'; // para set o get se designa el nuevo valor por medio del =
spiderman.nemesis = 'Duende Verde'; // Se puede agregar una propiedad no existente de esta instancia y solo para esa instancia
spiderman.comida = 'Pizza'; // Sin necesidad del get o set se puede actualizar el valor
spiderman.getComidaFavorita;
console.log(spiderman);

// Las intancias statics se llaman directamente de la clase
console.log(Persona.conteo);
Persona.mensaje();

Persona.propiedadExterna = 'Hola mundo'; // Dentro de persona se creara una propiedad estatica llamada propiedadExterna
console.log(Persona.propiedadExterna);

console.log(Persona);