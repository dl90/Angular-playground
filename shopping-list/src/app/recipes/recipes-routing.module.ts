import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AuthGuard } from '../auth/auth.guard'
import { RecipeDefaultComponent } from './recipe-default/recipe-default.component'
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component'
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component'
import { RecipeResolverService } from './recipe-resolver.service'
import { RecipesComponent } from './recipes.component'


const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: RecipesComponent,
    children: [
      { path: '', component: RecipeDefaultComponent, pathMatch: 'full', resolve: { recipe: RecipeResolverService } },
      { path: 'new', component: RecipeEditComponent },
      { path: ':uuid', component: RecipeDetailComponent, resolve: { recipe: RecipeResolverService } },
      { path: ':uuid/edit', component: RecipeEditComponent, resolve: { recipe: RecipeResolverService } }
    ]
  },
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }