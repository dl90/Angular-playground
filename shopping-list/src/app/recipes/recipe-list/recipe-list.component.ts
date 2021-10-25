import { Component, OnInit, OnDestroy } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Subscription } from 'rxjs'

import { Recipe } from '../recipe.model'
import { RecipeService } from '../recipe.service'


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit, OnDestroy {

  recipes!: Recipe[]
  private recipeUpdateSubscription!: Subscription

  constructor (
    private recipeService: RecipeService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit (): void {
    this.recipes = this.recipeService.getRecipes();
    this.recipeUpdateSubscription = this.recipeService.updateEvent.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes
      }
    )
  }

  ngOnDestroy (): void {
    this.recipeUpdateSubscription.unsubscribe()
  }

  onNewRecipe (): void {
    this.router.navigate(['new'], { relativeTo: this.activatedRoute })
  }

}
