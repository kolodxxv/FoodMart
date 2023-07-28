import { Menu } from "src/app/outlet/restaurants/shared/models/menu-model"
import { Action, createAction, props } from "@ngrx/store"

export const addProduct = createAction('Add Product', props<Menu>());
export const RemoveProduct = createAction('Remove Product', props<Menu>());
export const clearCart = createAction('Clear Cart');
export const RemoveAll = createAction('Remove All', props<Menu>());