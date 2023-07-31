import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/shared/search.service';
import { Router } from '@angular/router';
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

  public inputValue!: string;
  public searchTab: number = 0;

  public menu: Menu[] = [];
  public outlets: Outlets[] = [];


  constructor(
    private searchSrvc: SearchService,
    public menuSrvc: MenuService,
    public outletSrvc: OutletsService,
    public router: Router
  ) {
    this.menu = menuSrvc.getAll();
    this.outlets = outletSrvc.getAll();
    this.searchSrvc.inputValue$.subscribe((inputValue) => {
      this.inputValue = inputValue;
    })
  }

  public redirectByEventType(url: string, outlet: any): void {
    this.router.navigate([`/${url}`, outlet])
  }
  
  

  }

