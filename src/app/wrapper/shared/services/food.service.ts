import { Injectable } from '@angular/core';
import { foodType } from '../models/food-model';
import { types_list } from '../data/food-data';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): foodType[]{
    return types_list;
  }
}
