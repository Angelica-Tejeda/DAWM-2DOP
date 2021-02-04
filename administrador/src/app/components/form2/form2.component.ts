import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
export class Form2Component implements OnInit{

  platillo: Platillo = {
    id: 0,
    nombre: '',
    ingredientes: ''
  };

  imagenes: any = [];
  imagen: Imagen = {
    id: 0,
    alt: '',
    imgSRC: ''
  };
  
  edit: boolean = false;

  ngOnInit() {
    const params = this.activeRoute.snapshot.params;
    if (params.id) {
      this.getImagenes();
      this.platilloServices.getPlatillo(params.id)
        .subscribe(
          res => {
            this.edit = true;

            this.platillo.id = res['id']
            this.platillo.nombre = res['nombre']
            this.platillo.ingredientes = res['ingredientes']
            
            //Obteniendo el id de la imagen asociada a la galeria
            this.imagenes.forEach(elemento => {
              if(elemento.menuId ==  this.platillo.id){
                this.imagen.id = elemento.id;
                this.imagen.alt = elemento.alt;
                this.imagen.imgSRC = elemento.imgSRC;
              }
            })
          },
          err => console.error(err)
        )
    }
  }

  constructor(private platilloServices: PlatilloService, private imagenServices: ImagenService, private router: Router, private activeRoute: ActivatedRoute) {    
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
    this.platilloServices.savePlatillo(this.platillo)
    .subscribe(
      res => {
        console.log(res);
        
        let respuesta = res['id'];
        this.imagen.menuId = respuesta;
        this.imagen.alt = this.platillo.nombre;
        this.imagenServices.saveImagen(this.imagen)
        .subscribe(
          res => {
            console.log(res),
            this.router.navigate(['/tplatillo'])
          },
          err => console.error(err) 
        )
      },
      err => console.error(err) 
    )
  }
  
  updatePlatillo(){
    this.platilloServices.updatePlatillo(this.platillo.id, this.platillo)
      .subscribe(
        res => {
          console.log(res)
          this.imagen.alt = this.platillo.nombre;
          this.imagenServices.updateImagen(this.imagen.id, this.imagen)
            .subscribe(
              res => {
                console.log(res)
              },
              err => console.error(err)
            )
        },
        err => console.error(err)
      )
  }

  getImagenes(){
    this.imagenServices.getImagenes().subscribe(
      res => {
        this.imagenes = res;
      }, 
      err => console.error(err)
    )
  }
}
