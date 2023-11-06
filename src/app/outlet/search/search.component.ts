import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/shared/search.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  public inputValue!: string;
  public searchTab: number = 0;

  public menu: any;
  public outlets: any;


  constructor(
    private searchSrvc: SearchService,
    public router: Router
  ) {
    this.searchSrvc.inputValue$.subscribe((inputValue) => {
      this.inputValue = inputValue;
    })
  }

  public redirectByEventType(url: string, outlet: any): void {
    this.router.navigate([`/${url}`, outlet])
  }
  
  

  }

