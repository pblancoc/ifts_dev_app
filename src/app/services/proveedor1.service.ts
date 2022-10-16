import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Proveedor1Service {

  constructor(
    public http: HttpClient
  ) {
    console.log('Hola Proveedor1');
  }
  obtenerDatos(){
  //Lo de abajo devuelve todas las categorías
  console.log('haciendo GET de la API')
  return this.http.get('https://epok.buenosaires.gob.ar/getCategorias')



    //Lo de abajo devuelve clubes de jazz
    //return this.http.get('https://epok.buenosaires.gob.ar/buscar/?texto=Clubes%20de%20Jazz');
  }

}
