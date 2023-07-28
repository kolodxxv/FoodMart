import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/shared/search.service';
import { take, map, tap, Observable, filter } from 'rxjs';

import { OutletsService } from '../restaurants/shared/services/outlets.service';
import { Outlets } from '../restaurants/shared/models/restaurants-model';
import { MenuService } from '../restaurants/shared/services/menu.service';
import { Menu } from '../restaurants/shared/models/menu-model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  inputValue!: string;

  public menu: Menu[] = [];
  public outlets: Outlets[] = [];


  constructor(
    private searchSrvc: SearchService,
    public menuSrvc: MenuService,
    public outletSrvc: OutletsService
  ) {
    this.menu = menuSrvc.getAll();
    this.outlets = outletSrvc.getAll();
    this.searchSrvc.inputValue$.subscribe((inputValue) => {
      this.inputValue = inputValue;
    })
  }
  
  ngOnInit(): void {
    // console.log(this.searchQuery)
  }

  }

