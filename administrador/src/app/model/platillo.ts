export class Platillo {
    id?: number;
    nombre: string;
    ingredientes: string;

    constructor(id=0, nombre="", ingredientes=""){
        this.id = id;
        this.nombre = nombre;
        this.ingredientes = ingredientes;
    }
}