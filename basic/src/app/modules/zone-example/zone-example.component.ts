import { Component, NgZone, OnInit } from '@angular/core'

@Component({
  selector: 'app-zone-example',
  templateUrl: './zone-example.component.html',
  styleUrls: []
})
export class ZoneExampleComponent implements OnInit {
  count = 0
  intervalRef1: ReturnType<typeof setInterval>
  intervalRef2: ReturnType<typeof setInterval>

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    console.log({ setTimeout }, { setInterval }, { Promise }, { addEventListener })

    this.ngZone.runOutsideAngular(() => {
      this.intervalRef1 = setInterval(() => {
        if (this.count < 20) console.log(this.count++)
        else {
          clearInterval(this.intervalRef1)
          clearInterval(this.intervalRef2)
          this.ngZone.run(() => (this.count = 100))
        }
      }, 1000)
    })

    this.intervalRef2 = setInterval(() => {
      this.ngZone.run(() => {
        console.log('update')
      })
    }, 5000)

    const zone = Zone.current.fork({
      name: 'zone',
      onScheduleTask: function (delegate, curr, target, task) {
        console.log('new task is scheduled:', task.type, task.source)
        return delegate.scheduleTask(target, task)
      },
      onInvokeTask: function (delegate, curr, target, task, applyThis, applyArgs) {
        console.log('task will be invoked:', task.type, task.source)
        return delegate.invokeTask(target, task, applyThis, applyArgs)
      },
      onHasTask: function (delegate, curr, target, hasTaskState) {
        console.log('task state changed in the zone:', hasTaskState)
        return delegate.hasTask(target, hasTaskState)
      },
      onInvoke: function (delegate, curr, target, callback, applyThis, applyArgs) {
        console.log('the callback will be invoked:', callback)
        return delegate.invoke(target, callback, applyThis, applyArgs)
      }
    } as ZoneSpec)

    console.log(zone, this.ngZone, this.ngZone['_inner'] === zone['_parent'])
    zone.run(() => setTimeout(() => console.log('timeout callback is invoked.')))
  }

  onChangeMessage(): void {
    this.count++
  }
}
