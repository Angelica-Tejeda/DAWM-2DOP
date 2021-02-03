import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Platillo } from "../model/platillo";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlatilloService {

  selectedPlatillo: Platillo;
  URL = 'http://localhost:3000/relacional/menu';

  constructor(private http: HttpClient) {
    this.selectedPlatillo = new Platillo();
  }

  getPlatillos(){
    return this.http.get(`${this.URL}`);
  } 

  getPlatillo(id: string){
    return this.http.get(`${this.URL}/${id}`);
  }

  savePlatillo(platillo: Platillo) {
    return this.http.post(`${this.URL}`, platillo );
  }

  deletePlatillo(id: string){
    return this.http.delete(`${this.URL}/${id}`);
  }

  updatePlatillo(id: string, updatePlatillo: Platillo ){
    return this.http.put(`${this.URL}/${id}`, updatePlatillo);
  }
}
