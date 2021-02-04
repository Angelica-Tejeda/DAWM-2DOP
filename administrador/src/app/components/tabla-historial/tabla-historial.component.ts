import { Component, OnInit } from '@angular/core';
import { HistorialService } from 'src/app/services/historial.service';

@Component({
  selector: 'app-tabla-historial',
  templateUrl: './tabla-historial.component.html',
  styles: [
  ]
})
export class TablaHistorialComponent implements OnInit {
  datos: any = [];

  constructor(private historialServices: HistorialService) {
    let script = document.createElement("script");
    script.src = "assets/javascript/historial.js";
    
    let body = document.getElementsByTagName("body")[0]
    body.appendChild(script);
  }

  ngOnInit() {
    let filtro = document.getElementById("filtro")
      
    fetch("http://localhost:3000/relacional/menu")
      .then((resultado) =>{
          return resultado.json();
      })
      .then((json) =>{
          for(let elemento of json){
              let opcion = document.createElement("option")
              opcion.textContent = elemento.nombre;
              filtro.appendChild(opcion)
          }
      })

    this.historialServices.getHistorial().subscribe(
      res => {
        this.datos = res;
      }, 
      err => console.error(err)
    )
  }
}
