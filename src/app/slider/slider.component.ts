import { AfterViewInit, Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-slider-component',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  @Input() foodArr: any;
  @Output() selectType: EventEmitter<any> = new EventEmitter<any>;
  constructor() {}

  ngAfterViewInit(): void {
   
  }

}

