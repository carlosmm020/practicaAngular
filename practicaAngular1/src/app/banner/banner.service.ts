import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBanner } from './banner.interface';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor(
    private http: HttpClient
  ) { }

  public obtenerBannerRest(): Observable<IBanner[]>{
    const urlEndPointCarousel: string = "http://localhost:3002/banner";
    return this.http.get<IBanner[]>(urlEndPointCarousel);
  }
}
