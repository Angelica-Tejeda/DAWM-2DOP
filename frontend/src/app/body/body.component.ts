import { Component, OnInit } from '@angular/core';
import { CorreoService } from "../services/correo.service"
import { Correo } from '../model/correo';
import * as $ from 'jquery';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  providers: [CorreoService]
})
export class BodyComponent implements OnInit {
  correo: Correo = {
    nombre: '',
    correo: '',
    telefono: '',
    ciudad: '',
    fechaNac: '',
    mensaje: ''
  };

  constructor(private correoService: CorreoService) { }

  ngOnInit(): void {
    
  }

  enviarMensaje(){
    this.correoService.saveCorreo(this.correo)
      .subscribe(
        res => {
          console.log(res)
        },
        err => {
          console.error(err)
        }
      )
  }
}
