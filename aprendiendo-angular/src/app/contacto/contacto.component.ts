import { Component, OnInit } from '@angular/core';
import { ContactoUsuario } from '../models/contacto.usuario';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit{
   public usuario: ContactoUsuario;
    constructor(){
      this.usuario = new ContactoUsuario('Almudena', 'Riojo Gómez', 'correo@example.com', 'Mensaje de ejemplo');
    }
    enviarFormulario(formulario: any) {
      if (formulario.valid) {
        // Realiza las acciones necesarias con los datos del usuario
        console.log(this.usuario);
        // ...otras acciones
        console.log("formulario enviado");
        formulario.reset();
      }
    }
    ngOnInit(): void {

}
}
