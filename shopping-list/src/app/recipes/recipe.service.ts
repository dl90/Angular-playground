import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

import { Ingredient } from '../shopping-list/ingredient.model'
import { ShoppingListService } from '../shopping-list/shopping-list.service'
import { Recipe } from './recipe.model'

@Injectable()
export class RecipeService {

  updateEvent = new Subject<Recipe[]>()
  private recipes: Recipe[] = []

  constructor (
    private shoppingListService: ShoppingListService
  ) { }

  setRecipes (recipes: Recipe[]): void {
    this.recipes = recipes
    this.updateEvent.next(this.recipes.slice(0))
  }

  getRecipe (uuid: string): Recipe | undefined {
    return this.recipes.find(recipe => recipe.uuid === uuid)
  }

  getRecipes (): Recipe[] {
    return this.recipes.slice(0)
  }

  addRecipe (recipe: Recipe): void {
    this.recipes.push(recipe)
    this.updateEvent.next(this.recipes.slice(0))
  }

  updateRecipe (uuid: string, newRecipe: Recipe): void {
    const idx = this.recipes.findIndex(recipe => recipe.uuid === uuid)

    if (idx !== -1) {
      this.recipes[idx] = newRecipe
      this.updateEvent.next(this.recipes.slice(0))
    }
  }

  deleteRecipe (uuid: string): void {
    const idx = this.recipes.findIndex(recipe => recipe.uuid === uuid)

    if (idx !== -1) {
      this.recipes.splice(idx, 1)
      this.updateEvent.next(this.recipes.slice(0))
    }
  }

  addIngredientsToShoppingList (ingredients: Ingredient[]): void {
    this.shoppingListService.addIngredients(ingredients)
  }

}
