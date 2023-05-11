import { Injectable } from '@angular/core';
import { Carousel } from './carousel.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICarousel } from './carousel.interface';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  constructor(
    private http: HttpClient
  ) { }

  public obtenerCarouselRest(): Observable<ICarousel[]>{
    const urlEndPointCarousel: string = "http://localhost:3002/carousel";
    return this.http.get<ICarousel[]>(urlEndPointCarousel);
  }

}
