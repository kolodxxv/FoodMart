import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input'
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularYandexMapsModule, YaConfig } from 'angular8-yandex-maps';
import { MatCheckboxModule } from '@angular/material/checkbox'

import { NavbarComponent } from './navbar.component';
import { ResizeDirective } from './shared/resize.directive';
import { MapsComponent } from './maps/maps.component';

// Map API 
const mapConfig: YaConfig = {
  apikey: '75fd6aa6-08b9-437d-8969-9eaec5021186',
  lang: 'en_US',
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    FlexLayoutModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    AngularYandexMapsModule.forRoot(mapConfig)
  ],
  declarations: [NavbarComponent, ResizeDirective, MapsComponent],
  exports: [NavbarComponent],
  bootstrap: [MapsComponent]
  
})
export class NavbarModule {}