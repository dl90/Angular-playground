import { createReducer, on } from '@ngrx/store'
import { Ingredient } from '../ingredient.model'
import { addIngredient } from './shopping-list.actions'


export const initialState: ReadonlyArray<Ingredient> = [
  new Ingredient('Apples', 5),
  new Ingredient('Tomatoes', 10)
]

export const shoppingListReducer = createReducer(
  initialState,
  on(addIngredient, (state, action) => [...state, action.ingredient])
)
