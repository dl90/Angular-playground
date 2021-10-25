import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core'
import { NgForm } from '@angular/forms'
import { Subscription } from 'rxjs'

import { Ingredient } from '../ingredient.model'
import { ShoppingListService } from '../shopping-list.service'


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html'
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  // @ViewChild('nameInput', { static: false }) nameInputRef!: ElementRef<HTMLInputElement>
  // @ViewChild('amountInput', { static: false }) amountInputRef!: ElementRef<HTMLInputElement>
  @ViewChild('shoppingEdit', { static: false }) shoppingEditFormRef!: NgForm
  editSelect: Subscription | undefined
  editMode = false
  itemIndex: number | undefined
  editedItem: Ingredient | undefined

  constructor (
    private shoppingListService: ShoppingListService
  ) { }

  ngOnInit (): void {
    this.editSelect = this.shoppingListService.selectedIngredient.subscribe(
      (idx: number) => {

        this.editMode = true
        this.itemIndex = idx
        this.editedItem = this.shoppingListService.getIngredient(idx)

        if (this.editedItem)
          this.shoppingEditFormRef.setValue({
            itemName: this.editedItem.name,
            itemAmount: this.editedItem.amount
          })
      }
    )
  }

  ngOnDestroy (): void {
    if (this.editSelect)
      this.editSelect.unsubscribe()
  }

  onSubmit (form: NgForm): void {
    // this.shoppingListService.addIngredient(
    //   new Ingredient(
    //     this.nameInputRef.nativeElement.value,
    //     +this.amountInputRef.nativeElement.value
    //   )
    // )

    const ingredient = new Ingredient(
      form.value.itemName,
      form.value.itemAmount
    )

    if (this.editMode && this.itemIndex != undefined && this.itemIndex >= 0) {
      this.shoppingListService.updateIngredient(this.itemIndex, ingredient)
    } else {
      this.shoppingListService.addIngredient(ingredient)
    }

    this.editMode = false
    form.reset()
  }

  onClear (): void {
    this.shoppingEditFormRef.reset()
    this.editMode = false
  }

  onDelete (): void {
    if (this.editMode && this.itemIndex != undefined && this.itemIndex >= 0) {
      this.shoppingListService.deleteIngredient(this.itemIndex)
      this.onClear()
    }
  }

}
