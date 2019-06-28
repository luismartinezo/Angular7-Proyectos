import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Global } from './global';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string;
  constructor(private http: HttpClient) {
    this.url = Global.url;
   }

   testServices() {
     return 'Probando el servicio';
   }
}
