import { Component} from '@angular/core';

@Component({
  selector: 'app-data-t',
  templateUrl: './data-t.component.html',
  styles: ["assets/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css",
  "assets/plugins/datatables-responsive/css/responsive.bootstrap4.min.css"



  ]
})
export class DataTComponent{

  constructor() { 

    let script = document.createElement("script");
    let script2 = document.createElement("script");
    let script3 = document.createElement("script");
    let script4 = document.createElement("script");
    let script5 = document.createElement("script");
    let script6 = document.createElement("script");
    script4.src = "assets/dist/js/adminlte.min.js"
    script2.src = "assets/dist/js/demo.js"
    script.src = "assets/plugins/datatables/jquery.dataTables.min.js"
    script2.src = "assets/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js"
    script3.src = "assets/plugins/datatables-responsive/js/responsive.bootstrap4.min.js"
    script6.src = "assets/plugins/datatables/data.js"
  

    let body = document.getElementsByTagName("body")[0]
    
   
    body.appendChild(script);
    body.appendChild(script2);
    body.appendChild(script3);
    body.appendChild(script4);
    body.appendChild(script5);
    body.appendChild(script6);
  }

  

}
