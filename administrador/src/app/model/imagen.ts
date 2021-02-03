export class Imagen {
    id?: number;
    alt: string;
    imgSRC: string;

    constructor(id=0, alt="", imgSRC=""){
        this.id = id;
        this.alt = alt;
        this.imgSRC = imgSRC;
    }
}
