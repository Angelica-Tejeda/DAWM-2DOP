import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styles: [
  ]
})
export class FormsComponent {

  constructor() { 

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

  

}
