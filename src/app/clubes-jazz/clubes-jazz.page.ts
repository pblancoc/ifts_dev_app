import { Component, OnInit } from '@angular/core';



// para poder tener los datos de la api
import { Proveedor1Service } from '../services/proveedor1.service';




interface Categoria {
  fuente:	string;
  fecha_de_relevamiento: string;
  tipo_de_geometria: string;
  nombre_normalizado: string;
  descripcion: string;
  nombre: string;
}


// interface ClubesDeJazz {
//   // nombreId: string;
//   // nombre: string;
//   // total: string;
//   // id: string;
//   // nombreNorm: string;

//   total: string;
//   totalFull: string;
//   clasesEncontradas: string[];
//   instancias: string[];

// }

interface Idata {
  categorias: Categoria[];
  cantidad_de_categorias: number;

  //clubesDeJazz: ClubesDeJazz[];
}

@Component({
  selector: 'app-clubes-jazz',
  templateUrl: './clubes-jazz.page.html',
  styleUrls: ['./clubes-jazz.page.scss'],
})
export class ClubesJazzPage implements OnInit {

  data;
  lugares: Categoria[];

  //clubes: ClubesDeJazz[];

  constructor(

    
    public proveedor: Proveedor1Service

  ) { }

  ngOnInit() {

    this.ionViewDidLoad();
  }

  ionViewDidLoad(){
    this.proveedor.obtenerDatos()
    .subscribe(
      (data)=> {this.data = data;
                this.lugares = this.data.categorias},
                //this.clubes = this.data.clubesDeJazz},
      (error)=> {console.log(error);}
    );
  }

}
