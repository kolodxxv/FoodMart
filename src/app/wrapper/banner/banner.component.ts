import { Component } from '@angular/core';
import { SliderInterface } from './shared/slider.interface';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
 slides: SliderInterface[] = [
  {url: 'assets/img/banner1.png', title: 'one'},
  {url: 'assets/summer-banner.png', title: 'two'},
  {url: 'assets/img/banner2.png', title: 'three'}
 ];

  public currentIndex: number = 0;
  public timeoutId?: number;
  public isActive?: boolean;

  constructor(
    
  ) {
    
  }

  ngOnInit(): void {
    this.resetTimer();
  }

  ngOnDestroy() {
    window.clearTimeout(this.timeoutId);
  }

  resetTimer() {
    if (this.timeoutId) {
      window.clearTimeout(this.timeoutId);
    }
    this.timeoutId = window.setTimeout(() => this.goToNext(), 9000);
    
  }

  goToPrevious(): void {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide ? this.slides.length -1 : this.currentIndex - 1;
  }

  goToNext(): void {
    const isLastSlide = this.currentIndex === this.slides.length -1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;

    this.resetTimer();
    this.currentIndex = newIndex;
  }

  goToSlide(slideIndex: number): void {
    this.resetTimer();
    this.currentIndex = slideIndex;
  }

  getCurrentSlideUrl(): string {
    return `url(${this.slides[this.currentIndex].url})`;
  }

}
