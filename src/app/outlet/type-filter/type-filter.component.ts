import { Component, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { take, map, tap } from 'rxjs';



@Component({
  selector: 'app-type-filter',
  templateUrl: './type-filter.component.html',
  styleUrls: ['./type-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TypeFilterComponent {

  public menu: any;
  public outlets: any;

  constructor(
    public router: Router,
    private readonly route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
  

  ) {}

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
