import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Correo } from 'src/app/model/correo';
import { CorreoService } from 'src/app/services/correo.service';
@Component({
  selector: 'app-mail2',
  templateUrl: './mail2.component.html',
  styles: ['assets/plugins/summernote/summernote-bs4.css'
  ]
})
export class Mail2Component implements OnInit {
  correo: Correo = {
    id : '',
    nombre : '' ,
    correo : '',
    telefono : '',
    ciudad : '',
    mensaje : '',
  };
 
  constructor(private correoServices: CorreoService, private router: Router, private activeRoute: ActivatedRoute) { 
  let script2 = document.createElement("script");
  let script3 = document.createElement("script");
  
  script2.src = "assets/dist/js/adminlte.min.js"

  script3.src = "assets/dist/js/demo.js"

  let body = document.getElementsByTagName("body")[0]  

  body.appendChild(script2);
  body.appendChild(script3);
 
  }

  ngOnInit() {
    const params = this.activeRoute.snapshot.params;
    if (params.id) {
      this.correoServices.getCorreo(params.id)
      .subscribe(
        res => {
          this.correo.id = res['id']
          this.correo.nombre = res['nombre']
          this.correo.correo = res['correo']
          this.correo.telefono = res['telefono']
          this.correo.ciudad = res['ciudad']
          this.correo.mensaje = res['mensaje']
        },
        err => console.error(err)
      )
    }
  }

  getCorreo(){
    this.correoServices.getCorreo("1").subscribe(
      res => {
        this.correo.id = res["id"];
        this.correo.nombre = res["nombre"];
        this.correo.correo = res["correo"];
        this.correo.telefono = res["telefono"];
        this.correo.ciudad = res["ciudad"];
        this.correo.mensaje = res["mensaje"];
        this.correo.id = res["id"];
      }, 
      err => console.error(err)
    )
  }

  deleteCorreo(id: string){
    this.correoServices.deleteCorreo(id)
      .subscribe(
        res => {
          console.log(res),
          this.router.navigate(['/mail'])
        },
        err => console.error(err)
      )
  }
}
