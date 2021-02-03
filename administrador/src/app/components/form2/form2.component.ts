import { Component } from '@angular/core';
import { Imagen } from 'src/app/model/imagen';
import { Platillo } from 'src/app/model/platillo';
import { ImagenService } from 'src/app/services/imagen.service';
import { PlatilloService } from 'src/app/services/platillo.service';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styles: [
  ]
})
export class Form2Component  {

  platillo: Platillo = {
    id: 0,
    nombre: '',
    ingredientes: ''
  };

  imagen: Imagen = {
    id: 0,
    alt: '',
    imgSRC: ''
  };

  constructor(private platilloServices: PlatilloService, private imagenServices: ImagenService) {    
    let script = document.createElement("script");
    let script2 = document.createElement("script");
    let script3 = document.createElement("script");
    let script4 = document.createElement("script");
    script2.src = "assets/dist/js/adminlte.min.js"
    script.src = "assets/plugins/bs-custom-file-input/bs-custom-file-input.min.js"
    script3.src = "assets/dist/js/demo.js"
    script4.src = "assets/plugins/bs-custom-file-input/input.js"
  

    let body = document.getElementsByTagName("body")[0]
    
  
    body.appendChild(script);
    body.appendChild(script2);
    body.appendChild(script3);
    body.appendChild(script4); 
  }
 ///Platillo
  savePlatillo(){
    this.imagen.alt = this.platillo.nombre;

    this.platilloServices.savePlatillo(this.platillo)
    .subscribe(
      res => console.log(res),
      err => console.error(err) 
    )

    this.imagenServices.saveImagen(this.imagen)
    .subscribe(
      res => console.log(res),
      err => console.error(err) 
    )
  }
}
