import { Component, OnInit } from '@angular/core';
import { ContactoUsuario } from '../models/contacto.usuario';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})

export class ContactoComponent implements OnInit {
  public usuario: ContactoUsuario;
  public formularioEnviado = false;

  constructor() {
    this.usuario = new ContactoUsuario('', '', '', '');
  }

  enviarFormulario(formulario: any) {
    if (formulario.valid) {
      console.log(this.usuario);
      console.log("formulario enviado");
      this.formularioEnviado = true;
    }
  }

  restablecerCampos() {
    this.usuario = new ContactoUsuario('', '', '', ''); // Restablece los valores del usuario
    this.formularioEnviado = false;
  }

  ngOnInit(): void {
  }
}





