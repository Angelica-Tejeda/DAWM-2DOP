import { Component} from '@angular/core';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})
export class BodyComponent{

  constructor() {
    let script = document.createElement("script");
    let script2 = document.createElement("script");
    let script3 = document.createElement("script");
    script.src = "assets/dist/js/adminlte.js"
    script2.src = "assets/dist/js/pages/dashboard.js"
    script3.src = "assets/dist/js/demo.js"
    let body = document.getElementsByTagName("body")[0]
    body.appendChild(script);
    body.appendChild(script2);
    body.appendChild(script3);
   }

 
 
}
