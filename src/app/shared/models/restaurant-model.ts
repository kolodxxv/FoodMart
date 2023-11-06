export class RestaurantInfo {
    constructor(
        public id: number,
        public outlet: string,
        public label: string,
        public foodTypeShortLabel: string,
        public foodTypeId: string,
        public img: string,
        public logo: string,
        public hours: any,
    ) {}
}

export interface RestaurantModel {
    id: number;
    outlet: string;
    label: string;
    foodTypeShortLabel: string;
    foodTypeId: string;
    img: string;
    logo: string;
    hours: any; 
  }