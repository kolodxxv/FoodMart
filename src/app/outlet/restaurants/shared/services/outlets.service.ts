import { Injectable } from '@angular/core';
import { Outlets } from '../models/restaurants-model';
import { DataService } from 'src/app/shared/data.service';
// import { sample_outlets } from '../restaurants-data';

@Injectable({
  providedIn: 'root'
})
export class OutletsService {

  constructor(
    private dataService: DataService
  ) { }

  // getAll(): Outlets[] {
  //     this.dataService.getData().subscribe(res => {
  //       this.sample_outlets = res
  //   })
  // }
  //   return sample_outlets;
  // }
}
