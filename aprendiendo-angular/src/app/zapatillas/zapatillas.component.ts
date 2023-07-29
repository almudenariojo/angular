import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html'
})
export class ZapatillasComponent implements OnInit {
  public titulo: string;
  public zapatillas: Array<Zapatilla>; // Aquí se especifica el tipo de datos

  constructor() {
    this.titulo = "Componente de zapatillas";
    this.zapatillas = [
      new Zapatilla ('Reebook Classic', 'Reebook', 'red', 30, true),
      new Zapatilla ('Nike Classic', 'Nike', 'negro', 80, true),
      new Zapatilla ('Adidas Classic', 'Adidas', 'rojo', 120, false)
    ]; // Inicializar el array vacío si no hay datos disponibles
    console.log("Se ha cargado el componente zapatillas.component.ts");
  }
  ngOnInit(){
      console.log(this.zapatillas);
  }
}
