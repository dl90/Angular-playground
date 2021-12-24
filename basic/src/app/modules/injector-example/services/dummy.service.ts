import { Injectable } from '@angular/core'

@Injectable()
export class DummyService {
  user: any

  setUser(user: any) {
    this.user = user
  }

  getUser() {
    return this.user
  }
}
