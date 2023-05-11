import { Component, OnInit } from '@angular/core';
import { Categorias } from './categorias.model';
import { HttpClient } from '@angular/common/http';
import { CategoriasService } from './categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit{
  categorias: Categorias[] = [];

  constructor(
    private http: HttpClient,
    private categoriasService: CategoriasService
  ){}

  ngOnInit(): void {
    this.obtenerCategorias();
  }

  obtenerCategorias() {
    this.categoriasService.obtenerCategoriasRest().subscribe(
      (data) => {
        data.forEach( (categorias) => {
          const categoriasAIncluir: Categorias = new Categorias(categorias.id, categorias.titulo, categorias.imagen);
          this.categorias.push(categoriasAIncluir);
        })
      })
  }

}
