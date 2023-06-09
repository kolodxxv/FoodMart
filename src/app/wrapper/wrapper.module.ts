import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperRoutingModule } from './wrapper-routing.module';
import { WrapperComponent } from './wrapper.component';

import { SliderModule } from '../slider/slider.module';
import { OutletModule } from '../outlet/outlet.module';
import { BackgroundDirective } from './background.directive';
import { NavbarModule } from '../navbar/navbar.module';





@NgModule({
  declarations: [
    WrapperComponent,
    BackgroundDirective
  ],
  imports: [
    CommonModule,
    WrapperRoutingModule,
    SliderModule,
    OutletModule,
    NavbarModule
  ],
  exports: [WrapperComponent],
  bootstrap: [],
})
export class WrapperModule {}
