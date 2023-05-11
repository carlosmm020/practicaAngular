import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IColeccion } from './coleccion.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColeccionService {

  constructor(
    private http: HttpClient
  ) { }

  public obtenerColeccionRest(): Observable<IColeccion[]>{
    const urlEndPointCarousel: string = "http://localhost:3002/coleccion";
    return this.http.get<IColeccion[]>(urlEndPointCarousel);
  }
}
