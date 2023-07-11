import { Menu } from "src/app/outlet/restaurants/shared/models/menu-model";
import { createReducer, on } from "@ngrx/store";
import { addProduct, clearCart, RemoveProduct } from "./actions";

export const InitialCartEntries: Menu[] = [];

export const cartReducer = createReducer(
  InitialCartEntries,
  on(clearCart, _ => []),

  on(addProduct, (entries, product) => {
    const entriesClone: Menu[] = JSON.parse(JSON.stringify(entries));
    entriesClone.push(product);
    return entriesClone;
  }),

  on(RemoveProduct, (entries, product) => {
    const entriesClone: Menu[] = JSON.parse(JSON.stringify(entries));
    const found = entriesClone.find(e => e.context.id == product.context.id);
    if (found) {
      entriesClone.splice(entriesClone.indexOf(found), 1)
    }
    return entriesClone;
  })
)