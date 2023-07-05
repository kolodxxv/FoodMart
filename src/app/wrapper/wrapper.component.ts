import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FoodService } from './shared/services/food.service';
import { foodTypeModel } from './shared/models/food-model';
import { GroceryService } from './shared/services/grocery.service';
import { groceryTypeModel } from './shared/models/grocery-model';

import { Outlets } from '../outlet/restaurants/shared/models/restaurants-model';
import { OutletsService } from '../outlet/restaurants/shared/services/outlets.service';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent {

  public foodArr: foodTypeModel[] = [] 
  public grocery: groceryTypeModel[] = []
  public outlets: Outlets[]
  

  // public locations: any[] = [
  //   { id: 1, label: 'Star kebab', foodTypeShortLabel: 'kb', foodTypeId: '10' },
  //   { id: 2, label: 'Pegas', foodTypeShortLabel: 'mt', foodTypeId: '20'},
  // ];

  // Service Buttons 
  public items: any[] = ['Restaurants', 'Shops', 'Courier'];
  public toggle!: boolean;
  public selectedIndex: any = 0;

  constructor(
    public foodSrvc: FoodService,
    public grcrSrvc: GroceryService,
    public outletSrvc: OutletsService,
    public router: Router
  ) {
    this.foodArr = foodSrvc.getAll()
    this.grocery = grcrSrvc.getAll()
    this.outlets = outletSrvc.getAll()
  }

  public selectType(arg: any): void {
    let copyOfLocations: any[] = this.outlets; 
    copyOfLocations = copyOfLocations.filter((item) => {
      return item.foodTypeId === arg.foodTypeId; 
    });
    console.log(copyOfLocations)
    this.redirectByEventType('restaurants', copyOfLocations)
   } 

   public redirectByEventType(url: string, outletType: any): void {
    this.router.navigate([`/${url}`, outletType[0].foodTypeShortLabel])
  }

}
