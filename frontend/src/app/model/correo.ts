export class Correo {
    nombre: string;
    correo: string;
    telefono: string;
    ciudad: string;
    fechaNac: string;
    mensaje: string;

    constructor(nombre="", correo="", telefono="", ciudad="", fechaNac="", mensaje=""){
        this.nombre = nombre;
        this.correo = correo;
        this.telefono = telefono;
        this.ciudad = ciudad;
        this.fechaNac = fechaNac;
        this.mensaje = mensaje;
    }
}
