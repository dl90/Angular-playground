import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'

import { UserService } from '../user.service'


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: []
})
export class UserComponent implements OnInit {

  id: number

  constructor (
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit (): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = +params.id;
    })
  }

  onActivate () {
    this.userService.activatedEmitter.next(true)
  }

}
