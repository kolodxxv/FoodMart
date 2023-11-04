import { Component, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Menu } from '../shared/models/menu-model';
import { MenuService } from '../shared/services/menu.service';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { take, map, tap, filter, combineLatest } from 'rxjs';



import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProductDialogComponent } from './product-dialog/product-dialog.component';


import { DataService } from 'src/app/shared/data.service';



@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RestaurantComponent {

  public menu: Menu[] = [];
  public outlets: any;
  public menu_srv: any;
  
  public currentOutlet: {[key : string]: any[]} = {};
  public currentProduct: any;

  constructor(
    private menuSrvc: MenuService,
    public router: Router,
    private readonly route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private dataService: DataService,
    private dialog: MatDialog
    ) { 
    }

    ngOnInit(): void {
      this.dataService.getData().subscribe(res  => {
        this.outlets = res;
        this.route.params
          .pipe(
            tap((urlId: any) => {
              this.outlets = this.outlets.filter((item: any) => {
                if (item.outlet === urlId['id'].toLowerCase()) {
                  this.currentOutlet['name'] = item.label;
                  this.currentOutlet['img'] = item.img;
                  this.currentOutlet['logo'] = item.logo;
                  this.currentOutlet['hours'] = item.hours;
                }
              })
            }),
          )
          .subscribe()
      });
      this.dataService.getMenu().subscribe(res => {
        this.menu_srv = res;
        this.route.params
        .pipe(
          tap((urlId: any) => {
            this.menu_srv = this.menu_srv.filter((item: any) => {
              return item.outlet.toLowerCase() === urlId['id'].toLowerCase().replace("'", '');
            })
          })
        ).subscribe()
      })
    }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }

  ngDoCheck() {
    this.cdr.markForCheck();
  }

  openDialog(){
    const dialogCongif = new MatDialogConfig();
    dialogCongif.position = { top: '10px'}
    dialogCongif.data = this.currentProduct;
    this.dialog.open(ProductDialogComponent, dialogCongif);
  }


}
