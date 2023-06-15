import { Component } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent {

  public foodArr: any[] = [
    { id: 1, textValue: 'Kebab', foodTypeShortLabel: 'kb', foodTypeId: '10',
    img: 'https://straus.s3.amazonaws.com:443/media/CACHE/images/category/kebab/b22b391d615d0fed8ea38848f92328b3.png'},
    { id: 2, textValue: 'Meat', foodTypeShortLabel: 'mt', foodTypeId: '20',
    img: 'https://straus.s3.amazonaws.com:443/media/CACHE/images/category/steak/65500add7147bd9a5d6c78e7098297d0.png' },
    { id: 3, textValue: 'Pizza', foodTypeShortLabel: 'pz', foodTypeId: '30' ,
    img: 'https://straus.s3.amazonaws.com:443/media/CACHE/images/category/pizza/d5f9836f87578679fc1bb4b3ef6d5396.png'},
    { id: 4, textValue: 'Sushi', foodTypeShortLabel: 'sh', foodTypeId: '40',
    img: 'https://straus.s3.amazonaws.com:443/media/CACHE/images/category/sushi/00c58fffa6476d1598229cbbd427564c.png' },
    { id: 5, textValue: 'Fish', foodTypeShortLabel: 'fs', foodTypeId: '50',
    img: 'https://straus.s3.amazonaws.com:443/media/CACHE/images/category/fish/384a62033e755bd0b5d6547a214c0658.png' },
  ];

  public locations: any[] = [
    { id: 1, label: 'Star kebab', foodTypeShortLabel: 'kb', foodTypeId: '10' },
    { id: 2, label: 'Pegas', foodTypeShortLabel: 'mt', foodTypeId: '20'},
  ];

  // Service Buttons 
  public items: any[] = ['Restaurants', 'Shops', 'Courier'];
  public toggle!: boolean;
  public selectedIndex: any;

  constructor() {}

  public selectType(arg: any): void {
    let copyOfLocations: any[] = this.locations; 
    copyOfLocations = copyOfLocations.filter((item) => {
      return item.foodTypeId === arg.foodTypeId; 
    });
    console.log(copyOfLocations)
   } 

}
