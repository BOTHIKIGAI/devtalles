let base = 10;
let limit = 50;

for (let i = 0; i <= 50; i++) {
    console.log(base + ' * ', + i + ' = ' + (base * i))
    if (base * i == limit) {
        break;
    }
}
