import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'platformFamily',
})
export class PlatformFamilyPipe implements PipeTransform {
  private platformFamilies = [
    'android',
    'commodore-amiga',
    'ios',
    'linux',
    'mac',
    'nintendo',
    'pc',
    'playstation',
    'sega',
    'web',
    'xbox',
  ];

  transform(value: string): string {
    return this.platformFamilies.find((p) => value.startsWith(p)) || 'pc';
  }
}
