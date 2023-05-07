import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nbchar'
})
export class NbcharPipe implements PipeTransform {

  transform(value: string | null): string | null {
    return value ? value + "-" + value.length : value;
  }

}
