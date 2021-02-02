import {RouterModule,Routes} from '@angular/router'

import{BodyComponent,
    CalendarComponent,
    ChartjsComponent,
    DataTComponent,
    MailComponent,
    WidgetsComponent,
    FormsComponent


} from "./components/index.paginas"

const app_routes:Routes = [
    {path: '', component:BodyComponent},
    {path: 'calendar', component:CalendarComponent},
    {path: 'dataT', component:DataTComponent},
    {path: 'chartjs', component:ChartjsComponent},
    {path: 'mail', component:MailComponent,},
    {path: 'widgets', component:WidgetsComponent,},
    {path: 'forms', component:FormsComponent},
   
    {path: '**', pathMatch: 'full', redirectTo: '' }
    
]

export const app_routing = RouterModule.forRoot(app_routes);
