import { Menu } from "src/app/outlet/restaurants/shared/models/menu-model";
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const selecCountProducts = createSelector(
  createFeatureSelector('cartEntries'),
  (state: Menu[]) => {
    return state.length;
  }
  );

  export const selectTotalPrice = createSelector(
    createFeatureSelector('cartEntries'), 
    (state: Menu[]) => {
      var totalPrice = 0;
      state.forEach(p => totalPrice += parseInt(p.context.price));
      return totalPrice;
    }
  );