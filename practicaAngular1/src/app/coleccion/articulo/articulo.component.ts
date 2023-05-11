import { Component, Input, OnInit } from '@angular/core';
import { Coleccion } from '../coleccion.model';
import { registerLocaleData } from '@angular/common';
import localeEs  from '@angular/common/locales/es';
import { Router } from '@angular/router';

registerLocaleData(localeEs);
 
@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.scss']
})

export class ArticuloComponent implements OnInit{
  @Input() coleccion?: Coleccion;

  constructor(
    private router: Router
  ){}

  ngOnInit(): void {
      
  }

  public navegarAFicha(idFicha: String): void{
    this.router.navigate(['ficha',idFicha]);
  }

}
