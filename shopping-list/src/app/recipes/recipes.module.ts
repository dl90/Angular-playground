import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'

import { SharedModule } from '../shared/shared.module'
import { RecipesComponent } from './recipes.component'
import { RecipeListComponent } from './recipe-list/recipe-list.component'
import { RecipeDefaultComponent } from './recipe-default/recipe-default.component'
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component'
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component'
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component'
import { RecipesRoutingModule } from './recipes-routing.module'



@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeEditComponent,
    RecipeDefaultComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule,
    RecipesRoutingModule
  ]
})
export class RecipesModule { }
