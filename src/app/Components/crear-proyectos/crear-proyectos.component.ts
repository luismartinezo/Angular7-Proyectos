import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/Models/proyecto';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-crear-proyectos',
  templateUrl: './crear-proyectos.component.html',
  styleUrls: ['./crear-proyectos.component.css']
})
export class CrearProyectosComponent implements OnInit {

  titulo: string;
  proyecto: Proyecto;

  constructor(private api: ApiService) {

    this.titulo = 'Crear Proyectos';
    this.proyecto = new Proyecto(0 , '', '', '', 2019, '', '');
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.proyecto);
  }
}
