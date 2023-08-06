import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Injectable()
  export class ZapatillaService{
    public zapatillas: Array<Zapatilla>;

constructor(){
  this.zapatillas = [
    new Zapatilla('Reebook Classic', 'Reebook', 'red', 30, true),
    new Zapatilla('Nike Classic', 'Nike', 'negro', 80, true),
    new Zapatilla('Adidas Classic', 'Adidas', 'rojo', 120, false),
    new Zapatilla('Adidas Moder', 'Adidas', 'azul', 120, true)
  ];
}

getTexto(){
  return "Devuelve datos de un servicio";
  }

getZapatillas(): Array<Zapatilla>{
  return this.zapatillas;
  }


  }
