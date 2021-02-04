import { Component, OnInit } from '@angular/core';
import { CorreoService } from 'src/app/services/correo.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styles: [
  ]
})
export class MailComponent implements OnInit{
  correos: any = [];


  constructor(private correoServices: CorreoService) {
    let script = document.createElement("script");
    let script2 = document.createElement("script");
    let script3 = document.createElement("script");
    script.src = "assets/dist/js/adminlte.min.js"
    script2.src = "assets/dist/js/mail.js"
    script3.src = "assets/dist/js/demo.js"
   
   

    let body = document.getElementsByTagName("body")[0]
    
   
    body.appendChild(script);
    body.appendChild(script2);
    body.appendChild(script3);
   }

  
   ngOnInit() {
    this.getCorreos();
   
  }

  getCorreos(){
    this.correoServices.getCorreos().subscribe(
      res => {
        this.correos = res;
      }, 
      err => console.error(err)
    )
  }



}
