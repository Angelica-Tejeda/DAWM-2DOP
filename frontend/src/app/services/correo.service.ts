import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Correo } from "../model/correo";

@Injectable({
  providedIn: 'root'
})
export class CorreoService {

  selectedCorreo: Correo;
  URL = 'http://localhost:3000/relacional/correo';

  constructor(private http: HttpClient) {
    this.selectedCorreo = new Correo();
  }

  saveCorreo(correo: Correo) {
    return this.http.post(`${this.URL}`, correo )
  }
}
