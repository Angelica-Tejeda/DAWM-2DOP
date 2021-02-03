import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//borrar si falla
import { FormsModule } from "@angular/forms"
import { HttpClientModule } from "@angular/common/http"
import { CorreoService } from "./services/correo.service"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';


@NgModule({
  declarations: [
    AppComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //borrar si falla
    FormsModule,
    HttpClientModule
  ],
  providers: [CorreoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
