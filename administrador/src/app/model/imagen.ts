export class Imagen {
    id?: number;
    alt: string;
    imgSRC: string;
    galeriaId?: number;
    menuId?: number;
    
    constructor(id=0, alt="", imgSRC="", galeriaId=null, menuId=null){
        this.id = id;
        this.alt = alt;
        this.imgSRC = imgSRC;
        this.galeriaId = galeriaId;
        this.menuId = menuId;
    }
}
