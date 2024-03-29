import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';

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
  // public outlets: Outlets[]

  // Responsive Breakpoint
  public responsive!: boolean;

  // Service Buttons 
  public items: any[] = ['Restaurants', 'Shops', 'Courier'];
  public toggle!: boolean;
  public selectedIndex: any = 0;

  constructor(
    public foodSrvc: FoodService,
    public grcrSrvc: GroceryService,
    public router: Router,
    public observer: BreakpointObserver

  ) {
    this.foodArr = foodSrvc.getAll()
    this.grocery = grcrSrvc.getAll()
    // this.outlets = outletSrvc.getAll()
  }

  ngAfterViewInit() {
    setTimeout(() => {
    this.observer.observe(['(max-width: 900px)']).subscribe((res) => {
      if (res.matches) {
        this.responsive = true;
      } else {
        this.responsive = false;
      }
    })
  })
  }

  public selectType(arg: any): void {
    // let copyOfLocations: any[] = this.outlets; 
    // copyOfLocations = copyOfLocations.filter((item) => {
    //   return item.foodTypeId === arg.foodTypeId; 
    // });
    // console.log(copyOfLocations)
    // this.redirectByEventType('restaurants', copyOfLocations)
   } 

   public redirectByEventType(url: string, outletType: any): void {
    this.router.navigate([`/${url}`, outletType[0].foodTypeShortLabel])
  }

}
