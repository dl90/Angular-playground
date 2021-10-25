import { Subject } from 'rxjs'

import { Ingredient } from './ingredient.model'


export class ShoppingListService {

  updateEvent = new Subject<void>()
  selectedIngredient = new Subject<number>()
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ]

  getIngredients (): Ingredient[] {
    return this.ingredients.slice(0)
  }

  getIngredient (index: number): Ingredient | undefined {
    return this.ingredients[index]
  }

  addIngredient (ingredient: Ingredient): void {

    for (const ing of this.ingredients) {
      if (ingredient.name === ing.name) {
        ing.amount += ingredient.amount
        this.updateEvent.next()
        return
      }
    }

    this.ingredients.push(ingredient)
    this.updateEvent.next()
  }

  addIngredients (ingredients: Ingredient[]): void {
    for (const ingredient of ingredients) {
      let found = false

      for (const ing of this.ingredients) {
        if (ingredient.name === ing.name) {
          ing.amount += ingredient.amount
          found = true
          break
        }
      }

      if (!found)
        this.ingredients.push(ingredient)
    }
    this.updateEvent.next()
  }

  updateIngredient (index: number, updatedIngredient: Ingredient): void {
    if (updatedIngredient && updatedIngredient.amount > 0) {
      this.ingredients[index] = updatedIngredient
      this.updateEvent.next()
    }
  }

  deleteIngredient (index: number): void {
    if (this.ingredients[index]) {
      this.ingredients.splice(index, 1)
      this.updateEvent.next()
    }
  }

}
