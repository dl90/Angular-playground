import {
  HttpClient,
  HttpEvent,
  HttpEventType,
  HttpHeaders,
  HttpParams,
  HttpResponse
} from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable, Subject, throwError } from "rxjs"
import { map, catchError, tap } from 'rxjs/operators'

import { Post } from "./post.model"


@Injectable()
export class PostService {

  private firebaseURL = 'your firebase url'
  errorEvent = new Subject<Error>()

  constructor (
    private http: HttpClient
  ) { }

  savePost (post: Post): void {
    this.http.post<{ id: string }>(
      this.firebaseURL,
      post,
      { observe: 'response' }
    )
      .subscribe(
        (response: HttpResponse<{ id: string }>) => {
          // console.log(response)
        },
        (error: Error) => {
          this.errorEvent.next(error)
        }
      )
  }

  deletePosts (): void {
    this.http.delete<null>(
      this.firebaseURL,
      {
        observe: 'events',
        responseType: 'json'
      }
    )
      .pipe(
        tap((event: HttpEvent<null>) => {
          // console.log(event)
          if (event.type === HttpEventType.Sent)
            console.log('request sent', event)

          if (event.type === HttpEventType.Response)
            console.log('response received', event)
        })
      )
      .subscribe(
        null,
        (error) => {
          this.errorEvent.next(error)
        }
      )
  }

  // for multiple dependent components, use Subject or EventEmitter to notify all when called
  getPosts (): Observable<Post[]> {
    return this.http.get<{ [key: string]: Post }>(
      this.firebaseURL,
      {
        headers: new HttpHeaders({
          'test-header': 'test'
        }),
        params: new HttpParams()
          .append('print', 'pretty')
          .appendAll({
            'test-param': 'test',
            'test-param-2': 'test-2'
          })
      }
    )
      .pipe(
        map((response) => {
          const postsArray: Post[] = []

          for (const key in response)
            if (response.hasOwnProperty(key))
              postsArray.push({ ...response[key], id: key })

          return postsArray
        }),
        catchError((error) => {
          this.errorEvent.next(error)
          return throwError(error)
        })
      )
  }

}
