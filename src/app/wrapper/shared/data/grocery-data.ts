import { groceryTypeModel } from "../models/grocery-model";

export const grocery_list: groceryTypeModel[] = [
  {id: 1,
  textValue: 'Animals',
  groceryTypeId: '10',
  groceryTypeShortLabel: 'zoo',
  img: 'https://straus.s3.amazonaws.com/media/CACHE/images/category/Pngtreedog_food_photography_pictures_food_6577104/3ae116acf5a2e770c6559389b2bbf1ac.png'},
  {
    id: 2,
    textValue: 'Fruits',
    groceryTypeId: '20',
    groceryTypeShortLabel: 'frt',
    img: 'https://straus.s3.amazonaws.com/media/CACHE/images/category/fructe/9ef295a055e6c5fa0658bf542f58c030.png'}, 
  {
    id: 3,
    textValue: 'Vegetables',
    groceryTypeId: '30',
    groceryTypeShortLabel: 'vgt',
    img: 'https://straus.s3.amazonaws.com/media/CACHE/images/category/legume/f9baf5e8cc6c4331db1961857011623a.png'},
  {
    id: 4,
    textValue: 'Meat',
    groceryTypeId: '40',
    groceryTypeShortLabel: 'meat',
    img: 'https://straus.s3.amazonaws.com/media/CACHE/images/category/mezeluri/bd6f2a6edfa5bd2ee17c647a3dea9e2f.png'}, 
  {
    id: 5,
    textValue: 'Flowers',
    groceryTypeId: '50',
    groceryTypeShortLabel: 'flw',
    img: 'https://straus.s3.amazonaws.com/media/CACHE/images/category/flori/e063d625bb1c82a3210c940eff6e56d2.png'
  }
]