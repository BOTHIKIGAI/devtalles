let date = new Date;
let dia = date.getDate();
let actualHour = date.getHours();
let horaApertura = [0,6].includes(dia) ? 11 : 9;
let message = actualHour >=  horaApertura ? 'Esta abierto' : `Esta cerrado, hoy abrimos a las ${horaApertura}`
console.log(message);
