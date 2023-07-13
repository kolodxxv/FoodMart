import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WrapperComponent } from './wrapper.component';
import { OutletModule } from '../outlet/outlet.module';
import { RestaurantsComponent } from '../outlet/restaurants/restaurants.component';
import { ShopsComponent } from '../outlet/shops/shops.component';
import { RestaurantComponent } from '../outlet/restaurants/restaurant/restaurant.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { TypeFilterComponent } from '../outlet/type-filter/type-filter.component';


const routes: Routes = [
  { path: '', component: WrapperComponent, children: [
    { path: '', component: RestaurantsComponent },
    { path: '', component: ShopsComponent },
    { path: '', component: NavbarComponent}
  ]}, 
  { path: 'restaurant/:id', component: RestaurantComponent, children: [
    { path: 'restaurant/:id', component: NavbarComponent }
  ]},
  { path: 'restaurants/:id', component: TypeFilterComponent, children: [
    { path: 'restarants/:id', component: NavbarComponent }
  ]}
]
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class WrapperRoutingModule { }
