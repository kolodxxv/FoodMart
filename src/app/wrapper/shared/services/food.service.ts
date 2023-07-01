import { Injectable } from '@angular/core';
import { foodTypeModel } from '../models/food-model';
import { type_list } from '../data/food-data';


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(
    
  ) { }

  getAll(): foodTypeModel[]{
    return type_list;
  }


  }
