export class AuthService {
  private authenticated = false

  login(): Promise<unknown> {
    return new Promise((resolve) =>
      setTimeout(() => {
        this.authenticated = true
        resolve(this.authenticated)
      }, 1000)
    )
  }

  logout(): void {
    this.authenticated = false
  }

  isAuthenticated(): Promise<boolean> {
    return new Promise((resolve) => setTimeout(() => resolve(this.authenticated), 0))
  }
}
