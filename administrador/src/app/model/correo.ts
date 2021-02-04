export class Correo{
    id?: string;
    nombre: string;
    correo: string;
    telefono: string;
    ciudad:string;
    mensaje:string;

    constructor(id="", nombre="", correo="",telefono="",ciudad="",mensaje=""){
        this.id = id;
        this.nombre = nombre;
        this.correo = correo;
        this.telefono = telefono;
        this.ciudad = ciudad;
        this.mensaje = mensaje;
    }
}
