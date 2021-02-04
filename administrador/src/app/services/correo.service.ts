import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Correo } from "../model/correo";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CorreoService {

  selectedGaleria: Correo;
  URL = 'http://localhost:3000/relacional/correo';

  constructor(private http: HttpClient) {
    this.selectedGaleria = new Correo();
  }

  getCorreos(){
    return this.http.get(`${this.URL}`);
  } 

  getCorreo(id: string){
    return this.http.get(`${this.URL}/${id}`);
  }

  saveCorreo(galeria: Correo) {
    return this.http.post(`${this.URL}`, galeria );
  }

  deleteCorreo(id: string){
    return this.http.delete(`${this.URL}/${id}`);
  }

  updateCorreo(id: string, updateGaleria: Correo ){
    return this.http.put(`${this.URL}/${id}`, updateGaleria);
  }
}
