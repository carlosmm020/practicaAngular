import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TiendaComponent } from './tienda/tienda.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ColeccionComponent } from './coleccion/coleccion.component';
import { FichaComponent } from './coleccion/ficha/ficha.component';

const routes: Routes = [
  { path: '', component: TiendaComponent},
  { path: 'nosotros', component: NosotrosComponent},
  { path: 'coleccion', component: ColeccionComponent},
  { path: 'ficha/:idFicha', component: FichaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
