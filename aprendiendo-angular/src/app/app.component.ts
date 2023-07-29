import { Component } from '@angular/core';
import { configuracion } from './models/configuracion';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Soy Almudena Riojo';
  public mostrar_videojuegos: boolean = true;
  public descripcion: string;
  public config;

  constructor(){
    this.config = configuracion;
    this.title = configuracion.titulo;
    this.descripcion =configuracion.descripcion;
  }

  ocultarVideojuegos(ocultar: boolean){
    this.mostrar_videojuegos = ocultar;
  }
}
