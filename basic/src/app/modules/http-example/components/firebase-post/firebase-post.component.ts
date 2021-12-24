import { Component, NgZone, OnDestroy, OnInit, ViewChild } from '@angular/core'
import { NgForm } from '@angular/forms'
import { Subscription } from 'rxjs/internal/Subscription'

import { FBPostService, Post } from '../../services/fb-post.service'

@Component({
  selector: 'app-firebase-post',
  templateUrl: './firebase-post.component.html'
})
export class FirebasePostComponent implements OnInit, OnDestroy {
  @ViewChild('postForm', { static: false }) postForm: NgForm
  loadedPosts: Post[] = []
  isFetching = false
  error = ''
  postsServiceErrorSubscription: Subscription

  constructor(private postService: FBPostService, private zone: NgZone) {}

  ngOnInit(): void {
    this.getPosts()
    this.postsServiceErrorSubscription = this.postService.errorEvent.subscribe((error) => {
      this.error = error.message
    })
  }

  ngOnDestroy(): void {
    this.postsServiceErrorSubscription.unsubscribe()
  }

  onCreatePost(): void {
    this.isFetching = true
    this.postService.savePost(this.postForm.value as Post)

    setTimeout(() => {
      if (!this.error) {
        this.loadedPosts.push(this.zone.run(() => this.postForm.value))
        this.postForm.reset()
      }
      this.isFetching = false
    }, 1000)
  }

  onFetchPosts() {
    this.getPosts()
  }

  onClearPosts() {
    this.isFetching = true
    this.postService.deletePosts()

    setTimeout(() => {
      if (!this.error) {
        this.loadedPosts = []
        this.isFetching = false
      }
    }, 1000)
  }

  private getPosts() {
    this.isFetching = true
    this.postService.getPosts().subscribe(
      (response: Post[]) => {
        this.loadedPosts = response
        this.isFetching = false
      },
      (error) => {
        this.error = error.message
        this.isFetching = false
      }
    )
  }
}
