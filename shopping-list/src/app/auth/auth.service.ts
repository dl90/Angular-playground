import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { catchError, tap } from 'rxjs/operators'
import { BehaviorSubject, Observable, throwError } from 'rxjs'
import { environment } from '../../environments/environment'

import { User } from './user.model'
import { Router } from '@angular/router'


export interface AuthResponseData {
  kind?: string,
  idToken: string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string
}

export interface AuthError {
  emailExist: boolean,
  emailNotFound: boolean,
  password: boolean,
  general: string
}


@Injectable()
export class AuthService {

  user = new BehaviorSubject<User | null>(null)
  private fbAPIKey = environment.firebaseAPIKey
  private autoLogoutTimer!: ReturnType<typeof setTimeout> | null

  constructor (
    private http: HttpClient,
    private router: Router
  ) { }

  signUp (email: string, password: string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + this.fbAPIKey,
      {
        email,
        password,
        returnSecureToken: true
      }
    ).pipe(
      catchError(this.handleAuthError),
      tap(this.handleAuth.bind(this))
    )
  }

  signIn (email: string, password: string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + this.fbAPIKey,
      {
        email,
        password,
        returnSecureToken: true
      }
    ).pipe(
      catchError(this.handleAuthError),
      tap(this.handleAuth.bind(this))
    )
  }

  logout (): void {
    this.user.next(null)
    this.router.navigate(['/auth'])
    localStorage.removeItem('user')

    if (this.autoLogoutTimer) {
      clearTimeout(this.autoLogoutTimer)
      this.autoLogoutTimer = null
    }
  }

  loadFromLocalStorage (): void {
    if (localStorage.getItem('user') === null)
      return

    try {
      const parsedUser = JSON.parse(localStorage.getItem('user')!)
      const user = new User(
        parsedUser.id,
        parsedUser.email,
        parsedUser._token,
        new Date(parsedUser._tokenExpirationDate),
        parsedUser._refreshToken
      )

      if (user.token !== null) {
        this.user.next(user)
        this.autoLogout(user.expiresIn())
      } else {
        this.logout()
      }

    } catch (e) {
      console.error(e)
      return
    }
  }

  autoLogout (ms: number) {
    this.autoLogoutTimer = setTimeout(() => {
      this.logout()
    }, ms)
  }


  private handleAuth (resData: AuthResponseData): void {
    const expiresIn = new Date(new Date().getTime() + +resData.expiresIn * 1000)
    const user = new User(
      resData.localId,
      resData.email,
      resData.idToken,
      expiresIn,
      resData.refreshToken
    )

    localStorage.setItem('user', JSON.stringify(user))
    this.autoLogout(user.expiresIn())
    this.user.next(user)
  }

  private handleAuthError (error: HttpErrorResponse): Observable<never> {
    const message: string = error.error?.error?.message
    const authError: AuthError = {
      emailExist: false,
      emailNotFound: false,
      password: false,
      general: ''
    }

    switch (true) {
      case message.startsWith('EMAIL_EXISTS'):
        authError.emailExist = true
        break

      case message.startsWith('EMAIL_NOT_FOUND'):
        authError.emailNotFound = true
        break

      case message.startsWith('INVALID_PASSWORD'):
        authError.password = true
        break

      case message.startsWith('USER_DISABLED'):
        authError.general = 'User is disabled'
        break

      case message.startsWith('TOO_MANY_ATTEMPTS_TRY_LATER'):
        authError.general = 'Too many attempts, try later'
        break

      default:
        authError.general = 'Something went wrong'
    }
    return throwError(authError)
  }

}
