import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html'
})
export class ChildAComponent implements OnInit {
  isOn!: boolean

  constructor() {}

  ngOnInit(): void {
    this.isOn = false
  }

  onToggle(): void {
    this.isOn = !this.isOn
  }
}
