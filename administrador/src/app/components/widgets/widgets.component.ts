import { Component } from '@angular/core';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styles: [
  ]
})
export class WidgetsComponent  {

  constructor() {
    let script = document.createElement("script");
    let script2 = document.createElement("script");
    script.src = "assets/dist/js/adminlte.min.js"
    script2.src = "assets/dist/js/demo.js"
   
   

    let body = document.getElementsByTagName("body")[0]
    
   
    body.appendChild(script);
    body.appendChild(script2);
   }

  

}
