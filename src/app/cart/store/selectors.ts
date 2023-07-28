import { Menu } from "src/app/outlet/restaurants/shared/models/menu-model";
import { createFeatureSelector, createSelector } from "@ngrx/store";



export interface ProductGroup {
  product: Menu;
  count: number;
}

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

  export const selectAllProducts = createSelector(
    createFeatureSelector('cartEntries'),
    (state: Menu[]) => {
      var allProds: Map<string, ProductGroup> = new Map;
      
      state.forEach(item => {
        if (allProds.get(item.context.id)) {
          (allProds.get(item.context.id) as ProductGroup).count++;
        } else { 
          allProds.set(item.context.id, {product: item, count: 1})
        }
        })

        const sortedMap = new Map([...allProds.entries()].sort());
       return Array.from(sortedMap.values());
    }
    );


  export const selectGroupedCartEntries = createSelector(
    createFeatureSelector('cartEntries'),
    (state: Menu[]) => {
      var map: Map<string, ProductGroup> = new Map;

      state.forEach(p => {
        if (map.get(p.context.id)) {
          (map.get(p.context.id) as ProductGroup).count++;
        } else {
          map.set(p.context.id, { product: p, count: 1})
        }
      })

      const sortedMap = new Map([...map.entries()].sort());
      return Array.from(sortedMap.values());
    }
  )


  