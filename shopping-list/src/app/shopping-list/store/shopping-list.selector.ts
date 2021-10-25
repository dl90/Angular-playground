import { createSelector } from '@ngrx/store'
import { AppState } from '../../app.state'
import { Ingredient } from '../ingredient.model'


export const selectIngredients = createSelector(
  (state: AppState) => state.shoppingList,
  (state: readonly Ingredient[]) => state
)