import { Component, Input } from '@angular/core';
import { SliderInterface } from './shared/slider.interface';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  @Input() slides: SliderInterface[] = [];

  public currentIndex: number = 0;

  getCurrentSlideUrl(): string {
    return `url('${this.slides[this.currentIndex].url}')`;
  }
}
