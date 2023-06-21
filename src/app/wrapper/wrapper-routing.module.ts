import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WrapperComponent } from './wrapper.component';
import { ShopsComponent } from '../outlet/shops/shops.component';
import { RestaurantsComponent } from '../outlet/restaurants/restaurants.component';
import { RestaurantComponent } from '../outlet/restaurants/restaurant/restaurant.component';
import { NavbarComponent } from '../navbar/navbar.component';


const routes: Routes = [
  { path: '', component: WrapperComponent, children: [
    { path: '', component: RestaurantsComponent, outlet: 'restaurants'},
    { path: '', component: ShopsComponent, outlet: 'shops'},
    { path: '', component: NavbarComponent}
  ]}, 
  { path: 'restaurant/:id', component: RestaurantComponent, children: [
    { path: '', component: NavbarComponent, outlet: 'navbar'}
  ] }
]
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class WrapperRoutingModule { }
