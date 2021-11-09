import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild
} from '@angular/core'


@Component({
  selector: 'app-cluster-form',
  templateUrl: './cluster-form.component.html'
})
export class ClusterFormComponent implements OnInit, AfterViewInit {

  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>()
  @Output() blueprintCreated = new EventEmitter<{ blueprintName: string, blueprintContent: string }>()

  @ViewChild('contentInputRef', { static: true }) contentInputRef: ElementRef

  name = ''
  content = ''

  constructor () { }

  ngOnInit (): void {
    // console.dir(this.contentInputRef.nativeElement)
  }

  ngAfterViewInit (): void {
    // console.log(this.contentInputRef.nativeElement)
  }

  onAddServer (nameInputRef: HTMLInputElement): void {
    // console.log(nameInputRef.value)
    // console.log(this.contentInputRef.nativeElement.value)

    this.serverCreated.emit({
      serverName: this.name,
      serverContent: this.content
    })

    this.name = ''
    this.content = ''
  }

  onAddBlueprint (): void {
    this.blueprintCreated.emit({
      blueprintName: this.name,
      blueprintContent: this.content
    })

    this.name = ''
    this.content = ''
  }

}
