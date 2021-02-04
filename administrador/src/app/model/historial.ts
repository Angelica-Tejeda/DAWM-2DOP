export class Historial {
    _id: string;
    platillo: string;
    precio: string;
    fecha: string

    constructor(_id="", platillo="", precio="", fecha=""){
        this._id = _id;
        this.platillo = platillo;
        this.precio = precio;
        this.fecha = fecha;
    }
}