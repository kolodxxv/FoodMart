import { Component } from '@angular/core';
import { Outlets } from './shared/models/restaurants-model';
import { OutletsService } from './shared/services/outlets.service';

@Component({
  selector: 'app-restaurants-component',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent {
  
  public restaurantsArray: Outlets[] = []

  constructor(
    outletsSvrc: OutletsService
  ) {
    this.restaurantsArray = outletsSvrc.getAll();
  }

}
