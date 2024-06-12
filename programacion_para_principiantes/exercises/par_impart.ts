// IMPAR O PAR
let numbersImparPar = [1,6,8,4,2,7,10,3,5];

for (let i = 0; i < numbersImparPar.length; i++) {
    console.log(`El numero ${numbersImparPar[i]}` ,numbersImparPar[i] % 2 == 0 ? 'es par' : 'es impar');
    
}
