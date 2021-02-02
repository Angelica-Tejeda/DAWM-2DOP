import { Component } from '@angular/core';

@Component({
  selector: 'app-chartjs',
  templateUrl: './chartjs.component.html',
  styles: [
  ]
})
export class ChartjsComponent  {

  constructor() { 
  let script = document.createElement("script");
  let script2 = document.createElement("script");
  let script3 = document.createElement("script");
  let script4 = document.createElement("script");
  script.src = "assets/plugins/chart.js/Chart.min.js"
  script2.src = "assets/dist/js/adminlte.min.js"
  script3.src = "assets/dist/js/demo.js"
  script4.src = "assets/plugins/chart.js/char.js"
  let body = document.getElementsByTagName("body")[0]
  
 
  body.appendChild(script);
  body.appendChild(script2);
  body.appendChild(script3); 
  body.appendChild(script4); 
}



}
