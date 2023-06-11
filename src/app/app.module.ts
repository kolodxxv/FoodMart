import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarModule } from './navbar/navbar.module';
import { SliderModule } from './slider/slider.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    SliderModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
