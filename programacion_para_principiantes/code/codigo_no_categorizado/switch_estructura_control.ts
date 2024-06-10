let weekDay = 0;

if (weekDay <= 0) {
    // console.log('Dia de la semana no existente');
    throw new Error('Dia de la semana no permitido')
}

switch(weekDay) {
    case 1:
        console.log('Es lunes');
        break;
    case 2:
        console.log('Es martes');
        break
    case 3:
        console.log('Es miercoles');
        break
    case 4:
        console.log('Es jueves');
        break
    case 5:
        console.log('Es viernes');
        break
    case 6:
        console.log('Es sabado');
        break
    case 7:
        console.log('Es domingo');
        break
    default:
        console.log('El numero ' + weekDay + 'no puede ser menor o igual a 0 ni mayor a 7');
        
}