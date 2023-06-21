import { Component } from '@angular/core';
import { Menu } from '../shared/models/menu-model';
import { MenuService } from '../shared/services/menu.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent {

  menu: Menu[] = [];
  constructor(
    private menuSrvc: MenuService,
    public router: Router) { 
      this.menu = menuSrvc.getAll();
    }

}
