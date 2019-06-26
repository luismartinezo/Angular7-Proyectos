
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SobreMiComponent } from './Components/sobre-mi/sobre-mi.component';
import { ProyectosComponent } from './Components/proyectos/proyectos.component';
import { CrearProyectosComponent } from './Components/crear-proyectos/crear-proyectos.component';
import { ContactoComponent } from './Components/contacto/contacto.component';
import { ErrorComponent } from './Components/error/error.component';

const routes: Routes = [
  {path: '', component: SobreMiComponent},
  {path: 'Sobre-mi', component: SobreMiComponent},
  {path: 'Proyectos', component: ProyectosComponent},
  {path: 'Crear-proyectos', component: CrearProyectosComponent},
  {path: 'Contacto', component: ContactoComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
