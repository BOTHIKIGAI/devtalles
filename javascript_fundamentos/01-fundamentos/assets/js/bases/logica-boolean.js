const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

console.warn('No a la negación');
console.log(true); // true
console.log(!true); // false
console.log(!false); // true

console.log(!regresaFalse()); // true
console.log(!regresaTrue()); // false

console.log('And');
console.log(true && true); // true
console.log(true && false); // false
console.log(true && !false); // false

console.log('=======');
console.log(regresaFalse() && regresaTrue()); // false


console.log('=======');
console.warn('OR');
console.log(true || false); // true