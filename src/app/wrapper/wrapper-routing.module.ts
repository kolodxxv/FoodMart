import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WrapperComponent } from './wrapper.component';
import { RestaurantsComponent } from '../restaurants/restaurants.component';
import { ShopsComponent } from '../shops/shops.component';

const routes: Routes = [
  { path: '', component: WrapperComponent },
  { path: 'restaurants', component: RestaurantsComponent},
  { path: 'shops', component: ShopsComponent}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class WrapperRoutingModule { }
