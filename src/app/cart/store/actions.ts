import { MenuModel } from "src/app/shared/models/menu-model";
import { Action, createAction, props } from "@ngrx/store"

export const addProduct = createAction('Add Product', props<MenuModel>());
export const RemoveProduct = createAction('Remove Product', props<MenuModel>());
export const clearCart = createAction('Clear Cart');
export const RemoveAll = createAction('Remove All', props<MenuModel>());