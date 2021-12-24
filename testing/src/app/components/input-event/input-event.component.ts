import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-input-event',
  templateUrl: './input-event.component.html',
  styleUrls: ['./input-event.component.scss']
})
export class InputEventComponent implements OnInit {
  form!: FormGroup

  ngOnInit(): void {
    this.initializeForm()
  }

  onSubmit(): void {
    console.log(this.form.value)
  }

  private initializeForm(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }
}
