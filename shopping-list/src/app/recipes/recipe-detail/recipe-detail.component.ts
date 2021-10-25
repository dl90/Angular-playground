import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params, Router } from '@angular/router'

import { Recipe } from '../recipe.model'
import { RecipeService } from '../recipe.service'


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe | undefined

  constructor (
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit (): void {
    // this.recipe = this.recipeService.getRecipe(this.activatedRoute.snapshot.params['uuid'])
    this.activatedRoute.params.subscribe((params: Params) => {
      this.recipe = this.recipeService.getRecipe(params['uuid'])
    })
  }

  onAddToShoppingList (): void {
    if (!this.recipe) return
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients)
  }

  onEditClick (): void {
    if (!this.recipe) return
    this.router.navigate(['edit'], { relativeTo: this.activatedRoute })
    // this.router.navigate(['../', this.recipe.uuid, 'edit'], { relativeTo: this.activatedRoute })
  }

  onDeleteClick (): void {
    if (!this.recipe) return
    this.recipeService.deleteRecipe(this.recipe.uuid)
    this.router.navigate(['/recipes'])
  }

}
