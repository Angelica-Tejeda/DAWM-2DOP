import {RouterModule,Routes} from '@angular/router'

import{BodyComponent,
    CalendarComponent,
    ChartjsComponent,
    DataTComponent,
    MailComponent,
    Mail2Component,
    WidgetsComponent,
    FormsComponent,
    Form2Component,
    TablaPlatilloComponent,
    TablaHistorialComponent,
    FormHistorialComponent
} from "./components/index.paginas"

const app_routes:Routes = [
    {path: '', component:BodyComponent},
    {path: 'calendar', component:CalendarComponent},
    {path: 'dataT', component:DataTComponent},
    {path: 'chartjs', component:ChartjsComponent},
    {path: 'mail', component:MailComponent},
    {path: 'widgets', component:WidgetsComponent},
    {path: 'forms', component:FormsComponent},
    {path: 'form2', component:Form2Component},
    {path: 'tplatillo', component: TablaPlatilloComponent},
    {path: 'thistorial', component: TablaHistorialComponent},
    {path: 'formhistorial', component: FormHistorialComponent},

    {path: 'mail2', component:Mail2Component,},
    {path: 'forms/:id', component:FormsComponent},
    {path: 'form2/:id', component:Form2Component},
   
    {path: '**', pathMatch: 'full', redirectTo: '' }
    
]

export const app_routing = RouterModule.forRoot(app_routes);
