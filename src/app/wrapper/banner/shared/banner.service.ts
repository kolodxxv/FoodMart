import { Injectable } from "@angular/core";
import { SliderInterface } from "./slider.interface";
import { Observable, of } from "rxjs";

@Injectable()
export class BannerService {
  constructor() {}

  public getListOfBanners(): Observable<SliderInterface[]> {
    return of([
      {url: 'assets/img/banner1.png', title: 'one'},
      {url: 'assets/summer-banner.png', title: 'two'}
    ])
  }
}

