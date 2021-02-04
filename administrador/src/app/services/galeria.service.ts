import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Galeria } from "../model/galeria";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GaleriaService {

  selectedGaleria: Galeria;
  URL = 'http://localhost:3000/relacional/galeria';

  constructor(private http: HttpClient) {
    this.selectedGaleria = new Galeria();
  }

  getGalerias(){
    return this.http.get(`${this.URL}`);
  } 

  getGaleria(id: string){
    return this.http.get(`${this.URL}/${id}`);
  }

  saveGaleria(galeria: Galeria) {
    return this.http.post(`${this.URL}`, galeria );
  }

  deleteGaleria(id: string){
    return this.http.delete(`${this.URL}/${id}`);
  }

  updateGaleria(id: string|number, updateGaleria: Galeria ){
    return this.http.put(`${this.URL}/${id}`, updateGaleria);
  }
}
