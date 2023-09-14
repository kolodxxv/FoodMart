import { Menu } from "src/app/outlet/restaurants/shared/models/menu-model";
import { ActionReducer, UPDATE, createReducer, on, INIT } from "@ngrx/store";
import { addProduct, clearCart, RemoveProduct, RemoveAll } from "./actions";


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
  }),

  on(RemoveAll, (entries, product) => {
    return entries.filter(item => item.context.id !== product.context.id)
  })
)

export const metaReducerLocalStorage = (reducer: ActionReducer<any>): ActionReducer<any> => {
  return (state, action) => {
    if (action.type === INIT || action.type == UPDATE) {
      const storageValue = localStorage.getItem("state");
      if (storageValue) {
        try {
          return JSON.parse(storageValue);
        } catch {
          localStorage.removeItem("state")
        }
      }
    }
    const nextState = reducer(state, action);
    localStorage.setItem("state", JSON.stringify(nextState));
    return nextState
  }
}