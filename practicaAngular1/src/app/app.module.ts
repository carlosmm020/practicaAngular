import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TiendaComponent } from './tienda/tienda.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HttpClientModule } from '@angular/common/http';
import { BannerComponent } from './banner/banner.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ColeccionComponent } from './coleccion/coleccion.component';
import { ArticuloComponent } from './coleccion/articulo/articulo.component';
import { FichaComponent } from './coleccion/ficha/ficha.component';

@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    NosotrosComponent,
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    BannerComponent,
    CategoriasComponent,
    ColeccionComponent,
    ArticuloComponent,
    FichaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
