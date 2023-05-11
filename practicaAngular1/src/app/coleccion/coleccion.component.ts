import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ColeccionService } from './coleccion.service';
import { Coleccion } from './coleccion.model';

@Component({
  selector: 'app-coleccion',
  templateUrl: './coleccion.component.html',
  styleUrls: ['./coleccion.component.scss']
})
export class ColeccionComponent implements OnInit{
  colecciones: Coleccion [] = [];

  constructor (
    private http: HttpClient,
    private coleccionService: ColeccionService
  ){}

  ngOnInit(): void {
      this.obtenerColeccion();
  }

  private obtenerColeccion() {
    this.coleccionService.obtenerColeccionRest().subscribe(
      (data) => {
        data.forEach( (coleccion) =>{
          const coleccionAIncluir: Coleccion = new Coleccion (coleccion.id, coleccion.titulo, coleccion.imagen, coleccion.precio, coleccion.precioOferta);
          this.colecciones.push(coleccionAIncluir);
        })
      }
    )
  }

}
