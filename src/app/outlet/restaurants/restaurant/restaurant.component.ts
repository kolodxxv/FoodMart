import { Component, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { tap, forkJoin, Subject, takeUntil } from 'rxjs';



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

  public outlets: any;
  public menu_srv: any;
  
  public currentOutlet: {[key : string]: any[]} = {};
  public currentProduct: any;

  private unsubscribe$ = new Subject<void>();

  constructor(
    public router: Router,
    private readonly route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private dataService: DataService,
    private dialog: MatDialog
    ) { 
    }

    ngOnInit(): void {

      forkJoin({
        data: this.dataService.getData(),
        menu: this.dataService.getMenu()
      })
      .pipe(
        takeUntil(this.unsubscribe$)
      )
      .subscribe(({ data, menu }) => {
        this.outlets = data;
        this.menu_srv = menu;

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
              });

              this.menu_srv = this.menu_srv.filter((item: any) => {
                return item.outlet.toLowerCase() 
                    === urlId['id'].toLowerCase();
              });
            })
          )
          .subscribe();
      });
  }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }

  ngDoCheck() {
    this.cdr.markForCheck();
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  openDialog(){
    const dialogCongif = new MatDialogConfig();
    dialogCongif.position = { top: '10px'}
    dialogCongif.data = this.currentProduct;
    this.dialog.open(ProductDialogComponent, dialogCongif);
  }


}
