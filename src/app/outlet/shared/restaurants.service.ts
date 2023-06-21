import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  public restaurantsArray: any[] = [
    {id: 1, label: 'Star Kebab', foodTypeShortLabel: 'kb', foodTypeId: '10', 
  img: 'https://straus.s3.amazonaws.com/media/CACHE/images/providers/4b54634acfbf4092a8c2e25ad2e08374/c8aac9790ba4afa329e940ac5d98e8c9.png' },
    {id: 2, label: 'Summo Sushi&Wok', foodTypeShortLabel: 'sh', foodTypeId: '40',
  img: 'https://straus.s3.amazonaws.com/media/CACHE/images/providers/defdc8e814aa4e58ada1badce619f150/49f6696a0e8dd90eaf8611d06f60bceb.jpg'},
    {id: 3, label: "McDonald's", foodTypeShortLabel: 'bg', foodTypeId: '50',
  img: 'https://straus.s3.amazonaws.com/media/CACHE/images/providers/09d41069f29f41759aa6bce131480b69/f9cd251e2d34ecb9b058926f68006fe2.jpg'},
  
  ]

  constructor() { }


}
