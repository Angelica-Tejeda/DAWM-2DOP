import { Component, OnInit } from '@angular/core';
import { Correo } from 'src/app/model/correo';
import { CorreoService } from 'src/app/services/correo.service';
@Component({
  selector: 'app-mail2',
  templateUrl: './mail2.component.html',
  styles: ['assets/plugins/summernote/summernote-bs4.css'
  ]
})
export class Mail2Component implements OnInit {
  correo: any = {
    id : "1",
    nombre : 'hola' ,
    correo : "hola",
   telefono : "0124134",
    ciudad : "guayaquil",
    mensaje : "me gusta el producto",
    createdAt : null,

  } ;

  correos: any = []

 
  constructor(private correoServices: CorreoService) { 
  let script2 = document.createElement("script");
  let script3 = document.createElement("script");
  
  script2.src = "assets/dist/js/adminlte.min.js"

  script3.src = "assets/dist/js/demo.js"

 
  let body = document.getElementsByTagName("body")[0]
  

  body.appendChild(script2);
  body.appendChild(script3);
 
  }
  ngOnInit() {
    this.getCorreo();
  
  }

  getCorreo(){
    this.correoServices.getCorreo("id:1").subscribe(
      res => {
        this.correos = res;
        console.log(this.correo)
      }, 
      err => console.error(err)
    )
  }


}
