import { MenuModel } from "src/app/shared/models/menu-model";
import { createFeatureSelector, createSelector } from "@ngrx/store";



export interface ProductGroup {
  product: MenuModel;
  count: number;
}

export const selecCountProducts = createSelector(
  createFeatureSelector('cartEntries'),
  (state: MenuModel[]) => {
    return state.length;
  }
  );

  export const selectTotalPrice = createSelector(
    createFeatureSelector('cartEntries'), 
    (state: MenuModel[]) => {
      var totalPrice = 0;
      state.forEach(p => totalPrice += p.price);
      return totalPrice;
    }
  );

  export const selectAllProducts = createSelector(
    createFeatureSelector('cartEntries'),
    (state: MenuModel[]) => {
      var allProds: Map<string, ProductGroup> = new Map;
      
      state.forEach(item => {
        if (allProds.get(item.id.toString())) {
          (allProds.get(item.id.toString()) as ProductGroup).count++;
        } else { 
          allProds.set(item.id.toString(), {product: item, count: 1})
        }
        })

        const sortedMap = new Map([...allProds.entries()].sort());
       return Array.from(sortedMap.values());
    }
    );


  export const selectGroupedCartEntries = createSelector(
    createFeatureSelector('cartEntries'),
    (state: MenuModel[]) => {
      var map: Map<string, ProductGroup> = new Map;

      state.forEach(p => {
        if (map.get(p.id.toString())) {
          (map.get(p.id.toString()) as ProductGroup).count++;
        } else {
          map.set(p.id.toString(), { product: p, count: 1})
        }
      })

      const sortedMap = new Map([...map.entries()].sort());
      return Array.from(sortedMap.values());
    }
  )


  