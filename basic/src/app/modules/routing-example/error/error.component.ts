import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Data } from '@angular/router'

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: []
})
export class ErrorComponent implements OnInit {
  errorMessage: string

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    // this.errorMessage = this.activatedRoute.snapshot.data['message']
    this.activatedRoute.data.subscribe((data: Data) => {
      this.errorMessage = data['message']
    })
  }
}
