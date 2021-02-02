import{app_routing} from "./app.routes";



import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BodyComponent } from './components/body/body.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';

import { CalendarComponent } from './components/calendar/calendar.component';

import { WidgetsComponent } from './components/widgets/widgets.component';
import { ChartjsComponent } from './components/chartjs/chartjs.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { DataTComponent } from './components/data-t/data-t.component';
import { FormsComponent } from './components/forms/forms.component';
import { MailComponent } from './components/mail/mail.component';


@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HeaderComponent,
    MenuComponent,
   
    CalendarComponent,
   
    WidgetsComponent,
    ChartjsComponent,
    ButtonsComponent,
    DataTComponent,
    FormsComponent,
    MailComponent
  
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
