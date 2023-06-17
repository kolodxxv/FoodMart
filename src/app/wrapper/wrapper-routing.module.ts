import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WrapperComponent } from './wrapper.component';
import { ShopsComponent } from '../outlet/shops/shops.component';
import { RestaurantsComponent } from '../outlet/restaurants/restaurants.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  { path: '', component: WrapperComponent, children: [
    { path: '', component: RestaurantsComponent, outlet: 'restaurants' },
    { path: '', component: ShopsComponent, outlet: 'shops'},
  ]}, 
]
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class WrapperRoutingModule { }
