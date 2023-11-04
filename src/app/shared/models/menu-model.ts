export class MenuInfo {
    constructor(
        public id: number,
        public outlet: string,
        public name: string,
        public price: number,
        public info: string,
        public mass: number,
        public tags: string,
        public imgUrl: string
    ) {}
}

export interface MenuModel {
    id: number,
    outlet: string,
    name: string,
    price: number,
    info: string,
    mass: number,
    tags: string,
    imgUrl: string
}