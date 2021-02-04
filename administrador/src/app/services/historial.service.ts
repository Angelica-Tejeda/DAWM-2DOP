import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Historial } from "../model/historial";

@Injectable({
  providedIn: 'root'
})
export class HistorialService {

  selectedHistorial: Historial;
  readonly URL = 'http://localhost:3000/norelacional';


  constructor(private http: HttpClient) {
    this.selectedHistorial = new Historial();
  }

  getHistorial(){
    return this.http.get(this.URL);
  } 

  saveHistorial(historial: Historial) {
    return this.http.post(this.URL, historial);
  }

  deleteHistorial(_id: string){
    return this.http.delete(`${this.URL}/${_id}`);
  }

  updateHistorial(_id: string, updateHistorial: Historial ){
    return this.http.put(`${this.URL}/${_id}`, updateHistorial);
  }
}
