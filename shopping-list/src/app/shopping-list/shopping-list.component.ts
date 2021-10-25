import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'
import { Store } from '@ngrx/store'

import { Ingredient } from './ingredient.model'
import { ShoppingListService } from './shopping-list.service'
import { LoggingService } from '../logging.service'


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[] | undefined
  updateSubscription!: Subscription

  constructor (
    private shoppingListService: ShoppingListService,
    private loggingService: LoggingService,
    private store: Store
  ) { }

  ngOnInit (): void {
    this.loggingService.printLog('ShoppingListComponent ngOnInit')
    this.ingredients = this.shoppingListService.getIngredients()
    this.updateSubscription = this.shoppingListService.updateEvent.subscribe(() => {
      this.ingredients = this.shoppingListService.getIngredients()
    })
  }

  ngOnDestroy (): void {
    this.updateSubscription.unsubscribe()
  }

  onSelectItem (idx: number): void {
    this.shoppingListService.selectedIngredient.next(idx)
  }

}
