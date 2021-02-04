import { Component, OnInit } from '@angular/core';
import { PlatilloService } from 'src/app/services/platillo.service';
import { ImagenService } from 'src/app/services/imagen.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabla-platillo',
  templateUrl: './tabla-platillo.component.html',
  styles: [
  ]
})
export class TablaPlatilloComponent implements OnInit {
  datos: any = [];
  imagenes: any = [];

  constructor(private platilloServices: PlatilloService, private imagenService: ImagenService, private router: Router) {
  }

  ngOnInit() {
    this.getPlatillos();
    
  }

  getPlatillos(){
    this.platilloServices.getPlatillos().subscribe(
      res => {
        this.datos = res;
      }, 
      err => console.error(err)
    )
  }

  editPlatillo(id: string){
    this.router.navigate([`form2/${id}`]);
  }

  getImagenes(){
    this.imagenService.getImagenes().subscribe(
      res => {
        this.imagenes = res;
      }, 
      err => console.error(err)
    )
  }

  deletePlatillo(id: string){
    this.getImagenes()

    //buscando el ID de la imagen
    this.imagenes.forEach(imagen => {
      if(imagen.menuId ==  id){
        this.imagenService.deleteImagen(imagen.id)
          .subscribe(
            res => {
              console.log(res)
            },
            err => console.error(err)
          )
        this.platilloServices.deletePlatillo(id)
          .subscribe(
            res => {
              console.log(res),
              this.getPlatillos()
            },
            err => console.error(err)
          )
      }
    });
  }
}
