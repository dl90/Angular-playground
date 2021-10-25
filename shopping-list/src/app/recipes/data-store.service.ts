import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map, tap } from 'rxjs/operators'

import { RecipeService } from './recipe.service'
import { Recipe } from './recipe.model'
import { Observable } from 'rxjs'


@Injectable()
export class DataStoreService {

  private fbUrl = 'https://angular-playground-56aed-default-rtdb.firebaseio.com/'

  constructor (
    private http: HttpClient,
    private recipeService: RecipeService
  ) { }

  saveRecipes (): void {
    const recipes = this.recipeService.getRecipes()
    this.http.put(this.fbUrl + '/recipes.json', recipes, { params: { print: 'silent' } })
      .subscribe()
  }

  getRecipes (): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.fbUrl + '/recipes.json').pipe(
      map(recipes => recipes.map(recipe => {
        if (!recipe.ingredients)
          recipe.ingredients = []
        return recipe
      })),
      tap(recipes => {
        this.recipeService.setRecipes(recipes)
      })
    )
  }

}
