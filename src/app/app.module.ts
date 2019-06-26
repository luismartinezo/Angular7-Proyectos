import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SobreMiComponent } from './Components/sobre-mi/sobre-mi.component';
import { ContactoComponent } from './Components/contacto/contacto.component';
import { ProyectosComponent } from './Components/proyectos/proyectos.component';
import { CrearProyectosComponent } from './Components/crear-proyectos/crear-proyectos.component';
import { ErrorComponent } from './Components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    SobreMiComponent,
    ContactoComponent,
    ProyectosComponent,
    CrearProyectosComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
