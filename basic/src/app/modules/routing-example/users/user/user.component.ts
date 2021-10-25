import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { Subscription } from 'rxjs'


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: []
})
export class UserComponent implements OnInit, OnDestroy {

  user: { id: number, name: string }
  paramsSubscription: Subscription

  constructor (
    private currentRoute: ActivatedRoute
  ) { }

  ngOnInit (): void {
    this.user = {
      id: this.currentRoute.snapshot.params['id'],
      name: this.currentRoute.snapshot.params['name']
    }

    this.paramsSubscription = this.currentRoute.params.subscribe(
      (params: Params) => {
        console.log(params)
        this.user.id = params['id']
        this.user.name = params['name']
      }
    )
  }

  ngOnDestroy (): void {
    this.paramsSubscription.unsubscribe()
  }

}
