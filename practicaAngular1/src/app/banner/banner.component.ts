import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BannerService } from './banner.service';
import { Banner } from './banner.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  banners: Banner[] = [];

  constructor(
    private http: HttpClient,
    private banerService: BannerService
  ) { }

  ngOnInit(): void {
    this.obtenerBanner();
  }

  private obtenerBanner() {
    this.banerService.obtenerBannerRest().subscribe(
      (data) => {
        data.forEach( (banner) => {
          const bannerAIncluir: Banner = new Banner(banner.id, banner.titulo, banner.imagen);
          this.banners.push(bannerAIncluir);
        })
      })
  }
}