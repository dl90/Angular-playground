import { Component, OnInit } from '@angular/core'
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms'
import { Observable } from 'rxjs'


@Component({
  selector: 'app-form-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['../form-example.shared.css']
})
export class ReactiveComponent implements OnInit {

  genders = ['male', 'female']
  forbiddenUsernames = new Set(['root', 'admin'])
  form: FormGroup
  projectForm: FormGroup
  projectStatus = ['stable', 'critical', 'finished']

  constructor () { }

  ngOnInit (): void {
    this.form = new FormGroup({
      data: new FormGroup({
        username: new FormControl('', [Validators.required, this.customValidator.bind(this)]),
        email: new FormControl('', [Validators.required, Validators.email], [this.asyncValidator]),
      }),
      gender: new FormControl('male', Validators.required),
      hobbies: new FormArray([])
    })

    this.form.valueChanges.subscribe((value: any) => {
      console.log(value)
    })

    this.form.get('data.username').statusChanges.subscribe((status: any) => {
      console.log(status)
    })

    // this.form.setValue({
    //   data: {
    //     username: 'test',
    //     email: ''
    //   },
    //   gender: 'male',
    //   hobbies: []
    // })

    this.form.patchValue({
      data: {
        email: 'test@test.co'
      }
    })

    this.projectForm = new FormGroup({
      projectName: new FormControl(null, [Validators.required], this.asyncCustomProjectValidator),
      projectMail: new FormControl(null, [Validators.required, Validators.email]),
      projectStatus: new FormControl('stable')
    })
  }

  onSubmit (): void {
    console.log(this.form)
    this.form.reset({ gender: 'male' })
  }

  onAddHobby (): void {
    (<FormArray>this.form.get('hobbies')).push(new FormControl(null, Validators.required))
  }

  // getControls () {
  //   return (<FormArray>this.form.get('hobbies')).controls
  // }

  get controls (): AbstractControl[] {
    return (this.form.get('hobbies') as FormArray).controls
  }

  customValidator (control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsernames.has(control.value))
      return { 'forbiddenName': true }

    return null
  }

  asyncValidator (control: FormControl): Promise<any> | Observable<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com')
          resolve({ 'forbiddenEmail': true })
        else
          resolve(null)
      }, 2000)
    })
  }

  onProjectSubmit (): void {
    console.log(this.projectForm.value)
  }

  customProjectValidator (control: FormControl): { [s: string]: boolean } {
    if (control.value === 'test')
      return { 'forbiddenProjectName': true }

    return null
  }

  asyncCustomProjectValidator (control: FormControl): Promise<any> | Observable<any> {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (control.value === 'test')
          resolve({ 'forbiddenProjectName': true })
        else
          resolve(null)
      }, 1000)
    })
  }

}
