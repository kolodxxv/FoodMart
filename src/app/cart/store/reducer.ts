import { ActionReducer, UPDATE, createReducer, on, INIT } from "@ngrx/store";
import { addProduct, clearCart, RemoveProduct, RemoveAll } from "./actions";
import { MenuModel } from "src/app/shared/models/menu-model";


export const InitialCartEntries: MenuModel[] = [];

export const cartReducer = createReducer(
  InitialCartEntries,
  on(clearCart, _ => []),

  on(addProduct, (entries, product) => {
    const entriesClone: MenuModel[] = JSON.parse(JSON.stringify(entries));
    entriesClone.push(product);
    return entriesClone;
  }),

  on(RemoveProduct, (entries, product) => {
    const entriesClone: MenuModel[] = JSON.parse(JSON.stringify(entries));
    const found = entriesClone.find(e => e.id == product.id);
    if (found) {
      entriesClone.splice(entriesClone.indexOf(found), 1)
    }
    return entriesClone;
  }),

  on(RemoveAll, (entries, product) => {
    return entries.filter(item => item.id !== product.id)
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