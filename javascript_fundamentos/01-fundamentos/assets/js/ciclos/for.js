// array
const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];

// for tradicional
for (let i = 0; i < carros.length; i++) {
    console.log(carros[i]);
}

// for in
for (const i in carros) {
    console.log(carros[i]);
}

// for of
for (const carro of carros) {
    console.log(carro);
}