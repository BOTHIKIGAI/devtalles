class Rectangulo {

    #area = 0; // Se define que la propiedad no sea modificada por afuera
    // Esta propiedad tampoco sera heredada a otras clases

    constructor(base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;
        this.#area = base * altura; // Se le debe referenciar con #
    }

    // Esto es un propiedad privada que unicamente se puede 
    #calcularArea() {
        console.log(this.#area * 2);
    }

    printCalcularArea() {
        this.#calcularArea()
    }
}

const rectangulo = new Rectangulo(10, 15);
// rectangulo.area = 100; // Esto no deberia de suceder, ya que la propiedad es una propiedad que se calcula
rectangulo.printCalcularArea
console.log(rectangulo);