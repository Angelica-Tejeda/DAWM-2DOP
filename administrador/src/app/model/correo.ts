export class Correo{
    id?: number;
    nombre: string;
    correo: string;
    telefono: string;
    ciudad:string;
    mensaje:string;
    createdAt:Date;




    constructor(id=0, nombre="", correo="",telefono="",ciudad="",mensaje="",createdAt=null){
        this.id = id;
        this.nombre = nombre;
        this.correo = correo;
        this.telefono = telefono;
        this.ciudad = ciudad;
        this.mensaje = mensaje;
        this.createdAt = createdAt;
    }
}
