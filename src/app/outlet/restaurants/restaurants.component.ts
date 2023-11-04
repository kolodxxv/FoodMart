import { Component } from '@angular/core';
import { Outlets } from './shared/models/restaurants-model';
import { Router } from '@angular/router';

import { DataService } from 'src/app/shared/data.service';


@Component({
  selector: 'app-restaurants-component',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent {

  // Server Info
  public server_outlets: any;
  
  public restaurantsArray: Outlets[] = []

  constructor(
    private dataService: DataService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.getOutletsData();
  }

  getOutletsData() {
    this.dataService.getData().subscribe(res => {
      this.server_outlets = res
    });
  }

  public redirectByEventType(url: string, outlet: any): void {
    this.router.navigate([`/${url}`, outlet])
  }

}
