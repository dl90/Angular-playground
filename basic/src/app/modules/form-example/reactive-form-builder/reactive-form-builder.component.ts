import { Component, OnInit } from '@angular/core'
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-reactive-form-builder',
  templateUrl: './reactive-form-builder.component.html'
})
export class ReactiveFormBuilderComponent implements OnInit {
  form: FormGroup
  // sku: AbstractControl
  productName: string

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm()
  }

  private initializeForm(): void {
    this.form = this.formBuilder.group({
      sku: ['ABC123', Validators.compose([Validators.required, this.skuValidator])]
    })

    // this.sku = this.form.get('sku')
    this.productName = 'ng-book: The Complete Guide to Angular'
    this.form.valueChanges.subscribe((value) => {
      console.log(value)
    })
  }

  onSubmit(): void {
    console.log(this.form.value)
  }

  private skuValidator(control: FormControl): { [s: string]: boolean } {
    if (!control.value.match(/^123/)) {
      return { invalidSku: true }
    }
  }
}
