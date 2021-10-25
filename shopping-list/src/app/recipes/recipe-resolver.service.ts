import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router'

import { Recipe } from './recipe.model'
import { DataStoreService } from './data-store.service'
import { RecipeService } from './recipe.service'


@Injectable()
export class RecipeResolverService implements Resolve<Recipe[]> {

  constructor (
    private dataStoreService: DataStoreService,
    private recipeService: RecipeService
  ) { }

  resolve (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const recipes = this.recipeService.getRecipes()
    if (recipes.length === 0)
      return this.dataStoreService.getRecipes()

    return recipes
  }

}
