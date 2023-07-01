import { Injectable } from '@angular/core';
import { groceryTypeModel } from '../models/grocery-model';
import { grocery_list } from '../data/grocery-data';

@Injectable({
  providedIn: 'root'
})
export class GroceryService {

  constructor() { }

  getAll(): groceryTypeModel[]{
    return grocery_list
  }
}
