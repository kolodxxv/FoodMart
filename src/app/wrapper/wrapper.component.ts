import { Component } from '@angular/core';
import { FoodService } from './shared/services/food.service';
import { foodTypeModel } from './shared/models/food-model';
import { GroceryService } from './shared/services/grocery.service';
import { groceryTypeModel } from './shared/models/grocery-model';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent {

  public foodArr: foodTypeModel[] = [] 
  public grocery: groceryTypeModel[] = []

  public locations: any[] = [
    { id: 1, label: 'Star kebab', foodTypeShortLabel: 'kb', foodTypeId: '10' },
    { id: 2, label: 'Pegas', foodTypeShortLabel: 'mt', foodTypeId: '20'},
  ];

  // Service Buttons 
  public items: any[] = ['Restaurants', 'Shops', 'Courier'];
  public toggle!: boolean;
  public selectedIndex: any = 0;

  constructor(
    public foodSrvc: FoodService,
    public grcrSrvc: GroceryService
  ) {
    this.foodArr = foodSrvc.getAll()
    this.grocery = grcrSrvc.getAll()
  }

  public selectType(arg: any): void {
    let copyOfLocations: any[] = this.locations; 
    copyOfLocations = copyOfLocations.filter((item) => {
      return item.foodTypeId === arg.foodTypeId; 
    });
    console.log(copyOfLocations)
   } 

}
