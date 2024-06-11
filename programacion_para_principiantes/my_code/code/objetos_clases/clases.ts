class Car {
    public brand:string;
    public doors:number;
    public fuelTank:number;
    public tankGasoline:number;
    public isRunning:boolean;
    public type:String;
    public readonly createdAt: number; // DE SOLO LECTURA

    constructor( brand:string, doors:number, fuelTank:number, tankGasoline:number, isRunning:boolean, typem:string, createdAt:number) {
        this.brand = 'No brand';
        this.doors = 0;
        this.fuelTank = 100;
        this.tankGasoline = 0;
        this.isRunning = false;
        this.type = 'No type'
        this.createdAt = 123456789;
    }

    // METODOS
    turnOn() {
        if (this.isRunning) {
            console.log('El carro ya estaba encendido se daño el motor');
            return;
        }
        if (this.fuelTank <= 0) {
            console.log('El carro no tiene gasolina');
        }
        this.isRunning = true;
        console.log('El carro esta encendido');
    }

    tanking(mount) {
        if (this.tankGasoline <= 0) {
            console.log('El monto de la gasolina debe ser positivo');
            return;
        }
        else if (this.fuelTank - this.tankGasoline == 0) {
            console.log('El tanque esta lleno');
            return;
        }
        else if ((this.fuelTank - this.tankGasoline) < mount) {
            console.log('El monto que se quiere ingresar supera la capacidad actal del tanque de gasolina');
            return;
        }
        else {
            console.log('El tanque ha sido recargado');
            this.tankGasoline =+ mount;
        }
    }
}

let myMazca = new Car('Mazda', 4, 100, 50, false, 'Deportivo', 111111);
console.log(myMazca);
myMazca.turnOn();
console.log(myMazca);
