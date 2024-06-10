console.log('Hello World');
// CONSOLE ES LA FUNCIÓN Y LOG ES EL METODO

function greet(name) {
    console.log('Hello', name, '!!');
}

greet('Juan');

function greetDefine(name = 'Wold') {
    console.log('Hello', name, '!!');
}

greetDefine();