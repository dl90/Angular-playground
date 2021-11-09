import { Pipe, PipeTransform } from '@angular/core'


@Pipe({
  name: 'filter',
  pure: false // impure pipe, updates as data changes, performance expensive
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string, property: string): any[] {
    if (!items || items.length === 0)
      return []

    if (!searchText)
      return items

    return items.filter(item =>
      item[property] && item[property].toLowerCase().startsWith(searchText.toLowerCase())
    )
  }

}