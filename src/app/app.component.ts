import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FoodMart';
  
  public foodArr: any[] = [
    { id: 1, textValue: 'Kebab', foodTypeShortLabel: 'kb', foodTypeId: '10' },
    { id: 2, textValue: 'Meat', foodTypeShortLabel: 'mt', foodTypeId: '20' },
    { id: 3, textValue: 'Pizza', foodTypeShortLabel: 'pz', foodTypeId: '30' },
    { id: 4, textValue: 'Sushi', foodTypeShortLabel: 'sh', foodTypeId: '40' },
    { id: 5, textValue: 'Vegan', foodTypeShortLabel: 'vg', foodTypeId: '50' },
  ];

  public locations: any[] = [
    { id: 1, label: 'Star kebab', foodTypeShortLabel: 'kb', foodTypeId: '10' },
    { id: 2, label: 'Pegas', foodTypeShortLabel: 'mt', foodTypeId: '20'},
  ];

  constructor() {}

 public selectType(arg: any): void {
  let copyOfLocations: any[] = this.locations; 
  copyOfLocations = copyOfLocations.filter((item) => {
    return item.foodTypeId === arg.foodTypeId; 
  });
  console.log(copyOfLocations)
 } 
}
