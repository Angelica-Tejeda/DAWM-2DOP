import { Component, OnInit } from '@angular/core';
import { Galeria } from 'src/app/model/galeria';
import { Imagen } from 'src/app/model/imagen';
import { GaleriaService } from 'src/app/services/galeria.service';
import { ImagenService } from 'src/app/services/imagen.service';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styles: [
  ]
})
export class FormsComponent implements OnInit{

  galeria: Galeria = {
    id: 0,
    nombre: '',
    descripcion: ''
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
      this.getImagenes()
      this.galeriaServices.getGaleria(params.id)
        .subscribe(
          res => {
            this.edit = true;

            this.galeria.id = res['id']
            this.galeria.nombre = res['nombre']
            this.galeria.descripcion = res['descripcion']

            //Obteniendo el id de la imagen asociada a la galeria
            this.imagenes.forEach(elemento => {
              if(elemento.galeriaId ==  this.galeria.id){
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

  constructor(private galeriaServices: GaleriaService, private imagenServices: ImagenService, private router: Router, private activeRoute: ActivatedRoute) { 

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
    this.galeriaServices.saveGaleria(this.galeria)
    .subscribe(
      res => {
        console.log(res);
        
        let respuesta = res['id'];
        this.imagen.galeriaId = respuesta;
        this.imagen.alt = this.galeria.nombre;
        this.imagenServices.saveImagen(this.imagen)
        .subscribe(
          res => {
            console.log(res),
            this.router.navigate(['/dataT'])
          },
          err => console.error(err) 
        )
      },
      err => console.error(err) 
    )
  }

  updateGaleria(){
    this.galeriaServices.updateGaleria(this.galeria.id, this.galeria)
      .subscribe(
        res => {
          console.log(res)
          this.imagen.alt = this.galeria.nombre;
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
