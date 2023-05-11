import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Carousel } from './carousel.model';
import { CarouselService } from './carousel.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  carousels: Carousel[] = [];
  currentSlide = 0;

  nextSlide() {
    if (this.currentSlide < this.carousels.length - 1) {
      this.currentSlide++;
    } else {
      this.currentSlide = 0;
    }
  }

  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    } else {
      this.currentSlide = this.carousels.length - 1;
    }
  }

  constructor(
    private http: HttpClient,
    private carouselService: CarouselService
  ){}

  ngOnInit(): void {
    this.obtenerCarousel();
  }
  
  private obtenerCarousel() {
    this.carouselService.obtenerCarouselRest().subscribe(
      (data) => {
        data.forEach( (carousel) =>{
          const carouselAIncluir: Carousel = new Carousel(carousel.id, carousel.src, carousel.alt);
          this.carousels.push(carouselAIncluir);
        })
      }
    )
  }

}
