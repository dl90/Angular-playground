
export class User {
  constructor (
    public uid: string,
    public email: string,
    private _token: string,
    private _tokenExpirationDate: Date,
    private _refreshToken: string
  ) { }

  get token () {
    if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate)
      return null

    return this._token
  }

  expiresIn () {
    return this._tokenExpirationDate.getTime() - new Date().getTime()
  }
}