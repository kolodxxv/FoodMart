import { Injectable } from '@angular/core';
import { Outlets } from '../models/restaurants-model';
import { sample_outlets } from '../restaurants-data';

@Injectable({
  providedIn: 'root'
})
export class OutletsService {

  constructor() { }

  getAll(): Outlets[] {
    return sample_outlets;
  }
}
