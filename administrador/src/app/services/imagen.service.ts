import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Imagen } from "../model/imagen";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  selectedImagen: Imagen;
  URL = 'http://localhost:3000/relacional/imagen';

  constructor(private http: HttpClient) {
    this.selectedImagen = new Imagen();
  }

  getImagenes(){
    return this.http.get(`${this.URL}`);
  } 

  getImagen(id: string){
    return this.http.get(`${this.URL}/${id}`);
  }

  getImagenByIDGaleria(id: string){
    return this.http.get(`${this.URL}/galeria/${id}`);
  }

  getImagenByIDMenu(id: string){
    return this.http.get(`${this.URL}/menu/${id}`);
  }

  saveImagen(imagen: Imagen) {
    return this.http.post(`${this.URL}`, imagen );
  }

  deleteImagen(id: string){
    return this.http.delete(`${this.URL}/${id}`);
  }

  updateImagen(id: string|number, updateImagen: Imagen ){
    return this.http.put(`${this.URL}/${id}`, updateImagen);
  }
}
