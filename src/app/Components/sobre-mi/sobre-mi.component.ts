import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {

  titulo: string;
  subtitulo: string;
  web: string;
  constructor() {
    this.titulo = 'LUIS MARTINEZ';
    this.subtitulo = 'Desarrollador';
    this.web = 'luismartinezo.info';
  }

  ngOnInit() {
  }

}
