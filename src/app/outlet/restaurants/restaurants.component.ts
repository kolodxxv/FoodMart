import { Component } from '@angular/core';
import { Outlets } from './shared/models/restaurants-model';
import { OutletsService } from './shared/services/outlets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurants-component',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent {
  
  public restaurantsArray: Outlets[] = []

  constructor(
    outletsSrvc: OutletsService,
    private router: Router
  ) {
    this.restaurantsArray = outletsSrvc.getAll();
  }

  public redirectByEventType(url: string, outlet: any): void {
    this.router.navigate([`/${url}`, outlet])
  }

}
