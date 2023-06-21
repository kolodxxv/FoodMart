export class Menu {
  outlet!: string;
  context!: {
    id: string;
    name: string;
    price: string;
    info: string;
    gr: string;
    tags?: string[];
    imageUrl: string;
  };
}