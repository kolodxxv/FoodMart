import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SliderComponent } from './slider.component';
import { RouterModule } from '@angular/router';


import { NextDirective } from './next.directive';
import { PrevDirective } from './prev.directive';
import { HoverDirective } from './hover.directive';

@NgModule({
  imports: [BrowserModule, RouterModule],
  declarations: [SliderComponent, NextDirective, PrevDirective, HoverDirective],
  exports: [SliderComponent],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SliderModule {}