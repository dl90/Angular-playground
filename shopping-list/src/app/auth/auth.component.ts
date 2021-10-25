import {
  Component,
  ComponentFactoryResolver,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core'
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router'

import { AuthService, AuthResponseData, AuthError } from './auth.service'
import { AlertComponent } from '../shared/alert/alert.component'
import { PlaceholderDirective } from '../shared/directives/placeholder.directive'
import { Subscription } from 'rxjs'


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {

  @ViewChild('f', { static: false }) form!: NgForm
  @ViewChild(PlaceholderDirective, { static: false }) alertHost!: PlaceholderDirective
  private alertSubscription!: Subscription

  isLogin = true
  isLoading = false
  error: AuthError = {
    emailExist: false,
    emailNotFound: false,
    password: false,
    general: ''
  }

  constructor (
    private authService: AuthService,
    private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit (): void {
    const user = this.authService.user.value
    if (user && user.token)
      this.router.navigate(['/recipes'])
  }

  ngOnDestroy () {
    if (this.alertSubscription)
      this.alertSubscription.unsubscribe()
  }

  onSwitch (): void {
    this.isLogin = !this.isLogin
  }

  onSubmit (): void {
    if (!this.form.valid)
      return

    const { email, password } = this.form.value
    this.isLoading = true

    setTimeout(() => {
      const subscription = this.isLogin
        ? this.authService.signIn(email, password)
        : this.authService.signUp(email, password)

      subscription.subscribe(
        (resData: AuthResponseData) => {
          this.isLoading = false
          this.form.reset()
          this.router.navigate(['/recipes'])
        },
        (error: AuthError) => {
          this.error = error
          this.isLoading = false
          this.form.reset({ email })

          if (error.general)
            this.showErrorAlert()
        }
      )
    }, 1000)
  }

  onCloseAlert () {
    this.error.general = ''
  }

  private showErrorAlert () {
    const factory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent)
    const hostViewContainerRef = this.alertHost.viewContainerRef

    hostViewContainerRef.clear()
    const alertRef = hostViewContainerRef.createComponent(factory)

    alertRef.instance.message = this.error.general
    this.alertSubscription = alertRef.instance.close.subscribe(() => {
      this.alertSubscription.unsubscribe()
      this.onCloseAlert()
      alertRef.destroy()
      hostViewContainerRef.clear()
    })
  }

}
