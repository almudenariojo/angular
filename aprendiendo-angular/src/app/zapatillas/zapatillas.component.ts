import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html'
})
export class ZapatillasComponent implements OnInit {
  public titulo: string;
  public zapatillas: Array<Zapatilla>;
  public marcas: string[];
  public color:string;
  public mi_marca: string;

  constructor() {
    this.mi_marca ="";
    this.color ='yellow';
    this.titulo = "Componente de zapatillas";
    this.zapatillas = [
      new Zapatilla('Reebook Classic', 'Reebook', 'red', 30, true),
      new Zapatilla('Nike Classic', 'Nike', 'negro', 80, true),
      new Zapatilla('Adidas Classic', 'Adidas', 'rojo', 120, false),
      new Zapatilla('Adidas Moder', 'Adidas', 'azul', 120, true)
    ];
    this.marcas = [];
    console.log("Se ha cargado el componente zapatillas.component.ts");
  }

  ngOnInit() {
    console.log(this.zapatillas);
    this.obtenerMarcas();
  }

  obtenerMarcas() {
    this.zapatillas.forEach((zapatilla, index) => {
      if (!this.marcas.includes(zapatilla.marca)) {
        this.marcas.push(zapatilla.marca);
      }
    });
    console.log(this.marcas);
  }

  getMarca(){
    alert(this.mi_marca);
  };

 addMarca(){
    this.marcas.push(this.mi_marca);
  };

 borrarMarca(index:number){
    //delete this.marcas[index];
    this.marcas.splice(index, 1);
  };


  public onBlur() {
    console.log("Has salido del input");
  };

  public mostrarPalabra(){
alert(this.color)
  };

}

