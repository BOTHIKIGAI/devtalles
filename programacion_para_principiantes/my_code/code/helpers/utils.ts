function generateMultiplications(baseNum, limit) {
    const data: string[] = [];
    for (let i = 1; i <= limit; i++) { // Comenzamos desde 1 porque la multiplicación por 0 resultaría en 0, lo cual no es útil aquí.
        data.push(`${baseNum} * ${i} = ${baseNum * i}`);
    }
    return data;
}

let data = generateMultiplications(10,50);
console.log(data);