import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExternoComponent } from './externo/externo.component';
import { ContactoComponent } from './contacto/contacto.component';

import { HomeComponent } from './home/home.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { VideojuegoComponent } from './videoJuego/videojuego.component';
import { CursosComponent } from './cursos/cursos.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'zapatillas', component: ZapatillasComponent },
  { path: 'videojuego', component: VideojuegoComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'cursos/:nombre', component: CursosComponent },
  { path: 'cursos/:nombre/:followers', component: CursosComponent }, // Nueva ruta con dos parámetros
  { path: 'externo', component: ExternoComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: '**', component: HomeComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
