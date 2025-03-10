import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeCase'
})
export class ChangeCasePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    return value.toUpperCase();
  }

}
