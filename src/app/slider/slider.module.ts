import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SliderComponent } from './slider.component';

import {MatSliderModule} from '@angular/material/slider';
import { NextDirective } from './next.directive';
import { PrevDirective } from './prev.directive';

@NgModule({
  imports: [BrowserModule, MatSliderModule],
  declarations: [SliderComponent, NextDirective, PrevDirective],
  exports: [SliderComponent],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SliderModule {}