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
  }

  ngOnInit() {
    this.historialServices.getHistorial().subscribe(
      res => {
        this.datos = res;
        console.log(res)
      }, 
      err => console.error(err)
    )
  }
}
