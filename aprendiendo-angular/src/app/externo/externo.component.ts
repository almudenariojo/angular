import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';
import { Observer } from 'rxjs';
import { NgForm } from '@angular/forms'; // Importa NgForm

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {

  public user: any;
  public userId: any;
  public fecha: any;
  public new_user: any;
  public usuarioCreado: any;

  constructor(
    private _peticionesService: PeticionesService
  ) {
    this.userId = 1;
    this.new_user = {
      "name": "",
      "job": ""
    };
  }

  ngOnInit() {
    this.fecha = new Date(2023, 8, 13);
    this.cargaUsuario();
  }

  cargaUsuario() {
    this.user = false;
    const observer: Observer<any> = {
      next: (result) => {
        this.user = result.data;
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        // Lógica opcional cuando la suscripción se completa
      }
    };

    this._peticionesService.getUser(this.userId).subscribe(observer);
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this._peticionesService.addUser(this.new_user).subscribe(
        (response) => {
          console.log("Usuario creado:", response);
          this.usuarioCreado = response; // Asigna los datos del usuario creado
          this.new_user.name = "";
          this.new_user.job = "";
        },
        (error) => {
          console.error("Error al crear usuario:", error);
        }
      );
    }
  }

}



