import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fn'
})
export class FnPipe implements PipeTransform {

  transform(fn: Function, ...args: any): any {
    return fn(...args);
  }

}
