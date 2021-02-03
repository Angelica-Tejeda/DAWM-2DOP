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
import { Form2Component } from './components/form2/form2.component';

import { FormsModule } from "@angular/forms"
import { HttpClientModule } from "@angular/common/http"
import { PlatilloService } from "./services/platillo.service"


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
    MailComponent,
    Form2Component
  
  ],
  imports: [
    BrowserModule,
    app_routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
