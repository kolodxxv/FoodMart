import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RestaurantsComponent } from './restaurants.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    RestaurantsComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
    
  ]
})
export class RestaurantsModule { }
