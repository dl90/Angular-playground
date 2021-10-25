import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'
import { AuthService } from '../auth/auth.service'

import { DataStoreService } from '../recipes/data-store.service'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private userSubscription!: Subscription
  isLoggedIn = false

  constructor (
    private dataStoreService: DataStoreService,
    private authService: AuthService
  ) { }

  ngOnInit (): void {
    this.userSubscription = this.authService.user.subscribe(user => {
      this.isLoggedIn = !!user
    })
  }

  ngOnDestroy (): void {
    this.userSubscription.unsubscribe()
  }

  onSaveData () {
    this.dataStoreService.saveRecipes()
  }

  onLoadData () {
    this.dataStoreService.getRecipes().subscribe()
  }

  onLogout () {
    this.authService.logout()
  }

}
