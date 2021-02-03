import { Component } from '@angular/core';
import { Galeria } from 'src/app/model/galeria';
import { Imagen } from 'src/app/model/imagen';
import { GaleriaService } from 'src/app/services/galeria.service';
import { ImagenService } from 'src/app/services/imagen.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styles: [
  ]
})
export class FormsComponent {

  galeria: Galeria = {
    id: 0,
    nombre: '',
    descripcion: ''
  };

  imagen: Imagen = {
    id: 0,
    alt: '',
    imgSRC: ''
  };

  constructor(private galeriaServices: GaleriaService, private imagenServices: ImagenService) { 

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

  saveGaleria(){
    this.imagen.alt = this.galeria.nombre;

    this.galeriaServices.saveGaleria(this.galeria)
    .subscribe(
      res => {
        console.log(res);

        let respuesta = res['id'];
        this.imagen.galeriaId = respuesta;
        this.imagenServices.saveImagen(this.imagen)
        .subscribe(
          res => console.log(res),
          err => console.error(err) 
        )
      },
      err => console.error(err) 
    )
    
    
  }
}
