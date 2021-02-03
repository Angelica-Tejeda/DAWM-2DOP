import { Component, OnInit } from '@angular/core';
import { PlatilloService } from 'src/app/services/platillo.service';

@Component({
  selector: 'app-tabla-platillo',
  templateUrl: './tabla-platillo.component.html',
  styles: [
  ]
})
export class TablaPlatilloComponent implements OnInit {
  datos: any = [];

  constructor(private platilloServices: PlatilloService) {
  }

  ngOnInit() {
    this.platilloServices.getPlatillos().subscribe(
      res => {
        this.datos = res;
      }, 
      err => console.error(err)
    )
  }
}
