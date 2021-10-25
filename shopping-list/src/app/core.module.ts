import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { NgModule } from '@angular/core'

import { AuthTokenInterceptor } from './auth/auth-token.interceptor'
import { AuthGuard } from './auth/auth.guard'
import { AuthService } from './auth/auth.service'
import { DataStoreService } from './recipes/data-store.service'
import { RecipeResolverService } from './recipes/recipe-resolver.service'
import { RecipeService } from './recipes/recipe.service'
import { ShoppingListService } from './shopping-list/shopping-list.service'


@NgModule({
  providers: [
    ShoppingListService,
    RecipeService,
    DataStoreService,
    RecipeResolverService,
    AuthService,
    AuthGuard,
    [{ provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true }]
  ]
})
export class CoreModule { }
