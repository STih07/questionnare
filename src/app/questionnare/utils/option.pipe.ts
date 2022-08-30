import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'option'
})
export class OptionPipe implements PipeTransform {

  transform(strings: string[]): {label: string, value: string }[] {
    return strings.map(str => ({label: str, value: str}));
  }

}
