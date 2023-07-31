import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WrapperComponent } from './wrapper.component';
import { OutletModule } from '../outlet/outlet.module';
import { RestaurantsComponent } from '../outlet/restaurants/restaurants.component';
import { ShopsComponent } from '../outlet/shops/shops.component';
import { RestaurantComponent } from '../outlet/restaurants/restaurant/restaurant.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { TypeFilterComponent } from '../outlet/type-filter/type-filter.component';
import { CartComponent } from '../cart/cart.component';
import { FooterComponent } from '../footer/footer.component';
import { OrderPageComponent } from '../cart/order-page/order-page.component';
import { SearchComponent } from '../outlet/search/search.component';
import { MapsComponent } from '../navbar/maps/maps.component';
import { BannerComponent } from './banner/banner.component';


const routes: Routes = [
  { path: '', component: WrapperComponent, children: [
    { path: '', component: RestaurantsComponent },
    { path: '', component: ShopsComponent },
    { path: '', component: NavbarComponent },
    { path: '', component: CartComponent },
    { path: '', component: FooterComponent },
    { path: '', component: BannerComponent}
  ],} , 
  { path: 'restaurant/:id', component: RestaurantComponent, children: [
    { path: 'restaurant/:id', component: NavbarComponent },
    { path: 'restaurant/:id', component: FooterComponent },
    { path: 'restaurant?:id', component: CartComponent }
  ]},
  { path: 'restaurants/:id', component: TypeFilterComponent, children: [
    { path: 'restarants/:id', component: NavbarComponent }
  ]},
  { path: 'cart', component: OrderPageComponent },
  { path: 'search', component: SearchComponent, children: [
    { path: 'search', component: NavbarComponent }
  ] },
  { path: 'maps', component: MapsComponent }
]
 

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" })],
  exports: [RouterModule]
})
export class WrapperRoutingModule { }
