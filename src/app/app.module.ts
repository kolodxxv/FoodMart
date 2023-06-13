import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarModule } from './navbar/navbar.module';
import { WrapperModule } from './wrapper/wrapper.module';




@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    RouterModule,
    WrapperModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
