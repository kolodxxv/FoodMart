import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SliderComponent } from './slider.component';
import { RouterModule } from '@angular/router';


import { NextDirective } from './shared/directives/next.directive';
import { PrevDirective } from './shared/directives/prev.directive';
import { HoverDirective } from './shared/directives/hover.directive';

@NgModule({
  imports: [BrowserModule, RouterModule],
  declarations: [SliderComponent, NextDirective, PrevDirective, HoverDirective],
  exports: [SliderComponent],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SliderModule {}