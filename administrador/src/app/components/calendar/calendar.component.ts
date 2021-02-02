import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styles: [
    "assets/plugins/fontawesome-free/css/all.min.css",
    
    "assets/plugins/fullcalendar/main.min.css",
    "assets/plugins/fullcalendar-daygrid/main.min.css",
    "assets/plugins/fullcalendar-timegrid/main.min.css",
    "assets/plugins/fullcalendar-bootstrap/main.min.css",
    "assets/dist/css/adminlte.min.css"
  ]
  
  
  
})
export class CalendarComponent  {

  constructor() {
    let script = document.createElement("script");
    let script2 = document.createElement("script");
    let script3 = document.createElement("script");
    let script4 = document.createElement("script");
    let script5 = document.createElement("script");
    let script6 = document.createElement("script");
    let script7 = document.createElement("script");
    let script8 = document.createElement("script");
    let script9 = document.createElement("script");
    let script10 = document.createElement("script");
    let script11 = document.createElement("script");
    script.src = "assets/plugins/jquery/jquery.min.js"
    script2.src = "assets/plugins/bootstrap/js/bootstrap.bundle.min.js"
    script3.src = "assets/plugins/jquery-ui/jquery-ui.min.js"
    script4.src = "assets/dist/js/adminlte.min.js"
    script5.src = "assets/dist/js/demo.js"
    script6.src = "assets/plugins/moment/moment.min.js"
    script7.src = "assets/plugins/fullcalendar/main.min.js"
    script8.src = "assets/plugins/fullcalendar-daygrid/main.min.js"
    script9.src = "assets/plugins/fullcalendar-interaction/main.min.js"
    script10.src = "assets/plugins/fullcalendar-bootstrap/main.min.js"
    script11.src = "assets/plugins/fullcalendar-bootstrap/cal.js"

    let body = document.getElementsByTagName("body")[0]
    body.appendChild(script);
    body.appendChild(script2);
    body.appendChild(script3);
    body.appendChild(script4);
    body.appendChild(script5);
    body.appendChild(script6);
    body.appendChild(script7);
    body.appendChild(script8);
    body.appendChild(script9);
    body.appendChild(script10);
    body.appendChild(script11);
   }


  }

