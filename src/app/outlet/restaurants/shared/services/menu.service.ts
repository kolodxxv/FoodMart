import { Injectable } from '@angular/core';
import { Menu } from '../models/menu-model';
import { sample_menu } from '../data';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  getAll(): Menu[]{
    return sample_menu
  }
}
