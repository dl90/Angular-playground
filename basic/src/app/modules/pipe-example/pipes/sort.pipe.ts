import { Pipe, PipeTransform } from '@angular/core'


@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform (
    items: any[] = [],
    property: string,
    order: 'asc' | 'desc' = 'asc'
  ): any[] {
    if (!items[0]?.hasOwnProperty(property))
      return items

    return items.sort((a, b) => {
      if (a[property] < b[property])
        return order === 'asc' ? -1 : 1

      if (a[property] > b[property])
        return order === 'asc' ? 1 : -1

      return 0
    })
  }

}
