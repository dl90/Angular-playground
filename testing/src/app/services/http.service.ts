import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { catchError, delay, Observable, of, retry, throwError } from 'rxjs'

export const API_URL = 'https://jsonplaceholder.typicode.com/posts'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  message = 'Hello'

  constructor(private http: HttpClient) {}

  getPost(id: number): Observable<any> {
    return this.http
      .get(API_URL + `/${id}`)
      .pipe(retry(1), catchError(this.handleError))
  }

  getPosts(): Observable<any> {
    return this.http.get(API_URL).pipe(retry(1), catchError(this.handleError))
  }

  postPost(post: any): Observable<any> {
    return this.http
      .post(API_URL, post)
      .pipe(retry(1), catchError(this.handleError))
  }

  deletePost(id: number): Observable<any> {
    return this.http
      .delete(API_URL + `/${id}`)
      .pipe(retry(1), catchError(this.handleError))
  }

  delayedMessage(delayMs: number): Observable<any> {
    return of(this.message).pipe(delay(delayMs))
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error)
    return throwError(() => error.error)
  }
}
