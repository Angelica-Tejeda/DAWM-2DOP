export class Correo{
    id?: string;
    nombre: string;
    correo: string;
    telefono: string;
    ciudad:string;
    mensaje:string;
    createdAt:Date;




    constructor(id="", nombre="", correo="",telefono="",ciudad="",mensaje="",createdAt=null){
        this.id = id;
        this.nombre = nombre;
        this.correo = correo;
        this.telefono = telefono;
        this.ciudad = ciudad;
        this.mensaje = mensaje;
        this.createdAt = createdAt;
    }
}
