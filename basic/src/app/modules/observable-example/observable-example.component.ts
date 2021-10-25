import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'

import { UserService } from './user.service'


@Component({
  selector: 'app-observable-example',
  templateUrl: './observable-example.component.html',
  styleUrls: []
})
export class ObservableExampleComponent implements OnInit, OnDestroy {

  userActivated: boolean
  activatedSubscription: Subscription

  constructor (
    private userService: UserService
  ) { }

  ngOnInit (): void {
    this.activatedSubscription = this.userService.activatedEmitter.subscribe((isActivated: boolean) => {
      this.userActivated = isActivated
    })
  }

  ngOnDestroy (): void {
    this.activatedSubscription.unsubscribe()
  }

}
