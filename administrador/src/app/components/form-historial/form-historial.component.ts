import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Historial } from 'src/app/model/historial';
import { HistorialService } from 'src/app/services/historial.service';

@Component({
  selector: 'app-form-historial',
  templateUrl: './form-historial.component.html',
  styles: [
  ]
})
export class FormHistorialComponent {

  historial: Historial = {
    _id: '',
    platillo: '',
    precio: '',
    fecha: ''
  };

  constructor(private historialService: HistorialService,private router: Router) { }

  saveHistorial(){
    this.historialService.saveHistorial(this.historial)
    .subscribe(
      res => {
        console.log(res),
        this.router.navigate(['/thistorial'])
      },
      err => console.error(err) 
    )
  }

}
