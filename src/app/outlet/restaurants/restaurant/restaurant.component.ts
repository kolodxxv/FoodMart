import { Component, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Menu } from '../shared/models/menu-model';
import { MenuService } from '../shared/services/menu.service';
import { ActivatedRoute, Router } from '@angular/router';
import { take, map } from 'rxjs';




@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RestaurantComponent {

  menu: Menu[] = [];
  constructor(
    private menuSrvc: MenuService,
    public router: Router,
    private readonly route: ActivatedRoute,
    private cdr: ChangeDetectorRef
    ) { 
      this.menu = menuSrvc.getAll();
    }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
    this.route.params
      .pipe(
        take(1),
        map((urlId: any) => {
          this.menu = this.menu.filter((item: any) => {
            return item.outlet.toLowerCase() === urlId['id'].toLowerCase();
          });
        })
      )
      .subscribe();
  }

  ngDoCheck() {
    this.cdr.markForCheck();
  }
}
