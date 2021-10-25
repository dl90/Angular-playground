import { Ingredient } from './shopping-list/ingredient.model'


export interface AppState {
  shoppingList: ReadonlyArray<Ingredient>
}