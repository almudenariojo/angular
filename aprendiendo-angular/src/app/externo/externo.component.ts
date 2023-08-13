import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';
import { Observer } from 'rxjs';

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

  constructor(
    private _peticionesService: PeticionesService
  ) {
    this.userId = 1;
  }

  ngOnInit() {

    this.fecha = new Date(2023,8,13);
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
}


