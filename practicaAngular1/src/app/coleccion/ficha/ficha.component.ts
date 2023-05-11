import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Coleccion } from '../coleccion.model';

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.scss']
})
export class FichaComponent implements OnInit {
  @Input() coleccion?: Coleccion;

  idFicha?: string;

  constructor(
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.idFicha = this.route.snapshot.paramMap.get('idFicha') ?? undefined
  }
}
