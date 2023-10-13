import { Component, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { take, map, tap } from 'rxjs';

import { OutletsService } from '../restaurants/shared/services/outlets.service';
import { Outlets } from '../restaurants/shared/models/restaurants-model';
import { MenuService } from '../restaurants/shared/services/menu.service';
import { Menu } from '../restaurants/shared/models/menu-model';

@Component({
  selector: 'app-type-filter',
  templateUrl: './type-filter.component.html',
  styleUrls: ['./type-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TypeFilterComponent {

  public menu: Menu[] = [];
  public outlets: Outlets[] = [];

  constructor(
    public router: Router,
    private readonly route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    public menuSrvc: MenuService,
    public outletSrvc: OutletsService,
  

  ) {
    this.menu = menuSrvc.getAll();
    // this.outlets = outletSrvc.getAll();
    
  }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
    this.route.params
    .pipe(
      take(1),
      map((urlId: any) => {
        this.outlets = this.outlets.filter((item: any) => {
          return item.foodTypeShortLabel === urlId['id']
        })
      })
    )
    .subscribe();
  }

  ngDoCheck() {
    this.cdr.markForCheck();
  }

}
