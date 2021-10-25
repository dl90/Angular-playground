import { Component, OnInit } from '@angular/core'
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Params, Router } from '@angular/router'
import { v4 as uuidv4 } from 'uuid'

import { Recipe } from '../recipe.model'
import { RecipeService } from '../recipe.service'


@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  private uuid: string | undefined
  editMode = false
  recipeForm!: FormGroup

  constructor (
    private activatedRoute: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router
  ) { }

  ngOnInit (): void {
    this.uuid = this.activatedRoute.snapshot.params['uuid']
    this.editMode = this.uuid != undefined
    this.formInit()

    // this.activatedRoute.params.subscribe((params: Params) => {
    //   this.uuid = params.uuid
    //   this.editMode = params.uuid !== undefined
    //   this.formInit()
    // })
  }

  private formInit (): void {
    let recipeName = ''
    let recipeImagePath = ''
    let recipeDescription = ''
    let recipeIngredients = new FormArray([])

    if (this.editMode && this.uuid != undefined) {
      const recipe = this.recipeService.getRecipe(this.uuid)
      if (recipe) {
        recipeName = recipe.name
        recipeImagePath = recipe.imagePath
        recipeDescription = recipe.description
        if (recipe.ingredients)
          for (const ingredient of recipe.ingredients)
            recipeIngredients.push(new FormGroup({
              name: new FormControl(ingredient.name, Validators.required),
              amount: new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
            }))
      }
    }


    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      imagePath: new FormControl(recipeImagePath, Validators.required),
      description: new FormControl(recipeDescription, Validators.required),
      ingredients: recipeIngredients
    })
  }

  onSubmit (): void {
    const newRecipe = new Recipe(
      this.uuid ?? uuidv4(),
      this.recipeForm.value.name,
      this.recipeForm.value.description,
      this.recipeForm.value.imagePath,
      this.recipeForm.value.ingredients
    )

    if (this.editMode && this.uuid != undefined) {
      this.recipeService.updateRecipe(this.uuid, newRecipe)
    } else {
      this.recipeService.addRecipe(newRecipe)
    }

    this.onCancel()
  }

  onCancel (): void {
    this.router.navigate(['../'], { relativeTo: this.activatedRoute })
  }

  get ingredientControls (): AbstractControl[] {
    return (<FormArray>this.recipeForm.get('ingredients')).controls
  }

  onAddIngredient (): void {
    (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
      name: new FormControl(null, Validators.required),
      amount: new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
    }))
  }

  onDeleteIngredient (index: number): void {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index)
  }

  onClearAllIngredients (): void {
    (<FormArray>this.recipeForm.get('ingredients')).clear()
  }

}
