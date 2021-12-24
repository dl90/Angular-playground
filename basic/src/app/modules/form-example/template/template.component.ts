import { Component, ViewChild } from '@angular/core'
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-form-template',
  templateUrl: './template.component.html',
  styleUrls: ['../form-example.shared.css']
})
export class TemplateComponent {
  @ViewChild('f', { static: false }) ngFormRef: NgForm
  answer: string
  gender = ['male', 'female']
  submitted = false
  subscriptions = ['basic', 'advance', 'pro']

  private user = {
    username: '',
    email: '',
    secret: '',
    answer: '',
    gender: ''
  }

  suggestUserName() {
    // this.ngFormRef.setValue({
    //   userData: {
    //     username: 'Superuser',
    //     email: ''
    //   },
    //   secret: 'pet',
    //   answer: '',
    //   gender: 'male'
    // })

    this.ngFormRef.form.patchValue({
      userData: { username: 'Superuser' }
    })
  }

  // onSubmit (form: NgForm) {
  //   console.log(form)
  // }

  onSubmit() {
    console.log(this.ngFormRef)

    const { username, email } = this.ngFormRef.value.userData
    const { secret, answer, gender } = this.ngFormRef.value
    this.user.username = username
    this.user.email = email
    this.user.secret = secret
    this.user.answer = answer
    this.user.gender = gender

    this.submitted = true
    this.ngFormRef.reset()
  }

  labSubmit(ngForm: NgForm) {
    console.log(ngForm.value)
  }
}
