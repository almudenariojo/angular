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

  constructor() {
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

}

