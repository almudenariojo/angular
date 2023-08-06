import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';
import { ZapatillaService } from '../services/zapatilla.service';

@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html',
  providers: [ZapatillaService]
})
export class ZapatillasComponent implements OnInit {
  public titulo: string;
  public marcas: string[];
  public color: string;
  public mi_marca: string;
  public zapatillas: Array<Zapatilla>;

  constructor(
    private _zapatillaService: ZapatillaService
   ){
    this.mi_marca = "";
    this.color = 'yellow';
    this.titulo = "Componente de zapatillas";
    this.marcas = [];
    this.zapatillas = []; // Inicializa el array de zapatillas
    console.log("Se ha cargado el componente zapatillas.component.ts");
  }

  ngOnInit() {
    this.zapatillas = this._zapatillaService.getZapatillas(); // Obtiene las zapatillas del servicio
    alert(this._zapatillaService.getTexto());
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

  getMarca() {
    alert(this.mi_marca);
  }

  addMarca() {
    this.marcas.push(this.mi_marca);
  }

  borrarMarca(index: number) {
    this.marcas.splice(index, 1);
  }

  public onBlur() {
    console.log("Has salido del input");
  }

  public mostrarPalabra() {
    alert(this.color);
  }
}


